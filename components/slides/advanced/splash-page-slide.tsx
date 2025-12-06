"use client";

import SlideLayout from "../slide-layout";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function SplashPageSlide() {
  const [splashType, setSplashType] = useState<
    "basic" | "animated" | "branded" | "progress"
  >("basic");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // React/TypeScriptë¡?êµ¬í˜„???¤í”Œ?˜ì‹œ ?”ë©´ ì½”ë“œ
  const getReactCode = () => {
    switch (splashType) {
      case "basic":
        return `import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface BasicSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const BasicSplashScreen: React.FC<BasicSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
          APP
        </div>
        <h1 className="font-medium text-gray-800 mb-4">???´ë¦„</h1>
        <Loader2 className="animate-spin h-5 w-5 text-gray-500 mx-auto" />
      </div>
    </div>
  );
};

export default BasicSplashScreen;`;

      case "animated":
        return `import React, { useEffect } from 'react';

interface AnimatedSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const AnimatedSplashScreen: React.FC<AnimatedSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-gradient-to-br from-purple-600 to-green-900 flex flex-col items-center justify-center text-white">
      <div className="animate-bounce mb-6">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
          LOGO
        </div>
      </div>
      <div className="text-center animate-fade-in">
        <h1 className="font-medium text-lg mb-2">? ë‹ˆë©”ì´???¤í”Œ?˜ì‹œ</h1>
        <p className="text-white/70 text-sm">??ë¡œë”© ì¤?..</p>
      </div>
    </div>
  );
};

export default AnimatedSplashScreen;`;

      case "progress":
        return `import React, { useState, useEffect } from 'react';

interface ProgressSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const ProgressSplashScreen: React.FC<ProgressSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onLoadingComplete) {
            setTimeout(onLoadingComplete, 500);
          }
          return 100;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
        UI
      </div>
      <div className="text-center">
        <p className="font-medium text-purple-600 mb-2">{Math.round(progress)}% ?„ë£Œ</p>
        <div className="w-56 h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div 
            className="bg-purple-600 h-full transition-all duration-100 ease-out"
            style={{ width: \`\${progress}%\` }}
          />
        </div>
        <p className="text-gray-500 text-sm">ë¦¬ì†Œ??ë¡œë”© ì¤?..</p>
      </div>
    </div>
  );
};

export default ProgressSplashScreen;`;

      case "branded":
        return `import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface BrandedSplashScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const BrandedSplashScreen: React.FC<BrandedSplashScreenProps> = ({
  onLoadingComplete,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  return (
    <div className="h-screen bg-purple-600 flex flex-col items-center justify-center text-white">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-2xl mb-4">
        UI
      </div>
      <h1 className="text-xl font-bold uppercase tracking-widest mb-2">ë¸Œëœ?œëª…</h1>
      <p className="text-white/70 text-sm mb-6">ë¸Œëœ???¬ë¡œê±´ì´????ì¤??¤ëª…</p>
      <Loader2 className="animate-spin h-6 w-6" />
    </div>
  );
};

export default BrandedSplashScreen;`;

      default:
        return getReactCode();
    }
  };

  // ?¤í”Œ?˜ì‹œ ?”ë©´??ë¡œë”© ?íƒœë¥?ë³´ì—¬ì£¼ê¸° ?„í•œ ?¨ê³¼
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        if (progress < 100) {
          setProgress((prev) => Math.min(prev + 10, 100));
        } else {
          setIsLoading(false);
          setProgress(0);
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isLoading, progress]);

  const handleStartLoading = () => {
    setIsLoading(true);
    setProgress(0);
  };

  const renderSplash = () => {
    if (!isLoading) {
      return (
        <div className="bg-white p-4 text-center">
          <button
            className="px-4 py-2 bg-[#49bcf3] text-white rounded-md text-sm"
            onClick={handleStartLoading}
          >
            ?¤í”Œ?˜ì‹œ ?”ë©´ ë³´ê¸°
          </button>
        </div>
      );
    }

    switch (splashType) {
      case "animated":
        return (
          <div className="h-72 bg-gradient-to-br from-[#49bcf3] to-[#134429] flex flex-col items-center justify-center">
            <div className="animate-[bounce_1.5s_infinite]">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-xl p-5">
                LOGO
              </div>
            </div>
            <div className="mt-6 text-white font-medium animate-[fadeIn_2s_ease-in]">
              ? ë‹ˆë©”ì´???¤í”Œ?˜ì‹œ
            </div>
            <div className="mt-2 text-white/70 text-sm animate-[fadeIn_2s_ease-in]">
              ??ë¡œë”© ì¤?..
            </div>
          </div>
        );

      case "branded":
        return (
          <div className="h-72 bg-[#49bcf3] flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-2xl p-5 mb-4">
                UI
              </div>
              <div className="text-xl font-bold uppercase tracking-widest">
                ë¸Œëœ?œëª…
              </div>
              <div className="mt-2 text-white/70 text-sm">
                ë¸Œëœ???¬ë¡œê±´ì´????ì¤??¤ëª…
              </div>
              <div className="mt-6">
                <Loader2 className="animate-spin h-6 w-6" />
              </div>
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="h-72 bg-[#f4f4f4] flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-[#49bcf3] rounded-full flex items-center justify-center text-white font-bold text-xl p-5">
              UI
            </div>
            <div className="mt-6 font-medium text-[#49bcf3]">
              {progress}% ?„ë£Œ
            </div>
            <div className="w-56 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#49bcf3] h-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-gray-500 text-sm">ë¦¬ì†Œ??ë¡œë”© ì¤?..</div>
          </div>
        );

      default: // basic
        return (
          <div className="h-72 bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#49bcf3] rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto">
                APP
              </div>
              <div className="mt-4 font-medium text-gray-800">???´ë¦„</div>
              <div className="mt-4 flex justify-center">
                <Loader2 className="animate-spin h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <SlideLayout title="Splash Page (?¤í”Œ?˜ì‹œ ?˜ì´ì§€)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-3">?•ì˜</h2>
              <p>
                ?¤í”Œ?˜ì‹œ ?˜ì´ì§€(Splash Page) ?ëŠ” ?¤í”Œ?˜ì‹œ ?¤í¬ë¦?Splash
                Screen)?€ ?±ì´???¹ì‚¬?´íŠ¸ê°€ ë¡œë”©?˜ëŠ” ?™ì•ˆ ?¬ìš©?ì—ê²??œì‹œ?˜ëŠ”
                ?„ì‹œ ?”ë©´?…ë‹ˆ?? ì£¼ë¡œ ë¸Œëœ??ë¡œê³ , ? ë‹ˆë©”ì´?? ë¡œë”© ?œì‹œê¸??±ì„
                ?¬í•¨?˜ë©°, ?±ì˜ ì²«ì¸?ì„ ?•ì„±?˜ê³  ë¡œë”© ?œê°„ ?™ì•ˆ ?¬ìš©?ì˜ ì£¼ì˜ë¥?                ? ì??˜ëŠ” ??• ???©ë‹ˆ??
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "basic"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("basic")}
                >
                  ê¸°ë³¸??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "animated"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("animated")}
                >
                  ? ë‹ˆë©”ì´?˜í˜•
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "branded"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("branded")}
                >
                  ë¸Œëœ?©í˜•
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    splashType === "progress"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSplashType("progress")}
                >
                  ì§„í–‰ë¥ í˜•
                </button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                {/* ?¤í”Œ?˜ì‹œ ?˜ì´ì§€ ?Œë”ë§?*/}
                {renderSplash()}

                {/* ?¤ëª… */}
                {!isLoading && (
                  <div className="p-4 bg-white">
                    <h3 className="font-medium mb-2">
                      {splashType === "basic"
                        ? "ê¸°ë³¸ ?¤í”Œ?˜ì‹œ ?˜ì´ì§€"
                        : splashType === "animated"
                        ? "? ë‹ˆë©”ì´???¤í”Œ?˜ì‹œ ?˜ì´ì§€"
                        : splashType === "branded"
                        ? "ë¸Œëœ???¤í”Œ?˜ì‹œ ?˜ì´ì§€"
                        : "ì§„í–‰ë¥??œì‹œ ?¤í”Œ?˜ì‹œ ?˜ì´ì§€"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {splashType === "basic"
                        ? "ë¡œê³ ?€ ê°„ë‹¨??ë¡œë”© ?œì‹œê¸°ë? ?¬í•¨??ê¸°ë³¸?ì¸ ?¤í”Œ?˜ì‹œ ?”ë©´?…ë‹ˆ??"
                        : splashType === "animated"
                        ? "?€ì§ì´???”ì†Œ?€ ? ë‹ˆë©”ì´?˜ì„ ?œìš©?˜ì—¬ ????™?ì¸ ì²«ì¸?ì„ ?œê³µ?©ë‹ˆ??"
                        : splashType === "branded"
                        ? "ë¸Œëœ???„ì´?´í‹°?°ë? ê°•ì¡°?˜ê³  ?Œì‚¬/?œí’ˆ???´ë?ì§€ë¥?ê°•í™”?˜ëŠ” ?¤í”Œ?˜ì‹œ ?”ë©´?…ë‹ˆ??"
                        : "??ë¡œë”© ì§„í–‰ ?í™©??ë³´ì—¬ì£¼ì–´ ?¬ìš©?ì—ê²???ëª…í™•???•ë³´ë¥??œê³µ?©ë‹ˆ??"}
                    </p>

                    <div className="bg-gray-50 p-3 rounded-md border text-sm">
                      <strong>?¬ìš© ??ê³ ë ¤?¬í•­:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>ê³¼ë„?˜ê²Œ ê¸¸ê²Œ ?œì‹œ?˜ì? ?Šë„ë¡??¤ê³„</li>
                        <li>ë¸Œëœ???„ì´?´í‹°?°ì? ?¼ê????”ì???¬ìš©</li>
                        <li>?¤ì œ ë¡œë”© ?œê°„ê³??œì‹œ ?œê°„ ì¡°ìœ¨</li>
                        <li>?œê°?ìœ¼ë¡?ê°„ê²°?˜ê³  ì§‘ì¤‘?ì¸ ?”ì??/li>
                        <li>?¬ìš©?ì—ê²??±ì´ ?œì„± ?íƒœ?„ì„ ?Œë¦¬???œì‹œ ?¬í•¨</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">
                    ?¤í”Œ?˜ì‹œ ?˜ì´ì§€ ? í˜•
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>?•ì  ?¤í”Œ?˜ì‹œ ?”ë©´</strong>
                      <p className="text-sm text-gray-600">
                        ë¡œê³ ?€ ?ìŠ¤?¸ë§Œ ?¬í•¨???¨ìˆœ???•íƒœ
                      </p>
                    </li>
                    <li>
                      <strong>? ë‹ˆë©”ì´???¤í”Œ?˜ì‹œ ?”ë©´</strong>
                      <p className="text-sm text-gray-600">
                        ?€ì§ì´???”ì†Œê°€ ?¬í•¨???™ì ???•íƒœ
                      </p>
                    </li>
                    <li>
                      <strong>ë¸Œëœ???¤í”Œ?˜ì‹œ ?”ë©´</strong>
                      <p className="text-sm text-gray-600">
                        ?Œì‚¬/?œí’ˆ??ë¸Œëœ???„ì´?´í‹°?°ë? ê°•ì¡°
                      </p>
                    </li>
                    <li>
                      <strong>ì§„í–‰ë¥??œì‹œ ?¤í”Œ?˜ì‹œ</strong>
                      <p className="text-sm text-gray-600">
                        ë¡œë”© ì§„í–‰ ?í™©???œê°?ìœ¼ë¡??œì‹œ
                      </p>
                    </li>
                    <li>
                      <strong>?¸í„°?™í‹°ë¸??¤í”Œ?˜ì‹œ</strong>
                      <p className="text-sm text-gray-600">
                        ?¬ìš©?ì˜ ?í˜¸?‘ìš©??? ë„?˜ëŠ” ?”ì†Œ ?¬í•¨
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">ì£¼ìš” êµ¬ì„± ?”ì†Œ</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>ë¡œê³ /ë¸Œëœ???”ì†Œ</strong>
                      <p className="text-sm text-gray-600">
                        ?Œì‚¬???±ì˜ ?„ì´?´í‹°?°ë? ?˜í??´ëŠ” ?œê°???”ì†Œ
                      </p>
                    </li>
                    <li>
                      <strong>ë¡œë”© ?œì‹œê¸?/strong>
                      <p className="text-sm text-gray-600">
                        ?¤í”¼?? ?„ë¡œê·¸ë ˆ??ë°???ì§„í–‰ ?í™© ?œì‹œ
                      </p>
                    </li>
                    <li>
                      <strong>ë°°ê²½</strong>
                      <p className="text-sm text-gray-600">
                        ?¨ìƒ‰, ê·¸ë¼?°ì´???ëŠ” ?´ë?ì§€ ë°°ê²½
                      </p>
                    </li>
                    <li>
                      <strong>?ìŠ¤???•ë³´</strong>
                      <p className="text-sm text-gray-600">
                        ???´ë¦„, ?¬ë¡œê±? ë²„ì „ ?•ë³´ ??                      </p>
                    </li>
                    <li>
                      <strong>? ë‹ˆë©”ì´??/strong>
                      <p className="text-sm text-gray-600">
                        ?„í™˜ ?¨ê³¼, ë¡œê³  ? ë‹ˆë©”ì´????                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                ?”ì??ë°?êµ¬í˜„ ê³ ë ¤?¬í•­
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>?œì‹œ ?œê°„ ìµœì ??/strong>
                  <p className="text-sm">
                    ?¼ë°˜?ìœ¼ë¡?2-3ì´ˆë¡œ ?œí•œ?˜ì—¬ ?¬ìš©??ê²½í—˜ ?¥ìƒ
                  </p>
                </li>
                <li>
                  <strong>ë¸Œëœ???¼ê???/strong>
                  <p className="text-sm">
                    ?±ì˜ ?„ì²´ ?”ì???¸ì–´?€ ?¼ì¹˜?˜ëŠ” ?œê°???”ì†Œ ?¬ìš©
                  </p>
                </li>
                <li>
                  <strong>ëª©ì ??/strong>
                  <p className="text-sm">
                    ?¤ì œ ë¦¬ì†Œ??ë¡œë”©ê³??°ê³„??? ì˜ë¯¸í•œ ?¤í”Œ?˜ì‹œ ?”ë©´ êµ¬í˜„
                  </p>
                </li>
                <li>
                  <strong>?¬ìš©???¼ë“œë°?/strong>
                  <p className="text-sm">
                    ?±ì´ ì¤€ë¹?ì¤‘ì„???¬ìš©?ì—ê²?ëª…í™•???Œë¦¬???œì‹œ
                  </p>
                </li>
                <li>
                  <strong>?±ëŠ¥ ê³ ë ¤</strong>
                  <p className="text-sm">
                    ?¤í”Œ?˜ì‹œ ?”ë©´ ?ì²´ê°€ ??ë¡œë”©??ì§€?°ì‹œ?¤ì? ?Šë„ë¡??¤ê³„
                  </p>
                </li>
                <li>
                  <strong>?¬ë¡œ???Œë«???¼ê???/strong>
                  <p className="text-sm">
                    ?¤ì–‘???”ë°”?´ìŠ¤?€ OS?ì„œ ?¼ê???ê²½í—˜ ?œê³µ
                  </p>
                </li>
                <li>
                  <strong>?‘ê·¼??/strong>
                  <p className="text-sm">
                    ëª¨ë“  ?¬ìš©?ê? ?´í•´?????ˆëŠ” ëª…í™•???œê°???”ì†Œ ?¬í•¨
                  </p>
                </li>
              </ul>
            </div>

          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 border rounded-md mb-6">
              <PrismCode
                language="typescript"
                code={getReactCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  ?¤í”Œ?˜ì‹œ ?”ë©´ ? í˜• ? íƒ
                </label>
                <select
                  value={splashType}
                  onChange={(e) => setSplashType(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="basic">ê¸°ë³¸???¤í”Œ?˜ì‹œ</option>
                  <option value="animated">? ë‹ˆë©”ì´?˜í˜• ?¤í”Œ?˜ì‹œ</option>
                  <option value="branded">ë¸Œëœ?©í˜• ?¤í”Œ?˜ì‹œ</option>
                  <option value="progress">ì§„í–‰ë¥ í˜• ?¤í”Œ?˜ì‹œ</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* ?¤í”Œ?˜ì‹œ ?°ëª¨ ?ì—­ */}
                <div className="w-full border rounded-lg overflow-hidden">
                  {!isLoading ? (
                    <div className="bg-white p-4 text-center">
                      <button
                        className="px-4 py-2 bg-[#49bcf3] text-white rounded-md text-sm"
                        onClick={handleStartLoading}
                      >
                        ?¤í”Œ?˜ì‹œ ?”ë©´ ë³´ê¸°
                      </button>
                    </div>
                  ) : (
                    <>
                      {splashType === "basic" && (
                        <div className="h-72 bg-white flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-[#49bcf3] rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto">
                              APP
                            </div>
                            <div className="mt-4 font-medium text-gray-800">
                              ???´ë¦„
                            </div>
                            <div className="mt-4 flex justify-center">
                              <Loader2 className="animate-spin h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                        </div>
                      )}

                      {splashType === "animated" && (
                        <div className="h-72 bg-gradient-to-br from-[#49bcf3] to-[#134429] flex flex-col items-center justify-center">
                          <div className="animate-[bounce_1.5s_infinite]">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-xl p-5">
                              LOGO
                            </div>
                          </div>
                          <div className="mt-6 text-white font-medium animate-[fadeIn_2s_ease-in]">
                            ? ë‹ˆë©”ì´???¤í”Œ?˜ì‹œ
                          </div>
                          <div className="mt-2 text-white/70 text-sm animate-[fadeIn_2s_ease-in]">
                            ??ë¡œë”© ì¤?..
                          </div>
                        </div>
                      )}

                      {splashType === "branded" && (
                        <div className="h-72 bg-[#49bcf3] flex flex-col items-center justify-center text-white">
                          <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#49bcf3] font-bold text-2xl p-5 mb-4">
                              UI
                            </div>
                            <div className="text-xl font-bold uppercase tracking-widest">
                              ë¸Œëœ?œëª…
                            </div>
                            <div className="mt-2 text-white/70 text-sm">
                              ë¸Œëœ???¬ë¡œê±´ì´????ì¤??¤ëª…
                            </div>
                            <div className="mt-6">
                              <Loader2 className="animate-spin h-6 w-6" />
                            </div>
                          </div>
                        </div>
                      )}

                      {splashType === "progress" && (
                        <div className="h-72 bg-[#f4f4f4] flex flex-col items-center justify-center">
                          <div className="w-20 h-20 bg-[#49bcf3] rounded-full flex items-center justify-center text-white font-bold text-xl p-5">
                            UI
                          </div>
                          <div className="mt-6 font-medium text-[#49bcf3]">
                            {progress}% ?„ë£Œ
                          </div>
                          <div className="w-56 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                            <div
                              className="bg-[#49bcf3] h-full transition-all duration-300 ease-in-out"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <div className="mt-2 text-gray-500 text-sm">
                            ë¦¬ì†Œ??ë¡œë”© ì¤?..
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {!isLoading && (
                  <div className="w-full text-sm mt-4 p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium mb-2">?¹ì§•:</h3>
                    {splashType === "basic" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>ê°„ê²°??ë¡œê³ ?€ ???´ë¦„ ?œì‹œ</li>
                        <li>ë¡œë”© ?¸ë””ì¼€?´í„°ë¡??‘ì—… ì§„í–‰ ì¤‘ì„???œì‹œ</li>
                        <li>ê¹”ë”???°ìƒ‰ ë°°ê²½?¼ë¡œ ë¸Œëœ???•ì²´??ê°•ì¡°</li>
                      </ul>
                    )}
                    {splashType === "animated" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>ë°”ìš´???¨ê³¼ë¡??œê°???¥ë? ? ë°œ</li>
                        <li>ê·¸ë¼?”ì–¸??ë°°ê²½?¼ë¡œ ?œê¸°ì°??ë‚Œ ?„ë‹¬</li>
                        <li>?˜ì´?œì¸ ? ë‹ˆë©”ì´?˜ìœ¼ë¡?ë¶€?œëŸ¬??ì§„ì…ê°??œê³µ</li>
                      </ul>
                    )}
                    {splashType === "branded" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>ë¸Œëœ???‰ìƒ???„ë©´???œìš©??ê°•ë ¬??ì²«ì¸??/li>
                        <li>ë¸Œëœ?œëª…ê³??¬ë¡œê±´ì„ ?¨ê»˜ ?œì‹œ</li>
                        <li>?”ë©´ ì¤‘ì•™??ë¡œê³ ë¥?ë°°ì¹˜?˜ì—¬ ë¸Œëœ???¸ì???ê°•í™”</li>
                      </ul>
                    )}
                    {splashType === "progress" && (
                      <ul className="list-disc pl-5 space-y-1">
                        <li>ì§„í–‰ ?í™©??ëª…í™•?˜ê²Œ ?œì‹œ?˜ëŠ” ?„ë¡œê·¸ë ˆ??ë°?/li>
                        <li>?¼ì„¼???œì‹œë¡?ë¡œë”© ?¨ê³„ ëª…í™•??/li>
                        <li>ë°ì? ë°°ê²½??ë¸Œëœ???‰ìƒ ?¬ì¸?¸ë¡œ ê°€?…ì„± ?•ë³´</li>
                      </ul>
                    )}
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
