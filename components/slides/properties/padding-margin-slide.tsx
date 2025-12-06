"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function PaddingMarginSlide() {
  const [padding, setPadding] = useState<number>(16);
  const [margin, setMargin] = useState<number>(16);
  const [activeProperty, setActiveProperty] = useState<"padding" | "margin">(
    "padding"
  );

  return (
    <SlideLayout title="Padding & Margin">
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
              <p className="mb-4">
                Paddingê³?Margin?€ UI ?”ì†Œ??ê³µê°„???œì–´?˜ëŠ” CSS ?ì„±?…ë‹ˆ??
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Padding</strong>: ?”ì†Œ???´ë? ?¬ë°±?¼ë¡œ, ?”ì†Œ???´ìš©ê³?                  ?Œë‘ë¦??¬ì´??ê³µê°„?…ë‹ˆ??
                </li>
                <li>
                  <strong>Margin</strong>: ?”ì†Œ???¸ë? ?¬ë°±?¼ë¡œ, ?”ì†Œ???Œë‘ë¦¬ì?
                  ì£¼ë? ?”ì†Œ ?¬ì´??ê³µê°„?…ë‹ˆ??
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?”ì†Œ ê°?ê°„ê²© ì¡°ì •</li>
                <li>?ìŠ¤?¸ì? ì»¨í…Œ?´ë„ˆ ?¬ì´??ê³µê°„ ì¡°ì •</li>
                <li>?ˆì´?„ì›ƒ êµ¬ì„±</li>
                <li>?”ì†Œ ?•ë ¬</li>
                <li>UI ?”ì†Œ??ê°€?…ì„± ?¥ìƒ</li>
                <li>ë°˜ì‘???”ì??êµ¬í˜„</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`// React/CSS?ì„œ???¨ë”©ê³?ë§ˆì§„

// CSS ?´ë˜?¤ë? ?´ìš©??ë°©ë²•
<div className="p-4">ëª¨ë“  ë°©í–¥ ?¨ë”© 16px (Tailwind)</div>
<div className="px-4 py-2">ì¢Œìš° ?¨ë”© 16px, ?í•˜ ?¨ë”© 8px</div>

// ?¸ë¼???¤í??¼ì„ ?´ìš©??ë°©ë²•
<div style={{ padding: '16px' }}>
  ëª¨ë“  ë°©í–¥ ?¨ë”© 16px
</div>

<div style={{ 
  paddingLeft: '20px', 
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: '10px'
}}>
  ê°œë³„ ë°©í–¥ ?¨ë”©
</div>

// ë§ˆì§„ ?ˆì œ
<div className="m-4 bg-blue-500 text-white p-2">
  ëª¨ë“  ë°©í–¥ ë§ˆì§„ 16px
</div>

<div style={{ 
  margin: '8px 16px',
  backgroundColor: '#22c55e',
  color: 'white',
  padding: '8px'
}}>
  ì¢Œìš° ë§ˆì§„ 16px, ?í•˜ ë§ˆì§„ 8px
</div>

// Flexboxë¥??´ìš©??ê°„ê²© ë§Œë“¤ê¸?<div className="flex flex-col space-y-4">
  <div>ì²?ë²ˆì§¸ ?ìŠ¤??/div>
  <div>??ë²ˆì§¸ ?ìŠ¤??/div>
</div>

<div className="flex space-x-4">
  <div>ì²?ë²ˆì§¸ ?ìŠ¤??/div>
  <div>??ë²ˆì§¸ ?ìŠ¤??/div>
</div>

// CSS Gridë¥??´ìš©??ê°„ê²©
<div className="grid grid-cols-2 gap-4">
  <div>ì²?ë²ˆì§¸ ?„ì´??/div>
  <div>??ë²ˆì§¸ ?„ì´??/div>
</div>`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <RadioGroup
                  value={activeProperty}
                  onValueChange={(value) =>
                    setActiveProperty(value as "padding" | "margin")
                  }
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="padding" id="padding" />
                    <Label htmlFor="padding">?¨ë”©</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="margin" id="margin" />
                    <Label htmlFor="margin">ë§ˆì§„</Label>
                  </div>
                </RadioGroup>

                <div>
                  <Label className="mb-2 block">
                    {activeProperty === "padding" ? "?¨ë”©" : "ë§ˆì§„"} ê°?{" "}
                    {activeProperty === "padding" ? padding : margin}
                    px
                  </Label>
                  <Slider
                    value={[activeProperty === "padding" ? padding : margin]}
                    onValueChange={(value) => {
                      if (activeProperty === "padding") {
                        setPadding(value[0]);
                      } else {
                        setMargin(value[0]);
                      }
                    }}
                    min={0}
                    max={64}
                    step={4}
                    className="my-4"
                  />
                </div>
              </div>

              <div
                className="relative border-2 border-dashed border-gray-300 rounded-md"
                style={{ padding: `${margin}px` }}
              >
                <div className="text-center text-xs text-gray-500 absolute inset-0 flex items-center justify-center">
                  ë§ˆì§„ ?ì—­
                </div>
                <div
                  className="relative bg-[#49bcf3] rounded-md text-white flex items-center justify-center"
                  style={{ padding: `${padding}px` }}
                >
                  <div className="text-center text-xs absolute inset-0 flex items-center justify-center opacity-30">
                    ?¨ë”© ?ì—­
                  </div>
                  <div className="bg-white text-[#49bcf3] p-2 rounded-md">
                    ì½˜í…ì¸?                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
