"use client";

import type React from "react";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function ProgressBarSlide() {
  const [progress, setProgress] = useState(30);
  const [color, setColor] = useState<string>("#49bcf3");

  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decrementProgress = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <SlideLayout title="Progress Bar">
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
                Progress Bar는 작업의 진행 상태를 시각적으로 표시하는 UI
                요소입니다. 사용자에게 작업이 얼마나 완료되었는지 알려줍니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>파일 업로드/다운로드 진행 상태</li>
                <li>양식 작성 진행 상태</li>
                <li>설치 프로세스</li>
                <li>페이지 로딩 표시</li>
                <li>목표 달성 진행 상태</li>
                <li>단계별 프로세스 표시</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const ProgressBarExample: React.FC = () => {
  const [progress, setProgress] = useState(60);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="space-y-6">
      {/* 기본 진행 표시줄 */}
      <div className="space-y-2">
        <p className="text-sm font-medium">기본 진행 표시줄 (60%)</p>
        <Progress value={60} className="h-2" />
      </div>

      {/* 값이 없는 불확정 진행 표시줄 */}
      <div className="space-y-2">
        <p className="text-sm font-medium">불확정 진행 표시줄</p>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* 커스텀 스타일의 진행 표시줄 */}
      <div className="space-y-2">
        <p className="text-sm font-medium">커스텀 스타일 (75%)</p>
        <Progress
          value={75}
          className="h-3 bg-gray-200"
          style={{
            '--progress-foreground': '#22c55e'
          } as React.CSSProperties}
        />
      </div>

      {/* 동적 진행 표시줄 */}
      <div className="space-y-2">
        <p className="text-sm font-medium">동적 진행 표시줄</p>
        <DynamicProgressBar />
      </div>

      {/* 수동 제어 진행 표시줄 */}
      <div className="space-y-2">
        <p className="text-sm font-medium">수동 제어 ({progress}%)</p>
        <Progress value={progress} className="h-2" />
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setProgress(Math.max(0, progress - 10))}
          >
            -10%
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setProgress(Math.min(100, progress + 10))}
          >
            +10%
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setProgress(0)}
          >
            초기화
          </Button>
        </div>
      </div>
    </div>
  );
};

// 동적 진행 표시줄 컴포넌트
const DynamicProgressBar: React.FC = () => {
  const [dynamicProgress, setDynamicProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDynamicProgress(prev => {
        if (prev >= 100) {
          return 0; // 100%에 도달하면 다시 0%부터 시작
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Progress value={dynamicProgress} className="h-2" />;
};

export default ProgressBarExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-6 mb-6">
                <div>
                  <Label className="mb-2 block">진행률: {progress}%</Label>
                  <Slider
                    value={[progress]}
                    onValueChange={(value) => setProgress(value[0])}
                    min={0}
                    max={100}
                    step={1}
                    className="my-4"
                  />
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
                    <option value="#49bcf3">초록색</option>
                    <option value="#3b82f6">파란색</option>
                    <option value="#ef4444">빨간색</option>
                    <option value="#8b5cf6">보라색</option>
                  </select>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={decrementProgress} variant="outline">
                    -10%
                  </Button>
                  <Button onClick={incrementProgress} variant="outline">
                    +10%
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Progress
                    value={progress}
                    className="h-2"
                    style={
                      {
                        "--progress-background": "rgb(229, 231, 235)",
                        "--progress-foreground": color,
                      } as React.CSSProperties
                    }
                  />
                </div>

                <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 ease-in-out"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
