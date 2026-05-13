---
name: seo-100-loop
description: usefullabs.co.kr SEO 점수를 100점까지 끌어올리는 자동화 워크플로우. seo-diagnosis.vercel.app에서 진단 → 위험/주의 항목 분리 명세 → ralplan 검토 → autopilot 구현 → commit/push → Vercel 배포 대기 → 재진단 루프를 최대 10회까지 반복한다. "SEO 100점", "SEO 루프", "seo-100-loop", "SEO 자동 개선", "진단 후 개선 반복", "usefullabs SEO 자동화", "seo 100 달성"이라는 표현이 나오면 반드시 이 스킬을 사용한다. 단순히 "SEO 분석해줘"처럼 한 번만 분석하는 요청에는 사용하지 않는다.
---

# seo-100-loop

지정한 사이트(기본 usefullabs.co.kr)의 SEO 점수를 목표치(기본 100점)까지 끌어올리는 폐쇄 루프 자동화 워크플로우. 인자로 다른 사이트 URL과 Vercel 프로젝트를 받아 재사용할 수 있다.

## When to use

- 사용자가 "SEO 100점 만들어줘", "SEO 자동 개선 루프 돌려줘", "seo-100-loop 실행" 등을 요청할 때
- 진단 → 개선 → 배포 → 재진단을 자동으로 반복해야 할 때
- **단발성 분석 요청에는 사용하지 않는다** (그 경우 claude-seo:seo-page 또는 직접 분석 사용)

## Inputs

### 사용자 입력 (선택)

스킬 호출 시 다음 인자를 받을 수 있다. **모두 생략하면 기본값을 사용**한다.

| 인자 | 설명 | 기본값 |
|---|---|---|
| `target_url` | 진단할 대상 사이트 URL | `https://www.usefullabs.co.kr/` |
| `vercel_dashboard` | 배포 상태를 확인할 Vercel 프로젝트 대시보드 URL | `https://vercel.com/rmstjr1030s-projects/v0-usefullabs-color-palette` |
| `target_score` | 목표 점수 (이 점수 이상이면 종료) | `100` |
| `max_iterations` | 최대 반복 횟수 | `10` |

호출 예:

- `/seo-100-loop` — 기본값으로 usefullabs.co.kr 대상
- `/seo-100-loop https://example.com` — 다른 사이트로 실행
- `/seo-100-loop https://example.com https://vercel.com/team/project` — 사이트와 Vercel 프로젝트 함께 지정
- 자연어: `"https://acme.com 을 SEO 100점으로 만들어줘"` — 메시지에서 URL을 추출해 `target_url`로 사용

URL이 사용자 입력으로 들어오면, 워크플로우 시작 시 사용자에게 **확정 URL과 목표 점수를 한 줄로 다시 확인**시키고 진행한다 (잘못된 도메인을 만지지 않도록).

### 파생 상수 (자동 계산)

`target_url`이 정해지면 아래 값들은 자동으로 만들어진다. 별도 입력 불필요.

| 키 | 계산식 |
|---|---|
| `RESULT_URL` | `https://seo-diagnosis.vercel.app/result?url=` + `encodeURIComponent(target_url)` |
| `DIAGNOSE_URL` | `https://seo-diagnosis.vercel.app/diagnose?url=` + `encodeURIComponent(target_url)` |

예: `target_url = https://example.com/` 이면
- `RESULT_URL = https://seo-diagnosis.vercel.app/result?url=https%3A%2F%2Fexample.com%2F`
- `DIAGNOSE_URL = https://seo-diagnosis.vercel.app/diagnose?url=https%3A%2F%2Fexample.com%2F`

### 고정 상수

| 키 | 값 |
|---|---|
| `STAGNATION_LIMIT` | `3` (점수가 3회 연속 개선되지 않으면 조기 종료) |
| `MAX_DEPLOY_WAIT` | `30분` (Vercel 배포 대기 상한, 초과 시 사용자 보고) |
| `RALPLAN_REJECT_LIMIT` | `3` (한 명세가 3회 reject되면 사용자 개입 요청) |

