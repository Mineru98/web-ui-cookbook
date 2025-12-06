"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { PrismCode } from "../../ui/prism/PrismCode";
import SlideLayout from "../slide-layout";

export default function DrawerSlide() {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const [drawerType, setDrawerType] = useState<"left" | "right">("left");

  const toggleLeftDrawer = () => {
    setIsLeftDrawerOpen(!isLeftDrawerOpen);
    if (isRightDrawerOpen) setIsRightDrawerOpen(false);
    setDrawerType("left");
  };

  const toggleRightDrawer = () => {
    setIsRightDrawerOpen(!isRightDrawerOpen);
    if (isLeftDrawerOpen) setIsLeftDrawerOpen(false);
    setDrawerType("right");
  };

  const menuItems = [
    { id: "home", label: "홈", icon: Home },
    { id: "profile", label: "프로필", icon: User },
    { id: "settings", label: "설정", icon: Settings },
    { id: "help", label: "도움말", icon: HelpCircle },
  ];

  const getReactCode = () => {
    if (drawerType === "left") {
      return `import React, { useState } from 'react';
import { Menu, X, Home, Settings, User, HelpCircle, LogOut } from 'lucide-react';

interface MenuItemProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NavigationDrawerExample: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems: MenuItemProps[] = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'profile', label: '프로필', icon: User },
    { id: 'settings', label: '설정', icon: Settings },
    { id: 'help', label: '도움말', icon: HelpCircle },
  ];

  const handleMenuItemClick = (itemId: string) => {
    setActiveMenuItem(itemId);
    setIsDrawerOpen(false); // 드로어 닫기
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="메뉴 열기"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <h1 className="text-xl font-semibold">앱 이름</h1>
          
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Drawer */}
      <div 
        className={\`absolute top-0 left-0 bottom-0 w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 \${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }\`}
      >
        {/* Drawer Header */}
        <div className="bg-[#49bcf3] p-6 text-white">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleDrawer}
              className="p-1 rounded-full hover:bg-white/20"
              aria-label="드로어 닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-[#49bcf3]" />
            </div>
            <h3 className="text-lg font-medium">사용자 이름</h3>
            <p className="text-white/80 text-sm">user@example.com</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={\`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors \${
                    activeMenuItem === item.id
                      ? 'bg-[#49bcf3]/10 text-[#49bcf3]'
                      : 'hover:bg-gray-100 text-gray-700'
                  }\`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={() => console.log('로그아웃')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">로그아웃</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {menuItems.find(item => item.id === activeMenuItem)?.label || '홈'} 화면
          </h2>
          <p className="text-gray-600 mt-2">
            햄버거 메뉴를 클릭하여 내비게이션 드로어를 열어보세요
          </p>
        </div>
      </main>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={toggleDrawer}
          aria-label="드로어 닫기"
        />
      )}
    </div>
  );
};

export default NavigationDrawerExample;`;
    } else {
      return `import React, { useState } from 'react';
import { Menu, X, Settings, Bell, Moon, Sun, Type } from 'lucide-react';

interface SettingsOption {
  id: string;
  label: string;
  type: 'toggle' | 'select' | 'range';
  value: boolean | string | number;
}

const SettingsDrawerExample: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(2);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const themeOptions = [
    { id: 'light', color: '#ffffff', icon: Sun },
    { id: 'dark', color: '#1f2937', icon: Moon },
    { id: 'green', color: '#49bcf3', icon: Settings },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </button>
          
          <h1 className="text-xl font-semibold">앱 이름</h1>
          
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="설정 열기"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Settings Drawer */}
      <div 
        className={\`absolute top-0 right-0 bottom-0 w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 \${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }\`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">설정 패널</h2>
          <button
            onClick={toggleDrawer}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="설정 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Content */}
        <div className="p-4 space-y-6">
          {/* 알림 설정 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">알림 설정</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-gray-600" />
                <span className="text-sm">푸시 알림</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={pushNotifications}
                  onChange={(e) => setPushNotifications(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#49bcf3]"></div>
              </label>
            </div>
          </div>

          {/* 테마 설정 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">테마</h3>
            <div className="flex gap-3">
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTheme(option.id)}
                  className={\`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors \${
                    theme === option.id
                      ? 'border-[#49bcf3] bg-opacity-20'
                      : 'border-gray-300 hover:border-gray-400'
                  }\`}
                  style={{ backgroundColor: option.color }}
                >
                  {theme === option.id && (
                    <option.icon 
                      className={\`w-5 h-5 \${
                        option.id === 'light' ? 'text-gray-800' : 'text-white'
                      }\`} 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 글자 크기 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">글자 크기</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-gray-600" />
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="1"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#49bcf3]"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>작게</span>
                <span>보통</span>
                <span>크게</span>
              </div>
            </div>
          </div>

          {/* 미리보기 */}
          <div className="pt-4 border-t">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">미리보기</h3>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p 
                className={\`text-gray-800 \${
                  fontSize === 1 ? 'text-sm' : fontSize === 2 ? 'text-base' : 'text-lg'
                }\`}
              >
                설정한 글자 크기를 보여주는 텍스트입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">메인 콘텐츠</h2>
          <p className="text-gray-600 mt-2">
            설정 버튼을 클릭하여 설정 패널을 열어보세요
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <p>알림: {pushNotifications ? '켜짐' : '꺼짐'}</p>
            <p>테마: {theme}</p>
            <p>글자 크기: {fontSize === 1 ? '작게' : fontSize === 2 ? '보통' : '크게'}</p>
          </div>
        </div>
      </main>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={toggleDrawer}
          aria-label="설정 닫기"
        />
      )}
    </div>
  );
};

export default SettingsDrawerExample;`;
    }
  };

  return (
    <SlideLayout title="Drawer (드로어)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-3">의의</h2>
              <p>
                드로어(Drawer)는 화면 가장자리에서 슬라이딩하여 나타나는 패널로,
                주로 내비게이션이나 추가 컨트롤을 위해 사용됩니다. 일반적으로
                햄버거 메뉴 아이콘이나 스와이프 제스처로 열고 닫을 수 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">드로어 종류</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>측면 드로어(Side Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      화면 좌측 또는 우측에서 슬라이드, 주로 내비게이션에 사용
                    </p>
                  </li>
                  <li>
                    <strong>바닥 드로어(Bottom Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      화면 아래에서 위로 슬라이드, 추가 액션이나 컨텐츠에 사용
                    </p>
                  </li>
                  <li>
                    <strong>상단 드로어(Top Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      화면 위에서 아래로 슬라이드, 알림이나 검색에 사용
                    </p>
                  </li>
                  <li>
                    <strong>임시 드로어(Temporary Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      햄버거 아이콘으로 임시로 열고 오버레이 클릭으로 닫힘
                    </p>
                  </li>
                  <li>
                    <strong>영구 드로어(Permanent Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      항상 화면에 표시되고 닫히지 않음 (주로 데스크톱에서 사용)
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">사용 패턴</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>모바일 내비게이션 메뉴</li>
                  <li>필터 및 정렬 액션</li>
                  <li>설정 패널</li>
                  <li>사용자 프로필 드로어</li>
                  <li>추가 정보 및 상세 설명</li>
                  <li>미니 장바구니</li>
                  <li>알림 필터</li>
                  <li>사이드바 내비게이션</li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                개발자 권장사항
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>명확한 계층 구조</strong>
                  <p className="text-sm">
                    드로어는 메인 콘텐츠에 비해 덜 중요한 느낌을 주어야 합니다
                  </p>
                </li>
                <li>
                  <strong>직관적인 인터페이스</strong>
                  <p className="text-sm">
                    열고 닫는 부드럽고 자연스러운 인터페이스 제공
                  </p>
                </li>
                <li>
                  <strong>적절한 크기</strong>
                  <p className="text-sm">
                    화면의 부분적인 영역을 차지하여 컨텍스트 유지
                  </p>
                </li>
                <li>
                  <strong>명확한 닫기 방법</strong>
                  <p className="text-sm">
                    닫기 버튼, 오버레이 영역 또는 스와이프 제스처 등 다양한 닫기
                    옵션 제공
                  </p>
                </li>
                <li>
                  <strong>상태 변환 시</strong>
                  <p className="text-sm">
                    열리거나 닫힐 때 부드러운 애니메이션으로 상태 변환 표시
                  </p>
                </li>
                <li>
                  <strong>콘텐츠 구성</strong>
                  <p className="text-sm">
                    중요도에 따라 콘텐츠를 구성하고 스크롤이 필요한 경우 분명한
                    스크롤 표시
                  </p>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <div className="overflow-x-auto rounded-lg">
                <PrismCode code={getReactCode()} language="typescript" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="mb-8">
              <div className="flex justify-between mb-4 gap-4">
                <button
                  onClick={toggleLeftDrawer}
                  className="flex items-center gap-2 px-4 py-2 bg-[#49bcf3] text-white rounded-lg hover:bg-[#49bcf3]/90"
                >
                  <Menu className="w-5 h-5" />
                  왼쪽 드로어 열기
                </button>

                <button
                  onClick={toggleRightDrawer}
                  className="flex items-center gap-2 px-4 py-2 bg-[#49bcf3] text-white rounded-lg hover:bg-[#49bcf3]/90"
                >
                  설정 패널 열기
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-gray-100 h-80 rounded-lg overflow-hidden shadow-md">
                {/* 왼쪽 드로어 */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isLeftDrawerOpen ? "translate-x-0" : "-translate-x-full"
                  } z-10`}
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-medium">내비게이션</h3>
                    <button
                      onClick={toggleLeftDrawer}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <nav className="p-2">
                    <ul className="space-y-1">
                      {menuItems.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveMenuItem(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left ${
                              activeMenuItem === item.id
                                ? "bg-[#49bcf3]/10 text-[#49bcf3]"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                          </button>
                        </li>
                      ))}

                      <li className="mt-6">
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-red-500 hover:bg-red-50">
                          <LogOut className="w-5 h-5" />
                          <span>로그아웃</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* 오른쪽 드로어 */}
                <div
                  className={`absolute top-0 right-0 bottom-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isRightDrawerOpen ? "translate-x-0" : "translate-x-full"
                  } z-10`}
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-medium">설정 패널</h3>
                    <button
                      onClick={toggleRightDrawer}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-1">
                          알림 설정
                        </label>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">푸시 알림</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#49bcf3]"></div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium block mb-1">
                          테마
                        </label>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white border rounded-full"></button>
                          <button className="w-8 h-8 bg-gray-900 border rounded-full"></button>
                          <button className="w-8 h-8 bg-[#49bcf3] border rounded-full"></button>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium block mb-1">
                          글자 크기
                        </label>
                        <input
                          type="range"
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#49bcf3]"
                          min="1"
                          max="3"
                          step="1"
                          defaultValue="2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 메인 콘텐츠 */}
                <div className="p-4 h-full">
                  <header className="flex justify-between items-center mb-6">
                    <button
                      onClick={toggleLeftDrawer}
                      className="p-2 rounded-md hover:bg-gray-200"
                    >
                      <Menu className="w-5 h-5" />
                    </button>

                    <h2 className="font-semibold">앱 이름</h2>

                    <button
                      onClick={toggleRightDrawer}
                      className="p-2 rounded-md hover:bg-gray-200"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  </header>

                  <div className="p-4 text-center">
                    <p>
                      메뉴(햄버거 아이콘) 또는 설정 아이콘을 클릭하여
                      <br />
                      드로어를 열어보세요
                    </p>
                    <p className="text-gray-500 mt-2 text-sm">
                      좌우에서 드로어가 슬라이드 애니메이션으로 나타납니다{" "}
                    </p>

                    <div className="mt-8">
                      <p className="font-medium">활성 메뉴 항목:</p>
                      <p className="text-[#49bcf3] mt-1">
                        {menuItems.find((item) => item.id === activeMenuItem)
                          ?.label || "홈"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 드로어 오버레이 */}
                {(isLeftDrawerOpen || isRightDrawerOpen) && (
                  <div
                    className="absolute inset-0 bg-black/20 z-0"
                    onClick={() => {
                      setIsLeftDrawerOpen(false);
                      setIsRightDrawerOpen(false);
                    }}
                  ></div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
