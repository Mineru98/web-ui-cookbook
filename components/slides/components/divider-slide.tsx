"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function DividerSlide() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const [thickness, setThickness] = useState<string>("1px");
  const [color, setColor] = useState<string>("#e5e7eb");

  return (
    <SlideLayout title="Divider">
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
                Divider(?ëŠ” Separator)??ì½˜í…ì¸??¹ì…˜???œê°?ìœ¼ë¡?êµ¬ë¶„?˜ëŠ” ê°€ë¡?                ?ëŠ” ?¸ë¡œ ? ì…?ˆë‹¤. UI??êµ¬ì¡°?€ ê³„ì¸µ??ëª…í™•?˜ê²Œ ?˜ëŠ” ???„ì???                ?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ì½˜í…ì¸??¹ì…˜ êµ¬ë¶„</li>
                <li>ë©”ë‰´ ??ª© êµ¬ë¶„</li>
                <li>???¹ì…˜ êµ¬ë¶„</li>
                <li>ì¹´ë“œ ?´ë? ì½˜í…ì¸?êµ¬ë¶„</li>
                <li>?¤ë”?€ ë³¸ë¬¸ êµ¬ë¶„</li>
                <li>?¸í„° êµ¬ë¶„</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React from 'react';
import { Separator } from '@/components/ui/separator';

const DividerExample: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* ê¸°ë³¸ ê°€ë¡?êµ¬ë¶„??*/}
      <div className="space-y-4">
        <p>?ë‹¨ ì»¨í…ì¸?/p>
        <Separator />
        <p>?˜ë‹¨ ì»¨í…ì¸?/p>
      </div>

      {/* ?¸ë¡œ êµ¬ë¶„??*/}
      <div className="flex items-center space-x-4 h-16">
        <div className="flex-1 text-center">
          ?¼ìª½ ì»¨í…ì¸?        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="flex-1 text-center">
          ?¤ë¥¸ìª?ì»¨í…ì¸?        </div>
      </div>

      {/* ì»¤ìŠ¤?€ ?¤í??¼ì˜ êµ¬ë¶„??*/}
      <div className="space-y-4">
        <p>ì»¤ìŠ¤?€ ?¤í????ë‹¨</p>
        <Separator className="bg-blue-500 h-0.5" />
        <p>ì»¤ìŠ¤?€ ?¤í????˜ë‹¨</p>
      </div>

      {/* ?êº¼??êµ¬ë¶„??*/}
      <div className="space-y-4">
        <p>?êº¼?????ë‹¨</p>
        <Separator className="h-1 bg-gray-300" />
        <p>?ê»Œ?????˜ë‹¨</p>
      </div>

      {/* ?ìŠ¤?¸ê? ?ˆëŠ” êµ¬ë¶„??*/}
      <div className="flex items-center space-x-4">
        <Separator className="flex-1" />
        <span className="text-sm text-muted-foreground px-2">
          ?ëŠ”
        </span>
        <Separator className="flex-1" />
      </div>

      {/* ?ì„  ?¤í???*/}
      <div className="space-y-4">
        <p>?ì„  ?¤í????ë‹¨</p>
        <div className="border-t border-dashed border-gray-300" />
        <p>?ì„  ?¤í????˜ë‹¨</p>
      </div>

      {/* ?‰ìƒ???¤ë¥¸ êµ¬ë¶„? ë“¤ */}
      <div className="space-y-2">
        <Separator className="bg-red-500" />
        <Separator className="bg-green-500" />
        <Separator className="bg-blue-500" />
        <Separator className="bg-purple-500" />
      </div>
    </div>
  );
};

export default DividerExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <Label className="mb-2 block">ë°©í–¥</Label>
                  <RadioGroup
                    value={orientation}
                    onValueChange={(value) =>
                      setOrientation(value as "horizontal" | "vertical")
                    }
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="horizontal" id="horizontal" />
                      <Label htmlFor="horizontal">ê°€ë¡?/Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vertical" id="vertical" />
                      <Label htmlFor="vertical">?¸ë¡œ</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="thickness" className="mb-2 block">
                    ?ê»˜
                  </Label>
                  <select
                    id="thickness"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="1px">?‡ê²Œ (1px)</option>
                    <option value="2px">ì¤‘ê°„ (2px)</option>
                    <option value="4px">?ê»ê²?(4px)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="color" className="mb-2 block">
                    ?‰ìƒ
                  </Label>
                  <select
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="#e5e7eb">ê¸°ë³¸ (?Œìƒ‰)</option>
                    <option value="#49bcf3">ì´ˆë¡??/option>
                    <option value="#3b82f6">?Œë???/option>
                    <option value="#ef4444">ë¹¨ê°„??/option>
                  </select>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                {orientation === "horizontal" ? (
                  <div className="space-y-4">
                    <p>?ë‹¨ ì½˜í…ì¸?/p>
                    <div
                      className="w-full"
                      style={{
                        height: thickness,
                        backgroundColor: color,
                      }}
                    ></div>
                    <p>?˜ë‹¨ ì½˜í…ì¸?/p>
                  </div>
                ) : (
                  <div className="flex h-20">
                    <div className="flex-1 flex items-center justify-center">
                      <p>?¼ìª½ ì½˜í…ì¸?/p>
                    </div>
                    <div
                      className="h-full"
                      style={{
                        width: thickness,
                        backgroundColor: color,
                      }}
                    ></div>
                    <div className="flex-1 flex items-center justify-center">
                      <p>?¤ë¥¸ìª?ì½˜í…ì¸?/p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
