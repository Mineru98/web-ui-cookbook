"use client";

import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SlideLayout from "../slide-layout";

export default function GestureSlide() {
  return (
    <SlideLayout title="Gesture (제스처)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">의의</h3>
              <p>
                제스처(Gesture)는 터치스크린이나 트랙패드를 통해 손가락의
                움직임을 해석하여 인터페이스를 제어하는 방식입니다. React에서는
                Touch Events API와 마우스 이벤트를 조합하여 구현하며,
                일반적으로는 탭, 스와이프, 핀치/스프레드, 더블 탭, 길게 누르기
                등이 포함됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">
                일반적인 제스처 유형
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>탭(Tap):</strong> 클릭과 동일, 요소 선택
                </li>
                <li>
                  <strong>더블 탭(Double Tap):</strong> 확대/축소, 특별 기능
                  활성화
                </li>
                <li>
                  <strong>길게 누르기(Long Press):</strong> 컨텍스트 메뉴, 추가
                  액션 표시
                </li>
                <li>
                  <strong>스와이프(Swipe):</strong> 페이지 전환, 목록 삭제
                </li>
                <li>
                  <strong>핀치(Pinch)/스프레드(Spread):</strong> 확대/축소
                </li>
                <li>
                  <strong>회전(Rotate):</strong> 이미지나 요소 회전
                </li>
                <li>
                  <strong>멀티터치:</strong> 여러 손가락을 사용한 복합 동작
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">구현 고려사항</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>다양한 기기에서의 일관성 보장</li>
                <li>접근성 고려 (키보드 제어 방식 제공)</li>
                <li>시각적 피드백으로 제스처 인식 표시</li>
                <li>제스처 간의 충돌 방지 (탭과 스와이프의 구분)</li>
                <li>성능 최적화 (이벤트 디바운싱, 쓰로틀링)</li>
                <li>사용자 교육 및 도움말 고려</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// 기본 탭 클릭 제스처
import { useState, useRef } from 'react';

function TapGesture() {
  const handleClick = () => {
    console.log('탭 감지됨');
  };

  return (
    <div
      className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white cursor-pointer"
      onClick={handleClick}
    >
      탭
    </div>
  );
}

// 더블 탭 제스처
function DoubleTapGesture() {
  const handleDoubleClick = () => {
    console.log('더블 탭 감지됨');
  };

  return (
    <div
      className="w-24 h-24 bg-green-500 flex items-center justify-center text-white cursor-pointer"
      onDoubleClick={handleDoubleClick}
    >
      더블 탭
    </div>
  );
}

// 길게 누르기 제스처(Context Menu 또는 Touch Event 사용)
function LongPressGesture() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => {
      console.log('길게 누르기 감지됨');
    }, 500);
  };
  
  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      className="w-24 h-24 bg-orange-500 flex items-center justify-center text-white cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      길게 누르기
    </div>
  );
}

