// components/ui/prism/PrismCode.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-typescript";
// ??ã§Î•??∏Ïñ¥ import ?ùÎûµ

interface PrismCodeProps {
  code: string;
  language: string;
  plugins?: string[];
}

export function PrismCode({ code, language, plugins = [] }: PrismCodeProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) Prism.highlightElement(codeRef.current);
  }, [code, language]);

  /** Prism???£ÏùÑ ?çÏÑ±???úÎ≤Ñ?êÏÑú???£Ïñ¥ Ï§Ä??*/
  const preClass = `language-${language} ${plugins.join(" ")}`.trim();

  return (
    <React.Fragment>
      <div className="flex text-xs mb-2 text-gray-400">
        <span className="px-2 py-1 rounded bg-gray-700 text-white">tsx</span>
      </div>
      <pre className={preClass} tabIndex={0}>
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </React.Fragment>
  );
}
