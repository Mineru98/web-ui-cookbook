import { Check, ArrowUpRight } from "lucide-react";
import { KoHeading } from "@/components/ui/KoHeading";
import { KoText } from "@/components/ui/KoText";

const TAKEAWAYS = [
  {
    title: "일관된 언어 사용",
    body: "팀 전체가 동일한 UI 어휘를 공유할수록 소통과 협업이 매끄러워집니다.",
  },
  {
    title: "사용자 경험 중심 설계",
    body: "적절한 컴포넌트 선택은 직관적이고 사용하기 쉬운 인터페이스로 이어집니다.",
  },
  {
    title: "접근성 고려",
    body: "다양한 입력 방식과 사용자 환경을 지원해 누구나 닿을 수 있는 UI를 만듭니다.",
  },
  {
    title: "재사용 가능한 컴포넌트 설계",
    body: "잘 설계된 컴포넌트 시스템은 개발 효율과 디자인 일관성을 함께 끌어올립니다.",
  },
];

const NEXT_STEPS = [
  {
    label: "01",
    title: "디자인 시스템 구축",
    body: "조직 전반에서 함께 쓰는 통일된 컴포넌트 라이브러리를 만들어 보세요.",
  },
  {
    label: "02",
    title: "사용성 테스트 진행",
    body: "실제 사용자와 함께 컴포넌트와 상호작용을 검증하는 루프를 도입합니다.",
  },
  {
    label: "03",
    title: "최신 UI 트렌드 학습",
    body: "지속적인 학습을 통해 디자인·구현 역량을 함께 끌어올리는 흐름을 유지합니다.",
  },
];

export default function ConclusionSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-mesh-brand">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <div className="relative z-10 mx-auto h-full w-full max-w-5xl overflow-y-auto px-6 py-10 sm:px-10 sm:py-14 scrollbar-clean">
        <KoText
          as="div"
          balance={false}
          className="reveal-fade inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md"
        >
          Wrap Up · 마무리
        </KoText>

        <KoHeading
          as="h1"
          className="reveal-up mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          잘 만든 UI는
          <br />
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            대화에서 시작합니다
          </span>
        </KoHeading>
        <KoText
          className="reveal-up mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          style={{ animationDelay: "120ms" }}
        >
          UI 컴포넌트와 상호작용 어휘를 함께 정리하는 일은, 결국 더 좋은 제품을
          만들기 위한 가장 빠른 길입니다.
        </KoText>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {TAKEAWAYS.map((item, idx) => (
            <div
              key={item.title}
              className="reveal-up rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.12]"
              style={{ animationDelay: `${200 + idx * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-white">
                  <Check className="h-4 w-4" aria-hidden />
                </div>
                <KoText
                  as="span"
                  className="text-base font-semibold text-white"
                >
                  {item.title}
                </KoText>
              </div>
              <KoText className="mt-2.5 text-sm leading-relaxed text-white/80">
                {item.body}
              </KoText>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <KoHeading
              as="h2"
              className="text-xl font-semibold tracking-tight text-white sm:text-2xl"
            >
              다음 단계
            </KoHeading>
            <ArrowUpRight
              className="h-5 w-5 text-white/60"
              aria-hidden
            />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {NEXT_STEPS.map((step) => (
              <div
                key={step.label}
                className="rounded-xl border border-white/15 bg-white/[0.08] p-4 transition-colors hover:bg-white/[0.14]"
              >
                <span className="num text-xs font-semibold tracking-widest text-white/60">
                  {step.label}
                </span>
                <KoHeading
                  as="h3"
                  className="mt-2 text-base font-semibold text-white"
                >
                  {step.title}
                </KoHeading>
                <KoText className="mt-1.5 text-sm leading-relaxed text-white/75">
                  {step.body}
                </KoText>
              </div>
            ))}
          </div>
        </div>

        <KoText className="mt-10 text-center text-base font-light tracking-wide text-white/85 sm:text-lg">
          감사합니다 — Web UI Cookbook
        </KoText>
      </div>
    </div>
  );
}
