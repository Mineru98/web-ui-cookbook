"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import {
  Home,
  Search,
  Heart,
  User,
  ShoppingBag,
  Bell,
  Settings,
  List,
} from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BottomNavigationSlide() {
  const [activeTab, setActiveTab] = useState("home");
  const [style, setStyle] = useState<
    "default" | "labeled" | "shifting" | "icon-only" | "badge"
  >("default");

  const navigationItems = [
    { id: "home", label: "??, icon: Home },
    { id: "search", label: "ê²€??, icon: Search },
    { id: "favorites", label: "ê´€??, icon: Heart, badge: 2 },
    { id: "profile", label: "?„ë¡œ??, icon: User },
  ];

  const shiftingItems = [
    { id: "home", label: "??, icon: Home },
    { id: "search", label: "ê²€??, icon: Search },
    { id: "cart", label: "?¥ë°”êµ¬ë‹ˆ", icon: ShoppingBag, badge: 3 },
    { id: "notifications", label: "?Œë¦¼", icon: Bell, badge: 5 },
    { id: "settings", label: "?¤ì •", icon: Settings },
  ];

  const renderBottomNavigation = () => {
    switch (style) {
      case "labeled":
        return (
          <div className="bg-white shadow-lg border-t rounded-t-xl">
            <div className="flex items-center justify-around">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex flex-col items-center justify-center p-3 flex-1 ${
                    activeTab === item.id ? "text-[#49bcf3]" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case "shifting":
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {shiftingItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center justify-center p-3 flex-1 transition-all duration-300 ${
                    activeTab === item.id
                      ? "text-[#49bcf3] scale-110"
                      : "text-gray-400 scale-90"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="relative">
                    <item.icon className="w-6 h-6" />
                    {item.badge && activeTab === item.id && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  {activeTab === item.id && (
                    <span className="text-xs font-medium ml-1.5">
                      {item.label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case "icon-only":
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center justify-center p-3 flex-1 ${
                    activeTab === item.id ? "text-[#49bcf3]" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        );

      case "badge":
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex flex-col items-center justify-center p-3 flex-1 ${
                    activeTab === item.id ? "text-[#49bcf3]" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="relative">
                    <item.icon className="w-6 h-6" />
                    {item.badge && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-medium mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      default: // default
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex flex-col items-center justify-center p-3 flex-1 ${
                    activeTab === item.id
                      ? "text-[#49bcf3] border-t-2 border-[#49bcf3]"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <SlideLayout title="Bottom Navigation (?˜ë‹¨ ?´ë¹„ê²Œì´??">
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
                ?˜ë‹¨ ?´ë¹„ê²Œì´?˜ì? ëª¨ë°”???±ì—???”ë©´ ?˜ë‹¨???„ì¹˜?˜ëŠ” ?´ë¹„ê²Œì´??                ë°”ë¡œ, ?±ì˜ ì£¼ìš” ?ìƒ‰ ê¸°ëŠ¥???œê³µ?©ë‹ˆ?? ?¬ìš©?ê? ???ìœ¼ë¡??½ê²Œ
                ?‘ê·¼?????ˆëŠ” ?ì—­??ì£¼ìš” ê¸°ëŠ¥??ë°°ì¹˜?˜ì—¬ ?¬ìš©?±ì„ ?’ì´??UI
                ?¨í„´?…ë‹ˆ??
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?¤í???ê°€?´ë“œ</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>ê¸°ë³¸??(Default)</strong>
                    <p className="text-sm text-gray-600">
                      ?„ì´ì½˜ê³¼ ?ìŠ¤??ì¡°í•©, ?œì„± ??? ê°•ì¡°?œì‹œ
                    </p>
                  </li>
                  <li>
                    <strong>?¼ë²¨??(Labeled)</strong>
                    <p className="text-sm text-gray-600">
                      ?„ì´ì½˜ê³¼ ?ìŠ¤?¸ê? ??êµ¬ë¶„?˜ë„ë¡?ë°°ì¹˜
                    </p>
                  </li>
                  <li>
                    <strong>?œí”„?…í˜• (Shifting)</strong>
                    <p className="text-sm text-gray-600">
                      ?œì„± ??´ ?•ì¥?˜ê³  ?˜ë¨¸ì§€??ì¶•ì†Œ, ???ˆì´ë¸”ì? ?œì„± ??—ë§?                      ?œì‹œ
                    </p>
                  </li>
                  <li>
                    <strong>?„ì´ì½??„ìš© (Icon-only)</strong>
                    <p className="text-sm text-gray-600">
                      ê³µê°„ ?ˆì•½???„í•´ ?„ì´ì½˜ë§Œ ?¬ìš©?˜ëŠ” ìµœì†Œ?œì˜ ?”ì??                    </p>
                  </li>
                  <li>
                    <strong>ë°°ì???(Badge)</strong>
                    <p className="text-sm text-gray-600">
                      ?Œë¦¼?´ë‚˜ ì¹´ìš´?°ë? ?œì‹œ?˜ëŠ” ë°°ì?ê°€ ?¬í•¨???”ì??                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?”ì??ì§€ì¹?/h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>3-5ê°???ª©?¼ë¡œ ?œí•œ (?ˆë¬´ ë§ìœ¼ë©??ìƒ‰???´ë ¤?€)</li>
                  <li>?±ì˜ ?µì‹¬ ê¸°ëŠ¥??ì§‘ì¤‘</li>
                  <li>ëª…í™•???„ì´ì½˜ê³¼ ?ˆì´ë¸??¬ìš©</li>
                  <li>?„ì¬ ?„ì¹˜ë¥?ëª…í™•???œì‹œ</li>
                  <li>?°ì¹˜ ?ì—­ ì¶©ë¶„???•ë³´ (ìµœì†Œ 48x48dp)</li>
                  <li>?¸ë¡œ ë°©í–¥(portrait) ?¬ìš© ???í•©</li>
                  <li>?¤í¬ë¡????ë™ ?¨ê? ê³ ë ¤</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">?¬ìš© ?ˆì‹œ</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>?Œì…œ ë¯¸ë””????/li>
                  <li>?¼í•‘ ??/li>
                  <li>?´ìŠ¤/ì»¨í…ì¸???/li>
                  <li>ë©€??ê¸°ëŠ¥ ??/li>
                  <li>?ìƒ‰??ì¤‘ìš”????/li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                êµ¬í˜„ ë°??‘ê·¼??              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>?„ì´ì½˜ê³¼ ?ìŠ¤?¸ë? ?¨ê»˜ ?¬ìš©?˜ì—¬ ?´í•´???¥ìƒ</li>
                <li>???„í™˜ ??ë¶€?œëŸ¬??? ë‹ˆë©”ì´???ìš©</li>
                <li>ì»¬ëŸ¬ ?€ë¹?ì¶©ë¶„???•ë³´</li>
                <li>?¤í¬ë¦?ë¦¬ë” ì§€?ì„ ?„í•œ ?ì ˆ??aria ?ì„± ?ìš©</li>
                <li>?œìŠ¤ì²?ì§€??(?¤ì??´í”„ë¡????„í™˜)</li>
                <li>??ë²„íŠ¼?´ë‚˜ ?¤ë¡œ ê°€ê¸°ì— ?€???¼ê???ì²˜ë¦¬</li>
                <li>?”ë©´ ?¬ê¸°???°ë¥¸ ë°˜ì‘???€??/li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { Home, Search, Heart, User, ShoppingBag, Bell, Settings } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const BottomNavigationExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [style, setStyle] = useState<'default' | 'labeled' | 'shifting' | 'icon-only' | 'badge'>('default');

  // ê¸°ë³¸ ?´ë¹„ê²Œì´???„ì´??  const navigationItems: NavigationItem[] = [
    { id: 'home', label: '??, icon: Home },
    { id: 'search', label: 'ê²€??, icon: Search },
    { id: 'favorites', label: 'ê´€??, icon: Heart, badge: 2 },
    { id: 'profile', label: '?„ë¡œ??, icon: User },
  ];

  // ?œí”„???¤í??¼ìš© ?„ì´??  const shiftingItems: NavigationItem[] = [
    { id: 'home', label: '??, icon: Home },
    { id: 'search', label: 'ê²€??, icon: Search },
    { id: 'cart', label: '?¥ë°”êµ¬ë‹ˆ', icon: ShoppingBag, badge: 3 },
    { id: 'notifications', label: '?Œë¦¼', icon: Bell, badge: 5 },
    { id: 'settings', label: '?¤ì •', icon: Settings },
  ];

  const renderBottomNavigation = () => {
    const items = style === 'shifting' ? shiftingItems : navigationItems;

    switch (style) {
      case 'labeled':
        return (
          <div className="bg-white shadow-lg border-t rounded-t-xl">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={\`flex flex-col items-center justify-center p-3 flex-1 \${
                    activeTab === item.id 
                      ? 'text-[#49bcf3]' 
                      : 'text-gray-500'
                  }\`}
                  onClick={() => setActiveTab(item.id)}
                  aria-label={item.label}
                >
                  <item.icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 'shifting':
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {shiftingItems.map(item => (
                <button
                  key={item.id}
                  className={\`flex items-center justify-center p-3 flex-1 transition-all duration-300 \${
                    activeTab === item.id 
                      ? 'text-[#49bcf3] scale-110' 
                      : 'text-gray-400 scale-90'
                  }\`}
                  onClick={() => setActiveTab(item.id)}
                  aria-label={item.label}
                >
                  <div className="relative">
                    <item.icon className="w-6 h-6" />
                    {item.badge && activeTab === item.id && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  {activeTab === item.id && (
                    <span className="text-xs font-medium ml-1.5">{item.label}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 'icon-only':
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={\`flex items-center justify-center p-3 flex-1 \${
                    activeTab === item.id 
                      ? 'text-[#49bcf3]' 
                      : 'text-gray-400'
                  }\`}
                  onClick={() => setActiveTab(item.id)}
                  aria-label={item.label}
                >
                  <item.icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        );

      case 'badge':
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={\`flex flex-col items-center justify-center p-3 flex-1 \${
                    activeTab === item.id 
                      ? 'text-[#49bcf3]' 
                      : 'text-gray-500'
                  }\`}
                  onClick={() => setActiveTab(item.id)}
                  aria-label={item.label}
                >
                  <div className="relative">
                    <item.icon className="w-6 h-6" />
                    {item.badge && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-medium mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      default: // default
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={\`flex flex-col items-center justify-center p-3 flex-1 \${
                    activeTab === item.id 
                      ? 'text-[#49bcf3] border-t-2 border-[#49bcf3]' 
                      : 'text-gray-500'
                  }\`}
                  onClick={() => setActiveTab(item.id)}
                  aria-label={item.label}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* App Bar */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold">?˜ë‹¨ ?´ë¹„ê²Œì´???ˆì‹œ</h1>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as any)}
            className="text-sm border rounded px-2 py-1"
          >
            <option value="default">ê¸°ë³¸??/option>
            <option value="labeled">?¼ë²¨??/option>
            <option value="shifting">?œí”„?…í˜•</option>
            <option value="icon-only">?„ì´ì½??„ìš©</option>
            <option value="badge">ë°°ì???/option>
          </select>
        </div>
      </header>

      {/* Body Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          {/* Dynamic Icon Display */}
          <div className="text-6xl text-[#49bcf3] mb-4">
            {activeTab === 'home' && <Home className="w-16 h-16 mx-auto" />}
            {activeTab === 'search' && <Search className="w-16 h-16 mx-auto" />}
            {activeTab === 'favorites' && <Heart className="w-16 h-16 mx-auto" />}
            {activeTab === 'profile' && <User className="w-16 h-16 mx-auto" />}
            {activeTab === 'cart' && <ShoppingBag className="w-16 h-16 mx-auto" />}
            {activeTab === 'notifications' && <Bell className="w-16 h-16 mx-auto" />}
            {activeTab === 'settings' && <Settings className="w-16 h-16 mx-auto" />}
          </div>
          
          <h2 className="text-xl font-semibold mb-2">?„ì¬ ? íƒ???? {activeTab}</h2>
          <p className="text-gray-500">?„ì¬ ?¤í??? {style}</p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0">
        {renderBottomNavigation()}
      </footer>
    </div>
  );
};

export default BottomNavigationExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="mb-8 space-y-4">
              <div className="flex justify-center mb-4">
                <div className="flex gap-2">
                  <button
                    className={`px-3 py-1.5 rounded text-sm ${
                      style === "default"
                        ? "bg-[#49bcf3] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setStyle("default")}
                  >
                    ê¸°ë³¸??                  </button>
                  <button
                    className={`px-3 py-1.5 rounded text-sm ${
                      style === "labeled"
                        ? "bg-[#49bcf3] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setStyle("labeled")}
                  >
                    ?¼ë²¨??                  </button>
                  <button
                    className={`px-3 py-1.5 rounded text-sm ${
                      style === "shifting"
                        ? "bg-[#49bcf3] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setStyle("shifting")}
                  >
                    ?œí”„?…í˜•
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded text-sm ${
                      style === "icon-only"
                        ? "bg-[#49bcf3] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setStyle("icon-only")}
                  >
                    ?„ì´ì½??„ìš©
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded text-sm ${
                      style === "badge"
                        ? "bg-[#49bcf3] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setStyle("badge")}
                  >
                    ë°°ì???                  </button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden bg-gray-100 shadow-md">
                {/* ëª¨ë°”?????„ë ˆ??*/}
                <div className="relative h-96">
                  {/* ??ì½˜í…ì¸??ì—­ */}
                  <div className="absolute inset-0 p-4 overflow-y-auto pb-16">
                    <div className="flex items-center mb-4">
                      <List className="w-6 h-6 mr-2" />
                      <h3 className="font-medium">
                        {navigationItems.find((i) => i.id === activeTab)
                          ?.label ||
                          shiftingItems.find((i) => i.id === activeTab)
                            ?.label}{" "}
                        ?”ë©´
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4">
                      ?„ì¬ ? íƒ???? <strong>{activeTab}</strong>
                    </p>

                    <div className="space-y-2 pb-4">
                      <div className="h-16 bg-white rounded-lg shadow-sm border p-4">
                        ì½˜í…ì¸???ª© 1
                      </div>
                      <div className="h-16 bg-white rounded-lg shadow-sm border p-4">
                        ì½˜í…ì¸???ª© 2
                      </div>
                      <div className="h-16 bg-white rounded-lg shadow-sm border p-4">
                        ì½˜í…ì¸???ª© 3
                      </div>
                      <div className="h-16 bg-white rounded-lg shadow-sm border p-4">
                        ì½˜í…ì¸???ª© 4
                      </div>
                      <div className="h-16 bg-white rounded-lg shadow-sm border p-4">
                        ì½˜í…ì¸???ª© 5
                      </div>
                    </div>
                  </div>

                  {/* ë°”í? ?´ë¹„ê²Œì´??*/}
                  <div className="absolute bottom-0 left-0 right-0">
                    {renderBottomNavigation()}
                  </div>
                </div>
              </div>

              <p className="text-sm text-center text-gray-500">
                ?¤ë¥¸ ?¤í??¼ì„ ?´ë¦­?´ë³´?¸ìš”
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
