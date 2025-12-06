"use client";

import type React from "react";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function ProgressBarSlide() {
  const [progress, setProgress] = useState(30);
  const [color, setColor] = useState<string>("#49bcf3");

  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decrementProgress = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <SlideLayout title="Progress Bar">
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
                Progress Bar???‘ì—…??ì§„í–‰ ?íƒœë¥??œê°?ìœ¼ë¡??œì‹œ?˜ëŠ” UI
                ?”ì†Œ?…ë‹ˆ?? ?¬ìš©?ì—ê²??‘ì—…???¼ë§ˆ???„ë£Œ?˜ì—ˆ?”ì? ?Œë ¤ì¤ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?Œì¼ ?…ë¡œ???¤ìš´ë¡œë“œ ì§„í–‰ ?íƒœ</li>
                <li>?‘ì‹ ?‘ì„± ì§„í–‰ ?íƒœ</li>
                <li>?¤ì¹˜ ?„ë¡œ?¸ìŠ¤</li>
                <li>?˜ì´ì§€ ë¡œë”© ?œì‹œ</li>
                <li>ëª©í‘œ ?¬ì„± ì§„í–‰ ?íƒœ</li>
                <li>?¨ê³„ë³??„ë¡œ?¸ìŠ¤ ?œì‹œ</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const ProgressBarExample: React.FC = () => {
  const [progress, setProgress] = useState(60);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="space-y-6">
      {/* ê¸°ë³¸ ì§„í–‰ ?œì‹œì¤?*/}
      <div className="space-y-2">
        <p className="text-sm font-medium">ê¸°ë³¸ ì§„í–‰ ?œì‹œì¤?(60%)</p>
        <Progress value={60} className="h-2" />
      </div>

      {/* ê°’ì´ ?†ëŠ” ë¶ˆí™•??ì§„í–‰ ?œì‹œì¤?*/}
      <div className="space-y-2">
        <p className="text-sm font-medium">ë¶ˆí™•??ì§„í–‰ ?œì‹œì¤?/p>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* ì»¤ìŠ¤?€ ?¤í??¼ì˜ ì§„í–‰ ?œì‹œì¤?*/}
      <div className="space-y-2">
        <p className="text-sm font-medium">ì»¤ìŠ¤?€ ?¤í???(75%)</p>
        <Progress 
          value={75} 
          className="h-3 bg-gray-200"
          style={{
            '--progress-foreground': '#22c55e'
          } as React.CSSProperties}
        />
      </div>

      {/* ?™ì  ì§„í–‰ ?œì‹œì¤?*/}
      <div className="space-y-2">
        <p className="text-sm font-medium">?™ì  ì§„í–‰ ?œì‹œì¤?/p>
        <DynamicProgressBar />
      </div>

      {/* ?˜ë™ ?œì–´ ì§„í–‰ ?œì‹œì¤?*/}
      <div className="space-y-2">
        <p className="text-sm font-medium">?˜ë™ ?œì–´ ({progress}%)</p>
        <Progress value={progress} className="h-2" />
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setProgress(Math.max(0, progress - 10))}
          >
            -10%
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setProgress(Math.min(100, progress + 10))}
          >
            +10%
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setProgress(0)}
          >
            ì´ˆê¸°??          </Button>
        </div>
      </div>
    </div>
  );
};

// ?™ì  ì§„í–‰ ?œì‹œì¤?ì»´í¬?ŒíŠ¸
const DynamicProgressBar: React.FC = () => {
  const [dynamicProgress, setDynamicProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDynamicProgress(prev => {
        if (prev >= 100) {
          return 0; // 100%???„ë‹¬?˜ë©´ ?¤ì‹œ 0%ë¶€???œì‘
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Progress value={dynamicProgress} className="h-2" />;
};

export default ProgressBarExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-6 mb-6">
                <div>
                  <Label className="mb-2 block">ì§„í–‰ë¥? {progress}%</Label>
                  <Slider
                    value={[progress]}
                    onValueChange={(value) => setProgress(value[0])}
                    min={0}
                    max={100}
                    step={1}
                    className="my-4"
                  />
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
                    <option value="#49bcf3">ì´ˆë¡??/option>
                    <option value="#3b82f6">?Œë???/option>
                    <option value="#ef4444">ë¹¨ê°„??/option>
                    <option value="#8b5cf6">ë³´ë¼??/option>
                  </select>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={decrementProgress} variant="outline">
                    -10%
                  </Button>
                  <Button onClick={incrementProgress} variant="outline">
                    +10%
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Progress
                    value={progress}
                    className="h-2"
                    style={
                      {
                        "--progress-background": "rgb(229, 231, 235)",
                        "--progress-foreground": color,
                      } as React.CSSProperties
                    }
                  />
                </div>

                <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 ease-in-out"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
