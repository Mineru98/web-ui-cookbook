"use client";

import type { CSSProperties, ReactNode } from "react";
import { KoHeading } from "@/components/ui/KoHeading";
import { KoReadableContent } from "@/components/ui/KoReadableContent";
import { KoText } from "@/components/ui/KoText";
import { useLessonContext } from "@/components/cookbook/lesson-context";

type SlideLayoutProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

/**
 * 레슨 본문 머리말(eyebrow · 제목 · 구분선 · 정의 문장) + 본문.
 * 스크롤은 레슨 화면의 main 이 맡으므로 여기서는 높이·스크롤을 만들지 않는다.
 */
export default function SlideLayout({
  title,
  eyebrow,
  children,
  className = "",
}: SlideLayoutProps) {
  const lesson = useLessonContext();
  const eyebrowText = lesson
    ? `${lesson.section} · Lesson ${String(lesson.number).padStart(2, "0")}`
    : eyebrow;

  return (
    <div className={`flex w-full flex-col gap-10 ${className}`}>
      <header className="flex flex-col gap-1.5">
        {eyebrowText ? (
          <div className="anim-rise" style={{ "--anim-delay": "140ms" } as CSSProperties}>
            <KoText
              as="div"
              balance={false}
              className="text-2xs font-semibold uppercase tracking-eyebrow text-brand-deep"
            >
              {eyebrowText}
            </KoText>
          </div>
        ) : null}
        <div className="anim-rise" style={{ "--anim-delay": "200ms" } as CSSProperties}>
          <KoHeading
            as="h1"
            className="text-title-sm font-bold tracking-tight text-foreground xs:text-title"
          >
            {title}
          </KoHeading>
        </div>
        <div
          aria-hidden
          className="anim-rise my-3.5 h-px bg-border"
          style={{ "--anim-delay": "240ms" } as CSSProperties}
        />
        {lesson ? (
          <div className="anim-rise" style={{ "--anim-delay": "280ms" } as CSSProperties}>
            <KoText className="text-lg leading-relaxed text-muted-foreground">
              {lesson.lead}
            </KoText>
          </div>
        ) : null}
      </header>

      <div className="anim-rise min-w-0" style={{ "--anim-delay": "340ms" } as CSSProperties}>
        <KoReadableContent>{children}</KoReadableContent>
      </div>
    </div>
  );
}
