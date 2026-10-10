## 작업 요약

메인 페이지를 표지 · 목차 · 레슨 세 화면으로 다시 짜고, 화면 사이에 전환 모션을 넣었습니다. 레슨 하단의 이전/다음 바는 본문 길이와 관계없이 화면 맨 아래에 고정됩니다.
코드 블록에는 구문 강조 · 줄 번호 · 파일명 · 복사 버튼이 들어갔고, 코드 아래에 외부 사람도 그대로 쓸 수 있는 "프롬프트" 영역(복사 포함)을 추가했습니다.
기존 36개 슬라이드 본문은 수정하지 않고 레슨 본문으로 재사용했습니다.

## 변경 전후

| 전 | 후 |
| --- | --- |
| ![표지 1440 - 전](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/2/evidence/before/cover-1440.webp) | ![표지 1440 - 후](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/2/evidence/after/cover-1440.webp) |
| ![레슨 1440 - 전](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/2/evidence/before/lesson-1440.webp) | ![레슨 1440 - 후](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/2/evidence/after/lesson-1440.webp) |
| ![레슨 390 - 전](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/2/evidence/before/lesson-390.webp) | ![레슨 390 - 후](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/2/evidence/after/lesson-390.webp) |

빨간 박스가 변경 구간입니다. 표지는 화면 전체, 레슨은 하단 고정 내비(이전 레슨 이름 · 위치 · 다음 레슨 이름)와 사이드바(현재 레슨 표시가 미끄러져 이동)입니다.
화면 전환 모션(원형 reveal · 카드 확장 · 좌우 슬라이드 · 작아지며 퇴장)은 정지 이미지로 보여줄 수 없어 글로 남깁니다. 시안: https://claude.ai/artifact/3Ztt5GsHkA7MN2dVegtykW
캡처 왼쪽 아래의 "N" 배지는 Next 개발 모드 표시이며 배포 화면에는 나오지 않습니다.

## 변경 파일

- `app/page.tsx` — 화면 상태와 전환(reveal / recede / zoom / slide), 키보드 이동(← → PageUp PageDown Home End)
- `components/cookbook/*` (신규) — 표지 · 목차 · 레슨 화면, 프롬프트 패널, 복사 버튼과 훅, 레슨 컨텍스트
- `lib/lessons.ts` (신규) — 36개 레슨 메타(정의 문장)와 자기완결 프롬프트 생성기
- `components/slides/slide-layout.tsx` — 레슨 본문 헤더(장 · 번호 · 제목 · 정의)로 축소, props 시그니처 유지
- `components/ui/prism/PrismCode.tsx` — 파일명 헤더 · 줄 번호 · 복사 버튼 · 새 하이라이트 테마(props 호환)
- `components/ui/Balancer/index.tsx` — 하이드레이션 이후 마운트되는 경우 script 대신 `text-balance` 로 렌더(React 경고 제거)
- `app/globals.css` — 모션 키프레임 · 토큰 · reduced-motion 처리, 슬라이드 내부 중첩 스크롤 해제
- `.gitignore` — `.issue` 작업 폴더 무시 규칙(별도 커밋)

## 검증

- `eslint .` / `tsc --noEmit` / `next build` 통과
- 하단 내비 위치: 1440×900 · 1024×768 · 820×1180 · 390×844 에서 긴 레슨과 짧은 레슨 모두 하단 바 아래끝 = 뷰포트 높이(900 / 768 / 1180 / 844)
- 4개 뷰포트 모두 가로 스크롤 없음, 960px 이하에서 사이드바 숨김
- 코드 · 프롬프트 복사 버튼 클릭 시 "복사됨" 표시, 구문 강조 토큰 렌더 확인
- 프롬프트 본문에 내부 이름(SlideLayout, KoHeading, globals.css, components/slides, 토큰 클래스) 없음
- `prefers-reduced-motion: reduce` 에뮬레이션: 레슨 진입 직후 실행 중 애니메이션 0개(기본 설정에서는 18개)
- 개발 서버 콘솔 에러 0건

## 남은 이슈

- 일부 슬라이드의 기존 "설명" 탭 문구와 새 레슨 정의 문장이 비슷한 내용을 반복합니다. 슬라이드 본문 정리는 이번 범위 밖입니다.
- `eslint` 실행 시 `eslint.config.mjs` 의 디자인 계약 항목(`tracking-eyebrow` 등) 경고 3건이 출력되며, 이번 변경 이전부터 있던 설정입니다.
