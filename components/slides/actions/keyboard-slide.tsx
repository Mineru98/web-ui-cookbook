"use client";

import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import SlideLayout from "../slide-layout";

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

      // 화살표 키로 박스 이동
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
    <SlideLayout title="Keyboard (키보드)">
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
                키보드 입력은 물리적인 또는 가상 키보드를 통해 애플리케이션과
                통신하는 방식입니다. React에서 KeyboardEvent를 통해 처리하며,
                데스크톱 환경에서 주요 입력 방식이며, 모바일 환경에서 키보드
                입력 및 기능 사용 기능을 입력합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">
                일반적인 키보드 입력
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>단축키:</strong> Ctrl+C (복사), Ctrl+V (붙여넣기) 등{" "}
                </li>
                <li>
                  <strong>네비게이션:</strong> Tab (다음 요소), Shift+Tab (이전
                  요소)
                </li>
                <li>
                  <strong>전송:</strong> Enter 등{" "}
                </li>
                <li>
                  <strong>취소:</strong> Escape 등{" "}
                </li>
                <li>
                  <strong>방향키:</strong> 이동, 메뉴 탐색 및 선택
                </li>
                <li>
                  <strong>페이지 이동:</strong> Page Up, Page Down
                </li>
                <li>
                  <strong>아이템 선택:</strong> Space, Enter
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">접근성 고려사항</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>모든 기능을 키보드만으로도 사용 가능해야 합니다</li>
                <li>포커스 상태가 시각적으로 명확하게 표시되어야 합니다</li>
                <li>일관성 있는 패턴 사용</li>
                <li>키보드 트랩 방지 (요소에 갇히지 않도록)</li>
                <li>단축키는 일관된 패턴 사용</li>
                <li>스크린리더 호환성 보장</li>
                <li>키보드 내비 제공 (사용 가능한 단축키 목록 제공)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// 기본 키보드 이벤트 리스너
import { useState, useEffect } from 'react';

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
        <div>마지막으로 누른 키: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{lastKey || '-'}</span></div>
        <div>
          <div className="mb-2">현재 누르고 있는 키:</div>
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

// 방향키로 위치 이동하는 예제
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
        방향키로 이동해보세요      </div>
    </div>
  );
}

// 키보드 단축키 처리
function KeyboardShortcutExample() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd 키 체크
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      
      if (!isCtrlOrCmd) return;
      
      switch (e.key.toLowerCase()) {
        case 's':
          e.preventDefault();
          console.log('저장 단축키를 눌렀습니다');
          setMessage('저장됨 (Ctrl+S)');
          break;
        case 'c':
          console.log('복사 단축키를 눌렀습니다');
          setMessage('복사됨 (Ctrl+C)');
          break;
        case 'v':
          console.log('붙여넣기 단축키를 눌렀습니다');
          setMessage('붙여넣기됨 (Ctrl+V)');
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
        <p>이 영역에서 Ctrl+S, Ctrl+C, Ctrl+V 단축키를 사용해보세요</p>
        {message && (
          <div className="mt-2 p-2 bg-green-100 text-green-700 rounded">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

// React에서 키보드 이벤트를 처리하는 다양한 방법
function KeyboardEventTypes() {
  const [eventType, setEventType] = useState('');

  return (
    <div className="space-y-4">
      {/* 전역 키보드 이벤트 */}
      <div className="p-4 border rounded">
        <h4 className="font-medium mb-2">전역 키보드 이벤트</h4>
        <p className="text-sm text-gray-600">window.addEventListener 사용</p>
      </div>
      
      {/* 요소 키보드 이벤트 */}
      <div 
        className="p-4 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          setEventType(\`KeyDown: \${e.key}\`);
          setTimeout(() => setEventType(''), 1000);
        }}
      >
        <h4 className="font-medium mb-2">요소 키보드 이벤트</h4>
        <p className="text-sm text-gray-600">이 박스를 클릭하고 키를 눌러보세요</p>
        {eventType && <p className="text-sm text-blue-600 mt-2">{eventType}</p>}
      </div>
      
      {/* 입력 필드 키보드 이벤트 */}
      <div className="p-4 border rounded">
        <h4 className="font-medium mb-2">입력 필드 키보드 이벤트</h4>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="여기에 입력해보세요"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log('엔터키 눌림');
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
                    <h3 className="font-medium">키보드 이벤트 데모</h3>
                    <p className="text-sm text-gray-600">
                      아무 키나 눌러보세요{" "}
                    </p>
                  </div>

                  <div className="p-4 bg-white">
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-500">
                          마지막으로 누른 키
                        </span>
                        <span className="font-mono font-medium bg-gray-100 px-2 py-1 rounded text-sm">
                          {lastKey || "-"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          현재 누르고 있는 키
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
                      <h4 className="text-sm font-medium mb-2">키보드 게임</h4>
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
                          방향키로 캐릭터를 움직여보세요{" "}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">
                          키보드 상태 표시{" "}
                        </h4>
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
                    <h3 className="font-medium">일반적인 키보드 단축키</h3>
                  </div>

                  <div className="p-4 bg-white">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + C</td>
                          <td className="py-2 text-gray-600">복사</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + V</td>
                          <td className="py-2 text-gray-600">붙여넣기</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + Z</td>
                          <td className="py-2 text-gray-600">실행 취소</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + S</td>
                          <td className="py-2 text-gray-600">저장</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Ctrl/Cmd + F</td>
                          <td className="py-2 text-gray-600">찾기</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Alt + Tab</td>
                          <td className="py-2 text-gray-600">앱 전환</td>
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
