"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function CheckBoxSlide() {
  const [options, setOptions] = useState([
    { id: "option1", label: "?�션 1", checked: false },
    { id: "option2", label: "?�션 2", checked: false },
    { id: "option3", label: "?�션 3", checked: false },
  ]);

  const [newOption, setNewOption] = useState("");

  const toggleOption = (id: string) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };

  const addOption = () => {
    if (newOption.trim() !== "") {
      const newId = `option${options.length + 1}`;
      setOptions([
        ...options,
        { id: newId, label: newOption.trim(), checked: false },
      ]);
      setNewOption("");
    }
  };

  return (
    <SlideLayout title="Check Box">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?�명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">?�모</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?�의</h3>
              <p>
                Check Box???�용?��? ?�러 ?�션 �??�러 개�? ?�택?????�는 UI
                ?�소?�니?? �?체크박스???�립?�으�??�택?�거???�제????                ?�습?�다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?�용 ?��?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?�중 ?�택???�요???�문조사 질문</li>
                <li>?�터 ?�션 ?�택 (?�러 카테고리 ?�택)</li>
                <li>?�용?��? ?�의</li>
                <li>?�정 ?�션 ?�성??비활?�화</li>
                <li>????목록(To-do list)???�료 ?�시</li>
                <li>?�중 ??�� ?�택 (?�메?? ?�일 ??</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const CheckboxExample: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="space-y-4">
      {/* 기본 체크박스 */}
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={false} 
          onCheckedChange={() => {}} 
        />
        <Label htmlFor="terms">?�용?��????�의?�니??/Label>
      </div>

      {/* 기본값이 체크??체크박스 */}
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="marketing" 
          checked={true} 
          onCheckedChange={() => {}} 
        />
        <Label htmlFor="marketing">마�????�메???�신</Label>
      </div>

      {/* 비활?�화??체크박스 */}
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="disabled" 
          checked={false} 
          disabled 
        />
        <Label 
          htmlFor="disabled" 
          className="text-muted-foreground"
        >
          비활?�화??        </Label>
      </div>

      {/* ?�벤???�들?��? ?�는 체크박스 */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="subscription"
          checked={isSubscribed}
          onCheckedChange={(checked) => {
            setIsSubscribed(checked === true);
          }}
        />
        <Label htmlFor="subscription">구독?�기</Label>
      </div>
    </div>
  );
};

export default CheckboxExample;`}
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
                    placeholder="???�션 추�?"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button
                    onClick={addOption}
                    className="px-4 py-2 bg-[#49bcf3] text-white rounded-md"
                  >
                    추�?
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <div className="space-y-2">
                  {options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={option.id}
                        checked={option.checked}
                        onCheckedChange={() => toggleOption(option.id)}
                      />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-sm">
                  <p>?�택???�션:</p>
                  <ul className="list-disc pl-5 mt-2">
                    {options
                      .filter((option) => option.checked)
                      .map((option) => (
                        <li key={option.id}>{option.label}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