// 스와이프 제스처(Touch Events 사용)
function SwipeGesture() {
  const [swipeDirection, setSwipeDirection] = useState('');
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    setSwipeDirection('');
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    
    const minSwipeDistance = 50;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      const direction = deltaX > 0 ? '오른쪽' : '왼쪽';
      console.log(\`\${direction}으로 스와이프!\`);
      setSwipeDirection(direction);
      
      setTimeout(() => setSwipeDirection(''), 1000);
    }
    
    touchStartRef.current = null;
  };

  return (
    <div
      className="w-48 h-24 bg-purple-500 flex items-center justify-center text-white touch-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      스와이프 {swipeDirection && \`(방향: \${swipeDirection})\`}
    </div>
  );
}

// 핀치/스프레드 제스처(Scale Gesture)
function ScaleGesture() {
  const [scale, setScale] = useState(1.0);
  const lastTouchDistanceRef = useRef<number | null>(null);

  const getTouchDistance = (touches: TouchList) => {
    if (touches.length < 2) return null;
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.hypot(
      touch1.clientX - touch2.clientX,
      touch1.clientY - touch2.clientY
    );
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    
    if (e.touches.length === 2) {
      const currentDistance = getTouchDistance(e.touches);
      
      if (currentDistance && lastTouchDistanceRef.current) {
        const scaleChange = currentDistance / lastTouchDistanceRef.current;
        setScale(prev => Math.min(Math.max(0.5, prev * scaleChange), 2.0));
      }
      
      lastTouchDistanceRef.current = currentDistance;
    }
  };

  const handleTouchEnd = () => {
    lastTouchDistanceRef.current = null;
  };

  return (
    <div
      className="w-36 h-36 bg-red-500 flex items-center justify-center text-white touch-none"
      style={{ transform: \`scale(\${scale})\` }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      핀치/스프레드
    </div>
  );
}

// 회전 제스처(Rotation Gesture)
function RotationGesture() {
  const [rotation, setRotation] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const initialAngleRef = useRef<number | null>(null);

  const getAngle = (touch1: Touch, touch2: Touch) => {
    return Math.atan2(
      touch2.clientY - touch1.clientY,
      touch2.clientX - touch1.clientX
    ) * (180 / Math.PI);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    
    if (e.touches.length === 2) {
      const currentAngle = getAngle(e.touches[0], e.touches[1]);
      
      if (initialAngleRef.current !== null) {
        const angleDiff = currentAngle - initialAngleRef.current;
        setRotation(prev => prev + angleDiff);
      }
      
      initialAngleRef.current = currentAngle;
    }
  };

  const handleTouchEnd = () => {
    initialAngleRef.current = null;
  };

  return (
    <div
      ref={elementRef}
      className="w-24 h-24 bg-amber-500 flex items-center justify-center text-black touch-none"
      style={{ transform: \`rotate(\${rotation}deg)\` }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      회전
    </div>
  );
}`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <GestureDemo
                  title="탭(Tap)"
                  description="화면을 빠르게 터치했다 떼는 동작"
                  instruction="박스를 클릭해보세요"
                  gesture="tap"
                />
                <GestureDemo
                  title="더블 탭(Double Tap)"
                  description="같은 위치를 연속해서 두 번 누르는 동작"
                  instruction="박스를 더블 클릭해보세요"
                  gesture="doubletap"
                />
                <GestureDemo
                  title="길게 누르기(Long Press)"
                  description="화면을 길게 누르고 있는 동작"
                  instruction="박스를 길게 눌러보세요"
                  gesture="longpress"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GestureDemo
                  title="스와이프 (Swipe)"
                  description="화면을 특정 방향으로 밀어내는 동작"
                  instruction="박스를 좌우로 스와이프해보세요"
                  gesture="swipe"
                />
                <GestureDemo
                  title="핀치 & 스프레드 (Pinch/Spread)"
                  description="두 손가락을 모으거나 벌리는 동작"
                  instruction="두 손가락으로 확대/축소해보세요"
                  gesture="pinch"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}

interface GestureDemoProps {
  title: string;
  description: string;
  instruction: string;
  gesture: "tap" | "doubletap" | "longpress" | "swipe" | "pinch";
}

function GestureDemo({
  title,
  description,
  instruction,
  gesture,
}: GestureDemoProps) {
  const [action, setAction] = useState("");
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const initialTouchRef = useRef<{ x: number; y: number } | null>(null);
  const lastTapTimeRef = useRef(0);

  // 탭 처리
  const handleTap = () => {
    if (gesture === "tap") {
      setAction("탭 감지됨");
      setTimeout(() => setAction(""), 800);
    } else if (gesture === "doubletap") {
      const now = Date.now();
      const timeSinceLastTap = now - lastTapTimeRef.current;

      if (timeSinceLastTap < 300) {
        setAction("더블 탭 감지됨");
        setTimeout(() => setAction(""), 800);
      }

      lastTapTimeRef.current = now;
    }
  };

  // 길게 누르기 처리
  const handleTouchStart = (e: React.TouchEvent) => {
    if (gesture === "longpress") {
      initialTouchRef.current = { x: 0, y: 0 };

      timerRef.current = setTimeout(() => {
        setAction("길게 누르기 감지됨");
        setTimeout(() => setAction(""), 800);
      }, 500);
    } else if (gesture === "swipe") {
      const touch = e.touches[0];
      initialTouchRef.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (timerRef.current && gesture === "longpress") {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (gesture === "swipe" && initialTouchRef.current) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - initialTouchRef.current.x;

      if (Math.abs(deltaX) > 50) {
        const direction = deltaX > 0 ? "오른쪽" : "왼쪽";
        setAction(`${direction}으로 스와이프!`);
        setPosition({ x: deltaX / 5, y: 0 });
        setTimeout(() => {
          setAction("");
          setPosition({ x: 0, y: 0 });
        }, 800);
        initialTouchRef.current = null;
      }
    }

    if (gesture === "pinch" && e.touches.length === 2) {
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];

      const distance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );

      setScale(Math.min(Math.max(0.5, distance / 100), 2));
      setAction("핀치/스프레드 중..");
    }
  };

  const handleTouchEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (gesture === "pinch") {
      setScale(1);
      setAction("");
    }

    initialTouchRef.current = null;
  };

  const resetDemo = () => {
    setAction("");
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const renderGestureIcon = () => {
    switch (gesture) {
      case "tap":
        return (
          <div className="w-8 h-8 bg-[#49bcf3]/20 rounded-full flex items-center justify-center">
            <ArrowDownIcon className="w-5 h-5 text-[#49bcf3]" />
          </div>
        );
      case "doubletap":
        return (
          <div className="flex">
            <div className="w-8 h-8 bg-[#49bcf3]/20 rounded-full flex items-center justify-center">
              <ArrowDownIcon className="w-5 h-5 text-[#49bcf3]" />
            </div>
            <div className="w-8 h-8 bg-[#49bcf3]/20 rounded-full flex items-center justify-center ml-1">
              <ArrowDownIcon className="w-5 h-5 text-[#49bcf3]" />
            </div>
          </div>
        );
      case "longpress":
        return (
          <div className="w-8 h-8 bg-[#49bcf3]/20 rounded-full flex items-center justify-center border-2 border-[#49bcf3]"></div>
        );
      case "swipe":
        return (
          <div className="flex">
            <ArrowLeftIcon className="w-5 h-5 text-[#49bcf3] mr-1" />
            <ArrowRightIcon className="w-5 h-5 text-[#49bcf3]" />
          </div>
        );
      case "pinch":
        return (
          <div className="flex">
            <Minimize2 className="w-5 h-5 text-[#49bcf3] mr-1" />
            <Maximize2 className="w-5 h-5 text-[#49bcf3]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white h-full">
      <div className="bg-slate-50 p-3 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          {renderGestureIcon()}
        </div>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </div>

      <div
        className="p-4 flex flex-col items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`
            w-32 h-32 bg-[#49bcf3]/10 border-2 border-[#49bcf3] rounded-lg 
            flex items-center justify-center cursor-pointer transition-all
            ${action ? "bg-[#49bcf3]/20" : ""}
          `}
          style={{
            transform: `
              scale(${scale}) 
              rotate(${rotation}deg)
              translateX(${position.x}px)
              translateY(${position.y}px)
            `,
          }}
          onClick={handleTap}
        >
          {action ? (
            <div className="font-medium text-[#49bcf3] text-center text-sm">
              {action}
            </div>
          ) : (
            <div className="text-xs text-gray-600 text-center px-2">
              {instruction}
            </div>
          )}
        </div>

        <button
          className="mt-4 text-xs text-gray-500 hover:text-gray-700"
          onClick={resetDemo}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
