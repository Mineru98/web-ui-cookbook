"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function TextSlide() {
  const [fontSize, setFontSize] = useState("medium")
  const [fontWeight, setFontWeight] = useState("normal")

  return (
    <SlideLayout title="Text">
      <div className="space-y-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
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
                Text는 사용자 인터페이스에서 정보를 표시하는 기본적인 요소입니다. 다양한 크기, 두께, 색상으로 표현할 수
                있으며, 제목, 본문, 레이블 등 다양한 용도로 사용됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>제목 (Heading): 페이지나 섹션의 제목</li>
                <li>본문 (Body): 주요 내용의 표시</li>
                <li>레이블(Label): 입력 필드나 버튼 등의 설명</li>
                <li>캡션 (Caption): 이미지나 표에 대한 설명</li>
                <li>링크 (Link): 클릭 가능한 텍스트</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`import React from 'react';

const TextExample: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* 기본 텍스트 */}
      <p className="text-base">
        기본 텍스트입니다.
      </p>

      {/* 제목 텍스트 */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          큰 제목
        </h1>
        <h2 className="text-xl font-bold">
          중간 제목
        </h2>
        <h3 className="text-lg font-bold">
          작은 제목
        </h3>
      </div>

      {/* 강조와 색상이 적용된 텍스트 */}
      <p className="text-lg font-bold text-blue-600">
        강조와 색상이 적용된 텍스트
      </p>

      {/* 다양한 텍스트 크기와 굵기 */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          작은 보조 텍스트
        </p>
        <p className="text-base font-medium">
          중간 굵기 텍스트
        </p>
        <p className="text-lg font-semibold text-green-600">
          굵은 녹색 텍스트
        </p>
        <p className="text-xl font-bold text-red-500">
          큰 빨간 텍스트
        </p>
      </div>

      {/* 링크 텍스트 */}
      <a
        href="#"
        className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          console.log('링크 클릭됨');
        }}
      >
        링크 텍스트
      </a>

      {/* 텍스트 정렬 */}
      <div className="space-y-2">
        <p className="text-left">왼쪽 정렬 텍스트</p>
        <p className="text-center">가운데 정렬 텍스트</p>
        <p className="text-right">오른쪽 정렬 텍스트</p>
      </div>

      {/* 긴 텍스트 처리 */}
      <div className="space-y-2">
        <p className="truncate max-w-xs">
          이것은 매우 긴 텍스트로 줄임표로 처리됩니다
        </p>
        <p className="break-words">
          이것은매우긴단어들로구성된텍스트입니다LineBreakHandling
        </p>
      </div>
    </div>
  );
};

export default TextExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">글자 크기</label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="small">작게</option>
                  <option value="medium">중간</option>
                  <option value="large">크게</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">글자 두께</label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="normal">보통</option>
                  <option value="bold">굵게</option>
                </select>
              </div>

              <div className="p-4 border rounded-md">
                <p
                  className={`
                    ${fontSize === "small" ? "text-sm" : fontSize === "medium" ? "text-base" : "text-xl"}
                    ${fontWeight === "bold" ? "font-bold" : "font-normal"}
                  `}
                >
                  이것은 텍스트 컴포넌트의 예시입니다. 글자 크기와 두께를 조절해보세요.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
