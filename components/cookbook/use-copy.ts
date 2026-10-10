"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type CopyStatus = "idle" | "copied" | "failed";

const RESET_MS = 1800;

/** 보안 컨텍스트가 아니거나 권한이 없을 때 쓰는 숨은 textarea + execCommand 폴백 */
function copyWithTextarea(text: string): boolean {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.setAttribute("aria-hidden", "true");
    textarea.className = "fixed -top-96 opacity-0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

async function copyText(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // 폴백으로 진행
    }
  }
  return copyWithTextarea(text);
}

export function useCopy(): { status: CopyStatus; copy: (text: string) => void } {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback((text: string): void => {
    void copyText(text).then((ok) => {
      setStatus(ok ? "copied" : "failed");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus("idle"), RESET_MS);
    });
  }, []);

  return { status, copy };
}
