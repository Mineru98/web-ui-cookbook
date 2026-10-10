export type LessonUse = { title: string; desc: string };

export type Lesson = {
  id: string;
  title: string;
  section: string;
  /** 레슨 첫머리에 놓이는 정의 한 문장 */
  lead: string;
  usesTitle?: string;
  uses?: LessonUse[];
  /** "직접 해 보기" 데모를 말로 설명한 문장 (프롬프트용) */
  demo?: string;
};

export type SectionMeta = { name: string; desc: string };

export const SECTIONS: SectionMeta[] = [
  { name: "Intro", desc: "자료의 구성과 읽는 법" },
  { name: "UI 요소", desc: "화면을 이루는 기본 부품" },
  { name: "UI 속성", desc: "간격과 박스 모델" },
  { name: "UI 액션", desc: "사용자의 입력 방식" },
  { name: "고급 컴포넌트", desc: "부품을 조합한 패턴" },
  { name: "Outro", desc: "정리와 다음 단계" },
];

const OVERVIEW_USES: LessonUse[] = [
  { title: "UI 요소 · 16", desc: "Text, Button, Input처럼 화면을 이루는 기본 부품" },
  { title: "UI 속성 · 1", desc: "Padding과 Margin으로 보는 간격의 리듬" },
  { title: "UI 액션 · 4", desc: "Click, Drag, Gesture, Keyboard 입력" },
  { title: "고급 컴포넌트 · 13", desc: "부품을 조합한 Drawer, Bottom Sheet, FAB 같은 패턴" },
];