## Workflow

본 스킬은 한 번의 호출로 아래 9단계를 **최대 10회 반복**한다. 매 반복은 `.omc/seo-loop/iteration-<N>/` 디렉토리에 산출물을 남긴다.

### Step 0: 루프 상태 초기화

작업 디렉토리 준비:

```bash
mkdir -p .omc/seo-loop
```

먼저 사용자에게 한 줄로 입력값을 재확인시킨다 (잘못된 도메인 대상 작업 방지):

```
대상: <target_url>
Vercel: <vercel_dashboard>
목표 점수: <target_score> / 최대 반복: <max_iterations>
이대로 진행할까요?
```

상태 파일 `.omc/seo-loop/state.json`을 생성·갱신한다:

```json
{
  "target_url": "<사용자 또는 기본값>",
  "vercel_dashboard": "<사용자 또는 기본값>",
  "result_url": "<자동 계산>",
  "diagnose_url": "<자동 계산>",
  "target_score": 100,
  "max_iterations": 10,
  "iteration": 1,
  "scores": [],
  "started_at": "<ISO-8601>",
  "status": "running"
}
```

매 반복 종료 시 `scores` 배열에 결과를 push 하고, 종료 조건은 아래 **Stop conditions** 참고.

### Step 1: 현재 진단 결과 수집 (browser-harness)

`RESULT_URL`에 접속해 페이지가 보여주는 점수·카테고리·항목별 상태를 추출한다. **반드시 browser-harness를 사용**한다 (JS 렌더링 필요).

아래 명령에서 `<RESULT_URL>`은 `Inputs` 섹션의 계산식대로 `target_url`을 인코딩해 만든 값을 사용한다.

```bash
browser-harness -c '
new_tab("<RESULT_URL>")
wait_for_load()
capture_screenshot()  # 1차 확인
# 점수, 카테고리별 상태 추출
result = js("""
  // 페이지 구조에 맞게 카테고리/항목/상태/점수 텍스트를 수집
  const txt = document.body.innerText;
  return txt;
""")
print(result)
'
```

수집 후 항목들을 다음 3개 등급으로 정규화한다:

- **위험 (critical)** — 빨강/오류/실패 표시
- **주의 (warning)** — 노랑/주의 표시
- **정상 (ok)** — 무시 (개선 대상 아님)

산출물: `.omc/seo-loop/iteration-<N>/diagnosis.json`

```json
{
  "iteration": 1,
  "score": 72,
  "categories": [
    {
      "name": "메타 태그",
      "items": [
        {"title": "...", "severity": "critical", "detail": "..."},
        {"title": "...", "severity": "warning", "detail": "..."}
      ]
    }
  ],
  "collected_at": "<ISO-8601>"
}
```

### Step 2: 위험·주의 항목 분리 정리

`critical` + `warning` 항목만 골라 카테고리별로 그룹핑한다. `ok` 항목은 버린다.

산출물: `.omc/seo-loop/iteration-<N>/issues.md`

```markdown
# Iteration <N> — SEO 개선 대상

현재 점수: <SCORE> / 100

## 위험 (Critical)
### [카테고리명]
- **항목**: 설명
- ...

## 주의 (Warning)
### [카테고리명]
- **항목**: 설명
- ...
```

### Step 3: 카테고리별 분리 명세 문서 작성

각 **큰 카테고리** 단위로 분리 명세를 만든다. 한 파일에 모두 몰지 말고 파일을 나눈다 — autopilot이 카테고리별로 독립 실행할 수 있도록 한다.

산출물: `.omc/seo-loop/iteration-<N>/specs/<category-slug>.md`

각 명세 파일은 다음 섹션을 포함한다:

