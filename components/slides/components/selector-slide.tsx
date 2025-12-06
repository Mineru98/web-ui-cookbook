"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function SelectorSlide() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [options, setOptions] = useState<string[]>([
    "?µì…˜ 1",
    "?µì…˜ 2",
    "?µì…˜ 3",
    "?µì…˜ 4",
  ]);
  const [newOption, setNewOption] = useState<string>("");

  const addOption = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption.trim()]);
      setNewOption("");
    }
  };

  return (
    <SlideLayout title="Selector">
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
                Selector(?ëŠ” Select)???¬ëŸ¬ ?µì…˜ ì¤??˜ë‚˜ë¥?? íƒ?????ˆëŠ”
                ?œë¡­?¤ìš´ ?•íƒœ??UI ?”ì†Œ?…ë‹ˆ?? ?œë¡­?¤ìš´ê³?? ì‚¬?˜ì?ë§? ì£¼ë¡œ
                ?°ì´??? íƒ???¹í™”?˜ì–´ ?ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>êµ??, ì§€??? íƒ</li>
                <li>ì¹´í…Œê³ ë¦¬ ? íƒ</li>
                <li>? ì§œ, ?œê°„ ë²”ìœ„ ? íƒ</li>
                <li>?•ë ¬ ?µì…˜ ? íƒ</li>
                <li>?¸ì–´ ? íƒ</li>
                <li>?Œë§ˆ ? íƒ</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectGroup,
  SelectLabel
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const SelectorExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <div className="space-y-6">
      {/* ê¸°ë³¸ ?€?‰í„° */}
      <div className="space-y-2">
        <Label>ê¸°ë³¸ ?€?‰í„°</Label>
        <Select 
          value={selectedValue} 
          onValueChange={(value) => {
            setSelectedValue(value);
            console.log('? íƒ??ê°?', value);
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="?µì…˜??? íƒ?˜ì„¸?? />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">?µì…˜ 1</SelectItem>
            <SelectItem value="option2">?µì…˜ 2</SelectItem>
            <SelectItem value="option3">?µì…˜ 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ê·¸ë£¹???ˆëŠ” ?€?‰í„° */}
      <div className="space-y-2">
        <Label>ê·¸ë£¹ ?€?‰í„°</Label>
        <Select onValueChange={(value) => console.log('? íƒ:', value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="?Œì‹??? íƒ?˜ì„¸?? />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>ê³¼ì¼</SelectLabel>
              <SelectItem value="apple">?¬ê³¼</SelectItem>
              <SelectItem value="banana">ë°”ë‚˜??/SelectItem>
              <SelectItem value="orange">?¤ë Œì§€</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>ì±„ì†Œ</SelectLabel>
              <SelectItem value="carrot">?¹ê·¼</SelectItem>
              <SelectItem value="potato">ê°ì</SelectItem>
              <SelectItem value="onion">?‘íŒŒ</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* ë¹„í™œ?±í™”???µì…˜???ˆëŠ” ?€?‰í„° */}
      <div className="space-y-2">
        <Label>ë¹„í™œ?±í™” ?µì…˜ ?¬í•¨</Label>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="?íƒœë¥?? íƒ?˜ì„¸?? />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">?œì„±</SelectItem>
            <SelectItem value="inactive">ë¹„í™œ??/SelectItem>
            <SelectItem value="pending" disabled>
              ?€ê¸°ì¤‘ (ë¹„í™œ?±í™”)
            </SelectItem>
            <SelectItem value="suspended">?¼ì‹œ?•ì?</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ?™ì  ?µì…˜???ˆëŠ” ?€?‰í„° */}
      <div className="space-y-2">
        <Label>?™ì  ?µì…˜</Label>
        <Select 
          value={selectedValue}
          onValueChange={(value) => {
            if (value) {
              setSelectedValue(value);
              console.log('?ˆë¡œ ? íƒ??ê°?', value);
            }
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="? íƒ?˜ì„¸?? />
          </SelectTrigger>
          <SelectContent>
            {['?µì…˜ 1', '?µì…˜ 2', '?µì…˜ 3', '?µì…˜ 4'].map((option, index) => (
              <SelectItem key={index} value={\`option-\${index + 1}\`}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* ê²€??ê°€?¥í•œ ?€?‰í„° (ê¸°ë³¸ Select??ê²€??ë¶ˆê??˜ë?ë¡?Combobox ?•íƒœë¡?êµ¬í˜„) */}
      <div className="space-y-2">
        <Label>?¬ê¸°ë³??€?‰í„°</Label>
        <div className="flex space-x-2">
          <Select>
            <SelectTrigger className="w-[150px] h-8">
              <SelectValue placeholder="?‘ìŒ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">?‘ìŒ</SelectItem>
              <SelectItem value="medium">ì¤‘ê°„</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="ê¸°ë³¸" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">ê¸°ë³¸</SelectItem>
              <SelectItem value="large">??/SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedValue && (
        <p className="text-sm text-muted-foreground">
          ?„ì¬ ? íƒ??ê°? {selectedValue}
        </p>
      )}
    </div>
  );
};

export default SelectorExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="???µì…˜ ì¶”ê?"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button
                    onClick={addOption}
                    className="px-4 py-2 bg-[#49bcf3] text-white rounded-md"
                  >
                    ì¶”ê?
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <Label htmlFor="selector-demo" className="mb-2 block">
                    ? íƒ?˜ì„¸??                  </Label>
                  <Select
                    value={selectedValue}
                    onValueChange={setSelectedValue}
                  >
                    <SelectTrigger id="selector-demo">
                      <SelectValue placeholder="?µì…˜??? íƒ?˜ì„¸?? />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option, index) => (
                        <SelectItem key={index} value={`option-${index}`}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedValue && (
                  <p className="mt-4 text-sm">
                    ? íƒ??ê°?{" "}
                    {options[Number.parseInt(selectedValue.split("-")[1])]}
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
