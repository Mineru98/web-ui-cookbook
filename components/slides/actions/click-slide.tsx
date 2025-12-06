"use client";

import SlideLayout from "../slide-layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ClickSlide() {
  const [clickCount, setClickCount] = useState(0);
  const [touchCount, setTouchCount] = useState(0);
  const [tapCount, setTapCount] = useState(0);

  return (
    <SlideLayout title="Click / Tap / Touch">
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
                ?¬ìš©?ê? ?”ì†Œë¥?ì§§ê²Œ ?„ë¥´ê±°ë‚˜ ?°ì¹˜?˜ëŠ” ê¸°ë³¸?ì¸ ?í˜¸?‘ìš©?…ë‹ˆ??
                React?ì„œ??ì£¼ë¡œ onClick ?´ë²¤?¸ë¡œ ì²˜ë¦¬?˜ë©°, ?¥ì¹˜?€ ?Œë«?¼ì— ?°ë¼
                ?¤ìŒê³?ê°™ì´ ë¶€ë¦…ë‹ˆ??
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Click</strong>: ì£¼ë¡œ ?°ìŠ¤?¬í†±, ë§ˆìš°???˜ê²½
                </li>
                <li>
                  <strong>Tap</strong>: ì£¼ë¡œ ëª¨ë°”???°ì¹˜ ?˜ê²½
                </li>
                <li>
                  <strong>Touch</strong>: ?°ì¹˜?¤í¬ë¦°ì—???¼ë°˜?ì¸ ?°ì¹˜ ?œìŠ¤ì²?                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">ì£¼ìš” ?¹ì§•</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ê°€??ê¸°ë³¸?ì´ê³??ë¦¬ ?¬ìš©?˜ëŠ” ?í˜¸?‘ìš© ë°©ì‹</li>
                <li>?¬ìš©?ê? ?¡ì…˜???˜í–‰?˜ë„ë¡?ëª…í™•???œê°???¼ë“œë°??„ìš”</li>
                <li>
                  ?¸ë²„(Hover) ?íƒœ???°ìŠ¤?¬íƒ‘?ì„œ ?¬ìš© ê°€?¥í•˜??ëª¨ë°”?¼ì—?œëŠ”
                  ë¶ˆê???                </li>
                <li>?‘ê·¼?±ì„ ?„í•´ ì¶©ë¶„???°ì¹˜ ?ì—­(44x44px ê¶Œì¥)???„ìš”</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// ê¸°ë³¸ ?´ë¦­ ?™ì‘ (Button)
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function ClickExample() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // ë²„íŠ¼ ?´ë¦­ ???¤í–‰??ì½”ë“œ
    console.log('ë²„íŠ¼???´ë¦­?˜ì—ˆ?µë‹ˆ??);
    setClickCount(prev => prev + 1);
  };

  return (
    <Button onClick={handleClick}>
      ?´ë¦­?˜ì„¸??    </Button>
  );
}

// ?Œë‘ë¦¬ê? ?ˆëŠ” ë²„íŠ¼ (Outline Variant)
<Button
  variant="outline" 
  onClick={() => {
    console.log('?„ì›ƒ?¼ì¸ ë²„íŠ¼????˜?ˆìŠµ?ˆë‹¤');
  }}
>
  ??•˜?¸ìš”
</Button>

// ì»¤ìŠ¤?€ ?´ë¦­ ?ì—­ (div with onClick)
<div
  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer"
  onClick={() => {
    console.log('ì»¤ìŠ¤?€ ?ì—­???°ì¹˜?˜ì—ˆ?µë‹ˆ??);
    setTouchCount(prev => prev + 1);
  }}
>
  ?°ì¹˜
</div>

// ?¤ì–‘??ë§ˆìš°???°ì¹˜ ?´ë²¤?¸ë? ì²˜ë¦¬?˜ëŠ” React ì»´í¬?ŒíŠ¸
function InteractiveArea() {
  const handleClick = () => {
    console.log('?´ë¦­??);
  };

  const handleDoubleClick = () => {
    console.log('?”ë¸” ?´ë¦­??);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    console.log('ë§ˆìš°???¤ìš´ ?„ì¹˜:', e.clientX, e.clientY);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('?°í´ë¦??ëŠ” ê¸¸ê²Œ ?„ë¦„');
  };

  const handleTouchStart = () => {
    console.log('?°ì¹˜ ?œì‘');
  };

  return (
    <div
      className="w-48 h-24 bg-blue-500 flex items-center justify-center text-white cursor-pointer"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
      onTouchStart={handleTouchStart}
    >
      ?¤ì–‘???°ì¹˜ ì²˜ë¦¬
    </div>
  );
}

// ?¸ë²„ ë°??¡í‹°ë¸??¨ê³¼ê°€ ?ˆëŠ” ?´ë¦­ ?ì—­
<div
  className="w-36 h-20 flex items-center justify-center cursor-pointer transition-all
             bg-gray-100 hover:bg-green-100 active:bg-green-200
             border border-gray-300 hover:border-green-400 active:border-green-500
             shadow-sm hover:shadow-md active:shadow-lg"
  onClick={() => {
    console.log('?¸ë²„ ?¨ê³¼?€ ?¨ê»˜ ?´ë¦­??);
  }}
>
  ?´ë¦­?˜ë©´ ?¸ë²„ ?¨ê³¼
</div>`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                  <h4 className="font-medium mb-3">Click ?ˆì‹œ</h4>
                  <Button
                    onClick={() => setClickCount((prev) => prev + 1)}
                    className="mb-4"
                  >
                    ?´ë¦­?˜ì„¸??                  </Button>
                  <p>?´ë¦­ ?Ÿìˆ˜: {clickCount}</p>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                  <h4 className="font-medium mb-3">Tap ?ˆì‹œ</h4>
                  <Button
                    onClick={() => setTapCount((prev) => prev + 1)}
                    className="mb-4"
                    variant="outline"
                  >
                    ??•˜?¸ìš”
                  </Button>
                  <p>???Ÿìˆ˜: {tapCount}</p>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                  <h4 className="font-medium mb-3">Touch ?ˆì‹œ</h4>
                  <div
                    className="w-24 h-24 bg-[#49bcf3] rounded-full flex items-center justify-center text-white cursor-pointer mb-4"
                    onClick={() => setTouchCount((prev) => prev + 1)}
                  >
                    ?°ì¹˜
                  </div>
                  <p>?°ì¹˜ ?Ÿìˆ˜: {touchCount}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