```markdown
# <카테고리명> 개선 명세

## 현 상태
- 문제 항목 N개 (critical N, warning N)

## 목표
- 모든 항목을 `ok`로 전환

## 변경 대상 (예상)
- `src/app/layout.tsx`
- `src/components/seo/JsonLdScript/index.tsx`
- ...

## 작업 항목
1. <구체 작업> — 영향 파일·예상 영향도
2. ...

## 검증
- 빌드 통과 (`pnpm build`)
- 린트 통과 (`pnpm lint`)
- 재진단 시 해당 카테고리의 critical/warning 0건

## 제약
- 디자인·동작·콘텐츠 의미를 바꾸지 않는다
- 기존 컴포넌트 구조(SRP 규칙) 유지
```

영향 파일 후보는 `package.json`, `src/components/seo/JsonLdScript/index.tsx`, `src/app/layout.tsx` 등 핫패스를 우선 확인한다.

### Step 4: ralplan 검토

각 분리 명세를 ralplan 스킬에 넘겨 검토받는다. ralplan은 합의 계획 게이트 역할을 하므로, **모든 명세에 대해 통과 응답을 받은 뒤** 다음 단계로 넘어간다.

호출 방법: Skill 도구로 `oh-my-claudecode:ralplan`을 실행하면서 명세 파일 경로를 인자로 전달한다.

```
/oh-my-claudecode:ralplan .omc/seo-loop/iteration-<N>/specs/<category-slug>.md
```

ralplan이 수정/보강을 요구하면 명세를 갱신한 뒤 재검토한다. 통과한 명세는 `<slug>.approved.md`로 복사해 표시한다.

### Step 5: autopilot 구현

승인된 명세를 기준으로 autopilot 스킬을 실행한다. 카테고리별로 한 번씩 호출하거나, 명세 묶음을 한 번에 넘겨도 무방하다 — autopilot은 명세를 읽고 변경을 적용한다.

```
/oh-my-claudecode:autopilot .omc/seo-loop/iteration-<N>/specs/*.approved.md
```

autopilot이 끝난 후 직접 검증:

- `pnpm build 2>&1 | tail -30`
- `pnpm lint`

빌드/린트가 실패하면 **commit 하지 않는다**. 실패 로그를 명세에 피드백으로 적고 Step 5를 재실행.

### Step 6: commit & push

`commit` 스킬을 사용해 기능별로 그룹화된 커밋을 만들고 즉시 push 한다.

```
/commit
```

커밋이 끝나면 push:

```bash
git push
```

원격이 보호되어 force가 필요한 상황은 **사용자 확인 없이 진행 금지**. 일반 push만 자동 수행.

### Step 7: Vercel 배포 대기 (loop, 2분 간격)

Vercel 대시보드를 스크래핑해 최신 deployment의 상태가 **Ready / Production**이 될 때까지 기다린다.

loop 스킬을 사용해 2분 간격으로 확인하는 명령을 등록한다:

```
/loop 2m .claude/skills/seo-100-loop/check_vercel.md
```

`check_vercel.md`가 없다면 인라인으로도 가능하다. 핵심 동작은 다음 browser-harness 호출:

아래 명령에서 `<VERCEL_DASHBOARD>`는 `Inputs` 섹션에서 받은 값(또는 기본값) 그대로 사용한다.

```bash
browser-harness -c '
new_tab("<VERCEL_DASHBOARD>")
wait_for_load()
# 로그인 화면이면 사용자 개입 필요 — 멈추고 알린다
capture_screenshot()
status = js("""
  // 최상단 deployment 카드의 상태 텍스트 추출
  const root = document.body.innerText;
  return root;
""")
print(status)
'
```

- 로그인 페이지로 리다이렉트되면 즉시 멈추고 사용자에게 알린다. 자동 로그인 시도는 하지 않는다.
- 상태 텍스트에 `Ready` 또는 `Production` 표시가 보이면 loop을 종료하고 다음 단계로.
- `Error`, `Failed`, `Canceled`가 보이면 loop를 종료하고 사용자에게 보고 후 워크플로우 중단.
- 최대 대기 시간: 30분 (15회). 초과 시 사용자에게 보고.

### Step 8: 재진단 트리거 (browser-harness)

