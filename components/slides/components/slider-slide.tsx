"use client";

import type React from "react";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function SliderSlide() {
  const [value, setValue] = useState<number[]>([50]);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);
  const [step, setStep] = useState<number>(1);

  return (
    <SlideLayout title="Slider">
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
                Slider???¬ìš©?ê? ì§€?•ëœ ë²”ìœ„ ?´ì—??ê°’ì„ ? íƒ?????ˆëŠ” UI
                ?”ì†Œ?…ë‹ˆ?? ?œë˜ê·?ê°€?¥í•œ ?¸ë“¤???´ìš©??ê°’ì„ ì¡°ì ˆ?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ë³¼ë¥¨ ì¡°ì ˆ</li>
                <li>ë°ê¸°, ?€ë¹????œê°???¤ì •</li>
                <li>ê°€ê²?ë²”ìœ„ ?„í„°</li>
                <li>ì¤??ˆë²¨ ì¡°ì ˆ</li>
                <li>ì§„í–‰ ?íƒœ ?œì‹œ ë°?ì¡°ì ˆ</li>
                <li>?˜ì¹˜ ?…ë ¥ (?˜ì´, ë¬´ê²Œ ??</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const SliderExample: React.FC = () => {
  const [singleValue, setSingleValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([25, 75]);
  const [volume, setVolume] = useState([80]);

  return (
    <div className="space-y-8">
      {/* ê¸°ë³¸ ?¬ë¼?´ë” */}
      <div className="space-y-3">
        <Label>ê¸°ë³¸ ?¬ë¼?´ë” (ê°? {singleValue[0]})</Label>
        <Slider
          value={singleValue}
          onValueChange={setSingleValue}
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      {/* ë²”ìœ„ ?¬ë¼?´ë” (??ê°œì˜ ?¸ë“¤) */}
      <div className="space-y-3">
        <Label>
          ë²”ìœ„ ?¬ë¼?´ë” (ë²”ìœ„: {rangeValue[0]} - {rangeValue[1]})
        </Label>
        <Slider
          value={rangeValue}
          onValueChange={setRangeValue}
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      {/* ?´ë²¤???¸ë“¤?¬ê? ?ˆëŠ” ?¬ë¼?´ë” */}
      <div className="space-y-3">
        <Label>ë³¼ë¥¨ ì¡°ì ˆ (ê°? {volume[0]}%)</Label>
        <Slider
          value={volume}
          onValueChange={(newValue) => {
            setVolume(newValue);
            console.log('ë³¼ë¥¨ ë³€ê²?', newValue[0]);
          }}
          max={100}
          step={5}
          className="w-full"
        />
        {/* ë³¼ë¥¨ ?œê°??*/}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-200"
            style={{ width: \`\${volume[0]}%\` }}
          />
        </div>
      </div>

      {/* ë¹„í™œ?±í™”???¬ë¼?´ë” */}
      <div className="space-y-3">
        <Label className="text-muted-foreground">
          ë¹„í™œ?±í™”???¬ë¼?´ë” (ê°? 50)
        </Label>
        <Slider
          value={[50]}
          disabled
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      {/* ?¤ì–‘???¨ê³„ë³??¬ë¼?´ë” */}
      <div className="space-y-3">
        <Label>ê°€ê²?ë²”ìœ„ (??rangeValue[0] * 1000} - ??rangeValue[1] * 1000})</Label>
        <Slider
          value={rangeValue}
          onValueChange={setRangeValue}
          max={200}
          min={10}
          step={10}
          className="w-full"
        />
      </div>

      {/* ?¸ë¡œ ?•íƒœ???¬ë¼?´ë” (CSSë¡??Œì „) */}
      <div className="flex items-center space-x-4">
        <Label>?¸ë¡œ ?¬ë¼?´ë”</Label>
        <div className="h-32 flex items-center justify-center">
          <Slider
            value={[singleValue[0]]}
            onValueChange={(value) => setSingleValue(value)}
            orientation="vertical"
            max={100}
            step={1}
            className="h-full"
          />
        </div>
        <span className="text-sm text-muted-foreground">
          {singleValue[0]}
        </span>
      </div>

      {/* ?‰ìƒ?¼ë¡œ ?œì‹œ?˜ëŠ” ?¬ë¼?´ë” */}
      <div className="space-y-3">
        <Label>?‰ìƒ ê°•ë„ (ê°? {singleValue[0]})</Label>
        <Slider
          value={singleValue}
          onValueChange={setSingleValue}
          max={100}
          step={1}
          className="w-full"
        />
        <div 
          className="h-8 rounded-md transition-all duration-200"
          style={{ 
            backgroundColor: \`rgba(34, 197, 94, \${singleValue[0] / 100})\`,
            border: '1px solid #e5e7eb'
          }}
        />
      </div>
    </div>
  );
};

export default SliderExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-6 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="min-value" className="mb-2 block">
                      ìµœì†Œê°?                    </Label>
                    <Input
                      id="min-value"
                      type="number"
                      value={min}
                      onChange={(e) => setMin(Number(e.target.value))}
                      min={0}
                      max={max - 1}
                    />
                  </div>

                  <div>
                    <Label htmlFor="max-value" className="mb-2 block">
                      ìµœë?ê°?                    </Label>
                    <Input
                      id="max-value"
                      type="number"
                      value={max}
                      onChange={(e) => setMax(Number(e.target.value))}
                      min={min + 1}
                    />
                  </div>

                  <div>
                    <Label htmlFor="step-value" className="mb-2 block">
                      ?¨ê³„
                    </Label>
                    <Input
                      id="step-value"
                      type="number"
                      value={step}
                      onChange={(e) => setStep(Number(e.target.value))}
                      min={0.1}
                      step={0.1}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">?„ì¬ ê°? {value[0]}</Label>
                  <Slider
                    value={value}
                    onValueChange={setValue}
                    min={min}
                    max={max}
                    step={step}
                    className="my-4"
                  />
                </div>

                <div
                  className="h-20 bg-[#49bcf3] rounded-md opacity-30"
                  style={{ opacity: value[0] / 100 }}
                >
                  <div className="h-full flex items-center justify-center text-white font-bold">
                    ë¶ˆíˆ¬ëª…ë„: {value[0]}%
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

// Input ì»´í¬?ŒíŠ¸ ?€???¤ë¥˜ ë°©ì?ë¥??„í•œ ?„ì‹œ ì»´í¬?ŒíŠ¸
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="w-full p-2 border rounded-md" {...props} />;
}
