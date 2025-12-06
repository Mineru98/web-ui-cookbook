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
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">정의</h3>
              <p>
                Button은 사용자가 액션을 트리거할 수 있는 인터랙티브 요소입니다. 클릭하거나 탭하면 지정된 작업을
                수행합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">주요 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>양식 제출 (Form submission)</li>
                <li>대화 상자 확인/취소 (Dialog confirmation/cancellation)</li>
                <li>페이지 이동 (Navigation)</li>
                <li>기능 활성화/비활성화 (Feature toggle)</li>
                <li>프로세스 시작/중지 (Process start/stop)</li>
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
      {/* 기본 버튼 */}
      <Button onClick={() => {}}>
        기본 버튼
      </Button>

      {/* 비활성화된 버튼 */}
      <Button disabled>
        비활성화된 버튼
      </Button>

      <div className="space-y-2">
        <h3 className="font-bold">다양한 스타일의 버튼</h3>

        {/* 다양한 스타일의 버튼 */}
        <div className="flex flex-wrap gap-2">
          {/* default */}
          <Button variant="default" onClick={() => {}}>
            기본
          </Button>
          
          {/* destructive */}
          <Button variant="destructive" onClick={() => {}}>
            삭제
          </Button>

          {/* outline */}
          <Button variant="outline" onClick={() => {}}>
            외곽선
          </Button>

          {/* secondary */}
          <Button variant="secondary" onClick={() => {}}>
            보조
          </Button>

          {/* ghost */}
          <Button variant="ghost" onClick={() => {}}>
            고스트
          </Button>
          
          {/* link */}
          <Button variant="link" onClick={() => {}}>
            링크
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold">크기가 다른 버튼</h3>

        {/* 크기가 다른 버튼 */}
        <div className="flex flex-wrap gap-2">
          {/* default size */}
          <Button size="default" onClick={() => {}}>
            기본 크기
          </Button>

          {/* small size */}
          <Button size="sm" onClick={() => {}}>
            작은 크기
          </Button>

          {/* large size */}
          <Button size="lg" onClick={() => {}}>
            큰 크기
          </Button>
        </div>
      </div>

      {/* 이벤트 핸들러가 있는 버튼 */}
      <Button
        onClick={() => {
          console.log('버튼이 클릭됨');
          onButtonPressed();
        }}
      >
        클릭하세요
      </Button>
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
                <label className="block text-sm font-medium mb-2">버튼 스타일</label>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="default">기본</option>
                  <option value="destructive">삭제</option>
                  <option value="outline">외곽선</option>
                  <option value="secondary">보조</option>
                  <option value="ghost">고스트</option>
                  <option value="link">링크</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Button variant={variant} onClick={() => setClickCount((prev) => prev + 1)}>
                  버튼 클릭하기
                </Button>

                <p className="text-sm">클릭 횟수: {clickCount}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
