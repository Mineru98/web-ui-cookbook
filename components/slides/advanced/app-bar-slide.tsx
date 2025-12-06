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
  const [codeType, setCodeType] = useState<"react">("react");

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
                <span className="ml-4 font-medium">? íƒ????ª© (3)</span>
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
                    placeholder="ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??
                    className="pl-10 pr-4 py-1.5 w-full rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#49bcf3] text-sm"
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
          <div className="bg-[#49bcf3] text-white shadow-md">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </button>
                <span className="ml-4 font-medium">???€?´í?</span>
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
              <h1 className="text-xl font-bold">?•ì¥ ?€?´í? ?ì—­</h1>
              <p className="text-sm text-white/80 mt-1">
                ì¶”ê? ?¤ëª… ?ìŠ¤???ëŠ” ?¡ì…˜
              </p>
            </div>

            <div className="flex bg-[#2a8bc4]">
              <button className="flex-1 py-2 text-sm font-medium border-b-2 border-white">
                ??1
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-white/70 border-b-2 border-transparent hover:text-white">
                ??2
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-white/70 border-b-2 border-transparent hover:text-white">
                ??3
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
                <span className="ml-4 font-medium">???€?´í?</span>
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
    // ?¤ë¡œ ê°€ê¸??™ì‘
    console.log('Back button clicked');
  };

  const handleShare = () => {
    // ê³µìœ  ?™ì‘
    console.log('Share button clicked');
  };

  const handleBookmark = () => {
    // ë¶ë§ˆ???™ì‘
    console.log('Bookmark button clicked');
  };

  const handleMore = () => {
    // ?”ë³´ê¸?ë©”ë‰´ ?™ì‘
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
              aria-label="?¤ë¡œ ê°€ê¸?
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <span className="ml-4 font-medium text-gray-900">? íƒ????ª© (3)</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleShare}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="ê³µìœ "
            >
              <Share className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleBookmark}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="ë¶ë§ˆ??ì¶”ê?"
            >
              <BookmarkPlus className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleMore}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="?”ë³´ê¸?ë©”ë‰´"
            >
              <MoreVertical className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Body Content */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">??ì½˜í…ì¸?/p>
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
    // ?¤ë¡œ ê°€ê¸??™ì‘
    console.log('Back button clicked');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // ê²€??ë¡œì§ êµ¬í˜„
    console.log('Searching for:', e.target.value);
  };

  const handleMore = () => {
    // ?”ë³´ê¸?ë©”ë‰´ ?™ì‘
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
            aria-label="?¤ë¡œ ê°€ê¸?
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
                placeholder="ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 pr-4 py-1.5 w-full rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#49bcf3] text-sm transition-colors"
              />
            </div>
          </div>
          
          <button 
            onClick={handleMore}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="?”ë³´ê¸?ë©”ë‰´"
          >
            <MoreVertical className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </header>
      
      {/* Body Content */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">
          {searchQuery ? \`ê²€??ê²°ê³¼: "\${searchQuery}"\` : 'ê²€??ê²°ê³¼'}
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

  const tabs = ['??1', '??2', '??3'];

  const handleMenu = () => {
    // ë©”ë‰´ ?´ê¸° ?™ì‘
    console.log('Menu button clicked');
  };

  const handleSearch = () => {
    // ê²€???™ì‘
    console.log('Search button clicked');
  };

  const handleNotification = () => {
    // ?Œë¦¼ ?™ì‘
    setShowNotification(!showNotification);
    console.log('Notification button clicked');
  };

  const handleMore = () => {
    // ?”ë³´ê¸?ë©”ë‰´ ?™ì‘
    console.log('More button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Prominent App Bar */}
      <header className="bg-[#49bcf3] text-white shadow-md">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button 
              onClick={handleMenu}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="ë©”ë‰´"
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="ml-4 font-medium">???€?´í?</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleSearch}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="ê²€??
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNotification}
              className="p-1.5 rounded-full hover:bg-white/10 relative transition-colors"
              aria-label="?Œë¦¼"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={handleMore}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="?”ë³´ê¸?ë©”ë‰´"
            >
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Extended Title Area */}
        <div className="px-4 pb-4">
          <h1 className="text-xl font-bold">?•ì¥ ?€?´í? ?ì—­</h1>
          <p className="text-sm text-white/80 mt-1">ì¶”ê? ?¤ëª… ?ìŠ¤???ëŠ” ?¡ì…˜</p>
        </div>
        
        {/* Tab Bar */}
        <div className="flex bg-[#2a8bc4]">
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
          <p className="text-gray-600">{tabs[activeTab]} ì½˜í…ì¸?/p>
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
    // ë©”ë‰´ ?´ê¸° ?™ì‘
    console.log('Menu button clicked');
  };

  const handleSearch = () => {
    // ê²€???™ì‘
    console.log('Search button clicked');
  };

  const handleNotification = () => {
    // ?Œë¦¼ ?™ì‘
    setShowNotification(!showNotification);
    console.log('Notification button clicked');
  };

  const handleMore = () => {
    // ?”ë³´ê¸?ë©”ë‰´ ?™ì‘
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
              aria-label="ë©”ë‰´"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
            <span className="ml-4 font-medium text-gray-900">???€?´í?</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handleSearch}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="ê²€??
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleNotification}
              className="p-1.5 rounded-full hover:bg-gray-100 relative transition-colors"
              aria-label="?Œë¦¼"
            >
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={handleMore}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="?”ë³´ê¸?ë©”ë‰´"
            >
              <MoreVertical className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Body Content */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">??ì½˜í…ì¸?/p>
      </main>
    </div>
  );
};

export default StandardAppBarExample;`;
    }
  };


  return (
    <SlideLayout title="App Bar (??ë°?">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?•ì˜</h3>
              <p>
                ??ë°?App Bar)???”ë©´ ?ë‹¨???„ì¹˜??ì»´í¬?ŒíŠ¸ë¡? ?„ì¬ ?”ë©´??                ?œëª©ê³??¨ê»˜ ?´ë¹„ê²Œì´?? ê²€?? ?¡ì…˜ ë²„íŠ¼ê³?ê°™ì? ì£¼ìš” ê¸°ëŠ¥??                ?œê³µ?©ë‹ˆ?? ?¼ë°˜?ìœ¼ë¡?'?´ë°”(Toolbar)' ?ëŠ” '?´ë¹„ê²Œì´??                ë°?Navigation Bar)'?¼ê³ ??ë¶ˆë¦½?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¹ì§•</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?”ë©´ ?ë‹¨??ê³ ì •?˜ì–´ ?œì‹œ?©ë‹ˆ??</li>
                <li>???ëŠ” ?„ì¬ ?”ë©´???œëª©???œì‹œ?©ë‹ˆ??</li>
                <li>?´ë¹„ê²Œì´??ë©”ë‰´ ë²„íŠ¼, ?¤ë¡œ ê°€ê¸?ë²„íŠ¼ ?±ì„ ?¬í•¨?©ë‹ˆ??</li>
                <li>ê²€?? ê³µìœ , ?¤ì • ?±ì˜ ?¡ì…˜ ë²„íŠ¼???°ì¸¡??ë°°ì¹˜?©ë‹ˆ??</li>
                <li>?¤í¬ë¡????¨ê?/?œì‹œ ê¸°ëŠ¥??ì§€?í•  ???ˆìŠµ?ˆë‹¤.</li>
                <li>ë¸Œëœ???‰ìƒ???ìš©?˜ì—¬ ?±ì˜ ?„ì´?´í‹°?°ë? ê°•ì¡°?©ë‹ˆ??</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">??ë°?? í˜•</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>ê¸°ë³¸??(Standard)</strong>
                  <p className="text-sm text-gray-600">
                    ê°€???¼ë°˜?ì¸ ?•íƒœë¡? ?œëª©ê³??¡ì…˜ ë²„íŠ¼???¬í•¨?©ë‹ˆ??
                  </p>
                </li>
                <li>
                  <strong>ì»¨í…?¤íŠ¸??(Contextual)</strong>
                  <p className="text-sm text-gray-600">
                    ??ª© ? íƒ ???˜í??˜ë©°, ? íƒ????ª©???€???¡ì…˜???œê³µ?©ë‹ˆ??
                  </p>
                </li>
                <li>
                  <strong>ê²€?‰í˜• (Search)</strong>
                  <p className="text-sm text-gray-600">
                    ê²€??ê¸°ëŠ¥??ê°•ì¡°???•íƒœë¡? ê²€?‰ì°½??ì¤‘ì•™??ë°°ì¹˜?©ë‹ˆ??
                  </p>
                </li>
                <li>
                  <strong>?•ì¥??(Prominent)</strong>
                  <p className="text-sm text-gray-600">
                    ì¶”ê? ì½˜í…ì¸ ë‚˜ ??„ ?¬í•¨?˜ëŠ” ?•ì¥???’ì´????ë°”ì…?ˆë‹¤.
                  </p>
                </li>
                <li>
                  <strong>ì¶•ì†Œ??(Collapsed)</strong>
                  <p className="text-sm text-gray-600">
                    ?¤í¬ë¡????¬ê¸°ê°€ ì¶•ì†Œ?˜ì–´ ?”ë©´ ê³µê°„???¨ìœ¨?ìœ¼ë¡??¬ìš©?©ë‹ˆ??
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?????”ë©´ ê°??´ë™ ë°??´ë¹„ê²Œì´??/li>
                <li>?„ì¬ ?„ì¹˜ ?œì‹œ ë°?ê³„ì¸µ êµ¬ì¡° ?„ë‹¬</li>
                <li>ê²€??ê¸°ëŠ¥ ?œê³µ</li>
                <li>?Œë¦¼, ë©”ì‹œì§€ ?±ì˜ ?íƒœ ?œì‹œ</li>
                <li>?¤ì •, ê³µìœ , ì¦ê²¨ì°¾ê¸° ???ì£¼ ?¬ìš©?˜ëŠ” ê¸°ëŠ¥ ?‘ê·¼</li>
                <li>??ª© ? íƒ ??ê´€???¡ì…˜ ?œì‹œ</li>
                <li>?¬ìš©??ê³„ì • ë°??„ë¡œ??ê´€ë¦?/li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?”ì??ì§€ì¹?/h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?¡ì…˜ ë²„íŠ¼?€ ?°ì„ ?œìœ„???°ë¼ ë°°ì¹˜?©ë‹ˆ??</li>
                <li>3-5ê°œì˜ ?¡ì…˜ ë²„íŠ¼?¼ë¡œ ?œí•œ?˜ì—¬ ë³µì¡?¨ì„ ë°©ì??©ë‹ˆ??</li>
                <li>ì¶©ë¶„???°ì¹˜ ?ì—­(ìµœì†Œ 48x48dp)???•ë³´?©ë‹ˆ??</li>
                <li>ë¸Œëœ???‰ìƒê³??€ë¹„ë? ê³ ë ¤?˜ì—¬ ê°€?…ì„±???•ë³´?©ë‹ˆ??</li>
                <li>ë°˜ì‘?•ìœ¼ë¡??¤ê³„?˜ì—¬ ?¤ì–‘???”ë©´ ?¬ê¸°???ì‘?©ë‹ˆ??</li>
                <li>
                  ?¼ê????’ì´?€ ?¨ë”©??? ì??˜ì—¬ ?œê°???ˆì •ê°ì„ ?œê³µ?©ë‹ˆ??
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={getReactCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo">
            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "standard"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("standard")}
                >
                  ê¸°ë³¸??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "context"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("context")}
                >
                  ì»¨í…?¤íŠ¸??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "search"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("search")}
                >
                  ê²€?‰í˜•
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    appBarType === "prominent"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setAppBarType("prominent")}
                >
                  ?•ì¥??                </button>
              </div>
            </div>
            {/* ?°ëª¨ ???´ìš© */}
            <div className="mt-4">
              <div className="border rounded-lg overflow-hidden">
                {renderAppBar()}
                <div className="p-4">
                  <h3 className="font-medium mb-3">?¸í„°?™í‹°ë¸??°ëª¨</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    ?„ì˜ ë²„íŠ¼???´ë¦­?˜ì—¬ ?¤ì–‘????ë°?? í˜•???•ì¸?´ë³´?¸ìš”.
                  </p>

                  <div className="flex gap-2 mb-4">
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "standard"
                          ? "bg-[#49bcf3] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("standard")}
                    >
                      ê¸°ë³¸??                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "context"
                          ? "bg-[#49bcf3] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("context")}
                    >
                      ì»¨í…?¤íŠ¸??                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "search"
                          ? "bg-[#49bcf3] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("search")}
                    >
                      ê²€?‰í˜•
                    </button>
                    <button
                      className={`px-3 py-1.5 rounded text-sm ${
                        appBarType === "prominent"
                          ? "bg-[#49bcf3] text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setAppBarType("prominent")}
                    >
                      ?•ì¥??                    </button>
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
