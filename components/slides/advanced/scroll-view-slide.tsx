"use client";

import SlideLayout from "../slide-layout";
import { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ScrollViewSlide() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [codeType, setCodeType] = useState<"react">("react");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const position = scrollContainer.scrollTop;
      const max = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      setScrollPosition(position);
      setMaxScroll(max);
      setShowScrollToTop(position > 100);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 값 설정

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const generateLoremIpsum = (paragraphs: number) => {
    const lorem = [
      "스크롤 뷰는 화면 크기보다 더 큰 콘텐츠를 표시하기 위해 필수적인 UI 컴포넌트입니다. 사용자가 콘텐츠를 스크롤하여 볼 수 있게 합니다.",
      "대부분의 모바일 앱과 웹사이트에서는 스크롤 뷰를 기본적으로 사용합니다. 특히 긴 목록이나 텍스트가 있는 경우에 더욱 중요합니다.",
      "스크롤 뷰에는 세로 스크롤과 가로 스크롤이 있으며, 필요에 따라 두 방향 모두 지원할 수 있습니다.",
      "스크롤 뷰를 구현할 때는 성능 최적화가 중요합니다. 특히 많은 항목을 표시할 때 가상화(virtualization) 기법을 활용하면 좋습니다.",
      "스크롤 위치를 추적하고 특정 동작을 트리거하는 것은 무한 스크롤, 지연 로딩 등의 기능을 구현하는 데 유용합니다.",
      "접근성을 고려하여 키보드 내비게이션과 스크린 리더 호환성을 보장해야 합니다.",
      "스크롤바의 시각적 디자인도 사용자 경험에 영향을 미칩니다. 모바일에서는 스크롤바가 자동으로 숨겨지는 경우가 많습니다.",
      "스크롤 애니메이션과 스냅 기능을 추가하여 더 매끄러운 사용자 경험을 제공할 수 있습니다.",
      "상단으로 스크롤 버튼은 긴 콘텐츠를 탐색할 때 매우 유용한 UI 요소입니다.",
      "스크롤 이벤트를 사용하여 헤더 숨기기/표시하기, 애니메이션 트리거 등 다양한 인터랙션을 구현할 수 있습니다.",
    ];

    const result = [];
    for (let i = 0; i < paragraphs; i++) {
      const index = i % lorem.length;
      result.push(lorem[index]);
    }

    return result;
  };

  const getReactCode = () => {
    return `import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollViewProps {
  children: React.ReactNode;
  className?: string;
  showScrollToTop?: boolean;
  showProgressBar?: boolean;
  onScroll?: (position: number, maxScroll: number) => void;
}

const ScrollView: React.FC<ScrollViewProps> = ({
  children,
  className = '',
  showScrollToTop = true,
  showProgressBar = true,
  onScroll
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const position = scrollContainer.scrollTop;
      const max = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      
      setScrollPosition(position);
      setMaxScroll(max);
      setShowButton(position > 100);
      
      onScroll?.(position, max);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 값 설정

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [onScroll]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const progressPercentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <div className={\`relative \${className}\`}>
      {/* Progress Bar */}
      {showProgressBar && (
        <div className="sticky top-0 left-0 right-0 h-1 bg-gray-200 z-10">
          <div
            className="h-full bg-blue-500 transition-all duration-150"
            style={{ width: \`\${progressPercentage}%\` }}
          />
        </div>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e0 #f7fafc',
        }}
      >
        {children}
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg border hover:bg-gray-50 transition-all duration-300 z-20"
          aria-label="상단으로 스크롤"
        >
          <ChevronUp className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
};

// Usage Example
const App: React.FC = () => {
  const handleScroll = (position: number, maxScroll: number) => {
    console.log(\`Scroll position: \${position}, Max: \${maxScroll}\`);
  };

  const generateContent = () => {
    const paragraphs = [
      "스크롤 뷰는 화면 크기보다 더 큰 콘텐츠를 표시하기 위해 필수적인 UI 컴포넌트입니다.",
      "대부분의 모바일 앱과 웹사이트에서는 스크롤 뷰를 기본적으로 사용합니다.",
      "스크롤 뷰에는 세로 스크롤과 가로 스크롤이 있으며, 필요에 따라 두 방향 모두 지원할 수 있습니다.",
      "스크롤 뷰를 구현할 때는 성능 최적화가 중요합니다.",
      "스크롤 위치를 추적하고 특정 동작을 트리거하는 것은 다양한 기능 구현에 유용합니다.",
    ];

    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className={\`p-4 mb-4 rounded-lg \${
          i % 3 === 0
            ? 'bg-blue-50 border border-blue-200'
            : i % 3 === 1
            ? 'bg-green-50 border border-green-200'
            : 'bg-purple-50 border border-purple-200'
        }\`}
      >
        <p className="text-gray-700">{paragraphs[i % paragraphs.length]}</p>
        <div className="text-xs text-gray-400 mt-2">단락 #{i + 1}</div>
      </div>
    ));
  };

  return (
    <div className="h-96">
      <ScrollView
        className=""
        showScrollToTop={true}
        showProgressBar={true}
        onScroll={handleScroll}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">스크롤 가능한 콘텐츠</h2>
          {generateContent()}
        </div>
      </ScrollView>
    </div>
  );
};

export default App;`;
  };


  return (
    <SlideLayout title="Scroll View (스크롤 뷰)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-8 mt-4">
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-3">정의</h2>
              <p>
                스크롤 뷰는 화면에 표시 가능한 영역보다 큰 콘텐츠를 담을 수 있는
                컨테이너로, 사용자가 스크롤하여 내용을 탐색할 수 있게 합니다.
                수직, 수평, 또는 양방향 스크롤을 지원합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">스크롤 뷰 종류</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>수직 스크롤(Vertical Scroll)</strong>
                    <p className="text-sm text-gray-600">
                      위아래로 스크롤하는 가장 일반적인 형태
                    </p>
                  </li>
                  <li>
                    <strong>수평 스크롤(Horizontal Scroll)</strong>
                    <p className="text-sm text-gray-600">
                      좌우로 스크롤하는 형태, 갤러리나 카루셀에 자주 사용
                    </p>
                  </li>
                  <li>
                    <strong>양방향 스크롤(Both Directions)</strong>
                    <p className="text-sm text-gray-600">
                      수직과 수평 모두 스크롤 가능한 형태, 큰 테이블 등에 사용
                    </p>
                  </li>
                  <li>
                    <strong>페이지 스크롤(Paging)</strong>
                    <p className="text-sm text-gray-600">
                      한 번에 한 페이지씩 스크롤되는 형태
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">고려사항</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>스크롤바 디자인과 가시성</li>
                  <li>스크롤 성능 최적화 (특히 많은 항목이 있을 때)</li>
                  <li>스크롤 위치 저장 및 복원</li>
                  <li>풀-투-리프레시(Pull-to-refresh) 같은 상호작용 추가</li>
                  <li>스크롤 이벤트 처리 (지연 로딩, 애니메이션 등)</li>
                  <li>스크롤 스냅 포인트(Snap Points) 설정</li>
                  <li>키보드 내비게이션과 접근성</li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#6700e6]/20 bg-[#6700e6]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#6700e6]">
                구현 및 접근성
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>스크롤 위치 표시기 제공으로 현재 위치 인식 용이하게</li>
                <li>스크롤 상단으로 이동 버튼으로 긴 콘텐츠 탐색 지원</li>
                <li>키보드 탐색(방향키, Page Up/Down) 지원</li>
                <li>스크롤 애니메이션은 부드럽게 처리</li>
                <li>중요 정보는 스크롤 없이 볼 수 있도록 배치</li>
                <li>콘텐츠 로딩 상태를 명확히 표시</li>
                <li>터치 제스처와 마우스 휠 모두 고려한 설계</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">

            <div className="bg-gray-800 p-4 border rounded-md">
              <PrismCode
                language="typescript"
                code={getReactCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">스크롤 뷰 예시</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>스크롤 위치: {Math.round(scrollPosition)}</span>
                  <span>|</span>
                  <span>최대: {Math.round(maxScroll)}</span>
                  <span>|</span>
                  <span>
                    진행률:{" "}
                    {maxScroll
                      ? Math.round((scrollPosition / maxScroll) * 100)
                      : 0}
                    %
                  </span>
                </div>
              </div>

              <div className="relative flex-1 flex flex-col">
                <div
                  ref={scrollContainerRef}
                  className="flex-1 border rounded-lg overflow-y-auto bg-white p-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#6700e6 #f1f1f1",
                    height: "400px",
                  }}
                >
                  {/* 스크롤 진행 표시기 */}
                  <div className="sticky top-0 left-0 right-0 h-1 bg-gray-100 mb-4 -mx-4">
                    <div
                      className="h-full bg-[#6700e6]"
                      style={{
                        width: `${
                          maxScroll ? (scrollPosition / maxScroll) * 100 : 0
                        }%`,
                      }}
                    ></div>
                  </div>

                  {/* 스크롤 가능한 콘텐츠 */}
                  <div className="space-y-4">
                    {generateLoremIpsum(20).map((text, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${
                          index % 3 === 0
                            ? "bg-[#6700e6]/5 border border-[#6700e6]/10"
                            : index % 3 === 1
                            ? "bg-gray-50"
                            : "border"
                        }`}
                      >
                        <p className="text-gray-700">{text}</p>
                        <div className="text-xs text-gray-400 mt-2">
                          단락 #{index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 스크롤 상단으로 버튼 */}
                {showScrollToTop && (
                  <button
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg border hover:bg-gray-50 transition-opacity duration-300"
                    onClick={scrollToTop}
                    aria-label="상단으로 스크롤"
                  >
                    <ChevronUp className="w-5 h-5 text-gray-700" />
                  </button>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
