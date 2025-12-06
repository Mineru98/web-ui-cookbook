"use client";

import SlideLayout from "../slide-layout";
import { useState, useEffect } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KeyboardSlide() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [lastKey, setLastKey] = useState<string>("");
  const [boxPosition, setBoxPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setLastKey(key);

      if (!activeKeys.includes(key)) {
        setActiveKeys([...activeKeys, key]);
      }

      // ?”ì‚´???¤ë¡œ ë°•ìŠ¤ ?´ë™
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
        e.preventDefault();
        setBoxPosition((prev) => {
          let { x, y } = prev;
          const step = 10;

          switch (key) {
            case "arrowup":
              y = Math.max(0, y - step);
              break;
            case "arrowdown":
              y = Math.min(100, y + step);
              break;
            case "arrowleft":
              x = Math.max(0, x - step);
              break;
            case "arrowright":
              x = Math.min(100, x + step);
              break;
          }

          return { x, y };
        });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setActiveKeys(activeKeys.filter((k) => k !== key));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeKeys]);

  const isKeyActive = (key: string) => activeKeys.includes(key.toLowerCase());

  return (
    <SlideLayout title="Keyboard (?¤ë³´??">
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
                ?¤ë³´???í˜¸?‘ìš©?€ ë¬¼ë¦¬???ëŠ” ê°€???¤ë³´?œë? ?µí•´ ? í”Œë¦¬ì??´ì…˜ê³?                ?Œí†µ?˜ëŠ” ë°©ì‹?…ë‹ˆ?? React?ì„œ??KeyboardEventë¥??µí•´ ì²˜ë¦¬?˜ë©°,
                ??ë°??°ìŠ¤?¬í†± ?˜ê²½?ì„œ??ì£¼ìš” ?í˜¸?‘ìš© ë°©ì‹?´ë©°, ëª¨ë°”??                ?˜ê²½?ì„œ???ìŠ¤???…ë ¥ ë°??¹ìˆ˜ ê¸°ëŠ¥ ?¬ìš© ???„ìˆ˜?ì…?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">
                ?¼ë°˜?ì¸ ?¤ë³´???í˜¸?‘ìš©
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>?¨ì¶•??</strong> Ctrl+C (ë³µì‚¬), Ctrl+V (ë¶™ì—¬?£ê¸°) ??                </li>
                <li>
                  <strong>?´ë¹„ê²Œì´??</strong> Tab (?¤ìŒ ?”ì†Œë¡?, Shift+Tab
                  (?´ì „ ?”ì†Œë¡?
                </li>
                <li>
                  <strong>???„ì†¡:</strong> Enter ??                </li>
                <li>
                  <strong>ì·¨ì†Œ:</strong> Escape ??                </li>
                <li>
                  <strong>ë°©í–¥??</strong> ?´ë™, ë©”ë‰´ ??ª© ? íƒ
                </li>
                <li>
                  <strong>?˜ì´ì§€ ?´ë™:</strong> Page Up, Page Down
                </li>
                <li>
                  <strong>?„ì´??? íƒ:</strong> Space, Enter
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?‘ê·¼??ê³ ë ¤?¬í•­</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ëª¨ë“  ê¸°ëŠ¥?€ ?¤ë³´?œë§Œ?¼ë¡œ???´ìš© ê°€?¥í•´????/li>
                <li>?¬ì»¤???íƒœê°€ ?œê°?ìœ¼ë¡?ëª…í™•???œì‹œ?˜ì–´????/li>
                <li>?¼ë¦¬?ì¸ ???œì„œ ? ì?</li>
                <li>?¤ë³´???¸ë© ë°©ì? (???´ì— ê°‡íˆì§€ ?Šë„ë¡?</li>
                <li>?¨ì¶•?¤ëŠ” ?¼ê????¨í„´ ? ì?</li>
                <li>?¤í¬ë¦?ë¦¬ë” ?¸í™˜??ë³´ì¥</li>
                <li>?¤ë³´???ˆë‚´ ?œê³µ (?¬ìš© ê°€?¥í•œ ?¨ì¶•??ëª©ë¡ ??</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// ê¸°ë³¸ ?¤ë³´???´ë²¤??ë¦¬ìŠ¤??import { useState, useEffect } from 'react';

function KeyboardExample() {
  const [lastKey, setLastKey] = useState('');
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setLastKey(key);
      
      if (!pressedKeys.includes(key)) {
        setPressedKeys(prev => [...prev, key]);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setPressedKeys(prev => prev.filter(k => k !== key));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [pressedKeys]);

  return (
    <div className="bg-white p-4 border rounded-lg">
      <div className="space-y-4">
        <div>ë§ˆì?ë§‰ìœ¼ë¡??„ë¥¸ ?? <span className="font-mono bg-gray-100 px-2 py-1 rounded">{lastKey || '-'}</span></div>
        <div>
          <div className="mb-2">?„ì¬ ?„ë¥´ê³??ˆëŠ” ??</div>
          <div className="flex gap-2 flex-wrap">
            {pressedKeys.length > 0 ? (
              pressedKeys.map(key => (
                <span key={key} className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                  {key}
                </span>
              ))
            ) : (
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">-</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ë°©í–¥?¤ë¡œ ?„ì¹˜ ?´ë™?˜ëŠ” ?ˆì œ
function KeyboardMovementExample() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const step = 10;
      
      setPosition(prev => {
        let { x, y } = prev;
        
        switch (e.key.toLowerCase()) {
          case 'arrowup':
            y = Math.max(0, y - step);
            break;
          case 'arrowdown':
            y = Math.min(200, y + step);
            break;
          case 'arrowleft':
            x = Math.max(0, x - step);
            break;
          case 'arrowright':
            x = Math.min(300, x + step);
            break;
          default:
            return prev;
        }
        
        return { x, y };
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-80 h-52 bg-gray-200 border rounded-lg">
      <div
        className="absolute w-10 h-10 bg-green-500 rounded"
        style={{
          left: \`\${position.x}px\`,
          top: \`\${position.y}px\`,
          transition: 'all 0.1s ease-out'
        }}
      />
      <div className="absolute bottom-2 right-2 text-xs text-gray-600">
        ë°©í–¥?¤ë¡œ ?´ë™?˜ì„¸??      </div>
    </div>
  );
}

// ?¤ë³´???¨ì¶•???¤ì •
function KeyboardShortcutExample() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd ??ì²´í¬
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      
      if (!isCtrlOrCmd) return;
      
      switch (e.key.toLowerCase()) {
        case 's':
          e.preventDefault();
          console.log('?€???¨ì¶•?¤ê? ?Œë ¸?µë‹ˆ??');
          setMessage('?€?¥ë¨ (Ctrl+S)');
          break;
        case 'c':
          console.log('ë³µì‚¬ ?¨ì¶•?¤ê? ?Œë ¸?µë‹ˆ??');
          setMessage('ë³µì‚¬??(Ctrl+C)');
          break;
        case 'v':
          console.log('ë¶™ì—¬?£ê¸° ?¨ì¶•?¤ê? ?Œë ¸?µë‹ˆ??');
          setMessage('ë¶™ì—¬?£ê¸°??(Ctrl+V)');
          break;
      }
      
      if (message) {
        setTimeout(() => setMessage(''), 2000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [message]);

  return (
    <div className="p-6 border rounded-lg text-center">
      <div className="mb-4">
        <p>???ì—­?ì„œ Ctrl+S, Ctrl+C, Ctrl+V ?¨ì¶•?¤ë? ?¬ìš©?´ë³´?¸ìš”</p>
        {message && (
          <div className="mt-2 p-2 bg-green-100 text-green-700 rounded">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

// React?ì„œ ?¤ë³´???´ë²¤??ì²˜ë¦¬?˜ëŠ” ?¤ì–‘??ë°©ë²•
function KeyboardEventTypes() {
  const [eventType, setEventType] = useState('');

  return (
    <div className="space-y-4">
      {/* ?„ì—­ ?¤ë³´???´ë²¤??*/}
      <div className="p-4 border rounded">
        <h4 className="font-medium mb-2">?„ì—­ ?¤ë³´???´ë²¤??/h4>
        <p className="text-sm text-gray-600">window.addEventListener ?¬ìš©</p>
      </div>
      
      {/* ?”ì†Œë³??¤ë³´???´ë²¤??*/}
      <div 
        className="p-4 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          setEventType(\`KeyDown: \${e.key}\`);
          setTimeout(() => setEventType(''), 1000);
        }}
      >
        <h4 className="font-medium mb-2">?”ì†Œë³??¤ë³´???´ë²¤??/h4>
        <p className="text-sm text-gray-600">??ë°•ìŠ¤ë¥??´ë¦­?˜ê³  ?¤ë? ?ŒëŸ¬ë³´ì„¸??/p>
        {eventType && <p className="text-sm text-blue-600 mt-2">{eventType}</p>}
      </div>
      
      {/* ?…ë ¥ ?„ë“œ ?¤ë³´???´ë²¤??*/}
      <div className="p-4 border rounded">
        <h4 className="font-medium mb-2">?…ë ¥ ?„ë“œ ?¤ë³´???´ë²¤??/h4>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="?¬ê¸°???…ë ¥?´ë³´?¸ìš”"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log('?”í„°???Œë¦¼');
            }
          }}
        />
      </div>
    </div>
  );
}`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-slate-50 p-3 border-b">
                    <h3 className="font-medium">?¤ë³´???´ë²¤???°ëª¨</h3>
                    <p className="text-sm text-gray-600">
                      ?„ë¬´ ?¤ë‚˜ ?ŒëŸ¬ë³´ì„¸??                    </p>
                  </div>

                  <div className="p-4 bg-white">
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-500">
                          ë§ˆì?ë§‰ìœ¼ë¡??„ë¥¸ ??
                        </span>
                        <span className="font-mono font-medium bg-gray-100 px-2 py-1 rounded text-sm">
                          {lastKey || "-"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          ?„ì¬ ?„ë¥´ê³??ˆëŠ” ??
                        </span>
                        <div className="font-mono font-medium">
                          {activeKeys.length > 0 ? (
                            <div className="flex gap-1">
                              {activeKeys.map((key) => (
                                <span
                                  key={key}
                                  className="bg-[#49bcf3] text-white px-2 py-1 rounded text-xs"
                                >
                                  {key}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                              -
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">?¤ë³´??ê²Œì„</h4>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-4 h-32 relative">
                        <div
                          className="absolute bg-[#49bcf3] rounded-md w-10 h-10"
                          style={{
                            left: `${boxPosition.x}%`,
                            top: `${boxPosition.y}%`,
                            transform: "translate(-50%, -50%)",
                            transition: "all 0.1s ease-out",
                          }}
                        />
                        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                          ë°©í–¥?¤ë¡œ ?ìë¥??€ì§ì—¬ë³´ì„¸??                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">
                          ?¤ë³´???íƒœ ?œê°??                        </h4>
                        <div className="grid grid-cols-3 text-center pb-6 w-40 mx-auto">
                          <div></div>
                          <div>
                            <div
                              className={`w-10 h-10 border-2 ${
                                isKeyActive("arrowup")
                                  ? "bg-[#49bcf3] text-white"
                                  : "bg-white"
                              } rounded-md flex items-center justify-center shadow-sm mx-auto`}
                            >
                              <ArrowUp size={18} />
                            </div>
                          </div>
                          <div></div>

                          <div>
                            <div
                              className={`w-10 h-10 border-2 ${
                                isKeyActive("arrowleft")
                                  ? "bg-[#49bcf3] text-white"
                                  : "bg-white"
                              } rounded-md flex items-center justify-center shadow-sm mx-auto`}
                            >
                              <ArrowLeft size={18} />
                            </div>
                          </div>
                          <div>
                            <div
                              className={`w-10 h-10 border-2 ${
                                isKeyActive("arrowdown")
                                  ? "bg-[#49bcf3] text-white"
                                  : "bg-white"
                              } rounded-md flex items-center justify-center shadow-sm mx-auto`}
                            >
                              <ArrowDown size={18} />
                            </div>
                          </div>
                          <div>
                            <div
                              className={`w-10 h-10 border-2 ${
                                isKeyActive("arrowright")
                                  ? "bg-[#49bcf3] text-white"
                                  : "bg-white"
                              } rounded-md flex items-center justify-center shadow-sm mx-auto`}
                            >
                              <ArrowRight size={18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-slate-50 p-3 border-b">
                    <h3 className="font-medium">?¼ë°˜?ì¸ ?¤ë³´???¨ì¶•??/h3>
                  </div>

                  <div className="p-4 bg-white">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + C</td>
                          <td className="py-2 text-gray-600">ë³µì‚¬</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + V</td>
                          <td className="py-2 text-gray-600">ë¶™ì—¬?£ê¸°</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + Z</td>
                          <td className="py-2 text-gray-600">?¤í–‰ ì·¨ì†Œ</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + S</td>
                          <td className="py-2 text-gray-600">?€??/td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + F</td>
                          <td className="py-2 text-gray-600">ì°¾ê¸°</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Alt + Tab</td>
                          <td className="py-2 text-gray-600">???„í™˜</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
