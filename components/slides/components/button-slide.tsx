"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function ButtonSlide() {
  const [clickCount, setClickCount] = useState(0)
  const [variant, setVariant] = useState<"default" | "destructive" | "outline" | "secondary" | "ghost" | "link">(
    "default",
  )

  return (
    <SlideLayout title="Button">
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
                Button?€ ?¬ìš©?ê? ?¡ì…˜???¸ë¦¬ê±°í•  ???ˆëŠ” ?¸í„°?™í‹°ë¸??”ì†Œ?…ë‹ˆ?? ?´ë¦­?˜ê±°????•˜ë©?ì§€?•ëœ ?‘ì—…??                ?˜í–‰?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?‘ì‹ ?œì¶œ (Form submission)</li>
                <li>?€???ì ?•ì¸/ì·¨ì†Œ (Dialog confirmation/cancellation)</li>
                <li>?˜ì´ì§€ ?´ë™ (Navigation)</li>
                <li>ê¸°ëŠ¥ ?œì„±??ë¹„í™œ?±í™” (Feature toggle)</li>
                <li>?„ë¡œ?¸ìŠ¤ ?œì‘/ì¤‘ì? (Process start/stop)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ButtonExampleProps {
  onButtonPressed: () => void;
}

const ButtonExample: React.FC<ButtonExampleProps> = ({ onButtonPressed }) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* ê¸°ë³¸ ë²„íŠ¼ */}
      <Button onClick={() => {}}>
        ê¸°ë³¸ ë²„íŠ¼
      </Button>

      {/* ë¹„í™œ?±í™”??ë²„íŠ¼ */}
      <Button disabled>
        ë¹„í™œ?±í™”??ë²„íŠ¼
      </Button>

      <div className="space-y-2">
        <h3 className="font-bold">?¤ì–‘???¤í??¼ì˜ ë²„íŠ¼</h3>
        
        {/* ?¤ì–‘???¤í??¼ì˜ ë²„íŠ¼ */}
        <div className="flex flex-wrap gap-2">
          {/* default */}
          <Button variant="default" onClick={() => {}}>
            ê¸°ë³¸
          </Button>
          
          {/* destructive */}
          <Button variant="destructive" onClick={() => {}}>
            ?? œ
          </Button>
          
          {/* outline */}
          <Button variant="outline" onClick={() => {}}>
            ?¸ê³½??          </Button>
          
          {/* secondary */}
          <Button variant="secondary" onClick={() => {}}>
            ë³´ì¡°
          </Button>
          
          {/* ghost */}
          <Button variant="ghost" onClick={() => {}}>
            ê³ ìŠ¤??          </Button>
          
          {/* link */}
          <Button variant="link" onClick={() => {}}>
            ë§í¬
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold">?¬ê¸°ê°€ ?¤ë¥¸ ë²„íŠ¼</h3>
        
        {/* ?¬ê¸°ê°€ ?¤ë¥¸ ë²„íŠ¼ */}
        <div className="flex flex-wrap gap-2">
          {/* default size */}
          <Button size="default" onClick={() => {}}>
            ê¸°ë³¸ ?¬ê¸°
          </Button>
          
          {/* small size */}
          <Button size="sm" onClick={() => {}}>
            ?‘ì? ?¬ê¸°
          </Button>
          
          {/* large size */}
          <Button size="lg" onClick={() => {}}>
            ???¬ê¸°
          </Button>
        </div>
      </div>
      
      {/* ?´ë²¤???¸ë“¤?¬ê? ?ˆëŠ” ë²„íŠ¼ */}
      <Button 
        onClick={() => {
          console.log('ë²„íŠ¼???´ë¦­??);
          onButtonPressed();
        }}
      >
        ?´ë¦­?˜ì„¸??      </Button>
    </div>
  );
};

export default ButtonExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">ë²„íŠ¼ ?¤í???/label>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="default">ê¸°ë³¸</option>
                  <option value="destructive">?? œ</option>
                  <option value="outline">?¸ê³½??/option>
                  <option value="secondary">ë³´ì¡°</option>
                  <option value="ghost">ê³ ìŠ¤??/option>
                  <option value="link">ë§í¬</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Button variant={variant} onClick={() => setClickCount((prev) => prev + 1)}>
                  ë²„íŠ¼ ?´ë¦­?˜ê¸°
                </Button>

                <p className="text-sm">?´ë¦­ ?Ÿìˆ˜: {clickCount}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
