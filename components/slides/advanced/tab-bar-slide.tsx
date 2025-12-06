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
    { id: "recent", label: "ìµœê·¼", icon: Clock },
    { id: "saved", label: "?€?¥ë¨", icon: Bookmark },
    { id: "explore", label: "?ìƒ‰", icon: Compass },
    { id: "profile", label: "?„ë¡œ??, icon: User },
  ];

  const longTabItems = [
    { id: "recent", label: "ìµœê·¼ ??ª©" },
    { id: "saved", label: "?€?¥ëœ ??ª©" },
    { id: "explore", label: "?ìƒ‰?˜ê¸°" },
    { id: "popular", label: "?¸ê¸° ?ˆëŠ” ??ª©" },
    { id: "trending", label: "?¸ë Œ????ª©" },
    { id: "recommend", label: "ì¶”ì²œ ??ª©" },
    { id: "favorites", label: "ì¦ê²¨ì°¾ê¸°" },
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
                        ? "text-[#49bcf3] border-b-2 border-[#49bcf3]"
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
                      ? "text-[#49bcf3]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="flex flex-col items-center">
                    <tab.icon className="h-5 w-5 mb-1" />
                    {tab.label}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#49bcf3]"></div>
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
                    ? "bg-white shadow text-[#49bcf3]"
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
                        ? "text-[#49bcf3]"
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
                className="absolute bottom-0 h-0.5 bg-[#49bcf3] transition-all duration-300"
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
                      ? "text-[#49bcf3] border-b-2 border-[#49bcf3]"
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

// ?¬ìš© ?ˆì‹œ
const BasicTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "ìµœê·¼", icon: Clock },
    { id: "saved", label: "?€?¥ë¨", icon: Bookmark },
    { id: "explore", label: "?ìƒ‰", icon: Compass },
    { id: "profile", label: "?„ë¡œ??, icon: User },
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
            {tabItems.find(tab => tab.id === activeTab)?.label} ??          </h3>
          <p className="text-gray-600">
            ? íƒ???? {activeTab}
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

// ?¬ìš© ?ˆì‹œ
const ScrollableTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const longTabItems = [
    { id: "recent", label: "ìµœê·¼ ??ª©" },
    { id: "saved", label: "?€?¥ëœ ??ª©" },
    { id: "explore", label: "?ìƒ‰?˜ê¸°" },
    { id: "popular", label: "?¸ê¸° ?ˆëŠ” ??ª©" },
    { id: "trending", label: "?¸ë Œ????ª©" },
    { id: "recommend", label: "ì¶”ì²œ ??ª©" },
    { id: "favorites", label: "ì¦ê²¨ì°¾ê¸°" },
    { id: "bookmarks", label: "ë¶ë§ˆ?? },
    { id: "history", label: "ê¸°ë¡" },
    { id: "settings", label: "?¤ì •" },
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
            ? íƒ???? {activeTab}
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

// ?¬ìš© ?ˆì‹œ
const UnderlineTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "ìµœê·¼", icon: Clock },
    { id: "saved", label: "?€?¥ë¨", icon: Bookmark },
    { id: "explore", label: "?ìƒ‰", icon: Compass },
    { id: "profile", label: "?„ë¡œ??, icon: User },
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
            {tabItems.find(tab => tab.id === activeTab)?.label} ??          </h3>
          <p className="text-gray-600">
            ?„ì´ì½˜ê³¼ ?ìŠ¤?¸ê? ?¸ë¡œë¡?ë°°ì¹˜???¸ë”?¼ì¸ ?¤í???          </p>
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

// ?¬ìš© ?ˆì‹œ
const PillTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "ìµœê·¼", icon: Clock },
    { id: "saved", label: "?€?¥ë¨", icon: Bookmark },
    { id: "explore", label: "?ìƒ‰", icon: Compass },
    { id: "profile", label: "?„ë¡œ??, icon: User },
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
            {tabItems.find(tab => tab.id === activeTab)?.label} ??          </h3>
          <p className="text-gray-600">
            ?¥ê·¼ ë°°ê²½???ˆëŠ” ?Œì•½ ëª¨ì–‘????ë°?          </p>
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

// ?¬ìš© ?ˆì‹œ
const MaterialTabBarExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabItems = [
    { id: "recent", label: "ìµœê·¼", icon: Clock },
    { id: "saved", label: "?€?¥ë¨", icon: Bookmark },
    { id: "explore", label: "?ìƒ‰", icon: Compass },
    { id: "profile", label: "?„ë¡œ??, icon: User },
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
            {tabItems.find(tab => tab.id === activeTab)?.label} ??          </h3>
          <p className="text-gray-600">
            ë¶€?œëŸ½ê²??¬ë¼?´ë”©?˜ëŠ” ?¸ë””ì¼€?´í„°ê°€ ?ˆëŠ” Material Design ?¤í???          </p>
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
    <SlideLayout title="??ë°?(Tab Bar)">
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
                ??ë°?Tab Bar)???™ì¼??ê³„ì¸µ ?´ì—???¬ëŸ¬ ?”ë©´ ?ëŠ” ì½˜í…ì¸??¹ì…˜
                ê°??„í™˜???„í•œ ?´ë¹„ê²Œì´??ì»´í¬?ŒíŠ¸?…ë‹ˆ?? ?¬ìš©?ê? ?½ê²Œ ê´€??                ì½˜í…ì¸?ê°„ì„ ?´ë™?????ˆë„ë¡?ì¹´í…Œê³ ë¦¬ë³„ë¡œ êµ¬ë¶„??ì§ê??ì¸
                ?¸í„°?˜ì´?¤ë? ?œê³µ?©ë‹ˆ??
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">??ë°??¤í???/h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>ê¸°ë³¸??(Basic)</strong>
                    <p className="text-sm text-gray-600">
                      ?¼ë°˜?ì¸ ?ìŠ¤???? ?˜ë‹¨ ?¸ë””ì¼€?´í„°ë¡??œì„± ???œì‹œ
                    </p>
                  </li>
                  <li>
                    <strong>?„ì´ì½??¸ë”?¼ì¸??(Underline)</strong>
                    <p className="text-sm text-gray-600">
                      ?„ì´ì½˜ê³¼ ?ìŠ¤??ê²°í•©, ?˜ë‹¨???¸ë”?¼ì¸ ?¸ë””ì¼€?´í„° ?œì‹œ
                    </p>
                  </li>
                  <li>
                    <strong>?¤í¬ë¡¤í˜• (Scrollable)</strong>
                    <p className="text-sm text-gray-600">
                      ë§ì? ??´ ?ˆì„ ??ê°€ë¡œë¡œ ?¤í¬ë¡?ê°€?¥í•œ ?•ì‹
                    </p>
                  </li>
                  <li>
                    <strong>????˜• (Pills)</strong>
                    <p className="text-sm text-gray-600">
                      ?¥ê·¼ ëª¨ì„œë¦??•íƒœë¡??„ì²´ ë°°ê²½ ê°•ì¡°?˜ëŠ” ?•ì‹
                    </p>
                  </li>
                  <li>
                    <strong>ë¨¸í‹°ë¦¬ì–¼??(Material)</strong>
                    <p className="text-sm text-gray-600">
                      ? ë‹ˆë©”ì´???¸ë””ì¼€?´í„°ê°€ ???´ë™ ??ë¶€?œëŸ½ê²??„í™˜
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?¬ìš© ?¬ë?</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    ì¹´í…Œê³ ë¦¬ë³?ì½˜í…ì¸?ë¶„ë¥˜ (?´ìŠ¤, ?¤í¬ì¸? ?”í„°?Œì¸ë¨¼íŠ¸ ??
                  </li>
                  <li>?¤ì • ?”ë©´???¹ì…˜ êµ¬ë¶„ (?¼ë°˜, ê³„ì •, ?Œë¦¼ ??</li>
                  <li>
                    ?œí’ˆ ?ì„¸ ?˜ì´ì§€???•ë³´ êµ¬ë¶„ (?ì„¸?•ë³´, ë¦¬ë·°, ë¬¸ì˜ ??
                  </li>
                  <li>
                    ?Œì…œ ë¯¸ë””???±ì˜ ?€?„ë¼??ë¶„ë¥˜ (?”ë¡œ?? ?¸ê¸°, ì¶”ì²œ ??
                  </li>
                  <li>?¤ì–‘??ë·?ëª¨ë“œ ?„í™˜ (ëª©ë¡?? ê°¤ëŸ¬ë¦¬í˜•, ì§€?„í˜• ??</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">
                  ?‘ê·¼??ê³ ë ¤?¬í•­
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>ì¶©ë¶„???‰ìƒ ?€ë¹„ë¡œ ê°€?…ì„± ?•ë³´</li>
                  <li>?ì ˆ???°ì¹˜ ?ì—­ ?¬ê¸° (ìµœì†Œ 48x48dp)</li>
                  <li>?„ì¬ ? íƒ????„ ëª…í™•???œì‹œ</li>
                  <li>?¤í¬ë¦?ë¦¬ë” ì§€??(ARIA ?ì„± ?ìš©)</li>
                  <li>?¤ë³´???‘ê·¼??ì§€??/li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                ?”ì??ê¶Œì¥?¬í•­
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>?¼ê????”ì???¸ì–´ ? ì? (???„ì²´ ?¤í??¼ê³¼ ?µì¼)</li>
                <li>??ë²ˆì— ë³????ˆëŠ” ?ì ˆ??????? ì? (4-6ê°?ê¶Œì¥)</li>
                <li>ëª…í™•???ˆì´ë¸??¬ìš© (ì§§ê³  ì§ê??ì¸ ?¨ì–´ ? íƒ)</li>
                <li>?„ì´ì½˜ê³¼ ?ìŠ¤??ì¡°í•©?¼ë¡œ ?´í•´???¥ìƒ</li>
                <li>?ì ˆ???¬ë°±ê³?ê°„ê²©?¼ë¡œ ê°€?…ì„± ?•ë³´</li>
                <li>??ê°??„í™˜ ??ë¶€?œëŸ¬??? ë‹ˆë©”ì´???ìš©</li>
                <li>?¤ì??´í”„ ?œìŠ¤ì²?ì§€??ê³ ë ¤ (??ê°?ì¢Œìš° ?¤ì??´í”„)</li>
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
                    ? "bg-[#49bcf3] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("basic")}
              >
                ê¸°ë³¸??              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "underline"
                    ? "bg-[#49bcf3] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("underline")}
              >
                ?„ì´ì½??¸ë”?¼ì¸??              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "scrollable"
                    ? "bg-[#49bcf3] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("scrollable")}
              >
                ?¤í¬ë¡¤í˜•
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "pills"
                    ? "bg-[#49bcf3] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("pills")}
              >
                ????˜•
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-full ${
                  tabBarStyle === "material"
                    ? "bg-[#49bcf3] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setTabBarStyle("material")}
              >
                ë¨¸í‹°ë¦¬ì–¼??              </button>
            </div>

            <div className="border rounded-md shadow-sm overflow-hidden">
              <div className="p-4 flex justify-center">
                <div className="w-full max-w-md">
                  {renderTabBar()}
                  <div className="p-8 text-center text-gray-500">
                    {activeTab} ì½˜í…ì¸?                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
