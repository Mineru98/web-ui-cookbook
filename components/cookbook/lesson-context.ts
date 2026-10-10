"use client";

import { createContext, useContext } from "react";

export type LessonContextValue = {
  section: string;
  /** 1부터 시작하는 레슨 번호 */
  number: number;
  lead: string;
};

export const LessonContext = createContext<LessonContextValue | null>(null);

export function useLessonContext(): LessonContextValue | null {
  return useContext(LessonContext);
}