`DIAGNOSE_URL`에 접속해 새 진단을 강제로 실행시킨다 (`/result`가 아닌 `/diagnose` 엔드포인트).

아래 명령에서 `<DIAGNOSE_URL>`은 `Inputs` 섹션의 계산식대로 만든 값을 사용한다.

```bash
browser-harness -c '
new_tab("<DIAGNOSE_URL>")
wait_for_load()
capture_screenshot()
# 분석 완료까지 대기 (페이지가 결과 화면으로 전환되는 신호 관찰)
'
```

분석이 끝나면 Step 1로 돌아가 새 점수를 수집한다 (다음 iteration).

### Step 9: 종료 판정

매 반복 마지막에 `state.json`을 업데이트하고 종료 조건을 평가한다.

## Stop conditions

다음 중 **하나라도** 충족되면 루프를 종료한다:

1. **목표 달성** — `score >= 100`
2. **최대 반복** — `iteration >= 10`
3. **정체** — 최근 3회의 점수 변동폭이 0이거나 음수 (개선 없음/퇴보)
4. **빌드/배포 실패가 2회 연속** 발생
5. **사용자 개입 요청** — 로그인 필요, 인증 오류, 데이터 수집 실패

종료 시 최종 보고서 작성: `.omc/seo-loop/report.md`

```markdown
# SEO 100점 루프 종료 보고

- 시작 점수: <N>
- 최종 점수: <N>
- 반복 횟수: <N> / 10
- 종료 사유: <목표 달성 / 최대 반복 / 정체 / 실패 / 사용자 개입>

## 반복별 점수 추이
| Iter | Score | Delta | 주요 변경 |
|------|-------|-------|----------|

## 남은 이슈 (있을 시)
- ...

## 다음 권장 액션
- ...
```

## Operating principles

- **각 단계 산출물은 디스크에 남긴다.** 사용자가 중간 결과를 검증할 수 있어야 한다.
- **각 카테고리는 독립적인 명세·승인·구현 단위.** 한 카테고리의 실패가 전체를 막지 않게 한다.
- **빌드/린트는 commit 전에 반드시 통과.** 깨진 코드를 push 하지 않는다.
- **사용자 확인이 필요한 지점은 즉시 멈춘다.** Vercel 로그인, 검토 거부, 인증 만료 등.
- **루프가 끝나면 항상 보고서를 만든다.** 성공이든 실패든 추적 가능하게 둔다.

## Failure modes

| 증상 | 대응 |
|---|---|
| 진단 페이지가 빈 화면 / 점수 미표시 | 스크린샷 보존 후 사용자에게 보고, 루프 중단 |
| ralplan이 반복적으로 reject | 3회 reject 시 사용자 개입 요청 |
| autopilot이 빌드 실패만 양산 | 2회 연속 빌드 실패 시 해당 카테고리를 skip하고 다음 반복으로 |
| Vercel 빌드 실패 | 즉시 중단, 최근 커밋을 사용자에게 보여줌 |
| `/diagnose`가 동일 점수만 반환 (캐시 의심) | 1분 대기 후 1회 재시도, 그래도 동일하면 정체로 간주 |

## Project notes

- 프로젝트 패키지 매니저는 `pnpm`이다. `npm`, `yarn` 사용 금지.
- 빌드 명령은 `pnpm build`, 린트는 `pnpm lint`.
- 컴포넌트는 SRP 규칙(PascalCase 폴더 + index.tsx/types.ts/...)을 따른다 — autopilot에 이 제약을 전달해야 한다.
- 핫패스 파일: `package.json`, `src/components/seo/JsonLdScript/index.tsx`, `src/app/layout.tsx`.

## Output expectations

워크플로우 종료 시 다음을 사용자에게 제시한다:

1. 최종 점수 및 시작 대비 개선폭
2. 반복별 점수 추이 표
3. 생성된 PR/커밋 해시 목록
4. 남은 위험/주의 항목 (있을 시)
5. `.omc/seo-loop/report.md` 경로
