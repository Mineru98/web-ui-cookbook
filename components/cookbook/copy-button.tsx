"use client";

import { Check, Copy } from "lucide-react";
import type { ReactElement } from "react";
import { useCopy } from "./use-copy";

type CopyButtonProps = {
  text: string;
  ariaLabel: string;
  tone: "dark" | "light";
};

const TONE_CLASS = {
  dark: "bg-white/10 text-code-text hover:bg-white/20",
  light: "border border-border bg-card text-secondary-foreground hover:bg-secondary",
} as const;

export function CopyButton({ text, ariaLabel, tone }: CopyButtonProps): ReactElement {
  const { status, copy } = useCopy();
  const label =
    status === "copied" ? "복사됨" : status === "failed" ? "복사 실패 · 직접 선택하세요" : "복사";

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-label={ariaLabel}
      className={`focus-ring press inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg px-3 text-sm font-medium ${TONE_CLASS[tone]}`}
    >
      {status === "copied" ? (
        <Check aria-hidden className="anim-pop size-3.5 text-success" />
      ) : (
        <Copy aria-hidden className="size-3.5" />
      )}
      <span aria-live="polite">{label}</span>
    </button>
  );
}
