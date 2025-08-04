"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function SelectorSlide() {
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [options, setOptions] = useState<string[]>(["옵션 1", "옵션 2", "옵션 3", "옵션 4"])
  const [newOption, setNewOption] = useState<string>("")

  const addOption = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption.trim()])
      setNewOption("")
    }
  }

  return (
    <SlideLayout title="Selector">
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
                Selector(또는 Select)는 여러 옵션 중 하나를 선택할 수 있는 드롭다운 형태의 UI 요소입니다. 드롭다운과
                유사하지만, 주로 데이터 선택에 특화되어 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>국가, 지역 선택</li>
                <li>카테고리 선택</li>
                <li>날짜, 시간 범위 선택</li>
                <li>정렬 옵션 선택</li>
                <li>언어 선택</li>
                <li>테마 선택</li>
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
      {/* 기본 셀렉터 */}
      <div className="space-y-2">
        <Label>기본 셀렉터</Label>
        <Select 
          value={selectedValue} 
          onValueChange={(value) => {
            setSelectedValue(value);
            console.log('선택된 값:', value);
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="옵션을 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">옵션 1</SelectItem>
            <SelectItem value="option2">옵션 2</SelectItem>
            <SelectItem value="option3">옵션 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 그룹이 있는 셀렉터 */}
      <div className="space-y-2">
        <Label>그룹 셀렉터</Label>
        <Select onValueChange={(value) => console.log('선택:', value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="음식을 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>과일</SelectLabel>
              <SelectItem value="apple">사과</SelectItem>
              <SelectItem value="banana">바나나</SelectItem>
              <SelectItem value="orange">오렌지</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>채소</SelectLabel>
              <SelectItem value="carrot">당근</SelectItem>
              <SelectItem value="potato">감자</SelectItem>
              <SelectItem value="onion">양파</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* 비활성화된 옵션이 있는 셀렉터 */}
      <div className="space-y-2">
        <Label>비활성화 옵션 포함</Label>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="상태를 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">활성</SelectItem>
            <SelectItem value="inactive">비활성</SelectItem>
            <SelectItem value="pending" disabled>
              대기중 (비활성화)
            </SelectItem>
            <SelectItem value="suspended">일시정지</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 동적 옵션이 있는 셀렉터 */}
      <div className="space-y-2">
        <Label>동적 옵션</Label>
        <Select 
          value={selectedValue}
          onValueChange={(value) => {
            if (value) {
              setSelectedValue(value);
              console.log('새로 선택된 값:', value);
            }
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="선택하세요" />
          </SelectTrigger>
          <SelectContent>
            {['옵션 1', '옵션 2', '옵션 3', '옵션 4'].map((option, index) => (
              <SelectItem key={index} value={\`option-\${index + 1}\`}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 검색 가능한 셀렉터 (기본 Select는 검색 불가하므로 Combobox 형태로 구현) */}
      <div className="space-y-2">
        <Label>크기별 셀렉터</Label>
        <div className="flex space-x-2">
          <Select>
            <SelectTrigger className="w-[150px] h-8">
              <SelectValue placeholder="작음" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">작음</SelectItem>
              <SelectItem value="medium">중간</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="기본" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">기본</SelectItem>
              <SelectItem value="large">큼</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedValue && (
        <p className="text-sm text-muted-foreground">
          현재 선택된 값: {selectedValue}
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
                    placeholder="새 옵션 추가"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button onClick={addOption} className="px-4 py-2 bg-[#268052] text-white rounded-md">
                    추가
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <Label htmlFor="selector-demo" className="mb-2 block">
                    선택하세요
                  </Label>
                  <Select value={selectedValue} onValueChange={setSelectedValue}>
                    <SelectTrigger id="selector-demo">
                      <SelectValue placeholder="옵션을 선택하세요" />
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
                  <p className="mt-4 text-sm">선택된 값: {options[Number.parseInt(selectedValue.split("-")[1])]}</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
