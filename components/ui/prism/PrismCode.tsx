// components/ui/prism/PrismCode.tsx
"use client";

import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import { useMemo } from "react";
import { CopyButton } from "@/components/cookbook/copy-button";

type PrismCodeProps = {
  code: string;
  language: string;
  plugins?: string[];
  /** 헤더에 표시할 파일 이름 */
  fileName?: string;
};

/** JSX 태그까지 색이 입혀지도록 typescript 는 tsx 문법으로 하이라이트한다. */
function highlight(code: string, language: string): string {
  const grammar =
    Prism.languages[language === "typescript" ? "tsx" : language] ?? Prism.languages.typescript;
  return Prism.highlight(code, grammar, language);
}

export function PrismCode({
  code,
  language,
  plugins = [],
  fileName = "example.tsx",
}: PrismCodeProps) {
  const source = code.trim();
  const html = useMemo(() => highlight(source, language), [source, language]);
  const lineNumbers = useMemo(
    () => source.split("\n").map((_, index) => index + 1),
    [source],
  );

  /** Prism 플러그인 클래스를 붙이기 위한 클래스명 조합 */
  const preClass = `language-${language} ${plugins.join(" ")}`.trim();

  return (
    <div data-prism-code className="code-block min-w-0 overflow-hidden rounded-xl bg-code-bg text-left">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 py-1.5 pr-1.5 pl-4">
        <span className="truncate font-mono text-xs text-code-punct">{fileName}</span>
        <CopyButton text={source} ariaLabel="코드 복사" tone="dark" />
      </div>
      <div className="scrollbar-clean overflow-x-auto py-3.5">
        <div className="flex w-max min-w-full font-mono text-sm leading-7">
          <div
            aria-hidden
            className="w-11 shrink-0 pr-4 text-right text-code-comment select-none"
          >
            {lineNumbers.map((n) => (
              <div key={n}>{n}</div>
            ))}
          </div>
          <pre className={`${preClass} m-0 bg-transparent pr-5`} tabIndex={0}>
            <code
              className={`language-${language}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}
