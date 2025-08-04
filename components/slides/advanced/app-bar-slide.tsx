"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Bell,
  BookmarkPlus,
  Menu,
  MoreVertical,
  Search,
  Share,
} from "lucide-react";
import { useState } from "react";
import { PrismCode } from "../../ui/prism/PrismCode";
import SlideLayout from "../slide-layout";

export default function AppBarSlide() {
  const [appBarType, setAppBarType] = useState<
    "standard" | "context" | "search" | "prominent"
  >("standard");
  const [showNotification, setShowNotification] = useState(false);

  const renderAppBar = () => {
    switch (appBarType) {
      case "context":
        return (
          <div className="bg-white border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <ArrowLeft className="h-5 w-5 text-gray-700" />
                </button>
                <span className="ml-4 font-medium">선택된 항목 (3)</span>
              </div>

              <div className="flex items-center gap-3">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Share className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <BookmarkPlus className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <MoreVertical className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        );

      case "search":
        return (
          <div className="bg-white border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-2.5">
              <button className="p-1.5 rounded-full hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5 text-gray-700" />
              </button>

              <div className="flex-1 mx-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="pl-10 pr-4 py-1.5 w-full rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#6700e6] text-sm"
                  />
                </div>
              </div>

              <button className="p-1.5 rounded-full hover:bg-gray-100">
                <MoreVertical className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        );

      case "prominent":
        return (
          <div className="bg-[#6700e6] text-white shadow-md">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </button>
                <span className="ml-4 font-medium">앱 타이틀</span>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-full hover:bg-white/10">
                  <Search className="h-5 w-5" />
                </button>
                <button
                  className="p-1.5 rounded-full hover:bg-white/10 relative"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-1.5 rounded-full hover:bg-white/10">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="px-4 pb-4">
              <h1 className="text-xl font-bold">확장 타이틀 영역</h1>
              <p className="text-sm text-white/80 mt-1">
                추가 설명 텍스트 또는 액션
              </p>
            </div>

            <div className="flex bg-[#4a0099]">
              <button className="flex-1 py-2 text-sm font-medium border-b-2 border-white">
                탭 1
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-white/70 border-b-2 border-transparent hover:text-white">
                탭 2
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-white/70 border-b-2 border-transparent hover:text-white">
                탭 3
              </button>
            </div>
          </div>
        );

      default: // standard
        return (
          <div className="bg-white border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Menu className="h-5 w-5 text-gray-700" />
                </button>
                <span className="ml-4 font-medium">앱 타이틀</span>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Search className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  className="p-1.5 rounded-full hover:bg-gray-100 relative"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <Bell className="h-5 w-5 text-gray-700" />
                  <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <MoreVertical className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  const getReactCode = () => {
    switch (appBarType) {
      case "context":
        return `import React from 'react';
import { ArrowLeft, Share, BookmarkPlus, MoreVertical } from 'lucide-react';

const ContextAppBarExample: React.FC = () => {
  const handleBack = () => {
    // 뒤로 가기 동작
    console.log('Back button clicked');
  };

  const handleShare = () => {
    // 공유 동작
    console.log('Share button clicked');
  };

  const handleBookmark = () => {
    // 북마크 동작
    console.log('Bookmark button clicked');
  };

  const handleMore = () => {
    // 더보기 메뉴 동작
    console.log('More button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Context App Bar */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button 
              onClick={handleBack}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="뒤로 가기"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <span className="ml-4 font-medium text-gray-900">선택된 항목 (3)</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleShare}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="공유"
            >
              <Share className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleBookmark}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="북마크 추가"
            >
              <BookmarkPlus className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleMore}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="더보기 메뉴"
            >
              <MoreVertical className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Body Content */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">앱 콘텐츠</p>
      </main>
    </div>
  );
};

export default ContextAppBarExample;`;

      case "search":
        return `import React, { useState } from 'react';
import { ArrowLeft, Search, MoreVertical } from 'lucide-react';

const SearchAppBarExample: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleBack = () => {
    // 뒤로 가기 동작
    console.log('Back button clicked');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // 검색 로직 구현
    console.log('Searching for:', e.target.value);
  };

  const handleMore = () => {
    // 더보기 메뉴 동작
    console.log('More button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search App Bar */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          <button 
            onClick={handleBack}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="뒤로 가기"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          
          <div className="flex-1 mx-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 pr-4 py-1.5 w-full rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#6700e6] text-sm transition-colors"
              />
            </div>
          </div>
          
          <button 
            onClick={handleMore}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="더보기 메뉴"
          >
            <MoreVertical className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </header>
      
      {/* Body Content */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">
          {searchQuery ? \`검색 결과: "\${searchQuery}"\` : '검색 결과'}
        </p>
      </main>
    </div>
  );
};

export default SearchAppBarExample;`;

      case "prominent":
        return `import React, { useState } from 'react';
import { Menu, Search, Bell, MoreVertical } from 'lucide-react';

const ProminentAppBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const tabs = ['탭 1', '탭 2', '탭 3'];

  const handleMenu = () => {
    // 메뉴 열기 동작
    console.log('Menu button clicked');
  };

  const handleSearch = () => {
    // 검색 동작
    console.log('Search button clicked');
  };

  const handleNotification = () => {
    // 알림 동작
    setShowNotification(!showNotification);
    console.log('Notification button clicked');
  };

  const handleMore = () => {
    // 더보기 메뉴 동작
    console.log('More button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Prominent App Bar */}
      <header className="bg-[#6700e6] text-white shadow-md">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button 
              onClick={handleMenu}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="메뉴"
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="ml-4 font-medium">앱 타이틀</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleSearch}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="검색"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNotification}
              className="p-1.5 rounded-full hover:bg-white/10 relative transition-colors"
              aria-label="알림"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={handleMore}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="더보기 메뉴"
            >
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Extended Title Area */}
        <div className="px-4 pb-4">
          <h1 className="text-xl font-bold">확장 타이틀 영역</h1>
          <p className="text-sm text-white/80 mt-1">추가 설명 텍스트 또는 액션</p>
        </div>
        
        {/* Tab Bar */}
        <div className="flex bg-[#4a0099]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={\`flex-1 py-2 text-sm font-medium border-b-2 transition-colors \${
                activeTab === index
                  ? 'border-white text-white'
                  : 'border-transparent text-white/70 hover:text-white'
              }\`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>
      
      {/* Tab Content */}
      <main className="p-4">
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-600">{tabs[activeTab]} 콘텐츠</p>
        </div>
      </main>
    </div>
  );
};

export default ProminentAppBarExample;`;

      default: // standard
        return `import React, { useState } from 'react';
import { Menu, Search, Bell, MoreVertical } from 'lucide-react';

const StandardAppBarExample: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleMenu = () => {
    // 메뉴 열기 동작
    console.log('Menu button clicked');
  };

  const handleSearch = () => {
    // 검색 동작
    console.log('Search button clicked');
  };

  const handleNotification = () => {
    // 알림 동작
    setShowNotification(!showNotification);
    console.log('Notification button clicked');
  };

  const handleMore = () => {
    // 더보기 메뉴 동작
    console.log('More button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standard App Bar */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button 
              onClick={handleMenu}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="메뉴"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
            <span className="ml-4 font-medium text-gray-900">앱 타이틀</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleSearch}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="검색"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleNotification}
              className="p-1.5 rounded-full hover:bg-gray-100 relative transition-colors"
              aria-label="알림"
            >
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={handleMore}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="더보기 메뉴"
            >
              <MoreVertical className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Body Content */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">앱 콘텐츠</p>
      </main>
    </div>
  );
};

export default StandardAppBarExample;`;
    }
  };

  return (
    <SlideLayout title="App Bar (앱 바)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">정의</h3>
              <p>
                앱 바(App Bar)는 화면 상단에 위치한 컴포넌트로, 현재 화면의
                제목과 함께 내비게이션, 검색, 액션 버튼과 같은 주요 기능을
                제공합니다. 일반적으로 '툴바(Toolbar)' 또는 '내비게이션
                바(Navigation Bar)'라고도 불립니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">특징</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>화면 상단에 고정되어 표시됩니다.</li>
                <li>앱 또는 현재 화면의 제목을 표시합니다.</li>
                <li>내비게이션 메뉴 버튼, 뒤로 가기 버튼 등을 포함합니다.</li>
                <li>검색, 공유, 설정 등의 액션 버튼을 우측에 배치합니다.</li>
                <li>스크롤 시 숨김/표시 기능을 지원할 수 있습니다.</li>
                <li>브랜드 색상을 적용하여 앱의 아이덴티티를 강조합니다.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">앱 바 유형</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>기본형 (Standard)</strong>
                  <p className="text-sm text-gray-600">
                    가장 일반적인 형태로, 제목과 액션 버튼을 포함합니다.
                  </p>
                </li>
                <li>
                  <strong>컨텍스트형 (Contextual)</strong>
                  <p className="text-sm text-gray-600">
                    항목 선택 시 나타나며, 선택된 항목에 대한 액션을 제공합니다.
                  </p>
                </li>
                <li>
                  <strong>검색형 (Search)</strong>
                  <p className="text-sm text-gray-600">
                    검색 기능이 강조된 형태로, 검색창이 중앙에 배치됩니다.
                  </p>
                </li>
                <li>
                  <strong>확장형 (Prominent)</strong>
                  <p className="text-sm text-gray-600">
                    추가 콘텐츠나 탭을 포함하는 확장된 높이의 앱 바입니다.
                  </p>
                </li>
                <li>
                  <strong>축소형 (Collapsed)</strong>
                  <p className="text-sm text-gray-600">
                    스크롤 시 크기가 축소되어 화면 공간을 효율적으로 사용합니다.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>앱 내 화면 간 이동 및 내비게이션</li>
                <li>현재 위치 표시 및 계층 구조 전달</li>
                <li>검색 기능 제공</li>
                <li>알림, 메시지 등의 상태 표시</li>
                <li>설정, 공유, 즐겨찾기 등 자주 사용하는 기능 접근</li>
                <li>항목 선택 시 관련 액션 표시</li>
                <li>사용자 계정 및 프로필 관리</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">디자인 지침</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>액션 버튼은 우선순위에 따라 배치합니다.</li>
                <li>3-5개의 액션 버튼으로 제한하여 복잡함을 방지합니다.</li>
                <li>충분한 터치 영역(최소 48x48dp)을 확보합니다.</li>
                <li>브랜드 색상과 대비를 고려하여 가독성을 확보합니다.</li>
                <li>반응형으로 설계하여 다양한 화면 크기에 적응합니다.</li>
                <li>
                  일관된 높이와 패딩을 유지하여 시각적 안정감을 제공합니다.
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code">
            {/* 코드 탭 내용 */}
            <div className="bg-gray-800 p-4 border rounded-md mt-6">
              <PrismCode code={getReactCode()} language="typescript" />
            </div>
          </TabsContent>

          <TabsContent value="demo">
            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "standard"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("standard")}
                >
                  기본형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "context"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("context")}
                >
                  컨텍스트형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "search"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("search")}
                >
                  검색형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "prominent"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("prominent")}
                >
                  확장형
                </button>
              </div>
            </div>
            {/* 데모 탭 내용 */}
            <div className="mt-4">
              <div className="border rounded-lg overflow-hidden">
                {renderAppBar()}
                <div className="p-4">
                  <h3 className="font-medium mb-3">인터랙티브 데모</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    위의 버튼을 클릭하여 다양한 앱 바 유형을 확인해보세요.
                  </p>

                  <div className="flex gap-2 mb-4">
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "standard"
                          ? "bg-[#6700e6] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("standard")}
                    >
                      기본형
                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "context"
                          ? "bg-[#6700e6] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("context")}
                    >
                      컨텍스트형
                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "search"
                          ? "bg-[#6700e6] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("search")}
                    >
                      검색형
                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "prominent"
                          ? "bg-[#6700e6] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("prominent")}
                    >
                      확장형
                    </button>
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
