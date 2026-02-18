"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Clock, Compass, User } from "lucide-react";
import { useState } from "react";
import { PrismCode } from "../../ui/prism/PrismCode";
import SlideLayout from "../slide-layout";

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
          <div className="border-b border-slate-300">
            <div className="overflow-x-auto">
              <div className="flex whitespace-nowrap">
                {longTabItems.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm font-medium ${
                      activeTab === tab.id
                        ? "text-sky-700 border-b-2 border-sky-700"
                        : "text-slate-600 hover:text-slate-900"
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
          <div className="border-b border-slate-300">
            <div className="flex justify-around">
              {tabItems.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 relative text-sm font-medium ${
                    activeTab === tab.id
                      ? "text-sky-700"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="flex flex-col items-center">
                    <tab.icon className="h-5 w-5 mb-1" />
                    {tab.label}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-sky-700"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case "pills":
        return (
          <div className="flex rounded-lg border border-slate-300 bg-slate-200/80 p-1.5">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-sky-700 shadow-sm shadow-slate-300/40"
                    : "text-slate-600 hover:text-slate-900"
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
          <div className="border-b border-slate-300 bg-slate-50">
            <div className="relative">
              <div className="flex justify-around">
                {tabItems.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm font-medium z-10 transition-colors ${
                      activeTab === tab.id
                        ? "text-sky-700"
                        : "text-slate-600 hover:text-slate-900"
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
                className="absolute bottom-0 h-0.5 bg-sky-700 transition-all duration-300"
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
          <div className="border-b border-slate-300">
            <div className="flex justify-around">
              {tabItems.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id
                      ? "text-sky-700 border-b-2 border-sky-700"
                      : "text-slate-600 hover:text-slate-900"
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
            아이콘과 텍스트를 세로로 배치한 언더라인 스타일
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
            둥근 배경으로 강조하는 알약 모양 스타일
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
    <SlideLayout title="탭바(Tab Bar)">
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
                탭바(Tab Bar)는 일관된 계층 구조에서 여러 화면을 전환하는 콘텐츠
                전환을 위한 네비게이션 컴포넌트입니다. 사용자에게 쉽게 관리할 수
                있는 콘텐츠간을 이동할 수 있도록 카테고리별로 구분하여 직관적인
                인터페이스를 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-md border border-slate-200 bg-slate-100 p-4">
                <h3 className="text-lg font-medium mb-2">탭바 스타일</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>기본형(Basic)</strong>
                    <p className="text-sm text-slate-700">
                      일반적인 텍스트만 있는 단순 인디케이터로 구성된 스타일
                    </p>
                  </li>
                  <li>
                    <strong>아이콘 언더라인형(Underline)</strong>
                    <p className="text-sm text-slate-700">
                      아이콘과 텍스트 결합, 세로로 언더라인 인디케이터 표시
                    </p>
                  </li>
                  <li>
                    <strong>스크롤형 (Scrollable)</strong>
                    <p className="text-sm text-slate-700">
                      많은 탭 항목을 한번에 가로로 스크롤 가능한 방식
                    </p>
                  </li>
                  <li>
                    <strong>알약형 (Pills)</strong>
                    <p className="text-sm text-slate-700">
                      둥근 모서리의 태블릿 전체 배경 강조하는 방식
                    </p>
                  </li>
                  <li>
                    <strong>머티리얼형(Material)</strong>
                    <p className="text-sm text-slate-700">
                      애니메이션 인디케이터가 함께 동작하며 부드럽게 전환
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-100 p-4">
                <h3 className="text-lg font-medium mb-2">사용 사례</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    카테고리별 콘텐츠 분류 (뉴스, 스포츠, 엔터테인먼트 등)
                  </li>
                  <li>설정 페이지의 섹션 구분 (일반, 계정, 알림 등)</li>
                  <li>
                    상품 상세 페이지의 정보 구분 (상세정보, 리뷰, 문의 등)
                  </li>
                  <li>소셜 미디어의 피드라인 분류 (프로필, 인기, 추천 등)</li>
                  <li>다양한 보기 모드 전환 (목록형, 갤러리형, 지도형 등)</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">
                  접근성 고려사항
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-slate-700">
                  <li>충분한 터치 영역으로 가독성 보장</li>
                  <li>적절한 터치 영역 크기 (최소 48x48dp)</li>
                  <li>현재 선택된 탭의 명확한 표시</li>
                  <li>스크린 리더 지원 (ARIA 속성 사용)</li>
                  <li>키보드 접근성 지원</li>
                </ul>
              </div>
            </div>

            <div className="rounded-md border border-sky-300/70 bg-sky-50 p-4">
              <h3 className="mb-2 text-lg font-medium text-sky-800">
                디자이너 권장사항
              </h3>
              <ul className="list-disc space-y-1 pl-6 text-slate-700">
                <li>타겟 사용자의 언어 사용 (폰트 크기와 스타일)</li>
                <li>한번에 보이는 탭의 적절한 개수 (4-6개 권장)</li>
                <li>명확한 라벨 사용 (짧고 직관적인 단어 선택)</li>
                <li>아이콘과 텍스트 조합으로 이해도 향상</li>
                <li>적절한 여백과 간격으로 가독성 보장</li>
                <li>탭 전환 시 부드러운 애니메이션 사용</li>
                <li>다양한 디바이스 크기 고려 (탭 좌우 스크롤)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="rounded-lg bg-slate-900 p-4 text-white">
              <PrismCode code={getReactCode()} language="typescript" />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  tabBarStyle === "basic"
                    ? "bg-sky-700 text-white"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
                onClick={() => setTabBarStyle("basic")}
              >
                기본형
              </button>
              <button
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  tabBarStyle === "underline"
                    ? "bg-sky-700 text-white"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
                onClick={() => setTabBarStyle("underline")}
              >
                아이콘 언더라인형
              </button>
              <button
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  tabBarStyle === "scrollable"
                    ? "bg-sky-700 text-white"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
                onClick={() => setTabBarStyle("scrollable")}
              >
                스크롤형
              </button>
              <button
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  tabBarStyle === "pills"
                    ? "bg-sky-700 text-white"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
                onClick={() => setTabBarStyle("pills")}
              >
                알약형
              </button>
              <button
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  tabBarStyle === "material"
                    ? "bg-sky-700 text-white"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
                onClick={() => setTabBarStyle("material")}
              >
                머티리얼형
              </button>
            </div>

            <div className="overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm">
              <div className="p-4 flex justify-center">
                <div className="w-full max-w-md">
                  {renderTabBar()}
                  <div className="p-8 text-center text-slate-600">
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
