"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function OutlinedButtonSlide() {
  const [borderWidth, setBorderWidth] = useState<string>("1px");
  const [borderColor, setBorderColor] = useState<string>("#6700e6");
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <SlideLayout title="Outlined Button">
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
                Outlined Button은 배경색 대신 테두리(외곽선)를 사용하여 강조하는
                버튼입니다. 일반적으로 보조 액션이나 덜 중요한 액션에
                사용됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>보조 액션 (Secondary actions)</li>
                <li>취소 버튼 (Cancel buttons)</li>
                <li>필터 토글 (Filter toggles)</li>
                <li>옵션 선택 (Option selection)</li>
                <li>시각적으로 덜 강조되어야 하는 액션</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Download, Heart } from 'lucide-react';

const OutlinedButtonExample: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* 기본 외곽선 버튼 */}
      <Button variant="outline">
        외곽선 버튼
      </Button>

      {/* 다양한 크기의 외곽선 버튼 */}
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm">
          작은 크기
        </Button>
        <Button variant="outline" size="default">
          기본 크기
        </Button>
        <Button variant="outline" size="lg">
          큰 크기
        </Button>
      </div>

      {/* 커스텀 스타일의 외곽선 버튼 */}
      <Button 
        variant="outline" 
        className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
      >
        커스텀 외곽선 버튼
      </Button>

      {/* 아이콘이 있는 외곽선 버튼 */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>추가하기</span>
        </Button>
        
        <Button variant="outline" className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>다운로드</span>
        </Button>
        
        <Button variant="outline" className="flex items-center space-x-2">
          <Heart className="h-4 w-4" />
          <span>좋아요</span>
        </Button>
      </div>

      {/* 비활성화된 외곽선 버튼 */}
      <Button variant="outline" disabled>
        비활성화됨
      </Button>

      {/* 색상별 외곽선 버튼 */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
          성공
        </Button>
        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
          위험
        </Button>
        <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
          경고
        </Button>
        <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
          정보
        </Button>
      </div>

      {/* 전체 너비 외곽선 버튼 */}
      <Button variant="outline" className="w-full">
        전체 너비 버튼
      </Button>
    </div>
  );
};

export default OutlinedButtonExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    테두리 두께
                  </label>
                  <select
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="1px">얇게 (1px)</option>
                    <option value="2px">중간 (2px)</option>
                    <option value="3px">두껍게 (3px)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    테두리 색상
                  </label>
                  <select
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="#6700e6">초록색</option>
                    <option value="#3b82f6">파란색</option>
                    <option value="#ef4444">빨간색</option>
                    <option value="#8b5cf6">보라색</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className={`px-4 py-2 rounded-md transition-colors duration-200 border-solid`}
                  style={{
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    color: borderColor,
                    backgroundColor: hovered
                      ? `${borderColor}10`
                      : "transparent",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  외곽선 버튼
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
