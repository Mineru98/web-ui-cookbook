"use client";

import SlideLayout from "../slide-layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ClickSlide() {
  const [clickCount, setClickCount] = useState(0);
  const [touchCount, setTouchCount] = useState(0);
  const [tapCount, setTapCount] = useState(0);

  return (
    <SlideLayout title="Click / Tap / Touch">
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
                사용자가 요소를 짧게 누르거나 터치하는 기본적인 상호작용입니다.
                React에서는 주로 onClick 이벤트로 처리하며, 장치와 플랫폼에 따라
                다음과 같이 부릅니다:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Click</strong>: 주로 데스크톱, 마우스 환경
                </li>
                <li>
                  <strong>Tap</strong>: 주로 모바일 터치 환경
                </li>
                <li>
                  <strong>Touch</strong>: 터치스크린에서 일반적인 터치 제스처
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">주요 특징</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>가장 기본적이고 널리 사용되는 상호작용 방식</li>
                <li>사용자가 액션을 수행하도록 명확한 시각적 피드백 필요</li>
                <li>
                  호버(Hover) 상태는 데스크탑에서 사용 가능하나 모바일에서는
                  불가능
                </li>
                <li>접근성을 위해 충분한 터치 영역(44x44px 권장)이 필요</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// 기본 클릭 동작 (Button)
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function ClickExample() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // 버튼 클릭 시 실행될 코드
    console.log('버튼이 클릭되었습니다');
    setClickCount(prev => prev + 1);
  };

  return (
    <Button onClick={handleClick}>
      클릭하세요
    </Button>
  );
}

// 테두리가 있는 버튼 (Outline Variant)
<Button
  variant="outline" 
  onClick={() => {
    console.log('아웃라인 버튼이 탭되었습니다');
  }}
>
  탭하세요
</Button>

// 커스텀 클릭 영역 (div with onClick)
<div
  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer"
  onClick={() => {
    console.log('커스텀 영역이 터치되었습니다');
    setTouchCount(prev => prev + 1);
  }}
>
  터치
</div>

// 다양한 마우스/터치 이벤트를 처리하는 React 컴포넌트
function InteractiveArea() {
  const handleClick = () => {
    console.log('클릭됨');
  };

  const handleDoubleClick = () => {
    console.log('더블 클릭됨');
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    console.log('마우스 다운 위치:', e.clientX, e.clientY);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('우클릭 또는 길게 누름');
  };

  const handleTouchStart = () => {
    console.log('터치 시작');
  };

  return (
    <div
      className="w-48 h-24 bg-blue-500 flex items-center justify-center text-white cursor-pointer"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
      onTouchStart={handleTouchStart}
    >
      다양한 터치 처리
    </div>
  );
}

// 호버 및 액티브 효과가 있는 클릭 영역
<div
  className="w-36 h-20 flex items-center justify-center cursor-pointer transition-all
             bg-gray-100 hover:bg-green-100 active:bg-green-200
             border border-gray-300 hover:border-green-400 active:border-green-500
             shadow-sm hover:shadow-md active:shadow-lg"
  onClick={() => {
    console.log('호버 효과와 함께 클릭됨');
  }}
>
  클릭하면 호버 효과
</div>`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                  <h4 className="font-medium mb-3">Click 예시</h4>
                  <Button
                    onClick={() => setClickCount((prev) => prev + 1)}
                    className="mb-4"
                  >
                    클릭하세요
                  </Button>
                  <p>클릭 횟수: {clickCount}</p>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                  <h4 className="font-medium mb-3">Tap 예시</h4>
                  <Button
                    onClick={() => setTapCount((prev) => prev + 1)}
                    className="mb-4"
                    variant="outline"
                  >
                    탭하세요
                  </Button>
                  <p>탭 횟수: {tapCount}</p>
                </div>

                <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                  <h4 className="font-medium mb-3">Touch 예시</h4>
                  <div
                    className="w-24 h-24 bg-[#6700e6] rounded-full flex items-center justify-center text-white cursor-pointer mb-4"
                    onClick={() => setTouchCount((prev) => prev + 1)}
                  >
                    터치
                  </div>
                  <p>터치 횟수: {touchCount}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
