"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Home,
  X,
  Share,
  MoreVertical,
  Globe,
} from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WebViewSlide() {
  const [webViewType, setWebViewType] = useState<
    "basic" | "custom-ui" | "embedded" | "full-page"
  >("basic");
  const [url, setUrl] = useState("https://google.com");

  const renderWebView = () => {
    switch (webViewType) {
      case "custom-ui":
        return (
          <div className="h-72 bg-white border rounded-md overflow-hidden flex flex-col">
            <div className="px-3 py-2 border-b flex items-center justify-between bg-[#49bcf3]">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 ml-1">
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 ml-1">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 mx-3">
                <div className="bg-white/10 rounded-full px-3 py-1 text-white text-sm flex items-center">
                  <Globe className="h-3 w-3 mr-2 text-white/70" />
                  {url}
                </div>
              </div>

              <div className="flex items-center">
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10">
                  <Share className="h-4 w-4" />
                </button>
                <button className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 ml-1">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 flex items-center justify-center p-4 text-center">
              <div>
                <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-8 w-8 text-gray-500" />
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  ??ì½˜í…ì¸ ê? ?¬ê¸°???œì‹œ?©ë‹ˆ??                </p>
                <p className="text-gray-500 text-xs">{url}</p>
              </div>
            </div>
          </div>
        );

      case "embedded":
        return (
          <div className="h-72 flex flex-col bg-white overflow-hidden border">
            <div className="p-3 bg-gray-50 border-b">
              <h3 className="font-medium text-gray-800">?????„ë² ?”ë“œ ?¹ë·°</h3>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 bg-white">
              <div className="bg-gray-100 border rounded-lg p-4 w-full mx-auto max-w-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-gray-800 font-medium">
                    ?¸ë? ??ì½˜í…ì¸?                  </div>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-center py-8 bg-white border rounded-md mb-3">
                  <Globe className="h-8 w-8 text-gray-300" />
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#49bcf3] text-white rounded-md py-1.5 text-sm">
                    ?™ì˜
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-700 rounded-md py-1.5 text-sm">
                    ì·¨ì†Œ
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "full-page":
        return (
          <div className="h-72 flex flex-col">
            {/* ?„ì²´ ì½˜í…ì¸ ê? ?¹ë·° */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center text-center">
              <div>
                <div className="mx-auto w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-4">
                  <Globe className="h-10 w-10 text-[#49bcf3]" />
                </div>
                <h3 className="font-medium text-gray-800 mb-1">
                  ?„ì²´ ?˜ì´ì§€ ?¹ë·°
                </h3>
                <p className="text-gray-600 text-sm">
                  ???¤ì´?°ë¸Œ UI ?†ì´ ?„ì²´ ?”ë©´????ì½˜í…ì¸ ë¡œ ?œì‹œ?©ë‹ˆ??
                </p>
                <p className="text-[#49bcf3] text-xs mt-3">{url}</p>
              </div>
            </div>

            {/* ?˜ë‹¨ ?¤ë¹„ê²Œì´??ë°?*/}
            <div className="bg-white border-t py-2 px-4 flex justify-around">
              <button className="p-2 text-gray-500 flex flex-col items-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">??/span>
              </button>
              <button className="p-2 text-[#49bcf3] flex flex-col items-center">
                <Globe className="h-5 w-5" />
                <span className="text-xs mt-1">??/span>
              </button>
              <button className="p-2 text-gray-500 flex flex-col items-center">
                <MoreVertical className="h-5 w-5" />
                <span className="text-xs mt-1">?”ë³´ê¸?/span>
              </button>
            </div>
          </div>
        );

      default: // basic
        return (
          <div className="h-72 bg-white border overflow-hidden flex flex-col">
            <div className="px-3 py-2 border-b flex items-center bg-gray-50">
              <button className="p-1.5 text-gray-500">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button className="p-1.5 text-gray-500 ml-1">
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="p-1.5 text-gray-500 ml-1">
                <RefreshCw className="h-4 w-4" />
              </button>

              <div className="flex-1 mx-3">
                <div className="bg-white border rounded-md px-3 py-1 text-gray-600 text-sm">
                  {url}
                </div>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 flex items-center justify-center p-4 text-center">
              <div>
                <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600 text-sm">
                  ??ì½˜í…ì¸ ê? ?¬ê¸°???œì‹œ?©ë‹ˆ??                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <SlideLayout title="WebView (?¹ë·°)">
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
                ?¹ë·°(WebView)??ëª¨ë°”?????´ì—????ì½˜í…ì¸ ë? ?œì‹œ?˜ê¸° ?„í•œ
                ì»´í¬?ŒíŠ¸?…ë‹ˆ?? ?¤ì´?°ë¸Œ ? í”Œë¦¬ì??´ì…˜ ?ˆì— ?´ì¥??ë¸Œë¼?°ì?ë¡?
                HTML, CSS, JavaScriptë¡??‘ì„±?????˜ì´ì§€ë¥????´ë??ì„œ ë³´ì—¬ì¤???                ?ˆìŠµ?ˆë‹¤. ?´ë? ?µí•´ ?±ê³¼ ??ê¸°ìˆ ???¼í•©?˜ì—¬ ?˜ì´ë¸Œë¦¬???±ì„
                ê°œë°œ?˜ê±°???¸ë? ??ì½˜í…ì¸ ë? ???´ì— ?µí•©?????ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            {/* Controls */}
            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                {["basic", "custom-ui", "embedded", "full-page"].map((type) => (
                  <button
                    key={type}
                    className={`px-3 py-1.5 rounded text-sm ${
                      webViewType === type
                        ? "bg-[#49bcf3] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setWebViewType(type as any)}
                  >
                    {type === "basic"
                      ? "ê¸°ë³¸??
                      : type === "custom-ui"
                      ? "ì»¤ìŠ¤?€ UI??
                      : type === "embedded"
                      ? "?„ë² ?”ë“œ??
                      : "?„ì²´?˜ì´ì§€??}
                  </button>
                ))}
              </div>

              <div className="border rounded-lg overflow-hidden">
                {renderWebView()}

                <div className="p-4 bg-white">
                  <h3 className="font-medium mb-2">
                    {webViewType === "basic"
                      ? "ê¸°ë³¸ ?¹ë·°"
                      : webViewType === "custom-ui"
                      ? "ì»¤ìŠ¤?€ UI ?¹ë·°"
                      : webViewType === "embedded"
                      ? "?„ë² ?”ë“œ ?¹ë·°"
                      : "?„ì²´ ?˜ì´ì§€ ?¹ë·°"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {webViewType === "basic"
                      ? "ê¸°ë³¸?ì¸ ?•íƒœ???¹ë·°ë¡? ???´ì—????ì½˜í…ì¸ ë? ?œì‹œ?˜ëŠ” ?¬í”Œ??êµ¬í˜„?…ë‹ˆ??"
                      : webViewType === "custom-ui"
                      ? "?±ì˜ ?”ì???œìŠ¤?œì— ë§ì¶° ì»¤ìŠ¤?°ë§ˆ?´ì§•??UIë¥?ê°€ì§??¹ë·°?…ë‹ˆ??"
                      : webViewType === "embedded"
                      ? "???”ë©´???¼ë??ë§Œ ??ì½˜í…ì¸ ë? ?œì‹œ?˜ëŠ” ?„ë² ?”ë“œ ?•íƒœ???¹ë·°?…ë‹ˆ??"
                      : "?„ì²´ ?”ë©´????ì½˜í…ì¸ ë¡œ ì±„ì›Œì§€???•íƒœë¡? ????ìµœì†Œ?œì˜ ?¤ì´?°ë¸Œ UIë§??œì‹œ?©ë‹ˆ??"}
                  </p>

                  <div className="bg-gray-50 p-3 rounded-md border text-sm">
                    <strong>ì£¼ìš” ?¹ì§•:</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>?¤ì´?°ë¸Œ ?±ê³¼ ??ê¸°ìˆ ??ê²°í•©</li>
                      <li>?¸ë? ??ì½˜í…ì¸??œì‹œ ê°€??/li>
                      <li>JavaScript?€ ?¤ì´?°ë¸Œ ì½”ë“œ ê°??‘ë°©???µì‹  ì§€??/li>
                      <li>???´ì—???¼ê????¬ìš©??ê²½í—˜ ?œê³µ</li>
                      <li>???…ë°?´íŠ¸ê°€ ???…ë°?´íŠ¸ ?†ì´ ê°€??/li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ?œìš© ?¬ë? & ì£¼ìš” ê¸°ëŠ¥ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?¹ë·° ?œìš© ?¬ë?</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>?˜ì´ë¸Œë¦¬????ê°œë°œ</strong>
                    <p className="text-sm text-gray-600">
                      ?±ì˜ ?¼ë? ?ëŠ” ?„ì²´ë¥??¹ìœ¼ë¡?êµ¬í˜„
                    </p>
                  </li>
                  <li>
                    <strong>?¸ë? ì½˜í…ì¸??œì‹œ</strong>
                    <p className="text-sm text-gray-600">
                      ?¸ë? ?¬ì´?¸ë‚˜ ì½˜í…ì¸??œì‹œ
                    </p>
                  </li>
                  <li>
                    <strong>?¸ì•± ë¸Œë¼?°ì?</strong>
                    <p className="text-sm text-gray-600">
                      ??ì¢…ë£Œ ?†ì´ ???ìƒ‰ ì§€??                    </p>
                  </li>
                  <li>
                    <strong>OAuth ?¸ì¦</strong>
                    <p className="text-sm text-gray-600">
                      ?Œì…œ ë¡œê·¸??????ê¸°ë°˜ ?¸ì¦ ì²˜ë¦¬
                    </p>
                  </li>
                  <li>
                    <strong>?™ì  ì½˜í…ì¸??…ë°?´íŠ¸</strong>
                    <p className="text-sm text-gray-600">
                      ???…ë°?´íŠ¸ ?†ì´ ì½˜í…ì¸?ê°±ì‹ 
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">ì£¼ìš” ê¸°ëŠ¥</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>???˜ì´ì§€ ë¡œë“œ ë°??Œë”ë§?/li>
                  <li>JavaScript ?¤í–‰ ë°?ì²˜ë¦¬</li>
                  <li>JS-?¤ì´?°ë¸Œ ë¸Œë¦¿ì§€ ?µì‹ </li>
                  <li>ì¿ í‚¤ ë°??¸ì…˜ ê´€ë¦?/li>
                  <li>?¤ë¹„ê²Œì´???œì–´</li>
                  <li>?Œì¼ ?…ë¡œ???¤ìš´ë¡œë“œ</li>
                  <li>?¤í”„?¼ì¸ ì§€??(ìºì‹±)</li>
                  <li>ë³´ì•ˆ ?•ì±… ?ìš©</li>
                </ul>
              </div>
            </div>

            {/* ê³ ë ¤?¬í•­ */}
            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md mt-6">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                ?¹ë·° êµ¬í˜„ ??ê³ ë ¤?¬í•­
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>ë³´ì•ˆ</strong>
                  <p className="text-sm">HTTPS ?¬ìš©, ?¸ì¦ ? í° ê´€ë¦?/p>
                </li>
                <li>
                  <strong>?±ëŠ¥</strong>
                  <p className="text-sm">ë¡œë”© ?œê°„Â·ë©”ëª¨ë¦?ìµœì ??/p>
                </li>
                <li>
                  <strong>ë°˜ì‘??/strong>
                  <p className="text-sm">?¤ì–‘???”ë©´ ?¬ê¸° ?€??/p>
                </li>
                <li>
                  <strong>?¤í”„?¼ì¸</strong>
                  <p className="text-sm">ìºì‹± ?„ëµ</p>
                </li>
                <li>
                  <strong>UX</strong>
                  <p className="text-sm">?¼ê????¬ìš©??ê²½í—˜</p>
                </li>
                <li>
                  <strong>?Œë«??ì°¨ì´</strong>
                  <p className="text-sm">Android vs iOS ì°¨ì´ ?´í•´</p>
                </li>
                <li>
                  <strong>?‘ê·¼??/strong>
                  <p className="text-sm">???‘ê·¼??ì¤€??/p>
                </li>
                <li>
                  <strong>?¸ì…˜ ê´€ë¦?/strong>
                  <p className="text-sm">?±â†”ï¸ì›¹ ?¸ì¦ ?íƒœ ê³µìœ </p>
                </li>
              </ul>
            </div>

          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