export const LESSONS: Lesson[] = [
  {
    id: "overview",
    title: "개요",
    section: "Intro",
    lead: "이 자료는 화면을 이루는 요소를 정의 · 코드 · 데모 세 갈래로 살펴봅니다. 네 개의 장을 순서대로 지나면 작은 앱 하나를 설계할 수 있습니다.",
    usesTitle: "이 자료의 구성",
    uses: OVERVIEW_USES,
    demo: `이 레슨은 데모 대신 "이 자료의 구성" 카드 4개를 보여 준다: ${OVERVIEW_USES.map((u) => `${u.title}(${u.desc})`).join(", ")}. 카드를 누르면 그 장의 첫 레슨으로 이동한다.`,
  },
  {
    id: "text",
    title: "Text",
    section: "UI 요소",
    lead: "화면의 정보를 전달하는 가장 기본 단위입니다. 크기 · 굵기 · 색으로 무엇을 먼저 읽을지 위계를 만듭니다.",
    uses: [
      { title: "제목 위계", desc: "페이지와 섹션의 시작을 알리는 큰 글자" },
      { title: "본문", desc: "편하게 읽히는 크기와 줄 간격" },
      { title: "보조 정보", desc: "캡션, 날짜처럼 덜 중요한 정보" },
    ],
    demo: "제목(32px, 굵기 700) · 본문(17px, 줄 간격 1.7) · 캡션(13px, 보조 글자색) 세 줄을 실제 크기로 나란히 보여 줘서 크기와 굵기로 위계가 생기는 것을 비교하게 한다.",
  },
  {
    id: "button",
    title: "Button",
    section: "UI 요소",
    lead: "사용자가 무언가를 실행하도록 하는 가장 기본적인 인터랙티브 요소입니다. 누르면 정해진 작업이 일어나고, 그 결과는 화면에 곧바로 드러나야 합니다.",
    uses: [
      { title: "양식 제출", desc: "입력을 마친 뒤 저장 · 전송을 확정할 때" },
      { title: "대화 상자 응답", desc: "확인과 취소처럼 두 갈래의 결정을 받을 때" },
      { title: "페이지 이동", desc: "다음 단계로 넘어가는 행동이 명확할 때" },
      { title: "기능 켜고 끄기", desc: "재생 · 정지처럼 상태를 바꾸는 행동" },
    ],
    demo: '세그먼트 컨트롤로 버튼 모양 6가지를 고르면 가운데 "저장하기" 버튼의 모양이 320ms 동안 부드럽게 바뀐다.\n  · default: 강조색 배경 + 진한 글자\n  · secondary: 연한 회색 배경(#EEF2F6)\n  · outline: 흰 배경 + 1px 테두리\n  · ghost: 배경 없음\n  · destructive: 빨간 배경(#E74040) + 흰 글자\n  · link: 배경 없음 + 밑줄, 글자색 #087FBA\n  처음 선택은 "default". 아래 코드 블록의 variant 값도 선택에 맞춰 함께 바뀐다. 버튼을 누른 횟수를 아래에 표시하고 aria-live로 읽어 준다.',
  },
  {
    id: "icon-button",
    title: "Icon Button",
    section: "UI 요소",
    lead: "아이콘만으로 행동을 나타내는 버튼입니다. 좁은 공간에서 자주 쓰는 동작에 쓰고, 보이지 않는 이름(aria-label)을 꼭 붙입니다.",
    uses: [
      { title: "툴바", desc: "편집기 · 앱 바의 반복 동작" },
      { title: "목록 항목", desc: "행마다 붙는 더 보기 · 삭제" },
      { title: "토글", desc: "좋아요 · 북마크처럼 켜고 끄는 상태" },
    ],
    demo: "아이콘만 있는 버튼 3개(좋아요 · 공유 · 더 보기, 각 48×48px)를 둔다. 좋아요는 켜고 끄는 토글로, 켜지면 하트가 빨갛게 채워지며 살짝 튀어 오르듯 1.15배 커진다(aria-pressed로 상태 전달). 모든 버튼에 aria-label을 붙인다.",
  },
  {
    id: "outlined-button",
    title: "Outlined Button",
    section: "UI 요소",
    lead: "테두리만 있는 버튼입니다. 주요 버튼 곁에서 덜 중요한 선택지를 차분하게 보여 줍니다.",
    uses: [
      { title: "보조 선택지", desc: "주요 행동 옆의 두 번째 선택" },
      { title: "취소 · 뒤로", desc: "되돌아가는 행동" },
      { title: "필터", desc: "켜고 끄는 여러 조건" },
    ],
    demo: "[취소] 외곽선 버튼과 [저장하기] 강조 버튼을 나란히 두어, 주요 행동과 보조 행동의 위계 차이를 보여 준다.",
  },
  {
    id: "input",
    title: "Input",
    section: "UI 요소",
    lead: "사용자가 텍스트를 직접 입력하는 필드로, TextField라고도 부릅니다. 텍스트 · 숫자 · 이메일 · 비밀번호처럼 다양한 형식을 받을 수 있고, 레이블과 안내 · 오류 메시지가 늘 함께 다닙니다.",
    uses: [
      { title: "로그인", desc: "이메일 · 비밀번호 입력" },
      { title: "검색", desc: "찾고 싶은 내용을 입력" },
      { title: "양식", desc: "이름 · 주소 같은 정보 수집" },
    ],
    demo: '"이메일" 레이블, 이메일 입력 칸(높이 44px), 그 아래 "로그인에 사용할 주소예요." 안내 문구를 둔다. 입력 칸에 포커스가 가면 테두리가 강조색으로 바뀌고 3px 연한 링이 200ms 동안 나타난다.',
  },
  { id: "radio-button", title: "Radio Button", section: "UI 요소", lead: "여러 선택지 중 하나만 고를 때 씁니다. 모든 선택지가 한눈에 보이는 것이 장점입니다." },
  { id: "checkbox", title: "Checkbox", section: "UI 요소", lead: "항목을 하나씩 독립적으로 켜고 끄며, 여러 개를 동시에 고를 수 있습니다." },
  { id: "dropdown", title: "Dropdown", section: "UI 요소", lead: "선택지를 접어 두었다가, 눌렀을 때 목록으로 펼쳐 보여 줍니다. 공간을 절약하면서 여러 선택지를 제공할 수 있습니다." },
  { id: "selector", title: "Selector", section: "UI 요소", lead: "Select라고도 부르는 드롭다운 형태의 요소로, 여러 선택지 중 하나를 고르게 합니다. 공간을 아끼는 데 알맞습니다." },
  { id: "form", title: "Form", section: "UI 요소", lead: "여러 입력 요소를 묶어 한 번에 제출하는 단위로, 검증과 제출 흐름을 포함합니다. 텍스트 필드 · 체크박스 · 라디오 버튼 같은 다양한 입력 요소를 담을 수 있습니다." },
  { id: "slider", title: "Slider", section: "UI 요소", lead: "범위 안의 값을 손잡이를 끌어 고르는 요소로, 대략적인 조절에 알맞습니다." },
  { id: "divider", title: "Divider", section: "UI 요소", lead: "Separator라고도 부르는 가로 또는 세로 선으로, 내용 묶음 사이를 나눠 구조와 계층을 드러냅니다." },
  { id: "date-picker", title: "Date Picker", section: "UI 요소", lead: "달력에서 날짜를 골라 형식 오류 없이 입력하게 돕습니다." },
  { id: "time-picker", title: "Time Picker", section: "UI 요소", lead: "시와 분을 골라 시간을 입력하게 돕습니다. 초와 AM/PM도 고를 수 있습니다." },
  { id: "table", title: "Table", section: "UI 요소", lead: "행과 열로 데이터를 정리해 비교하기 쉽게 보여 줍니다." },
  { id: "progress-bar", title: "Progress Bar", section: "UI 요소", lead: "작업이 얼마나 진행됐는지 막대로 보여 기다림을 예측할 수 있게 합니다." },

  { id: "padding-margin", title: "Padding · Margin", section: "UI 속성", lead: "UI 요소의 공간을 제어하는 CSS 속성으로, 안쪽 여백(padding)과 바깥 여백(margin)으로 간격의 리듬을 만듭니다. padding은 내용과 테두리 사이, margin은 테두리와 주변 요소 사이의 공간입니다." },

  { id: "click", title: "Click", section: "UI 액션", lead: "누르는 순간의 피드백과 그 결과를 설계하는 가장 흔한 상호작용입니다. 데스크톱에서는 Click, 모바일에서는 Tap, 터치스크린에서는 Touch라고 부르며, React에서는 주로 onClick 이벤트로 처리합니다." },
  { id: "drag", title: "Drag", section: "UI 액션", lead: "요소를 눌러 끌어다 놓으며 위치나 순서를 바꿉니다. React에서는 마우스 이벤트나 HTML5 Drag & Drop API로 구현합니다." },
  { id: "gesture", title: "Gesture", section: "UI 액션", lead: "스와이프 · 핀치처럼 터치스크린이나 트랙패드에서 손가락 움직임으로 화면을 조작합니다. React에서는 Touch Events API와 마우스 이벤트를 조합해 구현합니다." },
  { id: "keyboard", title: "Keyboard", section: "UI 액션", lead: "단축키와 포커스 이동으로 마우스 없이도 모든 기능에 닿게 합니다. 물리 키보드와 가상 키보드로 입력하며, 데스크톱의 주요 입력 방식이고 React에서는 KeyboardEvent로 처리합니다." },

  { id: "card-view", title: "Card View", section: "고급 컴포넌트", lead: "관련 정보를 하나의 상자로 묶어 훑어보고 고르기 쉽게 합니다." },
  { id: "list-view", title: "List View", section: "고급 컴포넌트", lead: "같은 형태의 항목을 세로로 나열해 빠르게 훑게 합니다. 주로 텍스트와 간단한 컨트롤로 구성되며, 항목을 찾고 고르고 작업하기에 효율적입니다." },
  { id: "grid-view", title: "Grid View", section: "고급 컴포넌트", lead: "항목을 2차원 격자로 배치해 이미지나 카드를 한눈에 비교하게 합니다." },
  { id: "scroll-view", title: "Scroll View", section: "고급 컴포넌트", lead: "화면보다 긴 내용을 스크롤로 탐색하게 합니다." },
  { id: "infinite-scroll", title: "Infinite Scroll", section: "고급 컴포넌트", lead: "끝에 다다르면 페이지 이동이나 '더보기' 버튼 없이 다음 내용을 이어 불러와 끊김 없이 탐색하게 합니다." },
  { id: "drawer", title: "Drawer", section: "고급 컴포넌트", lead: "화면 가장자리에서 밀려 나오는 패널로 메뉴나 보조 내용을 담습니다." },
  { id: "bottom-navigation", title: "Bottom Navigation", section: "고급 컴포넌트", lead: "화면 아래에 주요 목적지를 3–5개 두어 엄지로 이동하게 합니다." },
  { id: "bottom-sheet", title: "Bottom Sheet", section: "고급 컴포넌트", lead: "아래에서 올라오는 시트로, 지금 맥락을 유지한 채 추가 선택지를 보여 줍니다." },
  { id: "app-bar", title: "App Bar", section: "고급 컴포넌트", lead: "화면 위에서 현재 화면의 제목과 주요 동작을 담는 막대로, 툴바(Toolbar) 또는 내비게이션 바(Navigation Bar)라고도 부릅니다. 내비게이션 · 검색 · 액션 버튼 같은 주요 기능을 제공합니다." },
  { id: "tab-bar", title: "Tab Bar", section: "고급 컴포넌트", lead: "같은 수준의 화면 몇 개를 탭으로 오가게 합니다." },
  { id: "fab", title: "FAB", section: "고급 컴포넌트", lead: "화면 위에 떠 있는 둥근 버튼으로, 그 화면의 대표 행동 하나를 맡깁니다." },
  { id: "search-bar", title: "Search Bar", section: "고급 컴포넌트", lead: "검색어를 입력해 원하는 내용을 빠르게 찾게 합니다." },
  { id: "hero", title: "Hero", section: "고급 컴포넌트", lead: "페이지 첫 화면에서 핵심 메시지와 행동을 크게 보여 줍니다." },

  { id: "conclusion", title: "결론", section: "Outro", lead: "지금까지 살펴본 요소를 정리하고, 다음에 무엇을 만들어 보면 좋을지 안내합니다." },
];

