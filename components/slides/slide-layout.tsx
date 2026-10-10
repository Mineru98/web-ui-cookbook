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
        className="pointer-events-none absolute -top-32 -right-1/10 h-105 w-105 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-1/10 h-95 w-95 rounded-full bg-brand-sky/10 blur-3xl"
      />

      <div className="relative flex h-full w-full flex-col px-5 pt-6 pb-4 sm:px-8 sm:pt-8 md:px-10 lg:px-12">
        <header className="mx-auto w-full max-w-6xl shrink-0">
          {eyebrow ? (
            <div className="reveal-fade">
              <KoText
                as="div"
                balance={false}
                className="text-2xs font-semibold uppercase tracking-eyebrow text-primary"
              >
                {eyebrow}
              </KoText>
            </div>
          ) : null}
          <div className="reveal-up mt-1">
            <KoHeading
              as="h1"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              {title}
            </KoHeading>
          </div>
          <div
            aria-hidden
            className="reveal-fade mt-4 h-px w-full bg-linear-to-r from-border via-border to-transparent"
          />
        </header>

        <div className="mx-auto mt-5 w-full max-w-6xl flex-1 overflow-y-auto pr-1 scrollbar-clean sm:mt-6">
          <KoReadableContent>{children}</KoReadableContent>
        </div>
      </div>
    </div>
  );
}
