"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function TextSlide() {
  const [fontSize, setFontSize] = useState("medium")
  const [fontWeight, setFontWeight] = useState("normal")

  return (
    <SlideLayout title="Text">
      <div className="space-y-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
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
                Text???¬ìš©???¸í„°?˜ì´?¤ì—???•ë³´ë¥??œì‹œ?˜ëŠ” ê¸°ë³¸?ì¸ ?”ì†Œ?…ë‹ˆ?? ?¤ì–‘???¤í??? ?¬ê¸°, ?‰ìƒ?¼ë¡œ ?œí˜„????                ?ˆìœ¼ë©? ?œëª©, ë³¸ë¬¸, ?ˆì´ë¸????¤ì–‘???©ë„ë¡??¬ìš©?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?œëª© (Heading): ?˜ì´ì§€???¹ì…˜???œëª©</li>
                <li>ë³¸ë¬¸ (Body): ì£¼ìš” ?´ìš©???œì‹œ</li>
                <li>?ˆì´ë¸?(Label): ?…ë ¥ ?„ë“œ??ë²„íŠ¼ ?±ì˜ ?¤ëª…</li>
                <li>ìº¡ì…˜ (Caption): ?´ë?ì§€???œì— ?€???¤ëª…</li>
                <li>ë§í¬ (Link): ?´ë¦­ ê°€?¥í•œ ?ìŠ¤??/li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`import React from 'react';

const TextExample: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* ê¸°ë³¸ ?ìŠ¤??*/}
      <p className="text-base">
        ê¸°ë³¸ ?ìŠ¤?¸ì…?ˆë‹¤.
      </p>

      {/* ?œëª© ?ìŠ¤??*/}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          ???œëª©
        </h1>
        <h2 className="text-xl font-bold">
          ì¤‘ê°„ ?œëª©
        </h2>
        <h3 className="text-lg font-bold">
          ?‘ì? ?œëª©
        </h3>
      </div>

      {/* ?¤í??¼ì´ ?ìš©???ìŠ¤??*/}
      <p className="text-lg font-bold text-blue-600">
        ?¤í??¼ì´ ?ìš©???ìŠ¤??      </p>

      {/* ?¤ì–‘???ìŠ¤???¤í???*/}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          ?‘ì? ë³´ì¡° ?ìŠ¤??        </p>
        <p className="text-base font-medium">
          ì¤‘ê°„ êµµê¸° ?ìŠ¤??        </p>
        <p className="text-lg font-semibold text-green-600">
          êµµì? ?¹ìƒ‰ ?ìŠ¤??        </p>
        <p className="text-xl font-bold text-red-500">
          ??ë¹¨ê°„ ?ìŠ¤??        </p>
      </div>

      {/* ë§í¬ ?ìŠ¤??*/}
      <a 
        href="#" 
        className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          console.log('ë§í¬ ?´ë¦­??);
        }}
      >
        ë§í¬ ?ìŠ¤??      </a>

      {/* ?ìŠ¤???•ë ¬ */}
      <div className="space-y-2">
        <p className="text-left">?¼ìª½ ?•ë ¬ ?ìŠ¤??/p>
        <p className="text-center">ê°€?´ë° ?•ë ¬ ?ìŠ¤??/p>
        <p className="text-right">?¤ë¥¸ìª??•ë ¬ ?ìŠ¤??/p>
      </div>

      {/* ê¸??ìŠ¤??ì²˜ë¦¬ */}
      <div className="space-y-2">
        <p className="truncate max-w-xs">
          ?´ê²ƒ?€ ë§¤ìš° ê¸??ìŠ¤?¸ë¡œ ì¤„ì„?œë¡œ ì²˜ë¦¬?©ë‹ˆ??
        </p>
        <p className="break-words">
          ?´ê²ƒ?€ë§¤ìš°ê¸´ë‹¨?´ë“¤ë¡œêµ¬?±ëœ?ìŠ¤?¸ì…?ˆë‹¤LineBreakHandling
        </p>
      </div>
    </div>
  );
};

export default TextExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">ê¸€ê¼??¬ê¸°</label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="small">?‘ê²Œ</option>
                  <option value="medium">ì¤‘ê°„</option>
                  <option value="large">?¬ê²Œ</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">ê¸€ê¼??ê»˜</label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="normal">ë³´í†µ</option>
                  <option value="bold">êµµê²Œ</option>
                </select>
              </div>

              <div className="p-4 border rounded-md">
                <p
                  className={`
                    ${fontSize === "small" ? "text-sm" : fontSize === "medium" ? "text-base" : "text-xl"}
                    ${fontWeight === "bold" ? "font-bold" : "font-normal"}
                  `}
                >
                  ?´ê²ƒ?€ ?ìŠ¤??ì»´í¬?ŒíŠ¸???ˆì‹œ?…ë‹ˆ?? ê¸€ê¼??¬ê¸°?€ ?ê»˜ë¥?ì¡°ì ˆ?´ë³´?¸ìš”.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
