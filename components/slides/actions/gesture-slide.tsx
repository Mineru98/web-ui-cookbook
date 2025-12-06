"use client";

import SlideLayout from "../slide-layout";
import { useState, useRef, useEffect } from "react";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  Maximize2,
  Minimize2,
  RotateCw,
} from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GestureSlide() {
  return (
    <SlideLayout title="Gesture (?œìŠ¤ì²?">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?•ì˜</h3>
              <p>
                ?œìŠ¤ì²?Gesture)???°ì¹˜?¤í¬ë¦°ì´???¸ë™?¨ë“œ?ì„œ ?ê????€ì§ì„??                ?µí•´ ?¸í„°?˜ì´?¤ì? ?í˜¸?‘ìš©?˜ëŠ” ë°©ì‹?…ë‹ˆ?? React?ì„œ??Touch
                Events API?€ ë§ˆìš°???´ë²¤?¸ë? ì¡°í•©?˜ì—¬ êµ¬í˜„?˜ë©°, ?¼ë°˜?ìœ¼ë¡???
                ?¤ì??´í”„, ?€ì¹? ?¤í”„?ˆë“œ, ?”ë¸”?? ë¡??„ë ˆ???±ì´ ?¬í•¨?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">
                ?¼ë°˜?ì¸ ?œìŠ¤ì²?? í˜•
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>??Tap):</strong> ?´ë¦­ê³??™ì¼, ?”ì†Œ ? íƒ
                </li>
                <li>
                  <strong>?”ë¸” ??Double Tap):</strong> ?•ë?/ì¶•ì†Œ, ?¹ë³„ ê¸°ëŠ¥
                  ?œì„±??                </li>
                <li>
                  <strong>ë¡??„ë ˆ??Long Press):</strong> ì»¨í…?¤íŠ¸ ë©”ë‰´, ì¶”ê?
                  ?µì…˜ ?œì‹œ
                </li>
                <li>
                  <strong>?¤ì??´í”„(Swipe):</strong> ?˜ì´ì§€ ?„í™˜, ëª©ë¡ ?¤í¬ë¡?                </li>
                <li>
                  <strong>?€ì¹?Pinch)/?¤í”„?ˆë“œ(Spread):</strong> ?•ë?/ì¶•ì†Œ
                </li>
                <li>
                  <strong>?Œì „(Rotate):</strong> ?´ë?ì§€???”ì†Œ ?Œì „
                </li>
                <li>
                  <strong>ë©€???°ì¹˜:</strong> ?¬ëŸ¬ ?ê??½ì„ ?¬ìš©??ë³µí•© ?™ì‘
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">êµ¬í˜„ ê³ ë ¤?¬í•­</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?¤ì–‘??ê¸°ê¸°?ì„œ ?¼ê????¸ì‹ë¥?ë³´ì¥</li>
                <li>?‘ê·¼??ê³ ë ¤ (?€ì²??í˜¸?‘ìš© ë°©ì‹ ?œê³µ)</li>
                <li>?œê°???¼ë“œë°±ìœ¼ë¡??œìŠ¤ì²??¸ì‹ ?œì‹œ</li>
                <li>?œìŠ¤ì²?ê°„ì˜ ì¶©ëŒ ë°©ì? (?? ?¤ì??´í”„?€ ?¤í¬ë¡?</li>
                <li>?±ëŠ¥ ìµœì ??(?´ë²¤???¤ë¡œ?€ë§? ?”ë°”?´ì‹±)</li>
                <li>?¬ìš©??êµìœ¡ ë°??¨ë³´??ê³ ë ¤</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// ê¸°ë³¸ ???´ë¦­ ?œìŠ¤ì²?import { useState, useRef } from 'react';

function TapGesture() {
  const handleClick = () => {
    console.log('??ê°ì???');
  };

  return (
    <div
      className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white cursor-pointer"
      onClick={handleClick}
    >
      ??    </div>
  );
}

// ?”ë¸” ???œìŠ¤ì²?function DoubleTapGesture() {
  const handleDoubleClick = () => {
    console.log('?”ë¸” ??ê°ì???');
  };

  return (
    <div
      className="w-24 h-24 bg-green-500 flex items-center justify-center text-white cursor-pointer"
      onDoubleClick={handleDoubleClick}
    >
      ?”ë¸” ??    </div>
  );
}

