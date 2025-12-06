"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function OutlinedButtonSlide() {
  const [borderWidth, setBorderWidth] = useState<string>("1px");
  const [borderColor, setBorderColor] = useState<string>("#49bcf3");
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <SlideLayout title="Outlined Button">
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
                Outlined Button?€ ë°°ê²½???€???Œë‘ë¦??¸ê³½??ë¥??¬ìš©?˜ì—¬ ê°•ì¡°?˜ëŠ”
                ë²„íŠ¼?…ë‹ˆ?? ?¼ë°˜?ìœ¼ë¡?ë³´ì¡° ?¡ì…˜?´ë‚˜ ??ì¤‘ìš”???¡ì…˜??                ?¬ìš©?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ë³´ì¡° ?¡ì…˜ (Secondary actions)</li>
                <li>ì·¨ì†Œ ë²„íŠ¼ (Cancel buttons)</li>
                <li>?„í„° ? ê? (Filter toggles)</li>
                <li>?µì…˜ ? íƒ (Option selection)</li>
                <li>?œê°?ìœ¼ë¡???ê°•ì¡°?˜ì–´???˜ëŠ” ?¡ì…˜</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Download, Heart } from 'lucide-react';

const OutlinedButtonExample: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* ê¸°ë³¸ ?¸ê³½??ë²„íŠ¼ */}
      <Button variant="outline">
        ?¸ê³½??ë²„íŠ¼
      </Button>

      {/* ?¤ì–‘???¬ê¸°???¸ê³½??ë²„íŠ¼ */}
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm">
          ?‘ì? ?¬ê¸°
        </Button>
        <Button variant="outline" size="default">
          ê¸°ë³¸ ?¬ê¸°
        </Button>
        <Button variant="outline" size="lg">
          ???¬ê¸°
        </Button>
      </div>

      {/* ì»¤ìŠ¤?€ ?¤í??¼ì˜ ?¸ê³½??ë²„íŠ¼ */}
      <Button 
        variant="outline" 
        className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
      >
        ì»¤ìŠ¤?€ ?¸ê³½??ë²„íŠ¼
      </Button>

      {/* ?„ì´ì½˜ì´ ?ˆëŠ” ?¸ê³½??ë²„íŠ¼ */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>ì¶”ê??˜ê¸°</span>
        </Button>
        
        <Button variant="outline" className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>?¤ìš´ë¡œë“œ</span>
        </Button>
        
        <Button variant="outline" className="flex items-center space-x-2">
          <Heart className="h-4 w-4" />
          <span>ì¢‹ì•„??/span>
        </Button>
      </div>

      {/* ë¹„í™œ?±í™”???¸ê³½??ë²„íŠ¼ */}
      <Button variant="outline" disabled>
        ë¹„í™œ?±í™”??      </Button>

      {/* ?‰ìƒë³??¸ê³½??ë²„íŠ¼ */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
          ?±ê³µ
        </Button>
        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
          ?„í—˜
        </Button>
        <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
          ê²½ê³ 
        </Button>
        <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
          ?•ë³´
        </Button>
      </div>

      {/* ?„ì²´ ?ˆë¹„ ?¸ê³½??ë²„íŠ¼ */}
      <Button variant="outline" className="w-full">
        ?„ì²´ ?ˆë¹„ ë²„íŠ¼
      </Button>
    </div>
  );
};

export default OutlinedButtonExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    ?Œë‘ë¦??ê»˜
                  </label>
                  <select
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="1px">?‡ê²Œ (1px)</option>
                    <option value="2px">ì¤‘ê°„ (2px)</option>
                    <option value="3px">?ê»ê²?(3px)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    ?Œë‘ë¦??‰ìƒ
                  </label>
                  <select
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="#49bcf3">ì´ˆë¡??/option>
                    <option value="#3b82f6">?Œë???/option>
                    <option value="#ef4444">ë¹¨ê°„??/option>
                    <option value="#8b5cf6">ë³´ë¼??/option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className={`px-4 py-2 rounded-md transition-colors duration-200 border-solid`}
                  style={{
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    color: borderColor,
                    backgroundColor: hovered
                      ? `${borderColor}10`
                      : "transparent",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  ?¸ê³½??ë²„íŠ¼
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
