"use client";

import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import SlideLayout from "../slide-layout";

export default function SplashPageSlide() {
  const [splashType, setSplashType] = useState<
    "basic" | "animated" | "branded" | "progress"
  >("basic");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // React/TypeScript로 구현된 스플래시 화면 코드
  const getReactCode = () => {
    switch (splashType) {
      case "basic":
        return `import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface BasicSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const BasicSplashScreen: React.FC<BasicSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
          APP
        </div>
        <h1 className="font-medium text-gray-800 mb-4">앱 이름</h1>
        <Loader2 className="animate-spin h-5 w-5 text-gray-500 mx-auto" />
      </div>
    </div>
  );
};

export default BasicSplashScreen;`;

      case "animated":
        return `import React, { useEffect } from 'react';

interface AnimatedSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const AnimatedSplashScreen: React.FC<AnimatedSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-gradient-to-br from-purple-600 to-green-900 flex flex-col items-center justify-center text-white">
      <div className="animate-bounce mb-6">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
          LOGO
        </div>
      </div>
      <div className="text-center animate-fade-in">
        <h1 className="font-medium text-lg mb-2">애니메이션 스플래시</h1>
        <p className="text-white/70 text-sm">로딩 중...</p>
      </div>
    </div>
  );
};

export default AnimatedSplashScreen;`;

      case "progress":
        return `import React, { useState, useEffect } from 'react';

interface ProgressSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const ProgressSplashScreen: React.FC<ProgressSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onLoadingComplete) {
            setTimeout(onLoadingComplete, 500);
          }
          return 100;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
        UI
      </div>
      <div className="text-center">
        <p className="font-medium text-purple-600 mb-2">{Math.round(progress)}% 완료</p>
        <div className="w-56 h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div 
            className="bg-purple-600 h-full transition-all duration-100 ease-out"
            style={{ width: \`\${progress}%\` }}
          />
        </div>
        <p className="text-gray-500 text-sm">리소스 로딩 중...</p>
      </div>
    </div>
  );
};

export default ProgressSplashScreen;`;

      case "branded":
        return `import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface BrandedSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const BrandedSplashScreen: React.FC<BrandedSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-purple-600 flex flex-col items-center justify-center text-white">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-2xl mb-4">
        UI
      </div>
      <h1 className="text-xl font-bold uppercase tracking-widest mb-2">브랜드명</h1>
      <p className="text-white/70 text-sm mb-6">브랜드 슬로건이 들어가는 명</p>
      <Loader2 className="animate-spin h-6 w-6" />
    </div>
  );
};

export default BrandedSplashScreen;`;

      default:
        return getReactCode();
    }
  };

  // 스플래시 화면의 로딩 상태를 보여주기 위한 효과
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        if (progress < 100) {
          setProgress((prev) => Math.min(prev + 10, 100));
        } else {
          setIsLoading(false);
          setProgress(0);
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isLoading, progress]);

  const handleStartLoading = () => {
    setIsLoading(true);
    setProgress(0);
  };

  const renderSplash = () => {
    if (!isLoading) {
      return (
        <div className="bg-white p-4 text-center">
          <button
            className="px-4 py-2 bg-[#49bcf3] text-white rounded-md text-sm"
            onClick={handleStartLoading}
          >
            스플래시 화면 보기
          </button>
        </div>
      );
    }

    switch (splashType) {
      case "animated":
        return (
          <div className="h-72 bg-gradient-to-br from-[#49bcf3] to-[#134429] flex flex-col items-center justify-center">
            <div className="animate-[bounce_1.5s_infinite]">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-xl p-5">
                LOGO
              </div>
            </div>
            <div className="mt-6 text-white font-medium animate-[fadeIn_2s_ease-in]">
              애니메이션 스플래시
            </div>
            <div className="mt-2 text-white/70 text-sm animate-[fadeIn_2s_ease-in]">
              로딩 중...
            </div>
          </div>
        );

      case "branded":
        return (
          <div className="h-72 bg-[#49bcf3] flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-2xl p-5 mb-4">
                UI
              </div>
              <div className="text-xl font-bold uppercase tracking-widest">
                브랜드명
              </div>
              <div className="mt-2 text-white/70 text-sm">
                브랜드 슬로건이 들어가는 명
              </div>
              <div className="mt-6">
                <Loader2 className="animate-spin h-6 w-6" />
              </div>
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="h-72 bg-[#f4f4f4] flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-[#49bcf3] rounded-full flex items-center justify-center text-white font-bold text-xl p-5">
              UI
            </div>
            <div className="mt-6 font-medium text-[#49bcf3]">
              {progress}% 완료
            </div>
            <div className="w-56 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#49bcf3] h-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-gray-500 text-sm">리소??로딩 �?..</div>
          </div>
        );

      default: // basic
        return (
          <div className="h-72 bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#49bcf3] rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto">
                APP
              </div>
              <div className="mt-4 font-medium text-gray-800">앱 이름</div>
              <div className="mt-4 flex justify-center">
                <Loader2 className="animate-spin h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <SlideLayout title="Splash Page (스플래시 페이지)">
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
                스플래시 페이지(Splash Page) 또는 스플래시 스크린(Splash
                Screen)은 웹사이트나 앱이 로딩되는 사이 사용자에게 표시되는 초기
                화면입니다. 주로 브랜드 로고, 애니메이션 로딩 인디케이터를
                포함하며, 앱의 첫인상을 생성하고 로딩 시간 동안 사용자의 주의를
                유지하는 역할을 합니다.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "basic"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("basic")}
                >
                  기본형{" "}
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "animated"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("animated")}
                >
                  애니메이션형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "branded"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("branded")}
                >
                  브랜드형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "progress"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("progress")}
                >
                  진행률형
                </button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                {/* 스플래시 페이지 헤더 */}
                {renderSplash()}

                {/* 설명 */}
                {!isLoading && (
                  <div className="p-4 bg-white">
                    <h3 className="font-medium mb-2">
                      {splashType === "basic"
                        ? "기본 스플래시 페이지"
                        : splashType === "animated"
                        ? "애니메이션 스플래시 페이지"
                        : splashType === "branded"
                        ? "브랜드 스플래시 페이지"
                        : "진행률 표시 스플래시 페이지"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {splashType === "basic"
                        ? "로고와 간단한 로딩 인디케이터를 포함한 기본적인 스플래시 화면입니다."
                        : splashType === "animated"
                        ? "움직이는 요소와 애니메이션을 사용하여 동적인 첫인상을 제공합니다."
                        : splashType === "branded"
                        ? "브랜드 아이덴티티를 강조하고 회사/제품의 이미지를 강화하는 스플래시 화면입니다."
                        : "실제 로딩 진행 상황을 보여주어 사용자에게 명확한 정보를 제공합니다."}
                    </p>

                    <div className="bg-gray-50 p-3 rounded-md border text-sm">
                      <strong>사용 시 고려사항:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>과도하게 길게 표시하지 않도록 제한</li>
                        <li>브랜드 아이덴티티와 일관된 디자인 사용</li>
                        <li>실제 로딩 시간과 표시 시간 조율</li>
                        <li>시각적으로 간결하고 집중된 디자인</li>
                        <li>
                          사용자에게 앱이 준비 상태임을 알리도록 표시 포함
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">
                    스플래시 페이지 유형
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>기본 스플래시 화면</strong>
                      <p className="text-sm text-gray-600">
                        로고와 텍스트만 포함한 단순한 형태
                      </p>
                    </li>
                    <li>
                      <strong>애니메이션 스플래시 화면</strong>
                      <p className="text-sm text-gray-600">
                        움직이는 요소가 포함된 동적인 형태
                      </p>
                    </li>
                    <li>
                      <strong>브랜드 스플래시 화면</strong>
                      <p className="text-sm text-gray-600">
                        회사/제품의 브랜드 아이덴티티를 강조
                      </p>
                    </li>
                    <li>
                      <strong>진행률 표시 스플래시</strong>
                      <p className="text-sm text-gray-600">
                        로딩 진행 상황을 시각적으로 표시
                      </p>
                    </li>
                    <li>
                      <strong>인터랙티브 스플래시</strong>
                      <p className="text-sm text-gray-600">
                        사용자의 호출에 응답하는 요소 포함
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">주요 구성 요소</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>로고/브랜드 요소</strong>
                      <p className="text-sm text-gray-600">
                        회사나 앱의 아이덴티티를 나타내는 시각적 요소
                      </p>
                    </li>
                    <li>
                      <strong>로딩 인디케이터</strong>
                      <p className="text-sm text-gray-600">
                        스피너, 프로그레스 바 등 진행 상황 표시
                      </p>
                    </li>
                    <li>
                      <strong>배경</strong>
                      <p className="text-sm text-gray-600">
                        단색, 그라디언트 또는 이미지 배경
                      </p>
                    </li>
                    <li>
                      <strong>텍스트 정보</strong>
                      <p className="text-sm text-gray-600">
                        앱 이름, 로고, 버전 정보 등
                      </p>
                    </li>
                    <li>
                      <strong>애니메이션</strong>
                      <p className="text-sm text-gray-600">
                        전환 효과, 로고 애니메이션 등
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                디자인 및 구현 고려사항
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>표시 시간 최적화</strong>
                  <p className="text-sm">
                    일반적으로 2-3초로 제한하여 사용자 경험 향상
                  </p>
                </li>
                <li>
                  <strong>브랜드 일관성</strong>
                  <p className="text-sm">
                    앱의 전체 디자인과 어울리는 배치되는 시각적 요소 사용
                  </p>
                </li>
                <li>
                  <strong>목적성</strong>
                  <p className="text-sm">
                    실제 리소스 로딩과 제한된 의미한 스플래시 화면 구현
                  </p>
                </li>
                <li>
                  <strong>사용자 피드백</strong>
                  <p className="text-sm">
                    앱이 준비 중임을 사용자에게 명확하게 알리도록 표시
                  </p>
                </li>
                <li>
                  <strong>성능 고려</strong>
                  <p className="text-sm">
                    스플래시 화면 전체가 로딩을 지연시키지 않도록 제한
                  </p>
                </li>
                <li>
                  <strong>크로스 플랫폼 호환성</strong>
                  <p className="text-sm">
                    다양한 플랫폼과 OS에서 일관된 경험 제공
                  </p>
                </li>
                <li>
                  <strong>접근성</strong>
                  <p className="text-sm">
                    모든 사용자가 이해할 수 있는 명확한 시각적 요소 포함
                  </p>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 border rounded-md mb-6">
              <PrismCode language="typescript" code={getReactCode()} />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  스플래시 화면 유형 선택
                </label>
                <select
                  value={splashType}
                  onChange={(e) => setSplashType(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="basic">기본형 스플래시</option>
                  <option value="animated">애니메이션형 스플래시</option>
                  <option value="branded">브랜드형 스플래시</option>
                  <option value="progress">진행률형 스플래시</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* 스플래시 데모 영역 */}
                <div className="w-full border rounded-lg overflow-hidden">
                  {!isLoading ? (
                    <div className="bg-white p-4 text-center">
                      <button
                        className="px-4 py-2 bg-[#49bcf3] text-white rounded-md text-sm"
                        onClick={handleStartLoading}
                      >
                        스플래시 화면 보기
                      </button>
                    </div>
                  ) : (
                    <>
                      {splashType === "basic" && (
                        <div className="h-72 bg-white flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-[#49bcf3] rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto">
                              APP
                            </div>
                            <div className="mt-4 font-medium text-gray-800">
                              앱 이름
                            </div>
                            <div className="mt-4 flex justify-center">
                              <Loader2 className="animate-spin h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                        </div>
                      )}

                      {splashType === "animated" && (
                        <div className="h-72 bg-gradient-to-br from-[#49bcf3] to-[#134429] flex flex-col items-center justify-center">
                          <div className="animate-[bounce_1.5s_infinite]">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-xl p-5">
                              LOGO
                            </div>
                          </div>
                          <div className="mt-6 text-white font-medium animate-[fadeIn_2s_ease-in]">
                            애니메이션 스플래시
                          </div>
                          <div className="mt-2 text-white/70 text-sm animate-[fadeIn_2s_ease-in]">
                            로딩 중...
                          </div>
                        </div>
                      )}

                      {splashType === "branded" && (
                        <div className="h-72 bg-[#49bcf3] flex flex-col items-center justify-center text-white">
                          <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-2xl p-5 mb-4">
                              UI
                            </div>
                            <div className="text-xl font-bold uppercase tracking-widest">
                              브랜드명
                            </div>
                            <div className="mt-2 text-white/70 text-sm">
                              브랜드 슬로건이 들어가는 명
                            </div>
                            <div className="mt-6">
                              <Loader2 className="animate-spin h-6 w-6" />
                            </div>
                          </div>
                        </div>
                      )}

                      {splashType === "progress" && (
                        <div className="h-72 bg-[#f4f4f4] flex flex-col items-center justify-center">
                          <div className="w-20 h-20 bg-[#49bcf3] rounded-full flex items-center justify-center text-white font-bold text-xl p-5">
                            UI
                          </div>
                          <div className="mt-6 font-medium text-[#49bcf3]">
                            {progress}% 완료
                          </div>
                          <div className="w-56 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                            <div
                              className="bg-[#49bcf3] h-full transition-all duration-300 ease-in-out"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <div className="mt-2 text-gray-500 text-sm">
                            리소스 로딩 중...
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {!isLoading && (
                  <div className="w-full text-sm mt-4 p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium mb-2">특징:</h3>
                    {splashType === "basic" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>간결한 로고와 앱 이름 표시</li>
                        <li>로딩 인디케이터로 앱 진행 중임을 표시</li>
                        <li>깔끔한 흰색 배경으로 브랜드 전체를 강조</li>
                      </ul>
                    )}
                    {splashType === "animated" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>바운스 효과로 시각적인 인상을 발휘</li>
                        <li>그라디언트 배경으로 동적인 느낌 전달</li>
                        <li>동적인 애니메이션으로 부드러운 진입 제공</li>
                      </ul>
                    )}
                    {splashType === "branded" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          브랜드 아이덴티티 화면으로 사용하여 강렬한 첫인상
                        </li>
                        <li>브랜드명과 슬로건을 함께 표시</li>
                        <li>화면 중앙에 로고를 배치하여 브랜드 인식을 강화</li>
                      </ul>
                    )}
                    {splashType === "progress" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>진행 상황을 명확하게 표시하는 프로그레스 바</li>
                        <li>센스 있는 표시로 로딩 과정 명확</li>
                        <li>
                          밝은 배경과 브랜드 색상을 활용한 가독성 높은 정보 표시
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
