"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function DividerSlide() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const [thickness, setThickness] = useState<string>("1px");
  const [color, setColor] = useState<string>("#e5e7eb");

  return (
    <SlideLayout title="Divider">
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
                Divider(또는 Separator)는 콘텐츠 섹션을 시각적으로 구분하는 가로
                또는 세로 선입니다. UI의 구조와 계층을 명확하게 하는 데 도움이
                됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>콘텐츠 섹션 구분</li>
                <li>메뉴 항목 구분</li>
                <li>폼 섹션 구분</li>
                <li>카드 내부 콘텐츠 구분</li>
                <li>헤더와 본문 구분</li>
                <li>푸터 구분</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React from 'react';
import { Separator } from '@/components/ui/separator';

const DividerExample: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 기본 가로 구분선 */}
      <div className="space-y-4">
        <p>상단 컨텐츠</p>
        <Separator />
        <p>하단 컨텐츠</p>
      </div>

      {/* 세로 구분선 */}
      <div className="flex items-center space-x-4 h-16">
        <div className="flex-1 text-center">
          왼쪽 컨텐츠
        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="flex-1 text-center">
          오른쪽 컨텐츠
        </div>
      </div>

      {/* 커스텀 스타일의 구분선 */}
      <div className="space-y-4">
        <p>커스텀 스타일 상단</p>
        <Separator className="bg-blue-500 h-0.5" />
        <p>커스텀 스타일 하단</p>
      </div>

      {/* 두꺼운 구분선 */}
      <div className="space-y-4">
        <p>두꺼운 선 상단</p>
        <Separator className="h-1 bg-gray-300" />
        <p>두껌운 선 하단</p>
      </div>

      {/* 텍스트가 있는 구분선 */}
      <div className="flex items-center space-x-4">
        <Separator className="flex-1" />
        <span className="text-sm text-muted-foreground px-2">
          또는
        </span>
        <Separator className="flex-1" />
      </div>

      {/* 점선 스타일 */}
      <div className="space-y-4">
        <p>점선 스타일 상단</p>
        <div className="border-t border-dashed border-gray-300" />
        <p>점선 스타일 하단</p>
      </div>

      {/* 색상이 다른 구분선들 */}
      <div className="space-y-2">
        <Separator className="bg-red-500" />
        <Separator className="bg-green-500" />
        <Separator className="bg-blue-500" />
        <Separator className="bg-purple-500" />
      </div>
    </div>
  );
};

export default DividerExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <Label className="mb-2 block">방향</Label>
                  <RadioGroup
                    value={orientation}
                    onValueChange={(value) =>
                      setOrientation(value as "horizontal" | "vertical")
                    }
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="horizontal" id="horizontal" />
                      <Label htmlFor="horizontal">가로</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vertical" id="vertical" />
                      <Label htmlFor="vertical">세로</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="thickness" className="mb-2 block">
                    두께
                  </Label>
                  <select
                    id="thickness"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="1px">얇게 (1px)</option>
                    <option value="2px">중간 (2px)</option>
                    <option value="4px">두껍게 (4px)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="color" className="mb-2 block">
                    색상
                  </Label>
                  <select
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="#e5e7eb">기본 (회색)</option>
                    <option value="#6700e6">초록색</option>
                    <option value="#3b82f6">파란색</option>
                    <option value="#ef4444">빨간색</option>
                  </select>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                {orientation === "horizontal" ? (
                  <div className="space-y-4">
                    <p>상단 콘텐츠</p>
                    <div
                      className="w-full"
                      style={{
                        height: thickness,
                        backgroundColor: color,
                      }}
                    ></div>
                    <p>하단 콘텐츠</p>
                  </div>
                ) : (
                  <div className="flex h-20">
                    <div className="flex-1 flex items-center justify-center">
                      <p>왼쪽 콘텐츠</p>
                    </div>
                    <div
                      className="h-full"
                      style={{
                        width: thickness,
                        backgroundColor: color,
                      }}
                    ></div>
                    <div className="flex-1 flex items-center justify-center">
                      <p>오른쪽 콘텐츠</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
