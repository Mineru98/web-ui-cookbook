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
  const [codeType, setCodeType] = useState<"react" | "flutter">("react");

  const renderHero = () => {
    switch (heroType) {
      case "centered":
        return (
          <div className="relative">
            <div className="h-64 bg-gradient-to-r from-[#6700e6] to-[#134429] flex items-center justify-center">
              <div className="text-center text-white p-6 max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-2">
                  중앙 정렬 히어로 섹션
                </h2>
                <p className="text-white/80 mb-4 text-sm">
                  중요한 내용이나 주목을 끌어야 하는 정보를 중앙에 배치해
                  강조하는 히어로 섹션입니다. 브랜드 메시지나 주요 마케팅 카피에
                  적합합니다.
                </p>
                <button className="bg-white text-[#6700e6] px-4 py-2 rounded-md font-medium text-sm">
                  자세히 알아보기
                </button>
              </div>
            </div>
          </div>
        );

      case "split":
        return (
          <div className="relative">
            <div className="h-64 bg-white flex flex-col md:flex-row">
              <div className="flex-1 bg-[#6700e6] flex items-center justify-center p-6">
                <div className="text-white max-w-xs">
                  <h2 className="text-xl font-bold mb-2">분할 히어로 섹션</h2>
                  <p className="text-white/80 mb-4 text-sm">
                    텍스트와 이미지를 나란히 배치하여 내용과 시각적 요소의
                    균형을 맞춘 히어로 섹션입니다.
                  </p>
                  <button className="text-white border border-white px-4 py-2 rounded-md font-medium text-sm flex items-center">
                    더 보기
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-gray-200 flex items-center justify-center">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 mx-auto flex items-center justify-center">
                    <span className="text-3xl text-gray-500">🖼️</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    이미지 또는 비디오 영역
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
                  <span className="text-4xl text-gray-500">📹</span>
                </div>
              </div>

              <div className="relative z-20 text-white text-center max-w-lg mx-auto p-6">
                <h2 className="text-2xl font-bold mb-2">비디오 배경 히어로</h2>
                <p className="text-white/80 mb-4 text-sm">
                  움직이는 영상을 배경으로 활용하여 사용자의 주목을 끌고
                  역동적인 느낌을 전달합니다.
                </p>
                <button className="bg-[#6700e6] text-white px-4 py-2 rounded-md font-medium text-sm">
                  시작하기
                </button>
              </div>
            </div>
          </div>
        );

      default: // basic
        return (
          <div className="relative">
            <div className="h-64 bg-gray-200 flex items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6700e6]/90 to-transparent z-10"></div>

              <div className="absolute inset-0">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">🏞️</span>
                </div>
              </div>

              <div className="relative z-20 text-white p-6 max-w-lg">
                <h2 className="text-2xl font-bold mb-2">기본 히어로 섹션</h2>
                <p className="text-white/80 mb-4 text-sm">
                  웹사이트의 첫인상을 결정하는 히어로 섹션은 방문자의 주의를
                  끌고 핵심 메시지를 효과적으로 전달합니다.
                </p>
                <button className="bg-white text-[#6700e6] px-4 py-2 rounded-md font-medium text-sm">
                  자세히 보기
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
  ctaText = "시작하기",
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

// 사용 예시
const BasicHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 클릭됨");
  };

  return (
    <BasicHero
      title="새로운 시작을 위한 완벽한 솔루션"
      subtitle="우리와 함께 성공의 여정을 시작하세요. 혁신적인 기술과 전문적인 서비스로 여러분을 지원합니다."
      ctaText="지금 시작하기"
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
  ctaText = "자세히 알아보기",
  onCtaClick,
  gradientFrom = "#6700e6",
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

// 사용 예시
const CenteredHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 클릭됨");
  };

  return (
    <CenteredHero
      title="중앙 정렬 히어로 섹션"
      subtitle="중요한 내용이나 주목을 끌어야 하는 정보를 중앙에 배치해 강조하는 히어로 섹션입니다. 브랜드 메시지나 주요 마케팅 카피에 적합합니다."
      ctaText="자세히 알아보기"
      onCtaClick={handleCtaClick}
      gradientFrom="#6700e6"
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
  ctaText = "시작하기",
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

// 사용 예시
const SplitHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 클릭됨");
  };

  return (
    <SplitHero
      title="분할 레이아웃으로 정보 전달"
      subtitle="텍스트와 이미지를 나란히 배치하여 정보를 효과적으로 전달하는 히어로 섹션입니다. 제품 소개나 서비스 설명에 적합합니다."
      ctaText="더 보기"
      onCtaClick={handleCtaClick}
      imageUrl="/hero-split-image.jpg"
      imageAlt="분할 히어로 이미지"
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
  ctaText = "지금 시작하기",
  onCtaClick,
  videoUrl = "/hero-video.mp4",
  posterUrl = "/hero-poster.jpg",
  className = ""
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay 실패 시 아무것도 하지 않음
        console.log("비디오 자동재생이 차단되었습니다.");
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

// 사용 예시
const VideoHeroExample: React.FC = () => {
  const handleCtaClick = () => {
    console.log("CTA 버튼 클릭됨");
  };

  return (
    <VideoHero
      title="동영상으로 전하는 강력한 메시지"
      subtitle="배경 동영상을 활용하여 더욱 생동감 있고 몰입감 있는 사용자 경험을 제공하는 히어로 섹션입니다."
      ctaText="지금 시작하기"
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

  const getFlutterCode = () => {
    return `// ${
      heroType === "basic"
        ? "기본 히어로"
        : heroType === "centered"
        ? "중앙 정렬 히어로"
        : heroType === "split"
        ? "분할 히어로"
        : "비디오 히어로"
    } 구현 예시

import 'package:flutter/material.dart';

class ${
      heroType === "basic"
        ? "BasicHero"
        : heroType === "centered"
        ? "CenteredHero"
        : heroType === "split"
        ? "SplitHero"
        : "VideoHero"
    } extends StatelessWidget {
  final String title;
  final String? subtitle;
  final String ctaText;
  final VoidCallback? onCtaPressed;
  ${heroType === "basic" ? "final String? backgroundImage;" : ""}
  ${heroType === "video" ? "final String? videoUrl;" : ""}

  const ${
    heroType === "basic"
      ? "BasicHero"
      : heroType === "centered"
      ? "CenteredHero"
      : heroType === "split"
      ? "SplitHero"
      : "VideoHero"
  }({
    Key? key,
    required this.title,
    this.subtitle,
    this.ctaText = '${
      heroType === "basic"
        ? "시작하기"
        : heroType === "centered"
        ? "자세히 알아보기"
        : heroType === "split"
        ? "더 보기"
        : "지금 시작하기"
    }',
    this.onCtaPressed,
    ${heroType === "basic" ? "this.backgroundImage," : ""}
    ${heroType === "video" ? "this.videoUrl," : ""}
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 256,
      child: ${
        heroType === "basic"
          ? `Stack(
        children: [
          // Background Image
          if (backgroundImage != null)
            Positioned.fill(
              child: Image.network(
                backgroundImage!,
                fit: BoxFit.cover,
              ),
            ),
          
          // Gradient Overlay
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.centerLeft,
                  end: Alignment.centerRight,
                  colors: [
                    Colors.black.withOpacity(0.6),
                    Colors.black.withOpacity(0.2),
                  ],
                ),
              ),
            ),
          ),
          
          // Content
          Positioned(
            left: 24,
            top: 0,
            bottom: 0,
            child: Container(
              constraints: BoxConstraints(maxWidth: 400),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  if (subtitle != null) ...[
                    SizedBox(height: 8),
                    Text(
                      subtitle!,
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.white.withOpacity(0.9),
                      ),
                    ),
                  ],
                  SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: onCtaPressed,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color(0xFF6700E6),
                      foregroundColor: Colors.white,
                      padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    child: Text(
                      ctaText,
                      style: TextStyle(fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      )`
          : heroType === "centered"
          ? `Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.centerLeft,
            end: Alignment.centerRight,
            colors: [Color(0xFF6700E6), Color(0xFF134429)],
          ),
        ),
        child: Center(
          child: Container(
            constraints: BoxConstraints(maxWidth: 400),
            padding: EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  title,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                if (subtitle != null) ...[
                  SizedBox(height: 16),
                  Text(
                    subtitle!,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.white.withOpacity(0.9),
                      height: 1.5,
                    ),
                  ),
                ],
                SizedBox(height: 24),
                ElevatedButton(
                  onPressed: onCtaPressed,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: Color(0xFF6700E6),
                    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: Text(
                    ctaText,
                    style: TextStyle(fontWeight: FontWeight.w600),
                  ),
                ),
              ],
            ),
          ),
        ),
      )`
          : heroType === "split"
          ? `Row(
        children: [
          // Left Content
          Expanded(
            child: Container(
              color: Colors.white,
              padding: EdgeInsets.all(24),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.grey[900],
                    ),
                  ),
                  if (subtitle != null) ...[
                    SizedBox(height: 12),
                    Text(
                      subtitle!,
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.grey[600],
                        height: 1.5,
                      ),
                    ),
                  ],
                  SizedBox(height: 16),
                  ElevatedButton.icon(
                    onPressed: onCtaPressed,
                    icon: Icon(Icons.arrow_forward, size: 16),
                    label: Text(ctaText),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color(0xFF6700E6),
                      foregroundColor: Colors.white,
                      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          
          // Right Image
          Expanded(
            child: Container(
              color: Colors.grey[300],
              child: Center(
                child: Icon(
                  Icons.image,
                  size: 64,
                  color: Colors.grey[400],
                ),
              ),
            ),
          ),
        ],
      )`
          : `Stack(
        children: [
          // Video Placeholder
          Positioned.fill(
            child: Container(
              color: Colors.grey[900],
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.play_circle_outline,
                      size: 64,
                      color: Colors.white.withOpacity(0.7),
                    ),
                    SizedBox(height: 8),
                    Text(
                      'Video Background',
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.7),
                        fontSize: 16,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          
          // Dark Overlay
          Positioned.fill(
            child: Container(
              color: Colors.black.withOpacity(0.4),
            ),
          ),
          
          // Content
          Center(
            child: Container(
              constraints: BoxConstraints(maxWidth: 400),
              padding: EdgeInsets.all(24),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    title,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  if (subtitle != null) ...[
                    SizedBox(height: 16),
                    Text(
                      subtitle!,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.white.withOpacity(0.9),
                        height: 1.5,
                      ),
                    ),
                  ],
                  SizedBox(height: 24),
                  ElevatedButton(
                    onPressed: onCtaPressed,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: Colors.grey[900],
                      padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    child: Text(
                      ctaText,
                      style: TextStyle(fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      )`
      },
    );
  }
}

// 사용 예시
class HeroExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('${
          heroType === "basic"
            ? "기본 히어로"
            : heroType === "centered"
            ? "중앙 정렬 히어로"
            : heroType === "split"
            ? "분할 히어로"
            : "비디오 히어로"
        }'),
        backgroundColor: Color(0xFF6700E6),
        foregroundColor: Colors.white,
      ),
      body: ${
        heroType === "basic"
          ? "BasicHero"
          : heroType === "centered"
          ? "CenteredHero"
          : heroType === "split"
          ? "SplitHero"
          : "VideoHero"
      }(
        title: '${
          heroType === "basic"
            ? "새로운 시작을 위한 완벽한 솔루션"
            : heroType === "centered"
            ? "중앙 정렬 히어로 섹션"
            : heroType === "split"
            ? "분할 레이아웃으로 정보 전달"
            : "동영상으로 전하는 강력한 메시지"
        }',
        subtitle: '${
          heroType === "basic"
            ? "우리와 함께 성공의 여정을 시작하세요."
            : heroType === "centered"
            ? "중요한 내용이나 주목을 끌어야 하는 정보를 중앙에 배치해 강조하는 히어로 섹션입니다."
            : heroType === "split"
            ? "텍스트와 이미지를 나란히 배치하여 정보를 효과적으로 전달하는 히어로 섹션입니다."
            : "배경 동영상을 활용하여 더욱 생동감 있고 몰입감 있는 사용자 경험을 제공합니다."
        }',
        onCtaPressed: () {
          print('CTA 버튼 클릭됨');
        },
        ${heroType === "basic" ? "backgroundImage: 'https://example.com/hero-bg.jpg'," : ""}
        ${heroType === "video" ? "videoUrl: 'https://example.com/hero-video.mp4'," : ""}
      ),
    );
  }
}`;
  };

  return (
    <SlideLayout title="Hero (히어로)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-3">정의</h2>
              <p>
                히어로(Hero)는 웹사이트나 앱의 첫 화면에 위치하는 대형 배너
                영역으로, 사용자의 주목을 끌고 핵심 메시지를 전달하는 역할을
                합니다. 일반적으로 강렬한 이미지, 동영상, 또는 그래픽 요소와
                함께 헤드라인, 간결한 설명, 그리고 행동 유도 버튼(CTA)으로
                구성됩니다.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "basic"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("basic")}
                >
                  기본형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "centered"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("centered")}
                >
                  중앙 정렬형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "split"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("split")}
                >
                  분할형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    heroType === "video"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setHeroType("video")}
                >
                  비디오형
                </button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                {/* 히어로 렌더링 */}
                {renderHero()}

                {/* 설명 */}
                <div className="p-4 bg-white">
                  <h3 className="font-medium mb-2">
                    {heroType === "basic"
                      ? "기본 히어로"
                      : heroType === "centered"
                      ? "중앙 정렬 히어로"
                      : heroType === "split"
                      ? "분할 히어로"
                      : "비디오 배경 히어로"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {heroType === "basic"
                      ? "배경 이미지와 왼쪽 정렬된 텍스트가 있는 전통적인 히어로 섹션입니다. 대부분의 웹사이트에서 범용적으로 사용됩니다."
                      : heroType === "centered"
                      ? "모든 콘텐츠가 중앙에 정렬되어 집중도를 높이는 디자인입니다. 심플하고 강력한 메시지 전달에 효과적입니다."
                      : heroType === "split"
                      ? "화면을 반으로 나누어 한쪽은 텍스트, 다른 쪽은 이미지를 배치한 디자인입니다. 콘텐츠와 시각 요소의 균형을 중시합니다."
                      : "배경에 동영상을 사용하여 역동적이고 몰입감 있는 첫 화면을 제공합니다. 브랜드 스토리텔링에 효과적입니다."}
                  </p>

                  <div className="bg-gray-50 p-3 rounded-md border text-sm">
                    <strong>사용 시 고려사항:</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>메시지는 간결하고 명확하게 작성</li>
                      <li>모바일 화면에 최적화된 반응형 디자인 적용</li>
                      <li>로딩 시간 최적화 (특히 비디오 배경 사용 시)</li>
                      <li>핵심 내용이 시각적 요소에 가려지지 않도록 주의</li>
                      <li>명확하고 눈에 띄는 행동 유도 버튼(CTA) 배치</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">히어로 섹션 유형</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>기본형 (Basic Hero)</strong>
                      <p className="text-sm text-gray-600">
                        배경 이미지와 텍스트 오버레이를 사용한 기본 형태
                      </p>
                    </li>
                    <li>
                      <strong>중앙 정렬형 (Centered Hero)</strong>
                      <p className="text-sm text-gray-600">
                        모든 요소가 중앙에 정렬된 단순하고 집중적인 디자인
                      </p>
                    </li>
                    <li>
                      <strong>분할형 (Split Hero)</strong>
                      <p className="text-sm text-gray-600">
                        화면을 양분하여 텍스트와 이미지를 균등하게 배치
                      </p>
                    </li>
                    <li>
                      <strong>비디오형 (Video Hero)</strong>
                      <p className="text-sm text-gray-600">
                        움직이는 영상을 배경으로 사용하여 몰입감 제공
                      </p>
                    </li>
                    <li>
                      <strong>풀스크린형 (Fullscreen Hero)</strong>
                      <p className="text-sm text-gray-600">
                        화면 전체를 채우는 대형 히어로 섹션
                      </p>
                    </li>
                    <li>
                      <strong>애니메이션형 (Animated Hero)</strong>
                      <p className="text-sm text-gray-600">
                        동적 요소와 애니메이션을 활용한 인터랙티브 디자인
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">주요 구성 요소</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>헤드라인 (Headline)</strong>
                      <p className="text-sm text-gray-600">
                        주요 메시지를 담은 강력하고 간결한 제목
                      </p>
                    </li>
                    <li>
                      <strong>서브헤드라인 (Subheadline)</strong>
                      <p className="text-sm text-gray-600">
                        헤드라인을 보완하는 부연 설명
                      </p>
                    </li>
                    <li>
                      <strong>CTA 버튼 (Call-to-Action)</strong>
                      <p className="text-sm text-gray-600">
                        사용자의 다음 행동을 유도하는 버튼
                      </p>
                    </li>
                    <li>
                      <strong>배경 이미지/비디오 (Background)</strong>
                      <p className="text-sm text-gray-600">
                        주의를 끌고 메시지를 강화하는 시각적 요소
                      </p>
                    </li>
                    <li>
                      <strong>오버레이 (Overlay)</strong>
                      <p className="text-sm text-gray-600">
                        텍스트의 가독성을 높이기 위한 반투명 레이어
                      </p>
                    </li>
                    <li>
                      <strong>내비게이션 요소 (Navigation)</strong>
                      <p className="text-sm text-gray-600">
                        때로는 히어로 섹션 내에 포함되는 내비게이션 컴포넌트
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#6700e6]/20 bg-[#6700e6]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#6700e6]">
                효과적인 히어로 섹션 디자인 팁
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>명확한 목적 정의</strong>
                  <p className="text-sm">
                    히어로 섹션이 전달하고자 하는 핵심 메시지와 목표를 명확히
                    설정
                  </p>
                </li>
                <li>
                  <strong>시각적 계층 구조 확립</strong>
                  <p className="text-sm">
                    중요한 요소를 시각적으로 강조하여 사용자의 시선 유도
                  </p>
                </li>
                <li>
                  <strong>간결하고 강력한 복사 작성</strong>
                  <p className="text-sm">
                    불필요한 단어 없이 핵심 메시지를 명확하게 전달
                  </p>
                </li>
                <li>
                  <strong>고품질 이미지 사용</strong>
                  <p className="text-sm">
                    브랜드 이미지에 맞는 전문적이고 관련성 높은 시각적 요소 선택
                  </p>
                </li>
                <li>
                  <strong>모바일 최적화</strong>
                  <p className="text-sm">
                    다양한 화면 크기에서 효과적으로 작동하는 반응형 디자인 적용
                  </p>
                </li>
                <li>
                  <strong>로딩 시간 최적화</strong>
                  <p className="text-sm">
                    이미지 최적화 및 점진적 로딩 기법으로 성능 향상
                  </p>
                </li>
                <li>
                  <strong>A/B 테스트 실시</strong>
                  <p className="text-sm">
                    다양한 디자인 변형을 테스트하여 최적의 성과 도출
                  </p>
                </li>
              </ul>
            </div>

            {/* 히어로 섹션 추가 내용 */}
            <div className="bg-gray-800 p-4 border rounded-md mb-6">
              <PrismCode
                language="typescript"
                code={`// ${
                  heroType === "basic"
                    ? "기본 히어로 섹션"
                    : heroType === "centered"
                    ? "중앙 정렬 히어로 섹션"
                    : heroType === "split"
                    ? "분할 히어로 섹션"
                    : "비디오 배경 히어로 섹션"
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
        ? "자세히 보기"
        : heroType === "centered"
        ? "자세히 알아보기"
        : heroType === "split"
        ? "더 보기"
        : "시작하기"
    } 버튼 클릭됨');
  };

  return (
    ${
      heroType === "basic"
        ? `<div className="h-96 bg-gray-200 flex items-center relative overflow-hidden">
      {/* 배경 이미지 영역 */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-4xl text-gray-500" role="img" aria-label="배경 이미지">🏞️</span>
        </div>
      </div>
      
      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6700e6]/90 to-transparent z-10"></div>
      
      {/* 콘텐츠 */}
      <div className="relative z-20 text-white p-6 max-w-lg">
        <h1 className="text-2xl font-bold mb-2">기본 히어로 섹션</h1>
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          웹사이트의 첫인상을 결정하는 히어로 섹션은 방문자의 주의를 끌고 핵심 메시지를 효과적으로 전달합니다.
        </p>
        <button 
          onClick={handleLearnMore}
          className="bg-white text-[#6700e6] px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6700e6]"
        >
          자세히 보기
        </button>
      </div>
    </div>`
        : heroType === "centered"
        ? `<div className="h-96 bg-gradient-to-r from-[#6700e6] to-[#134429] flex items-center justify-center">
      <div className="text-center text-white p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-2">중앙 정렬 히어로 섹션</h1>
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          중요한 내용이나 주목을 끌어야 하는 정보를 중앙에 배치해 강조하는 히어로 섹션입니다. 
          브랜드 메시지나 주요 마케팅 카피에 적합합니다.
        </p>
        <button 
          onClick={handleLearnMore}
          className="bg-white text-[#6700e6] px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6700e6]"
        >
          자세히 알아보기
        </button>
      </div>
    </div>`
        : heroType === "split"
        ? `<div className="h-96 bg-white flex flex-col md:flex-row">
      {/* 왼쪽 텍스트 영역 */}
      <div className="flex-1 bg-[#6700e6] flex items-center justify-center p-8">
        <div className="text-white max-w-sm">
          <h1 className="text-xl font-bold mb-2">분할 히어로 섹션</h1>
          <p className="text-white/80 mb-4 text-sm leading-relaxed">
            텍스트와 이미지를 나란히 배치하여 내용과 시각적 요소의 균형을 맞춘 히어로 섹션입니다.
          </p>
          <button 
            onClick={handleViewMore}
            className="text-white border border-white px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6700e6]"
          >
            더 보기
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* 오른쪽 이미지 영역 */}
      <div className="flex-1 bg-gray-200 flex items-center justify-center">
        <div className="p-6 text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 mx-auto flex items-center justify-center">
            <span className="text-3xl text-gray-500" role="img" aria-label="이미지">🖼️</span>
          </div>
          <p className="text-gray-500 text-sm">이미지 또는 비디오 영역</p>
        </div>
      </div>
    </div>`
        : `<div className="h-96 bg-gray-800 flex items-center justify-center overflow-hidden relative">
      {/* 비디오 배경 영역 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <span className="text-4xl text-gray-500" role="img" aria-label="비디오">📹</span>
        </div>
      </div>
      
      {/* 오버레이 그라디언트 */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      
      {/* 콘텐츠 */}
      <div className="relative z-20 text-white text-center max-w-lg mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">비디오 배경 히어로</h1>
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          움직이는 영상을 배경으로 활용하여 사용자의 주목을 끌고 역동적인 느낌을 전달합니다.
        </p>
        <button 
          onClick={handleGetStarted}
          className="bg-[#6700e6] text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-[#6700e6]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6700e6] focus:ring-offset-2"
        >
          시작하기
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
            <div className="flex justify-center mb-4">
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded text-sm ${
                    codeType === "react"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setCodeType("react")}
                >
                  React + TypeScript
                </button>
                <button
                  className={`px-4 py-2 rounded text-sm ${
                    codeType === "flutter"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setCodeType("flutter")}
                >
                  Flutter + Dart
                </button>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language={codeType === "react" ? "typescript" : "dart"}
                code={codeType === "react" ? getReactCode() : getFlutterCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  히어로 유형 선택
                </label>
                <select
                  value={heroType}
                  onChange={(e) => setHeroType(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="basic">기본형 (Basic Hero)</option>
                  <option value="centered">중앙 정렬형 (Centered Hero)</option>
                  <option value="split">분할형 (Split Hero)</option>
                  <option value="video">비디오형 (Video Hero)</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* 히어로 데모 영역 */}
                <div className="w-full border rounded-lg overflow-hidden">
                  {heroType === "basic" && (
                    <div className="h-64 bg-gray-200 flex items-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6700e6]/90 to-transparent z-10"></div>
                      <div className="absolute inset-0">
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <span className="text-4xl text-gray-500">🏞️</span>
                        </div>
                      </div>
                      <div className="relative z-20 text-white p-6 max-w-lg">
                        <h2 className="text-xl font-bold mb-2">
                          기본 히어로 섹션
                        </h2>
                        <p className="text-white/80 mb-4 text-sm">
                          웹사이트의 첫인상을 결정하는 히어로 섹션은 방문자의
                          주의를 끌고 핵심 메시지를 효과적으로 전달합니다.
                        </p>
                        <button className="bg-white text-[#6700e6] px-4 py-2 rounded-md font-medium text-sm">
                          자세히 보기
                        </button>
                      </div>
                    </div>
                  )}

                  {heroType === "centered" && (
                    <div className="h-64 bg-gradient-to-r from-[#6700e6] to-[#134429] flex items-center justify-center">
                      <div className="text-center text-white p-6 max-w-lg mx-auto">
                        <h2 className="text-xl font-bold mb-2">
                          중앙 정렬 히어로 섹션
                        </h2>
                        <p className="text-white/80 mb-4 text-sm">
                          중요한 내용이나 주목을 끌어야 하는 정보를 중앙에
                          배치해 강조하는 히어로 섹션입니다. 브랜드 메시지나
                          주요 마케팅 카피에 적합합니다.
                        </p>
                        <button className="bg-white text-[#6700e6] px-4 py-2 rounded-md font-medium text-sm">
                          자세히 알아보기
                        </button>
                      </div>
                    </div>
                  )}

                  {heroType === "split" && (
                    <div className="h-64 bg-white flex flex-col md:flex-row">
                      <div className="flex-1 bg-[#6700e6] flex items-center justify-center p-6">
                        <div className="text-white max-w-xs">
                          <h2 className="text-xl font-bold mb-2">
                            분할 히어로 섹션
                          </h2>
                          <p className="text-white/80 mb-4 text-sm">
                            텍스트와 이미지를 나란히 배치하여 내용과 시각적
                            요소의 균형을 맞춘 히어로 섹션입니다.
                          </p>
                          <button className="text-white border border-white px-4 py-2 rounded-md font-medium text-sm flex items-center">
                            더 보기
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-200 flex items-center justify-center">
                        <div className="p-6 text-center">
                          <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 mx-auto flex items-center justify-center">
                            <span className="text-3xl text-gray-500">🖼️</span>
                          </div>
                          <p className="text-gray-500 text-sm">
                            이미지 또는 비디오 영역
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
                          <span className="text-4xl text-gray-500">📹</span>
                        </div>
                      </div>
                      <div className="relative z-20 text-white text-center max-w-lg mx-auto p-6">
                        <h2 className="text-xl font-bold mb-2">
                          비디오 배경 히어로
                        </h2>
                        <p className="text-white/80 mb-4 text-sm">
                          움직이는 영상을 배경으로 활용하여 사용자의 주목을 끌고
                          역동적인 느낌을 전달합니다.
                        </p>
                        <button className="bg-[#6700e6] text-white px-4 py-2 rounded-md font-medium text-sm">
                          시작하기
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full text-sm mt-4 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium mb-2">특징:</h3>
                  {heroType === "basic" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>배경 이미지와 왼쪽 정렬된 텍스트 구성</li>
                      <li>그라디언트 오버레이로 텍스트 가독성 확보</li>
                      <li>일반적인 웹사이트에서 널리 사용되는 형태</li>
                    </ul>
                  )}
                  {heroType === "centered" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>그라디언트 배경에 중앙 정렬된 콘텐츠</li>
                      <li>시선을 중앙으로 집중시키는 효과</li>
                      <li>브랜드 메시지나 주요 정보 강조에 효과적</li>
                    </ul>
                  )}
                  {heroType === "split" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>텍스트와 이미지 영역을 균등하게 분할</li>
                      <li>텍스트와 시각 요소 간의 균형 유지</li>
                      <li>다양한 정보를 구조적으로 표현 가능</li>
                    </ul>
                  )}
                  {heroType === "video" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>배경에 동영상을 사용한 역동적인 표현</li>
                      <li>어두운 오버레이로 텍스트 가독성 확보</li>
                      <li>몰입감 있는 첫인상 제공에 효과적</li>
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
