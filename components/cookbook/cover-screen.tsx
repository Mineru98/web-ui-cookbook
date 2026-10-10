"use client";

import { ArrowRight } from "lucide-react";
import type { CSSProperties, MouseEvent, ReactElement } from "react";
import { LESSONS } from "@/lib/lessons";
import { KoHeading } from "@/components/ui/KoHeading";
import { KoText } from "@/components/ui/KoText";
import { LogoMark } from "./logo-mark";

type CoverScreenProps = {
  onStart: (e: MouseEvent<HTMLElement>) => void;
  onOverview: (e: MouseEvent<HTMLElement>, tab: string) => void;
  onResume: (e: MouseEvent<HTMLElement>) => void;
};

type Chapter = { no: string; name: string; sample: string; section: string };

const CHAPTERS: Chapter[] = [
  { no: "01", name: "시작하며", sample: "이 자료의 구성과 읽는 법, 용어 정리", section: "Intro" },
  { no: "02", name: "UI 요소", sample: "Text, Button, Input, Checkbox, Date Picker, Table…", section: "UI 요소" },
  { no: "03", name: "UI 속성", sample: "Padding과 Margin, 박스 모델로 보는 간격", section: "UI 속성" },
  { no: "04", name: "UI 액션", sample: "Click, Drag, Gesture, Keyboard 입력", section: "UI 액션" },
  { no: "05", name: "고급 컴포넌트", sample: "Card, Drawer, Bottom Sheet, Tab Bar, FAB…", section: "고급 컴포넌트" },
];

const countOf = (section: string): number =>
  LESSONS.filter((lesson) => lesson.section === section).length;

export function CoverScreen({ onStart, onOverview, onResume }: CoverScreenProps): ReactElement {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <header className="anim-down mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2.5">
          <LogoMark size="md" />
          <span className="text-lg font-bold tracking-tight">Web UI Cookbook</span>
        </span>
        <nav aria-label="주 메뉴" className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={(e) => onOverview(e, "all")}
            className="focus-ring press min-h-11 rounded-lg px-3.5 text-sm font-medium text-secondary-foreground hover:bg-secondary"
          >
            목차
          </button>
          <button
            type="button"
            onClick={onResume}
            className="focus-ring press min-h-11 rounded-lg px-3.5 text-sm font-medium text-secondary-foreground hover:bg-secondary"
          >
            이어서 보기
          </button>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-300 flex-1 flex-col gap-14 px-4 pt-8 pb-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <section className="flex max-w-195 flex-col items-start gap-5.5">
          <div
            className="anim-rise inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-2xs font-semibold tracking-eyebrow text-brand-deep uppercase"
            style={{ "--anim-delay": "0ms" } as CSSProperties}
          >
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            Web UI Cookbook · 2026
          </div>
          <KoHeading
            as="h1"
            balance={false}
            aria-label="UI 컴포넌트를 직접 만져 보며 배웁니다."
            className="text-hero font-bold tracking-tight"
          >
            <span aria-hidden className="anim-word" style={{ "--anim-delay": "120ms" } as CSSProperties}>UI</span>{" "}
            <span aria-hidden className="anim-word" style={{ "--anim-delay": "200ms" } as CSSProperties}>컴포넌트를</span>
            <br />
            <span aria-hidden className="anim-word" style={{ "--anim-delay": "280ms" } as CSSProperties}>직접</span>{" "}
            <span
              aria-hidden
              className="anim-word relative isolate text-brand-deep"
              style={{ "--anim-delay": "360ms" } as CSSProperties}
            >
              만져 보며
              <span
                className="anim-sweep absolute inset-x-0 bottom-0.5 -z-10 h-2.5 rounded-sm bg-accent"
                style={{ "--anim-delay": "900ms" } as CSSProperties}
              />
            </span>{" "}
            <span aria-hidden className="anim-word" style={{ "--anim-delay": "440ms" } as CSSProperties}>배웁니다.</span>
          </KoHeading>
          <div className="anim-rise max-w-150" style={{ "--anim-delay": "620ms" } as CSSProperties}>
            <KoText className="text-lg leading-relaxed text-muted-foreground">
              버튼 하나부터 바텀시트까지. 모바일·웹 화면을 이루는 요소와 속성, 상호작용을 한 장씩 넘기며 정의를 읽고, 코드를 보고, 바로 눌러 봅니다.
            </KoText>
          </div>
          <div className="anim-rise mt-1.5 flex flex-wrap gap-3" style={{ "--anim-delay": "700ms" } as CSSProperties}>
            <button
              type="button"
              onClick={onStart}
              className="group focus-ring press inline-flex h-12 items-center gap-2.5 rounded-xl bg-primary px-5.5 text-base font-semibold text-foreground shadow-float"
            >
              첫 레슨 시작하기
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </button>
            <button
              type="button"
              onClick={(e) => onOverview(e, "all")}
              className="focus-ring press h-12 rounded-xl border border-border bg-card px-5.5 text-base font-medium text-foreground"
            >
              전체 목차 보기
            </button>
          </div>
        </section>

        <section aria-labelledby="chapters-title" className="flex flex-col gap-4">
          <div
            className="anim-rise flex flex-wrap items-baseline justify-between gap-4"
            style={{ "--anim-delay": "860ms" } as CSSProperties}
          >
            <KoHeading as="h2" id="chapters-title" className="text-xl font-bold tracking-tight">
              다섯 개의 장
            </KoHeading>
            <KoText balance={false} className="text-sm text-muted-foreground">
              카드를 누르면 그 장의 목차로 이동합니다
            </KoText>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {CHAPTERS.map((chapter, i) => (
              <button
                key={chapter.section}
                type="button"
                onClick={(e) => onOverview(e, chapter.section)}
                className="anim-rise lift focus-ring flex min-h-42 flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 text-left shadow-xs"
                style={{ "--anim-delay": `${940 + i * 70}ms` } as CSSProperties}
              >
                <span className="num inline-flex h-6 min-w-6.5 items-center justify-center rounded-lg bg-secondary px-1.5 text-2xs font-semibold text-muted-foreground">
                  {chapter.no}
                </span>
                <span className="text-lg font-bold tracking-tight">{chapter.name}</span>
                <span className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {chapter.sample}
                </span>
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                  {countOf(chapter.section)}개 레슨
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