export const padLessonNo = (n: number): string => String(n).padStart(2, "0");

/**
 * 이 프로젝트를 모르는 사람도 그대로 붙여 넣어 쓸 수 있도록
 * 필요한 정보를 모두 프롬프트 안에 담는다. (내부 파일·컴포넌트 이름 금지)
 */
export function buildLessonPrompt(lesson: Lesson, index: number, total: number): string {
  const no = padLessonNo(index + 1);
  const uses = (lesson.uses ?? []).map((u) => `${u.title}(${u.desc})`).join(", ");
  const usesLine = uses
    ? `카드 ${lesson.uses?.length}개 — ${uses}.`
    : `${lesson.title}을(를) 실제 서비스에서 쓰는 대표 상황 3–4개를 카드로 보여 준다(제목 + 한 줄 설명).`;
  const demoLine =
    lesson.demo ??
    `${lesson.title}의 대표 상태(기본 · 선택 · 비활성 등)를 사용자가 직접 바꿔 보며 차이를 느낄 수 있는 작은 데모를 만든다.`;

  return [
    `React와 TypeScript, Tailwind CSS로 "${lesson.title}"을(를) 배우는 학습 페이지 한 장을 만들어 줘.`,
    "새 프로젝트에 바로 넣을 수 있는 단일 컴포넌트 파일 하나면 되고, 별도의 UI 라이브러리 없이 동작해야 해.",
    "",
    "화면 구성 (위에서 아래로)",
    `1. 작은 라벨 "${lesson.section} · Lesson ${no}", 큰 제목 "${lesson.title}", 그 아래 정의 한 문단:`,
    `   "${lesson.lead}"`,
    `2. "${lesson.usesTitle ?? "언제 쓰나요"}": ${usesLine}`,
    `3. "직접 해 보기": ${demoLine}`,
    '4. "코드": 어두운 배경의 코드 블록에 데모와 같은 동작을 하는 최소 예제를 보여 준다. 줄 번호와 구문 강조(키워드 · 문자열 · 태그 · 속성 색 구분)를 넣고, 오른쪽 위에 "복사" 버튼을 둔다. 복사하면 버튼이 1.8초 동안 "복사됨"으로 바뀐다.',
    `5. 하단 고정 바: 왼쪽 "이전 레슨", 가운데 "${no} / ${total}", 오른쪽 "다음 레슨" 버튼. 본문 길이와 상관없이 항상 화면 맨 아래에 붙어 있고, 본문만 그 위에서 스크롤된다.`,
    "",
    "디자인 값",
    "- 글꼴: Pretendard(없으면 system-ui). 제목은 굵기 700, 자간 -0.025em. 한국어는 word-break: keep-all.",
    "- 색: 배경 #FBFCFD, 카드 #FFFFFF, 본문 글자 #0C141D, 보조 글자 #5E6B78, 테두리 #DFE6EC, 강조 #1EAEF6(강조 배경 위 글자는 #0C141D), 연한 강조 #EBF8FE, 코드 블록 배경 #0C141D.",
    "- 모서리 12px, 카드 그림자 0 1px 2px rgba(15,23,42,0.04), 본문 최대 너비 760px.",
    "",
    "반응형",
    "- 데스크톱: 본문 가운데 정렬. 태블릿: 같은 구성, 좌우 여백 24px.",
    '- 모바일(560px 이하): 좌우 여백 16px, 제목 32px, 하단 바 버튼은 "이전 · 다음"만 표시. 긴 코드는 코드 블록 안에서만 가로 스크롤.',
    "",
    "접근성과 모션",
    "- 모든 버튼은 실제 <button>, 터치 영역 44px 이상, 키보드 포커스 링 유지, 아이콘만 있는 버튼엔 aria-label.",
    "- 누를 때 scale(0.96) 120ms. 섹션은 아래에서 12px 떠오르며 560ms(cubic-bezier(.2,0,0,1)) 동안 차례로 나타난다.",
    '- 사용자가 "동작 줄이기"(prefers-reduced-motion)를 켰다면 모든 애니메이션을 끈다.',
  ].join("\n");
}
