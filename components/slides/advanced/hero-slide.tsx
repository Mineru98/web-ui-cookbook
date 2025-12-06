"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HeroSlide() {
  const [heroType, setHeroType] = useState<
    "basic" | "centered" | "split" | "video"
  >("basic");
  const [codeType, setCodeType] = useState<"react">("react");

  const renderHero = () => {
    switch (heroType) {
      case "centered":
        return (
          <div className="relative">
            <div className="h-64 bg-gradient-to-r from-[#49bcf3] to-[#134429] flex items-center justify-center">
              <div className="text-center text-white p-6 max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-2">
                  중앙 ?�렬 ?�어�??�션
                </h2>
                <p className="text-white/80 mb-4 text-sm">
                  중요???�용?�나 주목???�어???�는 ?�보�?중앙??배치??                  강조?�는 ?�어�??�션?�니?? 브랜??메시지??주요 마�???카피??                  ?�합?�니??
                </p>
                <button className="bg-white text-[#49bcf3] px-4 py-2 rounded-md font-medium text-sm">
                  ?�세???�아보기
                </button>
              </div>
            </div>
          </div>
        );

      case "split":
        return (
          <div className="relative">
            <div className="h-64 bg-white flex flex-col md:flex-row">
              <div className="flex-1 bg-[#49bcf3] flex items-center justify-center p-6">
                <div className="text-white max-w-xs">
                  <h2 className="text-xl font-bold mb-2">분할 ?�어�??�션</h2>
                  <p className="text-white/80 mb-4 text-sm">
                    ?�스?��? ?��?지�??��???배치?�여 ?�용�??�각???�소??                    균형??맞춘 ?�어�??�션?�니??
                  </p>
                  <button className="text-white border border-white px-4 py-2 rounded-md font-medium text-sm flex items-center">
                    ??보기
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-gray-200 flex items-center justify-center">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 mx-auto flex items-center justify-center">
                    <span className="text-3xl text-gray-500">?���?/span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    ?��?지 ?�는 비디???�역
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "video":
        return (
          <div className="relative">
            <div className="h-64 bg-gray-800 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">?��</span>
                </div>
              </div>

              <div className="relative z-20 text-white text-center max-w-lg mx-auto p-6">
                <h2 className="text-2xl font-bold mb-2">비디??배경 ?�어�?/h2>
                <p className="text-white/80 mb-4 text-sm">
                  ?�직이???�상??배경?�로 ?�용?�여 ?�용?�의 주목???�고
                  ??��?�인 ?�낌???�달?�니??
                </p>
                <button className="bg-[#49bcf3] text-white px-4 py-2 rounded-md font-medium text-sm">
                  ?�작?�기
                </button>
              </div>
            </div>
          </div>
        );

      default: // basic
        return (
          <div className="relative">
            <div className="h-64 bg-gray-200 flex items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#49bcf3]/90 to-transparent z-10"></div>

              <div className="absolute inset-0">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">?���?/span>
                </div>
              </div>

              <div className="relative z-20 text-white p-6 max-w-lg">
                <h2 className="text-2xl font-bold mb-2">기본 ?�어�??�션</h2>
                <p className="text-white/80 mb-4 text-sm">
                  ?�사?�트??첫인?�을 결정?�는 ?�어�??�션?� 방문?�의 주의�?                  ?�고 ?�심 메시지�??�과?�으�??�달?�니??
                </p>
                <button className="bg-white text-[#49bcf3] px-4 py-2 rounded-md font-medium text-sm">
                  ?�세??보기
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  const getReactCode = () => {
    switch (heroType) {
      case "basic":
        return `import React from 'react';

interface BasicHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  className?: string;
}

const BasicHero: React.FC<BasicHeroProps> = ({
  title,
  subtitle,
  ctaText = "?�작?�기",
  onCtaClick,
  backgroundImage = "/api/placeholder/800/400",
  className = ""
}) => {
  return (
    <div className={\`relative h-64 flex items-center \${className}\`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: \`url(\${backgroundImage})\` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      
      {/* Content */}
      <div className="relative z-10 text-white p-6 max-w-lg">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-white/90 mb-4">{subtitle}</p>
        )}
        <button
          onClick={onCtaClick}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

// ?�용 ?�시
const BasicHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 ?�릭??);
  };

  return (
    <BasicHero
      title="?�로???�작???�한 ?�벽???�루??
      subtitle="?�리?� ?�께 ?�공???�정???�작?�세?? ?�신?�인 기술�??�문?�인 ?�비?�로 ?�러분을 지?�합?�다."
      ctaText="지�??�작?�기"
      onCtaClick={handleCtaClick}
      backgroundImage="/hero-background.jpg"
    />
  );
};

export default BasicHeroExample;`;

      case "centered":
        return `import React from 'react';

interface CenteredHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

const CenteredHero: React.FC<CenteredHeroProps> = ({
  title,
  subtitle,
  ctaText = "?�세???�아보기",
  onCtaClick,
  gradientFrom = "#49bcf3",
  gradientTo = "#134429",
  className = ""
}) => {
  return (
    <div 
      className={\`h-64 flex items-center justify-center \${className}\`}
      style={{
        background: \`linear-gradient(to right, \${gradientFrom}, \${gradientTo})\`
      }}
    >
      <div className="text-center text-white p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-white/90 mb-6 leading-relaxed">{subtitle}</p>
        )}
        <button
          onClick={onCtaClick}
          className="bg-white text-purple-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

// ?�용 ?�시
const CenteredHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 ?�릭??);
  };

  return (
    <CenteredHero
      title="중앙 ?�렬 ?�어�??�션"
      subtitle="중요???�용?�나 주목???�어???�는 ?�보�?중앙??배치??강조?�는 ?�어�??�션?�니?? 브랜??메시지??주요 마�???카피???�합?�니??"
      ctaText="?�세???�아보기"
      onCtaClick={handleCtaClick}
      gradientFrom="#49bcf3"
      gradientTo="#134429"
    />
  );
};

export default CenteredHeroExample;`;

      case "split":
        return `import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SplitHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

const SplitHero: React.FC<SplitHeroProps> = ({
  title,
  subtitle,
  ctaText = "?�작?�기",
  onCtaClick,
  imageUrl = "/api/placeholder/400/300",
  imageAlt = "Hero Image",
  className = ""
}) => {
  return (
    <div className={\`h-64 flex items-center \${className}\`}>
      <div className="flex w-full h-full">
        {/* Left Content */}
        <div className="flex-1 bg-white p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{subtitle}</p>
          )}
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-fit"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        {/* Right Image */}
        <div className="flex-1 relative">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// ?�용 ?�시
const SplitHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 ?�릭??);
  };

  return (
    <SplitHero
      title="분할 ?�이?�웃?�로 ?�보 ?�달"
      subtitle="?�스?��? ?��?지�??��???배치?�여 ?�보�??�과?�으�??�달?�는 ?�어�??�션?�니?? ?�품 ?�개???�비???�명???�합?�니??"
      ctaText="??보기"
      onCtaClick={handleCtaClick}
      imageUrl="/hero-split-image.jpg"
      imageAlt="분할 ?�어�??��?지"
    />
  );
};

export default SplitHeroExample;`;

      case "video":
        return `import React, { useRef, useEffect } from 'react';

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  ctaText = "지�??�작?�기",
  onCtaClick,
  videoUrl = "/hero-video.mp4",
  posterUrl = "/hero-poster.jpg",
  className = ""
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay ?�패 ???�무것도 ?��? ?�음
        console.log("비디???�동?�생??차단?�었?�니??");
      });
    }
  }, []);

  return (
    <div className={\`relative h-64 flex items-center justify-center overflow-hidden \${className}\`}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-white/90 mb-6 leading-relaxed">{subtitle}</p>
        )}
        <button
          onClick={onCtaClick}
          className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

// ?�용 ?�시
const VideoHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 ?�릭??);
  };

  return (
    <VideoHero
      title="?�영?�으�??�하??강력??메시지"
      subtitle="배경 ?�영?�을 ?�용?�여 ?�욱 ?�동�??�고 몰입�??�는 ?�용??경험???�공?�는 ?�어�??�션?�니??"
      ctaText="지�??�작?�기"
      onCtaClick={handleCtaClick}
      videoUrl="/background-video.mp4"
      posterUrl="/video-poster.jpg"
    />
  );
};

export default VideoHeroExample;`;

      default:
        return getReactCode(); // Fallback to basic
    }
  };


  return (
    <SlideLayout title="Hero (?�어�?">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?�명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">?�모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-3">?�의</h2>
              <p>
                ?�어�?Hero)???�사?�트???�의 �??�면???�치?�는 ?�??배너
                ?�역?�로, ?�용?�의 주목???�고 ?�심 메시지�??�달?�는 ??��??                ?�니?? ?�반?�으�?강렬???��?지, ?�영?? ?�는 그래???�소?�
                ?�께 ?�드?�인, 간결???�명, 그리�??�동 ?�도 버튼(CTA)?�로
                구성?�니??
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "basic"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("basic")}
                >
                  기본??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "centered"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("centered")}
                >
                  중앙 ?�렬??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "split"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("split")}
                >
                  분할??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "video"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("video")}
                >
                  비디?�형
                </button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                {/* ?�어�??�더�?*/}
                {renderHero()}

                {/* ?�명 */}
                <div className="p-4 bg-white">
                  <h3 className="font-medium mb-2">
                    {heroType === "basic"
                      ? "기본 ?�어�?
                      : heroType === "centered"
                      ? "중앙 ?�렬 ?�어�?
                      : heroType === "split"
                      ? "분할 ?�어�?
                      : "비디??배경 ?�어�?}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {heroType === "basic"
                      ? "배경 ?��?지?� ?�쪽 ?�렬???�스?��? ?�는 ?�통?�인 ?�어�??�션?�니?? ?�부분의 ?�사?�트?�서 범용?�으�??�용?�니??"
                      : heroType === "centered"
                      ? "모든 콘텐츠�? 중앙???�렬?�어 집중?��? ?�이???�자?�입?�다. ?�플?�고 강력??메시지 ?�달???�과?�입?�다."
                      : heroType === "split"
                      ? "?�면??반으�??�누???�쪽?� ?�스?? ?�른 쪽�? ?��?지�?배치???�자?�입?�다. 콘텐츠�? ?�각 ?�소??균형??중시?�니??"
                      : "배경???�영?�을 ?�용?�여 ??��?�이�?몰입�??�는 �??�면???�공?�니?? 브랜???�토리텔링에 ?�과?�입?�다."}
                  </p>

                  <div className="bg-gray-50 p-3 rounded-md border text-sm">
                    <strong>?�용 ??고려?�항:</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>메시지??간결?�고 명확?�게 ?�성</li>
                      <li>모바???�면??최적?�된 반응???�자???�용</li>
                      <li>로딩 ?�간 최적??(?�히 비디??배경 ?�용 ??</li>
                      <li>?�심 ?�용???�각???�소??가?��?지 ?�도�?주의</li>
                      <li>명확?�고 ?�에 ?�는 ?�동 ?�도 버튼(CTA) 배치</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">?�어�??�션 ?�형</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>기본??(Basic Hero)</strong>
                      <p className="text-sm text-gray-600">
                        배경 ?��?지?� ?�스???�버?�이�??�용??기본 ?�태
                      </p>
                    </li>
                    <li>
                      <strong>중앙 ?�렬??(Centered Hero)</strong>
                      <p className="text-sm text-gray-600">
                        모든 ?�소가 중앙???�렬???�순?�고 집중?�인 ?�자??                      </p>
                    </li>
                    <li>
                      <strong>분할??(Split Hero)</strong>
                      <p className="text-sm text-gray-600">
                        ?�면???�분?�여 ?�스?��? ?��?지�?균등?�게 배치
                      </p>
                    </li>
                    <li>
                      <strong>비디?�형 (Video Hero)</strong>
                      <p className="text-sm text-gray-600">
                        ?�직이???�상??배경?�로 ?�용?�여 몰입�??�공
                      </p>
                    </li>
                    <li>
                      <strong>?�?�크린형 (Fullscreen Hero)</strong>
                      <p className="text-sm text-gray-600">
                        ?�면 ?�체�?채우???�???�어�??�션
                      </p>
                    </li>
                    <li>
                      <strong>?�니메이?�형 (Animated Hero)</strong>
                      <p className="text-sm text-gray-600">
                        ?�적 ?�소?� ?�니메이?�을 ?�용???�터?�티�??�자??                      </p>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">주요 구성 ?�소</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>?�드?�인 (Headline)</strong>
                      <p className="text-sm text-gray-600">
                        주요 메시지�??��? 강력?�고 간결???�목
                      </p>
                    </li>
                    <li>
                      <strong>?�브?�드?�인 (Subheadline)</strong>
                      <p className="text-sm text-gray-600">
                        ?�드?�인??보완?�는 부???�명
                      </p>
                    </li>
                    <li>
                      <strong>CTA 버튼 (Call-to-Action)</strong>
                      <p className="text-sm text-gray-600">
                        ?�용?�의 ?�음 ?�동???�도?�는 버튼
                      </p>
                    </li>
                    <li>
                      <strong>배경 ?��?지/비디??(Background)</strong>
                      <p className="text-sm text-gray-600">
                        주의�??�고 메시지�?강화?�는 ?�각???�소
                      </p>
                    </li>
                    <li>
                      <strong>?�버?�이 (Overlay)</strong>
                      <p className="text-sm text-gray-600">
                        ?�스?�의 가?�성???�이�??�한 반투�??�이??                      </p>
                    </li>
                    <li>
                      <strong>?�비게이???�소 (Navigation)</strong>
                      <p className="text-sm text-gray-600">
                        ?�로???�어�??�션 ?�에 ?�함?�는 ?�비게이??컴포?�트
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                ?�과?�인 ?�어�??�션 ?�자????              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>명확??목적 ?�의</strong>
                  <p className="text-sm">
                    ?�어�??�션???�달?�고???�는 ?�심 메시지?� 목표�?명확??                    ?�정
                  </p>
                </li>
                <li>
                  <strong>?�각??계층 구조 ?�립</strong>
                  <p className="text-sm">
                    중요???�소�??�각?�으�?강조?�여 ?�용?�의 ?�선 ?�도
                  </p>
                </li>
                <li>
                  <strong>간결?�고 강력??복사 ?�성</strong>
                  <p className="text-sm">
                    불필?�한 ?�어 ?�이 ?�심 메시지�?명확?�게 ?�달
                  </p>
                </li>
                <li>
                  <strong>고품�??��?지 ?�용</strong>
                  <p className="text-sm">
                    브랜???��?지??맞는 ?�문?�이�?관?�성 ?��? ?�각???�소 ?�택
                  </p>
                </li>
                <li>
                  <strong>모바??최적??/strong>
                  <p className="text-sm">
                    ?�양???�면 ?�기?�서 ?�과?�으�??�동?�는 반응???�자???�용
                  </p>
                </li>
                <li>
                  <strong>로딩 ?�간 최적??/strong>
                  <p className="text-sm">
                    ?��?지 최적??�??�진??로딩 기법?�로 ?�능 ?�상
                  </p>
                </li>
                <li>
                  <strong>A/B ?�스???�시</strong>
                  <p className="text-sm">
                    ?�양???�자??변?�을 ?�스?�하??최적???�과 ?�출
                  </p>
                </li>
              </ul>
            </div>

            {/* ?�어�??�션 추�? ?�용 */}
            <div className="bg-gray-800 p-4 border rounded-md mb-6">
              <PrismCode
                language="typescript"
                code={`// ${
                  heroType === "basic"
                    ? "기본 ?�어�??�션"
                    : heroType === "centered"
                    ? "중앙 ?�렬 ?�어�??�션"
                    : heroType === "split"
                    ? "분할 ?�어�??�션"
                    : "비디??배경 ?�어�??�션"
                } 구현

import React from 'react';
${heroType === "split" ? "import { ArrowRight } from 'lucide-react';" : ""}

const ${
                  heroType === "basic"
                    ? "BasicHero"
                    : heroType === "centered"
                    ? "CenteredHero"
                    : heroType === "split"
                    ? "SplitHero"
                    : "VideoHero"
                }: React.FC = () => {
  const handle${
    heroType === "basic"
      ? "LearnMore"
      : heroType === "centered"
      ? "LearnMore"
      : heroType === "split"
      ? "ViewMore"
      : "GetStarted"
  } = () => {
    console.log('${
      heroType === "basic"
        ? "?�세??보기"
        : heroType === "centered"
        ? "?�세???�아보기"
        : heroType === "split"
        ? "??보기"
        : "?�작?�기"
    } 버튼 ?�릭??);
  };

  return (
    ${
      heroType === "basic"
        ? `<div className="h-96 bg-gray-200 flex items-center relative overflow-hidden">
      {/* 배경 ?��?지 ?�역 */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-4xl text-gray-500" role="img" aria-label="배경 ?��?지">?���?/span>
        </div>
      </div>
      
      {/* 그라?�언???�버?�이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#49bcf3]/90 to-transparent z-10"></div>
      
      {/* 콘텐�?*/}
      <div className="relative z-20 text-white p-6 max-w-lg">
        <h1 className="text-2xl font-bold mb-2">기본 ?�어�??�션</h1>
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          ?�사?�트??첫인?�을 결정?�는 ?�어�??�션?� 방문?�의 주의�??�고 ?�심 메시지�??�과?�으�??�달?�니??
        </p>
        <button 
          onClick={handleLearnMore}
          className="bg-white text-[#49bcf3] px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#49bcf3]"
        >
          ?�세??보기
        </button>
      </div>
    </div>`
        : heroType === "centered"
        ? `<div className="h-96 bg-gradient-to-r from-[#49bcf3] to-[#134429] flex items-center justify-center">
      <div className="text-center text-white p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-2">중앙 ?�렬 ?�어�??�션</h1>
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          중요???�용?�나 주목???�어???�는 ?�보�?중앙??배치??강조?�는 ?�어�??�션?�니?? 
          브랜??메시지??주요 마�???카피???�합?�니??
        </p>
        <button 
          onClick={handleLearnMore}
          className="bg-white text-[#49bcf3] px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#49bcf3]"
        >
          ?�세???�아보기
        </button>
      </div>
    </div>`
        : heroType === "split"
        ? `<div className="h-96 bg-white flex flex-col md:flex-row">
      {/* ?�쪽 ?�스???�역 */}
      <div className="flex-1 bg-[#49bcf3] flex items-center justify-center p-8">
        <div className="text-white max-w-sm">
          <h1 className="text-xl font-bold mb-2">분할 ?�어�??�션</h1>
          <p className="text-white/80 mb-4 text-sm leading-relaxed">
            ?�스?��? ?��?지�??��???배치?�여 ?�용�??�각???�소??균형??맞춘 ?�어�??�션?�니??
          </p>
          <button 
            onClick={handleViewMore}
            className="text-white border border-white px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#49bcf3]"
          >
            ??보기
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* ?�른�??��?지 ?�역 */}
      <div className="flex-1 bg-gray-200 flex items-center justify-center">
        <div className="p-6 text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 mx-auto flex items-center justify-center">
            <span className="text-3xl text-gray-500" role="img" aria-label="?��?지">?���?/span>
          </div>
          <p className="text-gray-500 text-sm">?��?지 ?�는 비디???�역</p>
        </div>
      </div>
    </div>`
        : `<div className="h-96 bg-gray-800 flex items-center justify-center overflow-hidden relative">
      {/* 비디??배경 ?�역 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <span className="text-4xl text-gray-500" role="img" aria-label="비디??>?��</span>
        </div>
      </div>
      
      {/* ?�버?�이 그라?�언??*/}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      
      {/* 콘텐�?*/}
      <div className="relative z-20 text-white text-center max-w-lg mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">비디??배경 ?�어�?/h1>
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          ?�직이???�상??배경?�로 ?�용?�여 ?�용?�의 주목???�고 ??��?�인 ?�낌???�달?�니??
        </p>
        <button 
          onClick={handleGetStarted}
          className="bg-[#49bcf3] text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-[#49bcf3]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#49bcf3] focus:ring-offset-2"
        >
          ?�작?�기
        </button>
      </div>
    </div>`
    }
  );
};

export default ${
                  heroType === "basic"
                    ? "BasicHero"
                    : heroType === "centered"
                    ? "CenteredHero"
                    : heroType === "split"
                    ? "SplitHero"
                    : "VideoHero"
                };`}
              />
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={getReactCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  ?�어�??�형 ?�택
                </label>
                <select
                  value={heroType}
                  onChange={(e) => setHeroType(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="basic">기본??(Basic Hero)</option>
                  <option value="centered">중앙 ?�렬??(Centered Hero)</option>
                  <option value="split">분할??(Split Hero)</option>
                  <option value="video">비디?�형 (Video Hero)</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* ?�어�??�모 ?�역 */}
                <div className="w-full border rounded-lg overflow-hidden">
                  {heroType === "basic" && (
                    <div className="h-64 bg-gray-200 flex items-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#49bcf3]/90 to-transparent z-10"></div>
                      <div className="absolute inset-0">
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <span className="text-4xl text-gray-500">?���?/span>
                        </div>
                      </div>
                      <div className="relative z-20 text-white p-6 max-w-lg">
                        <h2 className="text-xl font-bold mb-2">
                          기본 ?�어�??�션
                        </h2>
                        <p className="text-white/80 mb-4 text-sm">
                          ?�사?�트??첫인?�을 결정?�는 ?�어�??�션?� 방문?�의
                          주의�??�고 ?�심 메시지�??�과?�으�??�달?�니??
                        </p>
                        <button className="bg-white text-[#49bcf3] px-4 py-2 rounded-md font-medium text-sm">
                          ?�세??보기
                        </button>
                      </div>
                    </div>
                  )}

                  {heroType === "centered" && (
                    <div className="h-64 bg-gradient-to-r from-[#49bcf3] to-[#134429] flex items-center justify-center">
                      <div className="text-center text-white p-6 max-w-lg mx-auto">
                        <h2 className="text-xl font-bold mb-2">
                          중앙 ?�렬 ?�어�??�션
                        </h2>
                        <p className="text-white/80 mb-4 text-sm">
                          중요???�용?�나 주목???�어???�는 ?�보�?중앙??                          배치??강조?�는 ?�어�??�션?�니?? 브랜??메시지??                          주요 마�???카피???�합?�니??
                        </p>
                        <button className="bg-white text-[#49bcf3] px-4 py-2 rounded-md font-medium text-sm">
                          ?�세???�아보기
                        </button>
                      </div>
                    </div>
                  )}

                  {heroType === "split" && (
                    <div className="h-64 bg-white flex flex-col md:flex-row">
                      <div className="flex-1 bg-[#49bcf3] flex items-center justify-center p-6">
                        <div className="text-white max-w-xs">
                          <h2 className="text-xl font-bold mb-2">
                            분할 ?�어�??�션
                          </h2>
                          <p className="text-white/80 mb-4 text-sm">
                            ?�스?��? ?��?지�??��???배치?�여 ?�용�??�각??                            ?�소??균형??맞춘 ?�어�??�션?�니??
                          </p>
                          <button className="text-white border border-white px-4 py-2 rounded-md font-medium text-sm flex items-center">
                            ??보기
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-200 flex items-center justify-center">
                        <div className="p-6 text-center">
                          <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 mx-auto flex items-center justify-center">
                            <span className="text-3xl text-gray-500">?���?/span>
                          </div>
                          <p className="text-gray-500 text-sm">
                            ?��?지 ?�는 비디???�역
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {heroType === "video" && (
                    <div className="h-64 bg-gray-800 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/50 z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                          <span className="text-4xl text-gray-500">?��</span>
                        </div>
                      </div>
                      <div className="relative z-20 text-white text-center max-w-lg mx-auto p-6">
                        <h2 className="text-xl font-bold mb-2">
                          비디??배경 ?�어�?                        </h2>
                        <p className="text-white/80 mb-4 text-sm">
                          ?�직이???�상??배경?�로 ?�용?�여 ?�용?�의 주목???�고
                          ??��?�인 ?�낌???�달?�니??
                        </p>
                        <button className="bg-[#49bcf3] text-white px-4 py-2 rounded-md font-medium text-sm">
                          ?�작?�기
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full text-sm mt-4 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium mb-2">?�징:</h3>
                  {heroType === "basic" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>배경 ?��?지?� ?�쪽 ?�렬???�스??구성</li>
                      <li>그라?�언???�버?�이�??�스??가?�성 ?�보</li>
                      <li>?�반?�인 ?�사?�트?�서 ?�리 ?�용?�는 ?�태</li>
                    </ul>
                  )}
                  {heroType === "centered" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>그라?�언??배경??중앙 ?�렬??콘텐�?/li>
                      <li>?�선??중앙?�로 집중?�키???�과</li>
                      <li>브랜??메시지??주요 ?�보 강조???�과??/li>
                    </ul>
                  )}
                  {heroType === "split" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>?�스?��? ?��?지 ?�역??균등?�게 분할</li>
                      <li>?�스?��? ?�각 ?�소 간의 균형 ?��?</li>
                      <li>?�양???�보�?구조?�으�??�현 가??/li>
                    </ul>
                  )}
                  {heroType === "video" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>배경???�영?�을 ?�용????��?�인 ?�현</li>
                      <li>?�두???�버?�이�??�스??가?�성 ?�보</li>
                      <li>몰입�??�는 첫인???�공???�과??/li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
