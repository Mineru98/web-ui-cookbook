"use client";

import { type ReactElement, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { KoHeading } from "@/components/ui/KoHeading";
import { KoText } from "@/components/ui/KoText";

gsap.registerPlugin(useGSAP);

interface TitleSlideProps {
  onStart?: () => void;
}

export default function TitleSlide({ onStart }: TitleSlideProps): ReactElement {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set("[data-title-reveal]", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-title-reveal='fade']", {
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.12,
        })
        .from(
          "[data-title-reveal='up']",
          {
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.12,
            y: 18,
          },
          0.12,
        );
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className="relative h-full w-full overflow-hidden bg-mesh-brand"
    >
      {/* Decorative grain & vignette */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 py-12 sm:px-10">
        <KoText
          as="div"
          balance={false}
          data-title-reveal="fade"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-md sm:text-sm"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          <span>Web UI Cookbook · 2026</span>
        </KoText>

        <KoHeading
          as="h1"
          data-title-reveal="up"
          className="text-center text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          UI 컴포넌트
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-white via-sky-50 to-white/70 bg-clip-text text-transparent">
            교육 자료
          </span>
        </KoHeading>

        <KoText
          data-title-reveal="up"
          className="mt-6 max-w-2xl text-center text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
        >
          모바일·웹 애플리케이션 개발에 필요한 UI 컴포넌트와 속성, 상호작용을
          한 권으로 정리한 종합 가이드입니다.
        </KoText>

        <div
          data-title-reveal="up"
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-md">
            <KoText
              as="span"
              balance={false}
              className="num text-base font-semibold"
            >
              37
            </KoText>
            <KoText as="span" className="text-white/75">
              개 슬라이드
            </KoText>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-md">
            <KoText
              as="span"
              balance={false}
              className="num text-base font-semibold"
            >
              5
            </KoText>
            <KoText as="span" className="text-white/75">
              개 카테고리
            </KoText>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-md sm:flex">
            <KoText as="span" className="text-white/75">
              설명 · 코드 · 데모
            </KoText>
          </div>
        </div>

        <button
          type="button"
          onClick={onStart}
          disabled={!onStart}
          data-title-reveal="fade"
          className="press focus-ring group mt-12 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_30px_-10px_rgba(15,23,42,0.45)] backdrop-blur-md transition-all hover:bg-white/25 disabled:cursor-default disabled:opacity-70 sm:text-base"
          aria-label="다음 슬라이드로 이동"
        >
          <span>시작하기</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </button>
        <KoText
          as="p"
          balance={false}
          data-title-reveal="fade"
          className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/60"
        >
          ← → 키 또는 하단 버튼으로 이동
        </KoText>
      </div>
    </div>
  );
}
