"use client";

import { MessageSquare } from "lucide-react";
import type { CSSProperties, ReactElement } from "react";
import { KoHeading } from "@/components/ui/KoHeading";
import { KoText } from "@/components/ui/KoText";
import { CopyButton } from "./copy-button";

type PromptPanelProps = {
  prompt: string;
};

export function PromptPanel({ prompt }: PromptPanelProps): ReactElement {
  return (
    <section
      aria-labelledby="prompt-title"
      className="anim-rise flex flex-col gap-3.5"
      style={{ "--anim-delay": "600ms" } as CSSProperties}
    >
      <div className="flex flex-col gap-1">
        <KoHeading
          as="h2"
          id="prompt-title"
          className="text-xl font-bold tracking-tight"
        >
          프롬프트
        </KoHeading>
        <KoText className="text-sm leading-relaxed text-muted-foreground">
          이 레슨 화면을 AI 코딩 도구로 구현할 때 그대로 붙여 넣을 수 있는 요청문입니다.
        </KoText>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-secondary">
        <div className="flex items-center justify-between gap-3 border-b border-border bg-card py-1.5 pr-1.5 pl-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-deep uppercase">
            <MessageSquare aria-hidden className="size-3.5" />
            Prompt
          </span>
          <CopyButton text={prompt} ariaLabel="프롬프트 복사" tone="light" />
        </div>
        <div className="scrollbar-clean max-h-80 overflow-y-auto px-4.5 py-4 text-sm leading-7 whitespace-pre-wrap text-secondary-foreground">
          {prompt}
        </div>
      </div>
    </section>
  );
}
