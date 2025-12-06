"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Settings,
  User,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    { id: "home", label: "??, icon: Home },
    { id: "profile", label: "?„ë¡œ??, icon: User },
    { id: "settings", label: "?¤ì •", icon: Settings },
    { id: "help", label: "?„ì?ë§?, icon: HelpCircle },
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
    { id: 'home', label: '??, icon: Home },
    { id: 'profile', label: '?„ë¡œ??, icon: User },
    { id: 'settings', label: '?¤ì •', icon: Settings },
    { id: 'help', label: '?„ì?ë§?, icon: HelpCircle },
  ];

  const handleMenuItemClick = (itemId: string) => {
    setActiveMenuItem(itemId);
    setIsDrawerOpen(false); // ?œë¡œ???«ê¸°
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="ë©”ë‰´ ?´ê¸°"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <h1 className="text-xl font-semibold">???€?´í?</h1>
          
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
              aria-label="?œë¡œ???«ê¸°"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-[#49bcf3]" />
            </div>
            <h3 className="text-lg font-medium">?¬ìš©???´ë¦„</h3>
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
              onClick={() => console.log('ë¡œê·¸?„ì›ƒ')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">ë¡œê·¸?„ì›ƒ</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {menuItems.find(item => item.id === activeMenuItem)?.label || '??} ?”ë©´
          </h2>
          <p className="text-gray-600 mt-2">
            ?„ë²„ê±?ë©”ë‰´ë¥??´ë¦­?˜ì—¬ ?´ë¹„ê²Œì´???œë¡œ?´ë? ?´ì–´ë³´ì„¸??
          </p>
        </div>
      </main>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={toggleDrawer}
          aria-label="?œë¡œ???«ê¸°"
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
          
          <h1 className="text-xl font-semibold">???€?´í?</h1>
          
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="?¤ì • ?´ê¸°"
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
          <h2 className="text-lg font-semibold">?¤ì • ?¨ë„</h2>
          <button
            onClick={toggleDrawer}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="?¤ì • ?«ê¸°"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Content */}
        <div className="p-4 space-y-6">
          {/* ?Œë¦¼ ?¤ì • */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">?Œë¦¼ ?¤ì •</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-gray-600" />
                <span className="text-sm">?¸ì‹œ ?Œë¦¼</span>
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

          {/* ?Œë§ˆ ?¤ì • */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">?Œë§ˆ</h3>
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

          {/* ê¸€ê¼??¬ê¸° */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">ê¸€ê¼??¬ê¸°</h3>
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
                <span>?‘ê²Œ</span>
                <span>ë³´í†µ</span>
                <span>?¬ê²Œ</span>
              </div>
            </div>
          </div>

          {/* ë¯¸ë¦¬ë³´ê¸° */}
          <div className="pt-4 border-t">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">ë¯¸ë¦¬ë³´ê¸°</h3>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p 
                className={\`text-gray-800 \${
                  fontSize === 1 ? 'text-sm' : fontSize === 2 ? 'text-base' : 'text-lg'
                }\`}
              >
                ?¤ì •??ê¸€ê¼??¬ê¸°ë¡??œì‹œ?˜ëŠ” ?ìŠ¤?¸ì…?ˆë‹¤.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">ë©”ì¸ ì½˜í…ì¸?/h2>
          <p className="text-gray-600 mt-2">
            ?¤ì • ë²„íŠ¼???´ë¦­?˜ì—¬ ?¤ì • ?¨ë„???´ì–´ë³´ì„¸??
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <p>?Œë¦¼: {pushNotifications ? 'ì¼œì§' : 'êº¼ì§'}</p>
            <p>?Œë§ˆ: {theme}</p>
            <p>ê¸€ê¼??¬ê¸°: {fontSize === 1 ? '?‘ê²Œ' : fontSize === 2 ? 'ë³´í†µ' : '?¬ê²Œ'}</p>
          </div>
        </div>
      </main>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={toggleDrawer}
          aria-label="?¤ì • ?«ê¸°"
        />
      )}
    </div>
  );
};

export default SettingsDrawerExample;`;
    }
  };

  return (
    <SlideLayout title="Drawer (?œë¡œ??">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-3">?•ì˜</h2>
              <p>
                ?œë¡œ??Drawer)???”ë©´ ê°€?¥ìë¦¬ì—???¬ë¼?´ë”©?˜ì—¬ ?˜í??˜ëŠ” ?¨ë„ë¡?
                ì£¼ë¡œ ?´ë¹„ê²Œì´?˜ì´??ì¶”ê? ì»¨íŠ¸ë¡¤ì„ ?„í•´ ?¬ìš©?©ë‹ˆ?? ?¼ë°˜?ìœ¼ë¡?                ?„ë²„ê±?ë©”ë‰´ ?„ì´ì½˜ì´???¬ë¼?´ë“œ ?œìŠ¤ì²˜ë¡œ ?´ê³  ?«ì„ ???ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?œë¡œ??ì¢…ë¥˜</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>ì¸¡ë©´ ?œë¡œ??Side Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      ?”ë©´ ì¢Œì¸¡ ?ëŠ” ?°ì¸¡?ì„œ ?¬ë¼?´ë“œ, ì£¼ë¡œ ?´ë¹„ê²Œì´?˜ì— ?¬ìš©
                    </p>
                  </li>
                  <li>
                    <strong>ë°”í? ?œë¡œ??Bottom Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      ?”ë©´ ?„ë˜?ì„œ ?„ë¡œ ?¬ë¼?´ë“œ, ì¶”ê? ?µì…˜?´ë‚˜ ì»¨í…ì¸ ì— ?¬ìš©
                    </p>
                  </li>
                  <li>
                    <strong>?ë‹¨ ?œë¡œ??Top Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      ?”ë©´ ?„ì—???„ë˜ë¡??¬ë¼?´ë“œ, ?Œë¦¼?´ë‚˜ ê²€?‰ì— ?¬ìš©
                    </p>
                  </li>
                  <li>
                    <strong>?„ì‹œ ?œë¡œ??Temporary Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      ?¤ë²„?ˆì´ë¡??œì‹œ?˜ê³  ?¸ë? ?´ë¦­?¼ë¡œ ?«í˜
                    </p>
                  </li>
                  <li>
                    <strong>?êµ¬ ?œë¡œ??Permanent Drawer)</strong>
                    <p className="text-sm text-gray-600">
                      ??ƒ ?”ë©´???œì‹œ?˜ê³  ?‘íˆì§€ ?ŠìŒ (ì£¼ë¡œ ?°ìŠ¤?¬íƒ‘?ì„œ ?¬ìš©)
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?¬ìš© ?¨í„´</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>ëª¨ë°”???´ë¹„ê²Œì´??ë©”ë‰´</li>
                  <li>?„í„° ë°??•ë ¬ ?µì…˜</li>
                  <li>?¤ì • ?¨ë„</li>
                  <li>?¬ìš©???„ë¡œ???œë¡œ??/li>
                  <li>ì¶”ê? ?•ë³´ ë°??ì„¸ ?¤ëª…</li>
                  <li>ë¯¸ë‹ˆ ?¥ë°”êµ¬ë‹ˆ</li>
                  <li>?Œë¦¼ ?¼í„°</li>
                  <li>?ˆì´?´ë“œ ?´ë¹„ê²Œì´??/li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                ?”ì??ê¶Œì¥?¬í•­
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>ëª…í™•??ê³„ì¸µ êµ¬ì¡°</strong>
                  <p className="text-sm">
                    ?œë¡œ?´ëŠ” ë©”ì¸ ì½˜í…ì¸??„ì— ???ˆëŠ” ?ë‚Œ??ì£¼ì–´????                  </p>
                </li>
                <li>
                  <strong>ì§ê??ì¸ ?œìŠ¤ì²?/strong>
                  <p className="text-sm">
                    ?¤ì??´í”„ë¡??´ê³  ?«ì„ ???ˆëŠ” ?ì—°?¤ëŸ¬???œìŠ¤ì²?ì§€??                  </p>
                </li>
                <li>
                  <strong>?ì ˆ???¬ê¸°</strong>
                  <p className="text-sm">
                    ?”ë©´??ë¶€ë¶„ì ???ì—­??ì°¨ì??˜ì—¬ ì»¨í…?¤íŠ¸ ? ì?
                  </p>
                </li>
                <li>
                  <strong>ëª…í™•???«ê¸° ë°©ë²•</strong>
                  <p className="text-sm">
                    ?«ê¸° ë²„íŠ¼, ?¸ë? ?ì—­ ?? ë°??¤ì??´í”„ ???¤ì–‘???«ê¸° ?µì…˜
                    ?œê³µ
                  </p>
                </li>
                <li>
                  <strong>?íƒœ ë³€???œì‹œ</strong>
                  <p className="text-sm">
                    ?´ë¦¬ê³??«í ??ë¶€?œëŸ¬??? ë‹ˆë©”ì´?˜ìœ¼ë¡??íƒœ ë³€???œì‹œ
                  </p>
                </li>
                <li>
                  <strong>?´ìš© êµ¬ì„±</strong>
                  <p className="text-sm">
                    ì¤‘ìš”?„ì— ?°ë¼ ?´ìš©??êµ¬ì„±?˜ê³  ?¤í¬ë¡¤ì´ ?„ìš”??ê²½ìš° ë¶„ëª…??                    ?¤í¬ë¡??œì‹œ
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
                  ?¼ìª½ ?œë¡œ???´ê¸°
                </button>

                <button
                  onClick={toggleRightDrawer}
                  className="flex items-center gap-2 px-4 py-2 bg-[#49bcf3] text-white rounded-lg hover:bg-[#49bcf3]/90"
                >
                  ?¤ì • ?¨ë„ ?´ê¸°
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-gray-100 h-80 rounded-lg overflow-hidden shadow-md">
                {/* ?¼ìª½ ?œë¡œ??*/}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isLeftDrawerOpen ? "translate-x-0" : "-translate-x-full"
                  } z-10`}
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-medium">?´ë¹„ê²Œì´??/h3>
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
                          <span>ë¡œê·¸?„ì›ƒ</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* ?¤ë¥¸ìª??œë¡œ??*/}
                <div
                  className={`absolute top-0 right-0 bottom-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isRightDrawerOpen ? "translate-x-0" : "translate-x-full"
                  } z-10`}
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-medium">?¤ì • ?¨ë„</h3>
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
                          ?Œë¦¼ ?¤ì •
                        </label>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">?¸ì‹œ ?Œë¦¼</span>
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
                          ?Œë§ˆ
                        </label>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white border rounded-full"></button>
                          <button className="w-8 h-8 bg-gray-900 border rounded-full"></button>
                          <button className="w-8 h-8 bg-[#49bcf3] border rounded-full"></button>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium block mb-1">
                          ê¸€ê¼??¬ê¸°
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

                {/* ë©”ì¸ ì½˜í…ì¸?*/}
                <div className="p-4 h-full">
                  <header className="flex justify-between items-center mb-6">
                    <button
                      onClick={toggleLeftDrawer}
                      className="p-2 rounded-md hover:bg-gray-200"
                    >
                      <Menu className="w-5 h-5" />
                    </button>

                    <h2 className="font-semibold">???€?´í?</h2>

                    <button
                      onClick={toggleRightDrawer}
                      className="p-2 rounded-md hover:bg-gray-200"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  </header>

                  <div className="p-4 text-center">
                    <p>
                      ë©”ë‰´(?„ë²„ê±? ?„ì´ì½˜ì´???¤ì • ?„ì´ì½˜ì„ ?´ë¦­?˜ì—¬
                      <br />
                      ?œë¡œ?´ë? ?´ì–´ë³´ì„¸??
                    </p>
                    <p className="text-gray-500 mt-2 text-sm">
                      ì¢Œìš°?ì„œ ?œë¡œ?´ê? ?¬ë¼?´ë“œ?©ë‹ˆ??                    </p>

                    <div className="mt-8">
                      <p className="font-medium">?œì„± ë©”ë‰´ ??ª©:</p>
                      <p className="text-[#49bcf3] mt-1">
                        {menuItems.find((item) => item.id === activeMenuItem)
                          ?.label || "?†ìŒ"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ?œë¡œ???¤ë²„?ˆì´ */}
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
