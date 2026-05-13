import {
  LayoutGrid,
  Ruler,
  Hand,
  Layers,
  type LucideIcon,
} from "lucide-react";
import SlideLayout from "./slide-layout";

type CategoryCard = {
  id: string;
  title: string;
  count: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  accent: string;
  span: string;
};

const CATEGORIES: CategoryCard[] = [
  {
    id: "ui-elements",
    title: "UI 요소",
    count: "16",
    description: "사용자가 화면에서 직접 보고 조작하는 기본 컴포넌트",
    items: [
      "Text · Button · Icon Button",
      "Input · Radio · Checkbox",
      "Dropdown · Selector · Form",
      "Slider · Divider · Date/Time Picker",
      "Table · Progress Bar",
    ],
    icon: LayoutGrid,
    accent: "from-sky-500/15 to-sky-500/0",
    span: "md:col-span-2",
  },
  {
    id: "ui-properties",
    title: "UI 속성",
    count: "1",
    description: "컴포넌트의 간격과 여백을 설명하는 디자인 언어",
    items: ["Padding & Margin"],
    icon: Ruler,
    accent: "from-violet-500/15 to-violet-500/0",
    span: "md:col-span-1",
  },
  {
    id: "ui-actions",
    title: "UI 액션",
    count: "4",
    description: "사용자의 입력을 표현하는 인터랙션 어휘",
    items: ["Click · Tap · Touch", "Drag", "Gesture", "Keyboard"],
    icon: Hand,
    accent: "from-emerald-500/15 to-emerald-500/0",
    span: "md:col-span-1",
  },
  {
    id: "advanced",
    title: "고급 컴포넌트",
    count: "13",
    description: "여러 요소를 조합한 화면 단위 패턴 모음",
    items: [
      "Card · List · Grid",
      "Scroll · Infinite Scroll",
      "Drawer · Bottom Sheet",
      "App Bar · Tab Bar · FAB",
      "Search Bar · Hero",
    ],
    icon: Layers,
    accent: "from-amber-500/15 to-amber-500/0",
    span: "md:col-span-2",
  },
];

export default function OverviewSlide() {
  return (
    <SlideLayout title="개요" eyebrow="Overview · 한눈에 보기">
      <div className="grid grid-cols-1 gap-4 pb-2 md:grid-cols-3 md:gap-5">
        {CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className={`reveal-up group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6 ${category.span}`}
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${category.accent}`}
              />
              <div className="relative flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.04] text-foreground/80">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="num text-2xl font-semibold tracking-tight text-foreground/40">
                  {category.count}
                </span>
              </div>
              <h2 className="relative mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                {category.title}
              </h2>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <ul className="relative mt-4 space-y-1.5 text-sm text-foreground/80">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 leading-relaxed"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/70"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
