"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import { Clock, Bookmark, Compass, User } from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabBarSlide() {
  const [activeTab, setActiveTab] = useState("recent");
  const [tabBarStyle, setTabBarStyle] = useState<
    "basic" | "scrollable" | "underline" | "pills" | "material"
  >("basic");
  const [codeType, setCodeType] = useState<"react">("react");

  const tabItems = [
    { id: "recent", label: "최근", icon: Clock },
    { id: "saved", label: "저장됨", icon: Bookmark },
    { id: "explore", label: "탐색", icon: Compass },
    { id: "profile", label: "프로필", icon: User },
  ];

  const longTabItems = [
    { id: "recent", label: "최근 항목" },
    { id: "saved", label: "저장된 항목" },
    { id: "explore", label: "탐색하기" },
    { id: "popular", label: "인기 있는 항목" },
    { id: "trending", label: "트렌딩 항목" },
    { id: "recommend", label: "추천 항목" },
    { id: "favorites", label: "즐겨찾기" },
  ];

  const renderTabBar = () => {
    switch (tabBarStyle) {
      case "scrollable":
        return (
          <div className="border-b">
            <div className="overflow-x-auto">
              <div className="flex whitespace-nowrap">
                {longTabItems.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm font-medium ${
                      activeTab === tab.id
                        ? "text-[#6700e6] border-b-2 border-[#6700e6]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "underline":
        return (
          <div className="border-b">
            <div className="flex justify-around">
              {tabItems.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 relative text-sm font-medium ${
                    activeTab === tab.id
                      ? "text-[#6700e6]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="flex flex-col items-center">
                    <tab.icon className="h-5 w-5 mb-1" />
                    {tab.label}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#6700e6]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case "pills":
        return (
          <div className="bg-gray-100 p-1.5 rounded-lg flex">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white shadow text-[#6700e6]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center justify-center">
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        );

      case "material":
        const itemWidth = 100 / tabItems.length;
        const indicatorPosition =
          tabItems.findIndex((tab) => tab.id === activeTab) * itemWidth;

        return (
          <div className="bg-white border-b">
            <div className="relative">
              <div className="flex justify-around">
                {tabItems.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm font-medium z-10 transition-colors ${
                      activeTab === tab.id
                        ? "text-[#6700e6]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{ width: `${itemWidth}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <tab.icon className="h-5 w-5 mb-1" />
                      {tab.label}
                    </div>
                  </button>
                ))}
              </div>
              <div
                className="absolute bottom-0 h-0.5 bg-[#6700e6] transition-all duration-300"
                style={{
                  width: `${itemWidth}%`,
                  left: `${indicatorPosition}%`,
                }}
              ></div>
            </div>
          </div>
        );

      default: // basic
        return (
          <div className="border-b">
            <div className="flex justify-around">
              {tabItems.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id
                      ? "text-[#6700e6] border-b-2 border-[#6700e6]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  const getReactCode = () => {
    switch (tabBarStyle) {
      case "basic":
        return `import React, { useState } from 'react';
import { Clock, Bookmark, Compass, User } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface BasicTabBarProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const BasicTabBar: React.FC<BasicTabBarProps> = ({
  items,
  activeTab,
  onTabChange,
  className = ""
}) => {
  return (
    <div className={\`border-b border-gray-200 \${className}\`}>
      <div className="flex">
        {items.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              className={\`px-6 py-4 text-sm font-medium transition-colors \${
                activeTab === tab.id
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }\`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="h-4 w-4" />
                <span>{tab.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// 사용 예시
const BasicTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "최근", icon: Clock },
    { id: "saved", label: "저장됨", icon: Bookmark },
    { id: "explore", label: "탐색", icon: Compass },
    { id: "profile", label: "프로필", icon: User },
  ];

  return (
    <div className="w-full">
      <BasicTabBar
        items={tabItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            {tabItems.find(tab => tab.id === activeTab)?.label} 탭
          </h3>
          <p className="text-gray-600">
            선택된 탭: {activeTab}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicTabBarExample;`;

      case "scrollable":
        return `import React, { useState } from 'react';

interface ScrollableTabItem {
  id: string;
  label: string;
}

interface ScrollableTabBarProps {
  items: ScrollableTabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const ScrollableTabBar: React.FC<ScrollableTabBarProps> = ({
  items,
  activeTab,
  onTabChange,
  className = ""
}) => {
  return (
    <div className={\`border-b border-gray-200 \${className}\`}>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap">
          {items.map((tab) => (
            <button
              key={tab.id}
              className={\`px-6 py-4 text-sm font-medium transition-colors flex-shrink-0 \${
                activeTab === tab.id
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }\`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 사용 예시
const ScrollableTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const longTabItems = [
    { id: "recent", label: "최근 항목" },
    { id: "saved", label: "저장된 항목" },
    { id: "explore", label: "탐색하기" },
    { id: "popular", label: "인기 있는 항목" },
    { id: "trending", label: "트렌딩 항목" },
    { id: "recommend", label: "추천 항목" },
    { id: "favorites", label: "즐겨찾기" },
    { id: "bookmarks", label: "북마크" },
    { id: "history", label: "기록" },
    { id: "settings", label: "설정" },
  ];

  return (
    <div className="w-full">
      <ScrollableTabBar
        items={longTabItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            {longTabItems.find(tab => tab.id === activeTab)?.label}
          </h3>
          <p className="text-gray-600">
            선택된 탭: {activeTab}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollableTabBarExample;`;

      case "underline":
        return `import React, { useState } from 'react';
import { Clock, Bookmark, Compass, User } from 'lucide-react';

interface UnderlineTabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface UnderlineTabBarProps {
  items: UnderlineTabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const UnderlineTabBar: React.FC<UnderlineTabBarProps> = ({
  items,
  activeTab,
  onTabChange,
  className = ""
}) => {
  return (
    <div className={\`border-b border-gray-200 \${className}\`}>
      <div className="flex">
        {items.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              className={\`px-6 py-4 text-sm font-medium transition-all duration-200 relative \${
                activeTab === tab.id
                  ? "text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }\`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className="flex flex-col items-center gap-1">
                <IconComponent className="h-5 w-5" />
                <span>{tab.label}</span>
              </div>
              
              {/* Animated underline */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 transition-all duration-200" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// 사용 예시
const UnderlineTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "최근", icon: Clock },
    { id: "saved", label: "저장됨", icon: Bookmark },
    { id: "explore", label: "탐색", icon: Compass },
    { id: "profile", label: "프로필", icon: User },
  ];

  return (
    <div className="w-full">
      <UnderlineTabBar
        items={tabItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            {tabItems.find(tab => tab.id === activeTab)?.label} 탭
          </h3>
          <p className="text-gray-600">
            아이콘과 텍스트가 세로로 배치된 언더라인 스타일
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderlineTabBarExample;`;

      case "pills":
        return `import React, { useState } from 'react';
import { Clock, Bookmark, Compass, User } from 'lucide-react';

interface PillTabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface PillTabBarProps {
  items: PillTabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const PillTabBar: React.FC<PillTabBarProps> = ({
  items,
  activeTab,
  onTabChange,
  className = ""
}) => {
  return (
    <div className={\`p-1 bg-gray-100 rounded-lg inline-flex \${className}\`}>
      {items.map((tab) => {
        const IconComponent = tab.icon;
        return (
          <button
            key={tab.id}
            className={\`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 \${
              activeTab === tab.id
                ? "bg-white text-purple-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }\`}
            onClick={() => onTabChange(tab.id)}
          >
            <div className="flex items-center gap-2">
              <IconComponent className="h-4 w-4" />
              <span>{tab.label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

// 사용 예시
const PillTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "최근", icon: Clock },
    { id: "saved", label: "저장됨", icon: Bookmark },
    { id: "explore", label: "탐색", icon: Compass },
    { id: "profile", label: "프로필", icon: User },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-center p-6">
        <PillTabBar
          items={tabItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            {tabItems.find(tab => tab.id === activeTab)?.label} 탭
          </h3>
          <p className="text-gray-600">
            둥근 배경이 있는 알약 모양의 탭 바
          </p>
        </div>
      </div>
    </div>
  );
};

export default PillTabBarExample;`;

      case "material":
        return `import React, { useState, useRef, useEffect } from 'react';
import { Clock, Bookmark, Compass, User } from 'lucide-react';

interface MaterialTabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MaterialTabBarProps {
  items: MaterialTabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const MaterialTabBar: React.FC<MaterialTabBarProps> = ({
  items,
  activeTab,
  onTabChange,
  className = ""
}) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = items.findIndex(item => item.id === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];
    
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab, items]);

  return (
    <div className={\`relative border-b border-gray-200 \${className}\`}>
      <div className="flex">
        {items.map((tab, index) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className={\`px-6 py-4 text-sm font-medium transition-colors relative z-10 \${
                activeTab === tab.id
                  ? "text-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }\`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="h-4 w-4" />
                <span>{tab.label}</span>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Animated indicator */}
      <div
        className="absolute bottom-0 h-0.5 bg-purple-600 transition-all duration-300 ease-out"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />
    </div>
  );
};

// 사용 예시
const MaterialTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "최근", icon: Clock },
    { id: "saved", label: "저장됨", icon: Bookmark },
    { id: "explore", label: "탐색", icon: Compass },
    { id: "profile", label: "프로필", icon: User },
  ];

  return (
    <div className="w-full">
      <MaterialTabBar
        items={tabItems}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            {tabItems.find(tab => tab.id === activeTab)?.label} 탭
          </h3>
          <p className="text-gray-600">
            부드럽게 슬라이딩하는 인디케이터가 있는 Material Design 스타일
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaterialTabBarExample;`;

      default:
        return getReactCode(); // Fallback to basic
    }
  };


  return (
    <SlideLayout title="탭 바 (Tab Bar)">
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
                탭 바(Tab Bar)는 동일한 계층 내에서 여러 화면 또는 콘텐츠 섹션
                간 전환을 위한 내비게이션 컴포넌트입니다. 사용자가 쉽게 관련
                콘텐츠 간을 이동할 수 있도록 카테고리별로 구분된 직관적인
                인터페이스를 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">탭 바 스타일</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>기본형 (Basic)</strong>
                    <p className="text-sm text-gray-600">
                      일반적인 텍스트 탭, 하단 인디케이터로 활성 탭 표시
                    </p>
                  </li>
                  <li>
                    <strong>아이콘 언더라인형 (Underline)</strong>
                    <p className="text-sm text-gray-600">
                      아이콘과 텍스트 결합, 하단에 언더라인 인디케이터 표시
                    </p>
                  </li>
                  <li>
                    <strong>스크롤형 (Scrollable)</strong>
                    <p className="text-sm text-gray-600">
                      많은 탭이 있을 때 가로로 스크롤 가능한 형식
                    </p>
                  </li>
                  <li>
                    <strong>필 탭형 (Pills)</strong>
                    <p className="text-sm text-gray-600">
                      둥근 모서리 형태로 전체 배경 강조되는 형식
                    </p>
                  </li>
                  <li>
                    <strong>머티리얼형 (Material)</strong>
                    <p className="text-sm text-gray-600">
                      애니메이션 인디케이터가 탭 이동 시 부드럽게 전환
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">사용 사례</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    카테고리별 콘텐츠 분류 (뉴스, 스포츠, 엔터테인먼트 등)
                  </li>
                  <li>설정 화면의 섹션 구분 (일반, 계정, 알림 등)</li>
                  <li>
                    제품 상세 페이지의 정보 구분 (상세정보, 리뷰, 문의 등)
                  </li>
                  <li>
                    소셜 미디어 앱의 타임라인 분류 (팔로잉, 인기, 추천 등)
                  </li>
                  <li>다양한 뷰 모드 전환 (목록형, 갤러리형, 지도형 등)</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">
                  접근성 고려사항
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>충분한 색상 대비로 가독성 확보</li>
                  <li>적절한 터치 영역 크기 (최소 48x48dp)</li>
                  <li>현재 선택된 탭을 명확히 표시</li>
                  <li>스크린 리더 지원 (ARIA 속성 적용)</li>
                  <li>키보드 접근성 지원</li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#6700e6]/20 bg-[#6700e6]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#6700e6]">
                디자인 권장사항
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>일관된 디자인 언어 유지 (앱 전체 스타일과 통일)</li>
                <li>한 번에 볼 수 있는 적절한 탭 수 유지 (4-6개 권장)</li>
                <li>명확한 레이블 사용 (짧고 직관적인 단어 선택)</li>
                <li>아이콘과 텍스트 조합으로 이해도 향상</li>
                <li>적절한 여백과 간격으로 가독성 확보</li>
                <li>탭 간 전환 시 부드러운 애니메이션 적용</li>
                <li>스와이프 제스처 지원 고려 (탭 간 좌우 스와이프)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode 
                code={getReactCode()} 
                language="typescript" 
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "basic"
                    ? "bg-[#6700e6] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("basic")}
              >
                기본형
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "underline"
                    ? "bg-[#6700e6] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("underline")}
              >
                아이콘 언더라인형
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "scrollable"
                    ? "bg-[#6700e6] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("scrollable")}
              >
                스크롤형
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "pills"
                    ? "bg-[#6700e6] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("pills")}
              >
                필 탭형
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "material"
                    ? "bg-[#6700e6] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("material")}
              >
                머티리얼형
              </button>
            </div>

            <div className="border rounded-md shadow-sm overflow-hidden">
              <div className="p-4 flex justify-center">
                <div className="w-full max-w-md">
                  {renderTabBar()}
                  <div className="p-8 text-center text-gray-500">
                    {activeTab} 콘텐츠
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
