"use client";

import { Check, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import {
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { LESSONS, buildLessonPrompt, padLessonNo } from "@/lib/lessons";
import { LessonContext } from "./lesson-context";
import { LogoMark } from "./logo-mark";
import { prefersReducedMotion } from "./motion";
import { PromptPanel } from "./prompt-panel";

/** 레슨 ↔ 레슨 전환 중 본문(article)에 붙는 모션 */
export type ArticleMotion = "none" | "out-left" | "out-right" | "in-left" | "in-right";

const ARTICLE_MOTION_CLASS: Record<ArticleMotion, string> = {
  none: "",
  "out-left": "anim-out-left",
  "out-right": "anim-out-right",
  "in-left": "anim-in-left",
  "in-right": "anim-in-right",
};

type LessonScreenProps = {
  index: number;
  visited: ReadonlySet<number>;
  articleMotion: ArticleMotion;
  /** 현재 레슨의 슬라이드 본문 */
  children: ReactNode;
  onHome: () => void;
  onOverview: () => void;
  onSlide: (index: number) => void;
};

export function LessonScreen({
  index,
  visited,
  articleMotion,
  children,
  onHome,
  onOverview,
  onSlide,
}: LessonScreenProps): ReactElement {
  const lesson = LESSONS[index];
  const total = LESSONS.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const mainRef = useRef<HTMLElement>(null);
  const asideRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 활성 행의 위치를 측정해 인디케이터를 옮긴다. 첫 측정 뒤부터 transition 을 켠다.
  useLayoutEffect(() => {
    const measure = (): void => {
      const item = itemRefs.current[index];
      const indicator = indicatorRef.current;
      const aside = asideRef.current;
      const track = trackRef.current;
      if (!item || !indicator || !aside || !track) return;
      indicator.style.setProperty("--indicator-top", `${item.offsetTop}px`);

      const absoluteTop = track.offsetTop + item.offsetTop;
      const absoluteBottom = absoluteTop + item.offsetHeight;
      if (aside.clientHeight > 0 && (absoluteTop < aside.scrollTop || absoluteBottom > aside.scrollTop + aside.clientHeight)) {
        aside.scrollTo({
          top: absoluteTop - aside.clientHeight / 2,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      }
    };
    measure();
    const frame = requestAnimationFrame(() => {
      if (indicatorRef.current) indicatorRef.current.dataset.ready = "true";
    });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [index]);

  const prompt = useMemo(() => buildLessonPrompt(lesson, index, total), [lesson, index, total]);
  const contextValue = useMemo(
    () => ({ section: lesson.section, number: index + 1, lead: lesson.lead }),
    [lesson, index],
  );

  // 사이드바에 그릴 행: 장 제목 + 레슨
  const rows = useMemo(
    () =>
      LESSONS.flatMap((item, i) => {
        const entries: Array<{ kind: "header"; label: string } | { kind: "item"; i: number }> = [];
        if (i === 0 || LESSONS[i - 1].section !== item.section) {
          entries.push({ kind: "header", label: item.section });
        }
        entries.push({ kind: "item", i });
        return entries;
      }),
    [],
  );

  const progressStyle = {
    "--w": `${((index + 1) / total) * 100}%`,
  } as CSSProperties;

  useEffect(() => {
    // 레슨이 바뀌면 항상 본문 맨 위에서 시작
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [index]);

  return (
    <div className="flex h-full flex-col">
      <header className="anim-down flex h-15 shrink-0 items-center justify-between gap-3 border-b border-border bg-card pr-4 pl-5">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onHome}
            aria-label="표지로"
            className="focus-ring press -ml-1.5 flex min-h-11 items-center gap-2.5 rounded-lg px-1.5"
          >
            <LogoMark size="sm" />
            <span className="hidden text-base font-bold tracking-tight text-foreground xs:inline">
              Web UI Cookbook
            </span>
          </button>
          <span aria-hidden className="hidden text-border xs:inline">
            /
          </span>
          <span className="hidden truncate text-sm text-muted-foreground xs:inline">{lesson.section}</span>
        </div>
        <button
          type="button"
          onClick={onOverview}
          className="focus-ring press inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-card px-3.5 text-sm font-medium text-secondary-foreground"
        >
          <Menu aria-hidden className="size-4" />
          목차
        </button>
      </header>
      <div
        role="progressbar"
        aria-label="레슨 위치"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        className="h-0.75 shrink-0 overflow-hidden bg-border"
      >
        <div className="progress-glide h-full w-(--w) bg-primary" style={progressStyle} />
      </div>

      <div className="flex min-h-0 flex-1">
        <aside
          ref={asideRef}
          aria-label="레슨 목차"
          className="anim-side relative hidden w-68 shrink-0 overflow-y-auto border-r border-border px-3 pt-4 pb-6 sidebar:block"
          style={{ "--anim-delay": "120ms" } as CSSProperties}
        >
          <div ref={trackRef} className="relative">
            <span
              ref={indicatorRef}
              aria-hidden
              className="indicator-glide absolute inset-x-0 top-(--indicator-top) h-9 rounded-lg bg-accent"
            />
            {rows.map((row) =>
              row.kind === "header" ? (
                <div
                  key={`h-${row.label}`}
                  className="flex h-8 items-end px-2 pb-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                >
                  {row.label}
                </div>
              ) : (
                <button
                  key={LESSONS[row.i].id}
                  ref={(el) => {
                    itemRefs.current[row.i] = el;
                  }}
                  type="button"
                  onClick={() => onSlide(row.i)}
                  aria-current={row.i === index ? "page" : undefined}
                  className={
                    row.i === index
                      ? "focus-ring relative z-1 flex h-9 w-full items-center gap-2.5 rounded-lg px-2 text-left text-sm font-semibold text-accent-foreground transition-colors duration-200"
                      : "focus-ring relative z-1 flex h-9 w-full items-center gap-2.5 rounded-lg px-2 text-left text-sm text-secondary-foreground transition-colors duration-200 hover:bg-secondary"
                  }
                >
                  <span
                    className={
                      row.i === index
                        ? "num inline-flex h-5.5 min-w-6.5 items-center justify-center rounded-md bg-card text-2xs font-semibold text-accent-foreground"
                        : "num inline-flex h-5.5 min-w-6.5 items-center justify-center rounded-md bg-secondary text-2xs font-semibold text-muted-foreground"
                    }
                  >
                    {padLessonNo(row.i + 1)}
                  </span>
                  <span className="flex-1 truncate">{LESSONS[row.i].title}</span>
                  {visited.has(row.i) && row.i !== index ? (
                    <Check role="img" aria-label="열어 본 레슨" className="size-3.5 text-success-ink" />
                  ) : null}
                </button>
              ),
            )}
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <main ref={mainRef} className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
            <article
              key={index}
              className={`mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 pt-7 pb-8 xs:px-8 xs:pt-10 xs:pb-14 ${ARTICLE_MOTION_CLASS[articleMotion]}`}
            >
              <LessonContext.Provider value={contextValue}>{children}</LessonContext.Provider>
              <PromptPanel prompt={prompt} />
            </article>
          </main>

          <nav
            aria-label="레슨 이동"
            className="anim-fade shrink-0 border-t border-border bg-card px-4 py-3 xs:px-6"
            style={{ "--anim-delay": "200ms" } as CSSProperties}
          >
            <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onSlide(index - 1)}
                disabled={isFirst}
                className="focus-ring press inline-flex min-h-13 min-w-0 items-center justify-start gap-2.5 rounded-xl border border-border bg-card px-3.5 text-left text-foreground disabled:cursor-default disabled:opacity-45 xs:min-w-45 xs:px-4"
              >
                <ChevronLeft aria-hidden className="size-4 shrink-0" />
                <span className="flex min-w-0 flex-col items-start">
                  <span className="text-sm font-semibold xs:text-2xs xs:font-normal xs:text-muted-foreground">
                    이전
                  </span>
                  <span className="hidden max-w-50 truncate text-sm font-semibold xs:block">
                    {isFirst ? "처음 레슨이에요" : LESSONS[index - 1].title}
                  </span>
                </span>
              </button>
              <span className="num text-sm whitespace-nowrap text-muted-foreground">
                <span className="font-bold text-foreground">{padLessonNo(index + 1)}</span> / {total}
              </span>
              <button
                type="button"
                onClick={() => onSlide(index + 1)}
                disabled={isLast}
                className="focus-ring press inline-flex min-h-13 min-w-0 items-center justify-end gap-2.5 rounded-xl border border-transparent bg-primary px-3.5 text-right text-foreground disabled:cursor-default disabled:opacity-45 xs:min-w-45 xs:px-4"
              >
                <span className="flex min-w-0 flex-col items-end">
                  <span className="text-sm font-semibold xs:text-2xs xs:font-normal">다음</span>
                  <span className="hidden max-w-50 truncate text-sm font-semibold xs:block">
                    {isLast ? "마지막 레슨이에요" : LESSONS[index + 1].title}
                  </span>
                </span>
                <ChevronRight aria-hidden className="size-4 shrink-0" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
