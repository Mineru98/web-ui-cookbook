"use client";

import { Balancer } from "@/components/ui/Balancer";
import type { HTMLAttributes, ReactNode } from "react";

type KoHeadingTag = "h1" | "h2" | "h3" | "h4";

interface KoHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: KoHeadingTag;
  balance?: boolean;
  children: ReactNode;
  ratio?: number;
}

export function KoHeading({
  as: Tag = "h2",
  balance = true,
  children,
  className,
  lang = "ko",
  ratio = 1,
  ...props
}: KoHeadingProps) {
  const headingClassName = ["ko-heading", className].filter(Boolean).join(" ");

  return (
    <Tag {...props} lang={lang} className={headingClassName} data-ko-wrap-watch>
      {balance ? <Balancer ratio={ratio}>{children}</Balancer> : children}
    </Tag>
  );
}
