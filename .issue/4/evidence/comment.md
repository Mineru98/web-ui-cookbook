## 작업 요약

레슨 상단 정의 문장과 겹치던 "설명" 탭의 첫 카드(정의 · 의의 · 개요 · ~란?)를 26개 슬라이드에서 정리했습니다. 카드에만 있던 사실 15건은 상단 정의(`lib/lessons.ts` 의 `lead`)로 옮겼고, 나머지 11개 카드는 내용이 이미 상단에 있어 그대로 지웠습니다.
정리 기준: ① 카드의 모든 사실이 상단에 있으면 삭제 ② 카드에만 있는 사실은 상단으로 이동(최대 3문장) ③ 지우면 설명 탭이 비는 Grid View · Infinite Scroll 은 정의 문단만 삭제하고 나머지 카드 유지 ④ 설명 · 코드 · 데모 3탭 구성 유지.

## 변경 전후

| 전 | 후 |
| --- | --- |
| ![Button 1440 - 전](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/4/evidence/before/button-1440.webp) | ![Button 1440 - 후](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/4/evidence/after/button-1440.webp) |
| ![Button 390 - 전](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/4/evidence/before/button-390.webp) | ![Button 390 - 후](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/4/evidence/after/button-390.webp) |
| ![Grid View 1440 - 전](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/4/evidence/before/grid-view-1440.webp) | ![Grid View 1440 - 후](https://raw.githubusercontent.com/Mineru98/web-ui-cookbook/main/.issue/4/evidence/after/grid-view-1440.webp) |

빨간 박스는 상단 정의 문장과 설명 탭입니다. 이전에는 설명 탭 첫 카드가 같은 정의를 반복했고, 이후에는 설명 탭이 상단에 없는 내용(주요 사례 · 특징 등)부터 시작합니다.

## 변경 파일

- `components/slides/**` 26개 — 설명 탭 정의 카드 삭제(Grid View · Infinite Scroll 은 정의 문단만)
- `lib/lessons.ts` — 15개 레슨의 `lead` 보강. Selector 는 기존 문장("버튼처럼 나란히")이 실제 슬라이드(드롭다운 Select)와 달라 슬라이드 기준으로 바로잡음

<details><summary>파일별 대조표</summary>

# #4 정의 카드 중복 제거 대조표

- 파일 경로는 `components/slides/` 기준. 처리: 삭제(카드의 모든 사실이 이미 `lead` 에 있음) / lead 로 이동(카드에만 있던 사실을 `lib/lessons.ts` 의 `lead` 로 옮기고 카드 삭제) / 문단만 삭제(설명 탭이 비지 않도록 정의 문단만 지우고 나머지 카드 유지).
- plan.md 는 31개로 적었으나 실제 정의 카드가 있는 파일은 아래 26개입니다(components 16 + properties 1 + actions 4 + advanced 5).

| 파일 | 원래 카드 제목 | 원래 카드 내용(요약) | 처리 | lead 로 옮긴 문장 |
| --- | --- | --- | --- | --- |
| components/button-slide.tsx | 정의 | 액션을 트리거하는 인터랙티브 요소, 누르면 지정된 작업 수행 | 삭제 | — |
| components/checkbox-slide.tsx | 정의 | 여러 옵션 중 여러 개 선택, 각각 독립적으로 선택/해제 | 삭제 | — |
| components/date-picker-slide.tsx | 정의 | 캘린더 형태로 날짜 선택, 입력을 직관적이고 쉽게 | 삭제 | — |
| components/divider-slide.tsx | 정의 | Divider(Separator), 콘텐츠·섹션을 구분하는 가로/세로 선, 구조와 계층을 명확히 | lead 로 이동 | Separator라고도 부르는 가로 또는 세로 선으로, 내용 묶음 사이를 나눠 구조와 계층을 드러냅니다. |
| components/dropdown-slide.tsx | 정의 | 클릭하면 옵션 목록 표시, 공간을 절약하면서 여러 옵션 제공 | lead 로 이동 | 공간을 절약하면서 여러 선택지를 제공할 수 있습니다. |
| components/form-slide.tsx | 정의 | 데이터 수집용 여러 입력 요소를 그룹화, 텍스트 필드·체크박스·라디오 버튼 등 포함 | lead 로 이동 | 텍스트 필드 · 체크박스 · 라디오 버튼 같은 다양한 입력 요소를 담을 수 있습니다. |
| components/icon-button-slide.tsx | 정의 | 텍스트 대신 아이콘, 공간 절약과 직관적 의미 전달 | 삭제 | — |
| components/input-slide.tsx | 정의 | Input(TextField), 텍스트 데이터 입력, 텍스트·숫자·이메일·비밀번호 등 다양한 형식 | lead 로 이동 | TextField라고도 부릅니다. 텍스트 · 숫자 · 이메일 · 비밀번호처럼 다양한 형식을 받을 수 있고 (레이블·안내·오류 메시지 문장은 기존 유지) |
| components/outlined-button-slide.tsx | 정의 | 배경 없이 테두리 외곽선, 보조 액션·덜 중요한 액션 | 삭제 | — |
| components/progress-bar-slide.tsx | 정의 | 작업 진행 상태를 시각적으로 표시, 얼마나 완료됐는지 안내 | 삭제 | — |
| components/radio-button-slide.tsx | 정의 | 여러 옵션 중 하나 선택, 같은 그룹에서는 하나만 선택 | 삭제 | — |
| components/selector-slide.tsx | 정의 | Selector(Select), 여러 옵션 중 하나를 고르는 드롭다운 형태, 공간 절약 | lead 로 이동 | Select라고도 부르는 드롭다운 형태의 요소로, 여러 선택지 중 하나를 고르게 합니다. 공간을 아끼는 데 알맞습니다. (기존 lead 의 "버튼처럼 나란히 두고" 는 실제 슬라이드(Select 컴포넌트)와 맞지 않아 교체) |
| components/slider-slide.tsx | 정의 | 지정 범위에서 값 선택, 드래그 핸들로 조절 | 삭제 | — |
| components/table-slide.tsx | 정의 | 행과 열로 구성된 데이터 표시, 구조화된 정보를 효과적으로 보여줌 | 삭제 | — |
| components/text-slide.tsx | 정의 | 정보를 표시하는 기본 요소, 크기·두께·색상으로 표현, 제목·본문·레이블 용도 | 삭제 | — |
| components/time-picker-slide.tsx | 정의 | 시간 선택, 시·분·초와 AM/PM 선택 인터페이스 | lead 로 이동 | 초와 AM/PM도 고를 수 있습니다. |
| properties/padding-margin-slide.tsx | 정의 | UI 요소의 공간을 제어하는 CSS 속성, padding(내용~테두리), margin(테두리~주변 요소) 설명 | lead 로 이동 | UI 요소의 공간을 제어하는 CSS 속성으로 … padding은 내용과 테두리 사이, margin은 테두리와 주변 요소 사이의 공간입니다. |
| actions/click-slide.tsx | 정의 | 짧게 누르거나 터치하는 상호작용, React onClick, Click/Tap/Touch 명칭 구분 | lead 로 이동 | 데스크톱에서는 Click, 모바일에서는 Tap, 터치스크린에서는 Touch라고 부르며, React에서는 주로 onClick 이벤트로 처리합니다. |
| actions/drag-slide.tsx | 정의 | 클릭한 채 위치를 바꾸는 인터랙션, React 마우스 이벤트 / HTML5 Drag & Drop API, 재정렬·이동 | lead 로 이동 | React에서는 마우스 이벤트나 HTML5 Drag & Drop API로 구현합니다. |
| actions/gesture-slide.tsx | 의의 | 터치스크린·트랙패드의 손가락 움직임 해석, React Touch Events API + 마우스 이벤트, 탭·스와이프·핀치 등 | lead 로 이동 | 터치스크린이나 트랙패드에서 … React에서는 Touch Events API와 마우스 이벤트를 조합해 구현합니다. (제스처 종류 목록은 "일반적인 제스처 유형" 카드에 이미 있음) |
| actions/keyboard-slide.tsx | 의의 | 물리·가상 키보드로 통신, React KeyboardEvent, 데스크톱의 주요 입력 방식 | lead 로 이동 | 물리 키보드와 가상 키보드로 입력하며, 데스크톱의 주요 입력 방식이고 React에서는 KeyboardEvent로 처리합니다. (원문 마지막의 모바일 관련 문장은 뜻이 불분명해 옮기지 않음) |
| advanced/app-bar-slide.tsx | 정의 | 화면 상단 컴포넌트, 제목·네비게이션·검색·액션 버튼, 툴바/내비게이션 바로도 불림 | lead 로 이동 | 현재 화면의 제목과 … 툴바(Toolbar) 또는 내비게이션 바(Navigation Bar)라고도 부릅니다. 내비게이션 · 검색 · 액션 버튼 같은 주요 기능을 제공합니다. |
| advanced/list-view-slide.tsx | 의의 | 항목을 세로로 나열, 텍스트와 간단한 컨트롤로 구성, 검색·선택·작업에 효율적 | lead 로 이동 | 주로 텍스트와 간단한 컨트롤로 구성되며, 항목을 찾고 고르고 작업하기에 효율적입니다. |
| advanced/card-view-slide.tsx | 개요 | 관련 정보 컨테이너(이미지·제목·설명·액션), 시각적 구분·그룹화로 쉽게 스캔 | 삭제 | — (구성 요소는 "주요 구성 요소" 카드에 이미 있음) |
| advanced/grid-view-slide.tsx | Grid View란? | 2차원 격자로 아이템 배치, 갤러리·상품 목록·카드 레이아웃에 사용 | 문단만 삭제 | 항목을 2차원 격자로 배치해 … (사용처는 "사용 사례" 카드에 이미 있음). "주요 특징" 이하 카드 유지, "~란?" 제목 제거 |
| advanced/infinite-scroll-slide.tsx | 무한 스크롤이란? | 페이지 전환 없이 자동으로 콘텐츠 로드, 페이지 이동·더보기 버튼 없는 연속 탐색 | 문단만 삭제 | 끝에 다다르면 페이지 이동이나 '더보기' 버튼 없이 다음 내용을 이어 불러와 … . "구현 방식" 이하 카드 유지, "~이란?" 제목 제거 |

</details>

## 검증

- `eslint .` / `tsc --noEmit` / `next build` 통과
- 36개 레슨 순회(Chrome): 설명 탭에 상단 정의 첫 문장 재등장 0건, 빈 설명 탭 0건, 정의 · 의의 · 개요 · ~란? 제목 0건, 콘솔 에러 0건
- 프롬프트 생성기 출력에 내부 이름 0건 유지

## 남은 이슈

- 없음
