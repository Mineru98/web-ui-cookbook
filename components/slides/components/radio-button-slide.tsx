"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function RadioButtonSlide() {
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const [options, setOptions] = useState<string[]>([
    "?µì…˜ 1",
    "?µì…˜ 2",
    "?µì…˜ 3",
  ]);
  const [newOption, setNewOption] = useState<string>("");

  const addOption = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption.trim()]);
      setNewOption("");
    }
  };

  return (
    <SlideLayout title="Radio Button">
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
                Radio Button?€ ?¬ìš©?ê? ?¬ëŸ¬ ?µì…˜ ì¤??˜ë‚˜ë§?? íƒ?????ˆëŠ” UI
                ?”ì†Œ?…ë‹ˆ?? ?™ì¼??ê·¸ë£¹ ?´ì—?œëŠ” ??ë²ˆì— ?˜ë‚˜???¼ë””??ë²„íŠ¼ë§?                ? íƒ?????ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?¨ì¼ ? íƒ???„ìš”???¤ë¬¸ì¡°ì‚¬ ì§ˆë¬¸</li>
                <li>?±ë³„, ?°ë ¹?€ ?±ì˜ ?¸êµ¬?µê³„?™ì  ?•ë³´ ?˜ì§‘</li>
                <li>ë°°ì†¡ ë°©ë²•, ê²°ì œ ë°©ë²• ? íƒ</li>
                <li>?¤ì • ?µì…˜ ì¤??˜ë‚˜ ? íƒ</li>
                <li>?„í„°ë§??µì…˜ (?•ë ¬ ê¸°ì? ??</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const RadioButtonExample: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  return (
    <div className="space-y-4">
      {/* ê¸°ë³¸ ?¼ë””??ë²„íŠ¼ ê·¸ë£¹ */}
      <RadioGroup defaultValue="option1" className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">?µì…˜ 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">?µì…˜ 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <Label htmlFor="option3">?µì…˜ 3</Label>
        </div>
      </RadioGroup>

      {/* ?´ë²¤???¸ë“¤?¬ê? ?ˆëŠ” ?¼ë””??ë²„íŠ¼ ê·¸ë£¹ */}
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) => {
          setSelectedOption(value);
          console.log('? íƒ???µì…˜:', value);
        }}
        className="space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="choice1" id="choice1" />
          <Label htmlFor="choice1">? íƒì§€ 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="choice2" id="choice2" />
          <Label htmlFor="choice2">? íƒì§€ 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="choice3" id="choice3" />
          <Label htmlFor="choice3">? íƒì§€ 3</Label>
        </div>
      </RadioGroup>

      {/* ë¹„í™œ?±í™”???¼ë””??ë²„íŠ¼ */}
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="disabled"
          id="disabled"
          disabled
        />
        <Label 
          htmlFor="disabled"
          className="text-muted-foreground"
        >
          ë¹„í™œ?±í™”??        </Label>
      </div>

      {selectedOption && (
        <p className="text-sm text-muted-foreground">
          ?„ì¬ ? íƒ: {selectedOption}
        </p>
      )}
    </div>
  );
};

export default RadioButtonExample;`}
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

              <div className="p-4 border rounded-md">
                <RadioGroup
                  value={selectedOption}
                  onValueChange={setSelectedOption}
                  className="space-y-2"
                >
                  {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={`option${index + 1}`}
                        id={`option${index + 1}`}
                      />
                      <Label htmlFor={`option${index + 1}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>

                <p className="mt-4 text-sm">
                  ? íƒ???µì…˜:{" "}
                  {
                    options[
                      Number.parseInt(selectedOption.replace("option", "")) - 1
                    ]
                  }
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