// ë¡??„ë ˆ???œìŠ¤ì²?(Context Menu ?ëŠ” Touch Event ?¬ìš©)
function LongPressGesture() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => {
      console.log('ë¡??„ë ˆ??ê°ì???');
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
      ê¸¸ê²Œ ?„ë¥´ê¸?    </div>
  );
}

// ?¤ì??´í”„ ?œìŠ¤ì²?(Touch Events ?¬ìš©)
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
      const direction = deltaX > 0 ? '?¤ë¥¸ìª? : '?¼ìª½';
      console.log(\`\${direction}?¼ë¡œ ?¤ì??´í”„!\`);
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
      ?¤ì??´í”„ {swipeDirection && \`(ë°©í–¥: \${swipeDirection})\`}
    </div>
  );
}

// ?€ì¹??¤í”„?ˆë“œ ?œìŠ¤ì²?(Scale Gesture)
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
      ?€ì¹??¤í”„?ˆë“œ
    </div>
  );
}

// ?Œì „ ?œìŠ¤ì²?(Rotation Gesture)
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
      ?Œì „
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
                  title="??(Tap)"
                  description="?”ë©´??ë¹ ë¥´ê²??°ì¹˜?ˆë‹¤ ?¼ëŠ” ?™ì‘"
                  instruction="ë°•ìŠ¤ë¥???•´ë³´ì„¸??
                  gesture="tap"
                />
                <GestureDemo
                  title="?”ë¸” ??(Double Tap)"
                  description="ê°™ì? ?„ì¹˜ë¥??°ì†?´ì„œ ??ë²???•˜???™ì‘"
                  instruction="ë°•ìŠ¤ë¥??”ë¸” ??•´ë³´ì„¸??
                  gesture="doubletap"
                />
                <GestureDemo
                  title="ë¡??„ë ˆ??(Long Press)"
                  description="?”ë©´??ê¸¸ê²Œ ?„ë¥´ê³??ˆëŠ” ?™ì‘"
                  instruction="ë°•ìŠ¤ë¥?ê¸¸ê²Œ ?„ë¥´?¸ìš”"
                  gesture="longpress"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GestureDemo
                  title="?¤ì??´í”„ (Swipe)"
                  description="?”ë©´???¹ì • ë°©í–¥?¼ë¡œ ë°€?´ë‚´???™ì‘"
                  instruction="ë°•ìŠ¤ë¥??†ìœ¼ë¡??¤ì??´í”„?˜ì„¸??
                  gesture="swipe"
                />
                <GestureDemo
                  title="?€ì¹?& ?¤í”„?ˆë“œ (Pinch/Spread)"
                  description="???ê??½ì„ ëª¨ìœ¼ê±°ë‚˜ ë²Œë¦¬???™ì‘"
                  instruction="???ê??½ìœ¼ë¡??•ë?/ì¶•ì†Œ?´ë³´?¸ìš”"
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

  // ??ì²˜ë¦¬
  const handleTap = () => {
    if (gesture === "tap") {
      setAction("??ê°ì???");
      setTimeout(() => setAction(""), 800);
    } else if (gesture === "doubletap") {
      const now = Date.now();
      const timeSinceLastTap = now - lastTapTimeRef.current;

      if (timeSinceLastTap < 300) {
        setAction("?”ë¸” ??ê°ì???");
        setTimeout(() => setAction(""), 800);
      }

      lastTapTimeRef.current = now;
    }
  };

  // ë¡??„ë ˆ??ì²˜ë¦¬
  const handleTouchStart = () => {
    if (gesture === "longpress") {
      initialTouchRef.current = { x: 0, y: 0 };

      timerRef.current = setTimeout(() => {
        setAction("ë¡??„ë ˆ??ê°ì???");
        setTimeout(() => setAction(""), 800);
      }, 500);
    } else if (gesture === "swipe") {
      initialTouchRef.current = { x: 0, y: 0 };
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
        const direction = deltaX > 0 ? "?¤ë¥¸ìª? : "?¼ìª½";
        setAction(`${direction}?¼ë¡œ ?¤ì??´í”„!`);
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
      setAction("?€ì¹??¤í”„?ˆë“œ ì¤?..");
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
          ì´ˆê¸°??        </button>
      </div>
    </div>
  );
}
