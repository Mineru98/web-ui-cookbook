"use client";

import { Balancer } from "@/components/ui/Balancer";
import type { HTMLAttributes, ReactNode } from "react";

type KoTextTag = "p" | "div" | "span" | "li";

interface KoTextProps extends HTMLAttributes<HTMLElement> {
  as?: KoTextTag;
  balance?: boolean;
  children: ReactNode;
  ratio?: number;
}

export function KoText({
  as: Tag = "p",
  balance = true,
  children,
  className,
  lang = "ko",
  ratio = 0.88,
  ...props
}: KoTextProps) {
  const textClassName = ["ko-text", className].filter(Boolean).join(" ");

  return (
    <Tag {...props} lang={lang} className={textClassName} data-ko-wrap-watch>
      {balance ? <Balancer ratio={ratio}>{children}</Balancer> : children}
    </Tag>
  );
}
