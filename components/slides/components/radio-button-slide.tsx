"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function RadioButtonSlide() {
  const [selectedOption, setSelectedOption] = useState<string>("option1")
  const [options, setOptions] = useState<string[]>(["옵션 1", "옵션 2", "옵션 3"])
  const [newOption, setNewOption] = useState<string>("")

  const addOption = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption.trim()])
      setNewOption("")
    }
  }

  return (
    <SlideLayout title="Radio Button">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">정의</h3>
              <p>
                Radio Button은 사용자가 여러 옵션 중 하나만 선택할 수 있는 UI 요소입니다. 동일한 그룹 내에서는 한 번에
                하나의 라디오 버튼만 선택할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>단일 선택이 필요한 설문조사 질문</li>
                <li>성별, 연령대 등의 인구통계학적 정보 수집</li>
                <li>배송 방법, 결제 방법 선택</li>
                <li>설정 옵션 중 하나 선택</li>
                <li>필터링 옵션 (정렬 기준 등)</li>
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
      {/* 기본 라디오 버튼 그룹 */}
      <RadioGroup defaultValue="option1" className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">옵션 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">옵션 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <Label htmlFor="option3">옵션 3</Label>
        </div>
      </RadioGroup>

      {/* 이벤트 핸들러가 있는 라디오 버튼 그룹 */}
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) => {
          setSelectedOption(value);
          console.log('선택된 옵션:', value);
        }}
        className="space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="choice1" id="choice1" />
          <Label htmlFor="choice1">선택지 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="choice2" id="choice2" />
          <Label htmlFor="choice2">선택지 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="choice3" id="choice3" />
          <Label htmlFor="choice3">선택지 3</Label>
        </div>
      </RadioGroup>

      {/* 비활성화된 라디오 버튼 */}
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
          비활성화됨
        </Label>
      </div>

      {selectedOption && (
        <p className="text-sm text-muted-foreground">
          현재 선택: {selectedOption}
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
                    placeholder="새 옵션 추가"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button onClick={addOption} className="px-4 py-2 bg-[#268052] text-white rounded-md">
                    추가
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-2">
                  {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={`option${index + 1}`} id={`option${index + 1}`} />
                      <Label htmlFor={`option${index + 1}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>

                <p className="mt-4 text-sm">
                  선택된 옵션: {options[Number.parseInt(selectedOption.replace("option", "")) - 1]}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
