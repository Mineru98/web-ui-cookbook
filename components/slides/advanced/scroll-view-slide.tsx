"use client";

import SlideLayout from "../slide-layout";
import { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ScrollViewSlide() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [codeType, setCodeType] = useState<"react">("react");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const position = scrollContainer.scrollTop;
      const max = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      setScrollPosition(position);
      setMaxScroll(max);
      setShowScrollToTop(position > 100);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // ì´ˆê¸° ê°??¤ì •

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const generateLoremIpsum = (paragraphs: number) => {
    const lorem = [
      "?¤í¬ë¡?ë·°ëŠ” ?”ë©´ ?¬ê¸°ë³´ë‹¤ ????ì½˜í…ì¸ ë? ?œì‹œ?˜ê¸° ?„í•´ ?„ìˆ˜?ì¸ UI ì»´í¬?ŒíŠ¸?…ë‹ˆ?? ?¬ìš©?ê? ì½˜í…ì¸ ë? ?¤í¬ë¡¤í•˜??ë³????ˆê²Œ ?©ë‹ˆ??",
      "?€ë¶€ë¶„ì˜ ëª¨ë°”???±ê³¼ ?¹ì‚¬?´íŠ¸?ì„œ???¤í¬ë¡?ë·°ë? ê¸°ë³¸?ìœ¼ë¡??¬ìš©?©ë‹ˆ?? ?¹íˆ ê¸?ëª©ë¡?´ë‚˜ ?ìŠ¤?¸ê? ?ˆëŠ” ê²½ìš°???”ìš± ì¤‘ìš”?©ë‹ˆ??",
      "?¤í¬ë¡?ë·°ì—???¸ë¡œ ?¤í¬ë¡¤ê³¼ ê°€ë¡??¤í¬ë¡¤ì´ ?ˆìœ¼ë©? ?„ìš”???°ë¼ ??ë°©í–¥ ëª¨ë‘ ì§€?í•  ???ˆìŠµ?ˆë‹¤.",
      "?¤í¬ë¡?ë·°ë? êµ¬í˜„???ŒëŠ” ?±ëŠ¥ ìµœì ?”ê? ì¤‘ìš”?©ë‹ˆ?? ?¹íˆ ë§ì? ??ª©???œì‹œ????ê°€?í™”(virtualization) ê¸°ë²•???œìš©?˜ë©´ ì¢‹ìŠµ?ˆë‹¤.",
      "?¤í¬ë¡??„ì¹˜ë¥?ì¶”ì ?˜ê³  ?¹ì • ?™ì‘???¸ë¦¬ê±°í•˜??ê²ƒì? ë¬´í•œ ?¤í¬ë¡? ì§€??ë¡œë”© ?±ì˜ ê¸°ëŠ¥??êµ¬í˜„?˜ëŠ” ??? ìš©?©ë‹ˆ??",
      "?‘ê·¼?±ì„ ê³ ë ¤?˜ì—¬ ?¤ë³´???´ë¹„ê²Œì´?˜ê³¼ ?¤í¬ë¦?ë¦¬ë” ?¸í™˜?±ì„ ë³´ì¥?´ì•¼ ?©ë‹ˆ??",
      "?¤í¬ë¡¤ë°”???œê°???”ì?¸ë„ ?¬ìš©??ê²½í—˜???í–¥??ë¯¸ì¹©?ˆë‹¤. ëª¨ë°”?¼ì—?œëŠ” ?¤í¬ë¡¤ë°”ê°€ ?ë™?¼ë¡œ ?¨ê²¨ì§€??ê²½ìš°ê°€ ë§ìŠµ?ˆë‹¤.",
      "?¤í¬ë¡?? ë‹ˆë©”ì´?˜ê³¼ ?¤ëƒ… ê¸°ëŠ¥??ì¶”ê??˜ì—¬ ??ë§¤ë„?¬ìš´ ?¬ìš©??ê²½í—˜???œê³µ?????ˆìŠµ?ˆë‹¤.",
      "?ë‹¨?¼ë¡œ ?¤í¬ë¡?ë²„íŠ¼?€ ê¸?ì½˜í…ì¸ ë? ?ìƒ‰????ë§¤ìš° ? ìš©??UI ?”ì†Œ?…ë‹ˆ??",
      "?¤í¬ë¡??´ë²¤?¸ë? ?¬ìš©?˜ì—¬ ?¤ë” ?¨ê¸°ê¸??œì‹œ?˜ê¸°, ? ë‹ˆë©”ì´???¸ë¦¬ê±????¤ì–‘???¸í„°?™ì…˜??êµ¬í˜„?????ˆìŠµ?ˆë‹¤.",
    ];

    const result = [];
    for (let i = 0; i < paragraphs; i++) {
      const index = i % lorem.length;
      result.push(lorem[index]);
    }

    return result;
  };

  const getReactCode = () => {
    return `import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollViewProps {
  children: React.ReactNode;
  className?: string;
  showScrollToTop?: boolean;
  showProgressBar?: boolean;
  onScroll?: (position: number, maxScroll: number) => void;
}

const ScrollView: React.FC<ScrollViewProps> = ({
  children,
  className = '',
  showScrollToTop = true,
  showProgressBar = true,
  onScroll
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const position = scrollContainer.scrollTop;
      const max = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      
      setScrollPosition(position);
      setMaxScroll(max);
      setShowButton(position > 100);
      
      onScroll?.(position, max);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // ì´ˆê¸° ê°??¤ì •

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [onScroll]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const progressPercentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <div className={\`relative \${className}\`}>
      {/* Progress Bar */}
      {showProgressBar && (
        <div className="sticky top-0 left-0 right-0 h-1 bg-gray-200 z-10">
          <div
            className="h-full bg-blue-500 transition-all duration-150"
            style={{ width: \`\${progressPercentage}%\` }}
          />
        </div>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e0 #f7fafc',
        }}
      >
        {children}
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg border hover:bg-gray-50 transition-all duration-300 z-20"
          aria-label="?ë‹¨?¼ë¡œ ?¤í¬ë¡?
        >
          <ChevronUp className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
};

// Usage Example
const App: React.FC = () => {
  const handleScroll = (position: number, maxScroll: number) => {
    console.log(\`Scroll position: \${position}, Max: \${maxScroll}\`);
  };

  const generateContent = () => {
    const paragraphs = [
      "?¤í¬ë¡?ë·°ëŠ” ?”ë©´ ?¬ê¸°ë³´ë‹¤ ????ì½˜í…ì¸ ë? ?œì‹œ?˜ê¸° ?„í•´ ?„ìˆ˜?ì¸ UI ì»´í¬?ŒíŠ¸?…ë‹ˆ??",
      "?€ë¶€ë¶„ì˜ ëª¨ë°”???±ê³¼ ?¹ì‚¬?´íŠ¸?ì„œ???¤í¬ë¡?ë·°ë? ê¸°ë³¸?ìœ¼ë¡??¬ìš©?©ë‹ˆ??",
      "?¤í¬ë¡?ë·°ì—???¸ë¡œ ?¤í¬ë¡¤ê³¼ ê°€ë¡??¤í¬ë¡¤ì´ ?ˆìœ¼ë©? ?„ìš”???°ë¼ ??ë°©í–¥ ëª¨ë‘ ì§€?í•  ???ˆìŠµ?ˆë‹¤.",
      "?¤í¬ë¡?ë·°ë? êµ¬í˜„???ŒëŠ” ?±ëŠ¥ ìµœì ?”ê? ì¤‘ìš”?©ë‹ˆ??",
      "?¤í¬ë¡??„ì¹˜ë¥?ì¶”ì ?˜ê³  ?¹ì • ?™ì‘???¸ë¦¬ê±°í•˜??ê²ƒì? ?¤ì–‘??ê¸°ëŠ¥ êµ¬í˜„??? ìš©?©ë‹ˆ??",
    ];

    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className={\`p-4 mb-4 rounded-lg \${
          i % 3 === 0
            ? 'bg-blue-50 border border-blue-200'
            : i % 3 === 1
            ? 'bg-green-50 border border-green-200'
            : 'bg-purple-50 border border-purple-200'
        }\`}
      >
        <p className="text-gray-700">{paragraphs[i % paragraphs.length]}</p>
        <div className="text-xs text-gray-400 mt-2">?¨ë½ #{i + 1}</div>
      </div>
    ));
  };

  return (
    <div className="h-96">
      <ScrollView
        className=""
        showScrollToTop={true}
        showProgressBar={true}
        onScroll={handleScroll}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">?¤í¬ë¡?ê°€?¥í•œ ì½˜í…ì¸?/h2>
          {generateContent()}
        </div>
      </ScrollView>
    </div>
  );
};

export default App;`;
  };


  return (
    <SlideLayout title="Scroll View (?¤í¬ë¡?ë·?">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-8 mt-4">
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-3">?•ì˜</h2>
              <p>
                ?¤í¬ë¡?ë·°ëŠ” ?”ë©´???œì‹œ ê°€?¥í•œ ?ì—­ë³´ë‹¤ ??ì½˜í…ì¸ ë? ?´ì„ ???ˆëŠ”
                ì»¨í…Œ?´ë„ˆë¡? ?¬ìš©?ê? ?¤í¬ë¡¤í•˜???´ìš©???ìƒ‰?????ˆê²Œ ?©ë‹ˆ??
                ?˜ì§, ?˜í‰, ?ëŠ” ?‘ë°©???¤í¬ë¡¤ì„ ì§€?í•©?ˆë‹¤.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?¤í¬ë¡?ë·?ì¢…ë¥˜</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>?˜ì§ ?¤í¬ë¡?Vertical Scroll)</strong>
                    <p className="text-sm text-gray-600">
                      ?„ì•„?˜ë¡œ ?¤í¬ë¡¤í•˜??ê°€???¼ë°˜?ì¸ ?•íƒœ
                    </p>
                  </li>
                  <li>
                    <strong>?˜í‰ ?¤í¬ë¡?Horizontal Scroll)</strong>
                    <p className="text-sm text-gray-600">
                      ì¢Œìš°ë¡??¤í¬ë¡¤í•˜???•íƒœ, ê°¤ëŸ¬ë¦¬ë‚˜ ì¹´ë£¨?€???ì£¼ ?¬ìš©
                    </p>
                  </li>
                  <li>
                    <strong>?‘ë°©???¤í¬ë¡?Both Directions)</strong>
                    <p className="text-sm text-gray-600">
                      ?˜ì§ê³??˜í‰ ëª¨ë‘ ?¤í¬ë¡?ê°€?¥í•œ ?•íƒœ, ???Œì´ë¸??±ì— ?¬ìš©
                    </p>
                  </li>
                  <li>
                    <strong>?˜ì´ì§€ ?¤í¬ë¡?Paging)</strong>
                    <p className="text-sm text-gray-600">
                      ??ë²ˆì— ???˜ì´ì§€???¤í¬ë¡¤ë˜???•íƒœ
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">ê³ ë ¤?¬í•­</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>?¤í¬ë¡¤ë°” ?”ì?¸ê³¼ ê°€?œì„±</li>
                  <li>?¤í¬ë¡??±ëŠ¥ ìµœì ??(?¹íˆ ë§ì? ??ª©???ˆì„ ??</li>
                  <li>?¤í¬ë¡??„ì¹˜ ?€??ë°?ë³µì›</li>
                  <li>?€-??ë¦¬í”„?ˆì‹œ(Pull-to-refresh) ê°™ì? ?í˜¸?‘ìš© ì¶”ê?</li>
                  <li>?¤í¬ë¡??´ë²¤??ì²˜ë¦¬ (ì§€??ë¡œë”©, ? ë‹ˆë©”ì´????</li>
                  <li>?¤í¬ë¡??¤ëƒ… ?¬ì¸??Snap Points) ?¤ì •</li>
                  <li>?¤ë³´???´ë¹„ê²Œì´?˜ê³¼ ?‘ê·¼??/li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                êµ¬í˜„ ë°??‘ê·¼??              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>?¤í¬ë¡??„ì¹˜ ?œì‹œê¸??œê³µ?¼ë¡œ ?„ì¬ ?„ì¹˜ ?¸ì‹ ?©ì´?˜ê²Œ</li>
                <li>?¤í¬ë¡??ë‹¨?¼ë¡œ ?´ë™ ë²„íŠ¼?¼ë¡œ ê¸?ì½˜í…ì¸??ìƒ‰ ì§€??/li>
                <li>?¤ë³´???ìƒ‰(ë°©í–¥?? Page Up/Down) ì§€??/li>
                <li>?¤í¬ë¡?? ë‹ˆë©”ì´?˜ì? ë¶€?œëŸ½ê²?ì²˜ë¦¬</li>
                <li>ì¤‘ìš” ?•ë³´???¤í¬ë¡??†ì´ ë³????ˆë„ë¡?ë°°ì¹˜</li>
                <li>ì½˜í…ì¸?ë¡œë”© ?íƒœë¥?ëª…í™•???œì‹œ</li>
                <li>?°ì¹˜ ?œìŠ¤ì²˜ì? ë§ˆìš°????ëª¨ë‘ ê³ ë ¤???¤ê³„</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">

            <div className="bg-gray-800 p-4 border rounded-md">
              <PrismCode
                language="typescript"
                code={getReactCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">?¤í¬ë¡?ë·??ˆì‹œ</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>?¤í¬ë¡??„ì¹˜: {Math.round(scrollPosition)}</span>
                  <span>|</span>
                  <span>ìµœë?: {Math.round(maxScroll)}</span>
                  <span>|</span>
                  <span>
                    ì§„í–‰ë¥?{" "}
                    {maxScroll
                      ? Math.round((scrollPosition / maxScroll) * 100)
                      : 0}
                    %
                  </span>
                </div>
              </div>

              <div className="relative flex-1 flex flex-col">
                <div
                  ref={scrollContainerRef}
                  className="flex-1 border rounded-lg overflow-y-auto bg-white p-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#49bcf3 #f1f1f1",
                    height: "400px",
                  }}
                >
                  {/* ?¤í¬ë¡?ì§„í–‰ ?œì‹œê¸?*/}
                  <div className="sticky top-0 left-0 right-0 h-1 bg-gray-100 mb-4 -mx-4">
                    <div
                      className="h-full bg-[#49bcf3]"
                      style={{
                        width: `${
                          maxScroll ? (scrollPosition / maxScroll) * 100 : 0
                        }%`,
                      }}
                    ></div>
                  </div>

                  {/* ?¤í¬ë¡?ê°€?¥í•œ ì½˜í…ì¸?*/}
                  <div className="space-y-4">
                    {generateLoremIpsum(20).map((text, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${
                          index % 3 === 0
                            ? "bg-[#49bcf3]/5 border border-[#49bcf3]/10"
                            : index % 3 === 1
                            ? "bg-gray-50"
                            : "border"
                        }`}
                      >
                        <p className="text-gray-700">{text}</p>
                        <div className="text-xs text-gray-400 mt-2">
                          ?¨ë½ #{index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ?¤í¬ë¡??ë‹¨?¼ë¡œ ë²„íŠ¼ */}
                {showScrollToTop && (
                  <button
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg border hover:bg-gray-50 transition-opacity duration-300"
                    onClick={scrollToTop}
                    aria-label="?ë‹¨?¼ë¡œ ?¤í¬ë¡?
                  >
                    <ChevronUp className="w-5 h-5 text-gray-700" />
                  </button>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
