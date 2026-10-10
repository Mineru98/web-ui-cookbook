import type { ReactElement } from "react";

type LogoMarkProps = {
  size: "sm" | "md";
};

const BOX_CLASS = {
  sm: "size-6 rounded-md",
  md: "size-7 rounded-lg",
} as const;

export function LogoMark({ size }: LogoMarkProps): ReactElement {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center bg-primary text-primary-foreground ${BOX_CLASS[size]}`}
    >
      <svg
        className="size-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden
      >
        <rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" />
        <rect x="9" y="2.5" width="4.5" height="4.5" rx="2.25" />
        <rect x="2.5" y="9" width="11" height="4.5" rx="1" />
      </svg>
    </span>
  );
}
