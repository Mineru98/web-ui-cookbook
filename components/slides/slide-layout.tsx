import type { ReactNode } from "react";
import { KoHeading } from "@/components/ui/KoHeading";
import { KoReadableContent } from "@/components/ui/KoReadableContent";
import { KoText } from "@/components/ui/KoText";

interface SlideLayoutProps {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export default function SlideLayout({
  title,
  eyebrow,
  children,
  className = "",
}: SlideLayoutProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-background ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[380px] w-[380px] rounded-full bg-sky-400/10 blur-3xl"
      />

      <div className="relative flex h-full w-full flex-col px-5 pt-6 pb-4 sm:px-8 sm:pt-8 md:px-10 lg:px-12">
        <header className="mx-auto w-full max-w-6xl flex-shrink-0">
          {eyebrow ? (
            <KoText
              as="div"
              balance={false}
              className="reveal-fade text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              {eyebrow}
            </KoText>
          ) : null}
          <KoHeading
            as="h1"
            className="reveal-up mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            {title}
          </KoHeading>
          <div
            aria-hidden
            className="reveal-fade mt-4 h-px w-full bg-gradient-to-r from-border via-border to-transparent"
          />
        </header>

        <div className="mx-auto mt-5 w-full max-w-6xl flex-1 overflow-y-auto pr-1 scrollbar-clean sm:mt-6">
          <KoReadableContent>{children}</KoReadableContent>
        </div>
      </div>
    </div>
  );
}
