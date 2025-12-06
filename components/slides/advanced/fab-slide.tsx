"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import { Plus, MessageSquare, Mail, Phone, Share2, X } from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FabSlide() {
  const [fabType, setFabType] = useState<
    "basic" | "extended" | "mini" | "speed-dial"
  >("basic");
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);

  const renderFAB = () => {
    switch (fabType) {
      case "extended":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button className="px-4 py-3 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              <span className="font-medium text-sm">????ª© ì¶”ê?</span>
            </button>
          </div>
        );

      case "mini":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button className="p-2 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center justify-center">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        );

      case "speed-dial":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            {isSpeedDialOpen && (
              <div className="absolute bottom-20 right-4 flex flex-col items-center gap-3 mb-2">
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    ë©”ì‹œì§€
                  </span>
                  <button className="p-3 bg-blue-500 text-white rounded-full shadow-md">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    ?´ë©”??                  </span>
                  <button className="p-3 bg-red-500 text-white rounded-full shadow-md">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    ?„í™”
                  </span>
                  <button className="p-3 bg-green-500 text-white rounded-full shadow-md">
                    <Phone className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    ê³µìœ 
                  </span>
                  <button className="p-3 bg-purple-500 text-white rounded-full shadow-md">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
            <button
              className="p-4 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-200"
              onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
            >
              {isSpeedDialOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Plus className="h-6 w-6" />
              )}
            </button>
          </div>
        );

      default: // basic
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button className="p-4 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center justify-center">
              <Plus className="h-6 w-6" />
            </button>
          </div>
        );
    }
  };

  const getReactCode = () => {
    switch (fabType) {
      case "extended":
        return `import React from 'react';
import { Plus } from 'lucide-react';

const ExtendedFabExample: React.FC = () => {
  const handleAddItem = () => {
    // ë²„íŠ¼ ?´ë¦­ ???¤í–‰??ì½”ë“œ
    console.log('????ª© ì¶”ê? ë²„íŠ¼ ?´ë¦­??);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* ë©”ì¸ ì½˜í…ì¸?*/}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">?”ë©´ ì½˜í…ì¸?/p>
      </main>

      {/* Extended FAB */}
      <button
        onClick={handleAddItem}
        className="fixed bottom-6 right-6 px-4 py-3 bg-[#49bcf3] text-white rounded-full shadow-lg hover:bg-[#49bcf3]/90 focus:outline-none focus:ring-2 focus:ring-[#49bcf3] focus:ring-offset-2 transition-all duration-200 flex items-center gap-2"
        aria-label="????ª© ì¶”ê?"
      >
        <Plus className="h-5 w-5" />
        <span className="font-medium text-sm">????ª© ì¶”ê?</span>
      </button>
    </div>
  );
};

export default ExtendedFabExample;`;

      case "mini":
        return `import React from 'react';
import { Plus } from 'lucide-react';

const MiniFabExample: React.FC = () => {
  const handleAddItem = () => {
    // ë²„íŠ¼ ?´ë¦­ ???¤í–‰??ì½”ë“œ
    console.log('ë¯¸ë‹ˆ FAB ?´ë¦­??);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* ë©”ì¸ ì½˜í…ì¸?*/}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">?”ë©´ ì½˜í…ì¸?/p>
      </main>

      {/* Mini FAB */}
      <button
        onClick={handleAddItem}
        className="fixed bottom-6 right-6 w-10 h-10 bg-[#49bcf3] text-white rounded-full shadow-lg hover:bg-[#49bcf3]/90 focus:outline-none focus:ring-2 focus:ring-[#49bcf3] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
        aria-label="????ª© ì¶”ê?"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MiniFabExample;`;

      case "speed-dial":
        return `import React, { useState } from 'react';
import { Plus, X, MessageSquare, Mail, Phone, Share2 } from 'lucide-react';

interface SpeedDialOption {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  action: () => void;
}

const SpeedDialFabExample: React.FC = () => {
  const [isDialOpen, setIsDialOpen] = useState(false);

  const speedDialOptions: SpeedDialOption[] = [
    {
      icon: MessageSquare,
      label: 'ë©”ì‹œì§€',
      color: 'bg-blue-500',
      action: () => console.log('ë©”ì‹œì§€ ê¸°ëŠ¥ ?¤í–‰')
    },
    {
      icon: Mail,
      label: '?´ë©”??,
      color: 'bg-red-500',
      action: () => console.log('?´ë©”??ê¸°ëŠ¥ ?¤í–‰')
    },
    {
      icon: Phone,
      label: '?„í™”',
      color: 'bg-green-500',
      action: () => console.log('?„í™” ê¸°ëŠ¥ ?¤í–‰')
    },
    {
      icon: Share2,
      label: 'ê³µìœ ',
      color: 'bg-purple-500',
      action: () => console.log('ê³µìœ  ê¸°ëŠ¥ ?¤í–‰')
    }
  ];

  const toggleSpeedDial = () => {
    setIsDialOpen(!isDialOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* ë©”ì¸ ì½˜í…ì¸?*/}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">?”ë©´ ì½˜í…ì¸?/p>
      </main>

      {/* Speed Dial FAB */}
      <div className="fixed bottom-6 right-6">
        {/* Speed Dial Options */}
        {isDialOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col items-end gap-3 mb-2">
            {speedDialOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {option.label}
                </span>
                <button
                  onClick={option.action}
                  className={\`p-3 \${option.color} text-white rounded-full shadow-md hover:scale-110 transition-transform duration-200\`}
                  aria-label={option.label}
                >
                  <option.icon className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={toggleSpeedDial}
          className="w-14 h-14 bg-[#49bcf3] text-white rounded-full shadow-lg hover:bg-[#49bcf3]/90 focus:outline-none focus:ring-2 focus:ring-[#49bcf3] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
          aria-label={isDialOpen ? '?¤í”¼???¤ì´???«ê¸°' : '?¤í”¼???¤ì´???´ê¸°'}
        >
          {isDialOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Plus className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SpeedDialFabExample;`;

      default: // basic
        return `import React from 'react';
import { Plus } from 'lucide-react';

const BasicFabExample: React.FC = () => {
  const handleAddItem = () => {
    // ë²„íŠ¼ ?´ë¦­ ???¤í–‰??ì½”ë“œ
    console.log('ê¸°ë³¸ FAB ?´ë¦­??);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* ë©”ì¸ ì½˜í…ì¸?*/}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">?”ë©´ ì½˜í…ì¸?/p>
      </main>

      {/* Basic FAB */}
      <button
        onClick={handleAddItem}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#49bcf3] text-white rounded-full shadow-lg hover:bg-[#49bcf3]/90 focus:outline-none focus:ring-2 focus:ring-[#49bcf3] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
        aria-label="????ª© ì¶”ê?"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BasicFabExample;`;
    }
  };

  return (
    <SlideLayout title="FloatingActionButton (FAB)">
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
                Floating Action Button(FAB)?€ ?”ë©´ ?„ì— ???ˆëŠ” ?í˜• ë²„íŠ¼?¼ë¡œ,
                ?¬ìš©?ê? ?±ì—??ì·¨í•  ???ˆëŠ” ì£¼ìš” ?¡ì…˜???˜í??…ë‹ˆ?? ?¼ë°˜?ìœ¼ë¡?                ?”ë©´???¤ë¥¸ìª??˜ë‹¨?´ë‚˜ ì¤‘ì•™ ?˜ë‹¨???„ì¹˜?˜ë©°, ê°€??ì¤‘ìš”?˜ê±°??                ?ì£¼ ?¬ìš©?˜ëŠ” ?‘ì—…??ë¹ ë¥´ê²??‘ê·¼?????ˆê²Œ ?©ë‹ˆ??
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "basic"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("basic")}
                >
                  ê¸°ë³¸??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "extended"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("extended")}
                >
                  ?•ì¥??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "mini"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("mini")}
                >
                  ë¯¸ë‹ˆ??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "speed-dial"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("speed-dial")}
                >
                  ?¤í”¼???¤ì´??                </button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                {/* FAB ?Œë”ë§?*/}
                {renderFAB()}

                {/* ?¤ëª… */}
                <div className="p-4 bg-white">
                  <h3 className="font-medium mb-2">
                    {fabType === "basic"
                      ? "ê¸°ë³¸ FAB"
                      : fabType === "extended"
                      ? "?•ì¥??FAB"
                      : fabType === "mini"
                      ? "ë¯¸ë‹ˆ FAB"
                      : "?¤í”¼???¤ì´??FAB"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {fabType === "basic"
                      ? "?¼ë°˜?ì¸ ?¬ê¸°???í˜• ë²„íŠ¼?¼ë¡œ ?„ì´ì½˜ë§Œ ?œì‹œ?©ë‹ˆ??"
                      : fabType === "extended"
                      ? "?ìŠ¤?¸ì? ?„ì´ì½˜ì„ ?¨ê»˜ ?œì‹œ?˜ëŠ” ?•ì¥???•íƒœ??FAB?…ë‹ˆ??"
                      : fabType === "mini"
                      ? "???‘ì? ?¬ê¸°??FABë¡?ë³´ì¡° ?¡ì…˜???¬ìš©?©ë‹ˆ??"
                      : "?´ë¦­ ???¬ëŸ¬ ê´€???¡ì…˜???œì‹œ?˜ëŠ” ?•ì¥ ê°€?¥í•œ FAB?…ë‹ˆ??"}
                  </p>

                  <div className="bg-gray-50 p-3 rounded-md border text-sm">
                    <strong>?¬ìš© ?ˆì‹œ:</strong>
                    <p className="mt-1">
                      {fabType === "basic"
                        ? "??ë©”ì‹œì§€ ?‘ì„±, ????ª© ì¶”ê? ??ì£¼ìš” ?¡ì…˜"
                        : fabType === "extended"
                        ? "??ë¬¸ì„œ ë§Œë“¤ê¸? ê²€???œì‘?˜ê¸° ??ëª…í™•???ˆì´ë¸”ì´ ?„ìš”??ê²½ìš°"
                        : fabType === "mini"
                        ? "ì£¼ìš” FAB ?†ì—??ë³´ì¡° ?¡ì…˜ ?œê³µ ?ëŠ” ê³µê°„???œí•œ??ê²½ìš°"
                        : "?°ë½ì²?ê³µìœ , ?Œì…œ ë¯¸ë””??ê³µìœ  ???¬ëŸ¬ ê´€???µì…˜???„ìš”??ê²½ìš°"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">FAB ? í˜•</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>ê¸°ë³¸??(Regular FAB)</strong>
                      <p className="text-sm text-gray-600">
                        ì§€ë¦?56dp???œì? ?¬ê¸°, ì£¼ìš” ?¡ì…˜???¬ìš©
                      </p>
                    </li>
                    <li>
                      <strong>ë¯¸ë‹ˆ??(Mini FAB)</strong>
                      <p className="text-sm text-gray-600">
                        ì§€ë¦?40dp???‘ì? ?¬ê¸°, ë³´ì¡° ?¡ì…˜???¬ìš©
                      </p>
                    </li>
                    <li>
                      <strong>?•ì¥??(Extended FAB)</strong>
                      <p className="text-sm text-gray-600">
                        ?ìŠ¤?¸ì? ?„ì´ì½˜ì„ ?¨ê»˜ ?œì‹œ?˜ëŠ” ì§ì‚¬ê°í˜• ?•íƒœ
                      </p>
                    </li>
                    <li>
                      <strong>?¤í”¼???¤ì´??(Speed Dial)</strong>
                      <p className="text-sm text-gray-600">
                        ?´ë¦­ ???¬ëŸ¬ ê´€???¡ì…˜??ë³´ì—¬ì£¼ëŠ” ?•ì¥ ê°€??FAB
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">?„ì¹˜ ë°??™ì‘</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>?¼ë°˜?ìœ¼ë¡??¤ë¥¸ìª??˜ë‹¨?´ë‚˜ ì¤‘ì•™ ?˜ë‹¨???„ì¹˜</li>
                    <li>?¤í¬ë¡??œì—????ƒ ë³´ì´?„ë¡ ê³ ì • ?„ì¹˜ ?¬ìš©</li>
                    <li>?”ë©´ ê°??´ë™ ???¼ê????„ì¹˜ ? ì?</li>
                    <li>???„í™˜ ??FAB ?¡ì…˜??ë³€ê²½ë  ???ˆìŒ</li>
                    <li>FAB???”ë©´???œì‹œ???´ìš©ê³?ê´€?¨ëœ ?¡ì…˜ ?œê³µ</li>
                    <li>?‘ê·¼?±ì„ ?„í•œ ì¶©ë¶„???°ì¹˜ ?ì—­ ?•ë³´</li>
                    <li>?œê°???¼ë“œë°±ê³¼ ? ë‹ˆë©”ì´?˜ìœ¼ë¡??í˜¸?‘ìš© ê°•í™”</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                ?”ì??ê¶Œì¥?¬í•­
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>Z-ì¶?ê·¸ë¦¼??/strong>
                  <p className="text-sm">
                    FAB?????ˆëŠ” ?¨ê³¼ë¥?ê°•ì¡°?˜ê¸° ?„í•´ ê·¸ë¦¼???ìš©
                  </p>
                </li>
                <li>
                  <strong>ëª…í™•???„ì´ì½??¬ìš©</strong>
                  <p className="text-sm">
                    FAB??ê¸°ëŠ¥??ì§ê??ìœ¼ë¡??´í•´?????ˆëŠ” ?„ì´ì½?? íƒ
                  </p>
                </li>
                <li>
                  <strong>?¬ìš©???¸í„°?˜ì´???¼ê???/strong>
                  <p className="text-sm">
                    ? í”Œë¦¬ì??´ì…˜??ë¸Œëœ???‰ìƒê³??”ì???¸ì–´ ? ì?
                  </p>
                </li>
                <li>
                  <strong>? ë‹ˆë©”ì´???¨ê³¼</strong>
                  <p className="text-sm">
                    ?´ë¦­, ?¸ë²„, ?•ì¥ ??ë¶€?œëŸ¬??? ë‹ˆë©”ì´???ìš©
                  </p>
                </li>
                <li>
                  <strong>ëª¨ë°”??ìµœì ??/strong>
                  <p className="text-sm">
                    ?°ì¹˜ ì¡°ì‘??ìµœì ?”ëœ ?¬ê¸°?€ ê°„ê²© ?•ë³´
                  </p>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 border rounded-md">
              <div className="overflow-x-auto rounded-lg">
                <PrismCode code={getReactCode()} language="typescript" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  FAB ? í˜• ? íƒ
                </label>
                <select
                  value={fabType}
                  onChange={(e) => setFabType(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="basic">ê¸°ë³¸??(Regular FAB)</option>
                  <option value="extended">?•ì¥??(Extended FAB)</option>
                  <option value="mini">ë¯¸ë‹ˆ??(Mini FAB)</option>
                  <option value="speed-dial">?¤í”¼???¤ì´??(Speed Dial)</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* ?°ëª¨ ?¹ì…˜?ì„œ FAB ?œì‹œ */}
                <div className="w-full h-64 bg-gray-50 border rounded-lg relative overflow-hidden">
                  <div className="absolute right-4 bottom-4">
                    {fabType === "extended" ? (
                      <button className="px-4 py-3 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center">
                        <Plus className="h-5 w-5 mr-2" />
                        <span className="font-medium text-sm">
                          ????ª© ì¶”ê?
                        </span>
                      </button>
                    ) : fabType === "mini" ? (
                      <button className="p-2 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center justify-center">
                        <Plus className="h-4 w-4" />
                      </button>
                    ) : fabType === "speed-dial" ? (
                      <div>
                        {isSpeedDialOpen && (
                          <div className="flex flex-col items-end gap-3 mb-3">
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                ë©”ì‹œì§€
                              </span>
                              <button className="p-3 bg-blue-500 text-white rounded-full shadow-md">
                                <MessageSquare className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                ?´ë©”??                              </span>
                              <button className="p-3 bg-red-500 text-white rounded-full shadow-md">
                                <Mail className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                ?„í™”
                              </span>
                              <button className="p-3 bg-green-500 text-white rounded-full shadow-md">
                                <Phone className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                ê³µìœ 
                              </span>
                              <button className="p-3 bg-purple-500 text-white rounded-full shadow-md">
                                <Share2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        )}
                        <button
                          className="p-4 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center justify-center"
                          onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
                        >
                          {isSpeedDialOpen ? (
                            <X className="h-6 w-6" />
                          ) : (
                            <Plus className="h-6 w-6" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <button className="p-4 bg-[#49bcf3] text-white rounded-full shadow-lg flex items-center justify-center">
                        <Plus className="h-6 w-6" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="w-full text-center text-sm mt-4">
                  {fabType === "speed-dial" && (
                    <p className="text-gray-600">
                      FABë¥??´ë¦­?˜ì—¬ ?¤í”¼???¤ì´???µì…˜??" "}
                      {isSpeedDialOpen ? "?«ê¸°" : "?´ê¸°"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
