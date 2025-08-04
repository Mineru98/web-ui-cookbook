import type { ReactNode } from "react";

interface SlideLayoutProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SlideLayout({
  title,
  children,
  className = "",
}: SlideLayoutProps) {
  return (
    <div className={`h-full w-full flex flex-col p-8 ${className}`}>
      <h1 className="text-3xl font-bold mb-6 text-[#6700e6]">{title}</h1>
      <div className="flex-1">{children}</div>
    </div>
  );
}
