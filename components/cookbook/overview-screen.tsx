"use client";

import { ArrowRight } from "lucide-react";
import type { CSSProperties, MouseEvent, ReactElement } from "react";
import { KoHeading } from "@/components/ui/KoHeading";
import { KoText } from "@/components/ui/KoText";
import { LESSONS, SECTIONS, padLessonNo } from "@/lib/lessons";

type OverviewScreenProps = {
  currentIndex: number;
  visited: ReadonlySet<number>;
  tab: string;
  /** 탭이 바뀔 때마다 증가 — 카드 등장 애니메이션을 다시 재생한다 */
  gridKey: number;
  onTab: (tab: string) => void;
  onOpen: (e: MouseEvent<HTMLElement>, index: number) => void;
  onBack: () => void;
};

const TABS = [
  { id: "all", label: "전체", count: LESSONS.length },
  ...SECTIONS.map((section) => ({
    id: section.name,
    label: section.name,
    count: LESSONS.filter((lesson) => lesson.section === section.name).length,
  })),
];

export function OverviewScreen({
  currentIndex,
  visited,
  tab,
  gridKey,
  onTab,
  onOpen,
  onBack,
}: OverviewScreenProps): ReactElement {
  const current = LESSONS[currentIndex];
  const sections = tab === "all" ? SECTIONS : SECTIONS.filter((section) => section.name === tab);
  const shown = LESSONS.flatMap((lesson, index) =>
    sections.some((section) => section.name === lesson.section) ? [index] : [],
  );

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex max-w-300 flex-col gap-7 px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        <header className="anim-down flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={onBack}
              className="focus-ring press -ml-1.5 mb-1.5 min-h-11 self-start rounded-lg pr-2.5 pl-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              ← 표지로
            </button>
            <span className="text-2xs font-semibold tracking-eyebrow text-brand-deep uppercase">
              Contents
            </span>
            <KoHeading as="h1" className="text-title-sm font-bold tracking-tight xs:text-title">
              목차
            </KoHeading>
            <KoText balance={false} className="text-base text-muted-foreground">
              <span className="num font-semibold text-foreground">{LESSONS.length}</span>개 레슨 중{" "}
              <span className="num font-semibold text-foreground">{visited.size}</span>개를 열어 봤어요.
            </KoText>
          </div>
          <button
            type="button"
            onClick={(e) => onOpen(e, currentIndex)}
            className="group lift focus-ring flex min-w-70 items-center gap-4 rounded-xl border border-border bg-card py-3.5 pr-3.5 pl-5 text-left shadow-float"
          >
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-xs text-muted-foreground">
                이어서 보기 · 레슨 {padLessonNo(currentIndex + 1)}
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">{current.title}</span>
            </span>
            <span
              aria-hidden
              className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-foreground"
            >
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
            </span>
          </button>
        </header>

        <div
          role="tablist"
          aria-label="장 선택"
          className="anim-rise flex max-w-full flex-wrap gap-1 self-start rounded-xl bg-secondary p-1"
          style={{ "--anim-delay": "80ms" } as CSSProperties}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === tab}
              onClick={() => onTab(t.id)}
              className={
                t.id === tab
                  ? "focus-ring press inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-card px-3.5 text-sm font-semibold text-foreground shadow-xs"
                  : "focus-ring press inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3.5 text-sm text-muted-foreground"
              }
            >
              {t.label}
              <span className="num text-2xs text-muted-foreground">{t.count}</span>
            </button>
          ))}
        </div>

        <div key={gridKey} className="flex flex-col gap-7">
          {sections.map((section, sectionIndex) => (
            <section key={section.name} className="flex flex-col gap-3.5">
              <div
                className="anim-rise flex flex-wrap items-baseline gap-2.5 border-b border-border pb-3"
                style={{ "--anim-delay": `${100 + sectionIndex * 40}ms` } as CSSProperties}
              >
                <span className="text-2xs font-semibold tracking-eyebrow text-brand-deep uppercase">
                  {section.name}
                </span>
                <span className="text-sm text-muted-foreground">{section.desc}</span>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {LESSONS.map((lesson, index) => ({ lesson, index }))
                  .filter((item) => item.lesson.section === section.name)
                  .map(({ lesson, index }) => {
                    const isNow = index === currentIndex;
                    const isSeen = visited.has(index);
                    const delay = Math.min(shown.indexOf(index), 14) * 28 + 120;
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={(e) => onOpen(e, index)}
                        className={
                          isNow
                            ? "anim-rise lift focus-ring flex min-h-24 flex-col items-start gap-4.5 rounded-xl border border-primary bg-primary-soft p-4 text-left"
                            : "anim-rise lift focus-ring flex min-h-24 flex-col items-start gap-4.5 rounded-xl border border-border bg-card p-4 text-left shadow-xs"
                        }
                        style={{ "--anim-delay": `${delay}ms` } as CSSProperties}
                      >
                        <span className="flex w-full items-center justify-between gap-2">
                          <span className="num inline-flex h-6 min-w-6.5 items-center justify-center rounded-lg bg-secondary text-2xs font-semibold text-muted-foreground">
                            {padLessonNo(index + 1)}
                          </span>
                          {isNow ? (
                            <span className="rounded-full bg-accent px-2 py-0.5 text-2xs font-semibold text-accent-foreground">
                              학습 중
                            </span>
                          ) : isSeen ? (
                            <span className="rounded-full border border-success-line bg-success-soft px-2 py-0.5 text-2xs font-semibold text-success-ink">
                              열어 봄
                            </span>
                          ) : null}
                        </span>
                        <span className="text-base font-semibold text-foreground">{lesson.title}</span>
                      </button>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
