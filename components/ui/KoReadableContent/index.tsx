"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { Balancer } from "@/components/ui/Balancer";

const TEXT_TAGS = new Set(["p", "span"]);
const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4"]);
const SKIP_TAGS = new Set([
  "button",
  "a",
  "code",
  "pre",
  "kbd",
  "samp",
  "input",
  "textarea",
  "select",
  "option",
  "svg",
]);

interface KoReadableContentProps {
  children: ReactNode;
}

function collectText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(collectText).join(" ");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return collectText(node.props.children);
  }

  return "";
}

function hasElementChild(node: ReactNode): boolean {
  return Children.toArray(node).some(isValidElement);
}

function isReadableText(text: string): boolean {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length < 2) return false;
  if (/^[\d\s/.,:%()+-]+$/.test(normalized)) return false;

  return /[가-힣]/.test(normalized) || normalized.includes(" ");
}

function shouldBalanceTag(
  tagName: string,
  children: ReactNode,
  alreadyHandled: boolean,
): boolean {
  if (alreadyHandled) return false;

  const text = collectText(children);
  if (!isReadableText(text)) return false;

  if (HEADING_TAGS.has(tagName) || tagName === "p") return true;

  return TEXT_TAGS.has(tagName) || tagName === "div"
    ? !hasElementChild(children)
    : false;
}

// Children.map 은 자식이 하나여도 배열을 돌려준다. Radix 의 asChild(Slot) 는 자식이
// 정확히 하나의 요소이길 요구하므로, 요소 하나일 때는 배열로 감싸지 않고 그대로 넘긴다.
function enhanceChildren(
  children: ReactNode,
  insideSkippedTag: boolean,
): ReactNode {
  if (isValidElement(children)) return enhanceNode(children, insideSkippedTag);

  return Children.map(children, (child) =>
    enhanceNode(child, insideSkippedTag),
  );
}

function enhanceNode(node: ReactNode, insideSkippedTag = false): ReactNode {
  if (!isValidElement(node)) return node;

  const element = node as ReactElement<{
    children?: ReactNode;
    className?: string;
    lang?: string;
    "data-ko-wrap-watch"?: unknown;
  }>;
  const tagName = typeof element.type === "string" ? element.type : "";

  if (!tagName) {
    const enhancedChildren = enhanceChildren(
      element.props.children,
      insideSkippedTag,
    );

    return cloneElement(element, {
      ...element.props,
      children: enhancedChildren,
    });
  }

  const skipChildren = insideSkippedTag || SKIP_TAGS.has(tagName);

  if (!element.props.children || skipChildren) return element;

  const enhancedChildren = enhanceChildren(
    element.props.children,
    skipChildren,
  );

  if (
    tagName &&
    shouldBalanceTag(
      tagName,
      element.props.children,
      Boolean(element.props["data-ko-wrap-watch"]),
    )
  ) {
    const textClassName = [
      HEADING_TAGS.has(tagName) ? "ko-heading" : "ko-text",
      element.props.className,
    ]
      .filter(Boolean)
      .join(" ");

    return cloneElement(element, {
      ...element.props,
      lang: element.props.lang ?? "ko",
      className: textClassName,
      "data-ko-wrap-watch": true,
      children: <Balancer>{enhancedChildren}</Balancer>,
    });
  }

  return cloneElement(element, {
    ...element.props,
    children: enhancedChildren,
  });
}

export function KoReadableContent({ children }: KoReadableContentProps) {
  return <>{Children.map(children, (child) => enhanceNode(child))}</>;
}
