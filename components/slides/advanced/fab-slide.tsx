"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import { Plus, MessageSquare, Mail, Phone, Share2, X } from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FabSlide() {
  const [fabType, setFabType] = useState<
    "basic" | "extended" | "mini" | "speed-dial"
  >("basic");
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);

  const renderFAB = () => {
    switch (fabType) {
      case "extended":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button className="px-4 py-3 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              <span className="font-medium text-sm">새 항목 추가</span>
            </button>
          </div>
        );

      case "mini":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button className="p-2 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center justify-center">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        );

      case "speed-dial":
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            {isSpeedDialOpen && (
              <div className="absolute bottom-20 right-4 flex flex-col items-center gap-3 mb-2">
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    메시지
                  </span>
                  <button className="p-3 bg-blue-500 text-white rounded-full shadow-md">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    이메일
                  </span>
                  <button className="p-3 bg-red-500 text-white rounded-full shadow-md">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    전화
                  </span>
                  <button className="p-3 bg-green-500 text-white rounded-full shadow-md">
                    <Phone className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                    공유
                  </span>
                  <button className="p-3 bg-purple-500 text-white rounded-full shadow-md">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
            <button
              className="p-4 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-200"
              onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
            >
              {isSpeedDialOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Plus className="h-6 w-6" />
              )}
            </button>
          </div>
        );

      default: // basic
        return (
          <div className="relative h-48 bg-gray-50 border rounded-lg p-4 flex items-end justify-end">
            <button className="p-4 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center justify-center">
              <Plus className="h-6 w-6" />
            </button>
          </div>
        );
    }
  };

  const getReactCode = () => {
    switch (fabType) {
      case "extended":
        return `import React from 'react';
import { Plus } from 'lucide-react';

const ExtendedFabExample: React.FC = () => {
  const handleAddItem = () => {
    // 버튼 클릭 시 실행할 코드
    console.log('새 항목 추가 버튼 클릭됨');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 메인 콘텐츠 */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">화면 콘텐츠</p>
      </main>

      {/* Extended FAB */}
      <button
        onClick={handleAddItem}
        className="fixed bottom-6 right-6 px-4 py-3 bg-[#6700e6] text-white rounded-full shadow-lg hover:bg-[#6700e6]/90 focus:outline-none focus:ring-2 focus:ring-[#6700e6] focus:ring-offset-2 transition-all duration-200 flex items-center gap-2"
        aria-label="새 항목 추가"
      >
        <Plus className="h-5 w-5" />
        <span className="font-medium text-sm">새 항목 추가</span>
      </button>
    </div>
  );
};

export default ExtendedFabExample;`;

      case "mini":
        return `import React from 'react';
import { Plus } from 'lucide-react';

const MiniFabExample: React.FC = () => {
  const handleAddItem = () => {
    // 버튼 클릭 시 실행할 코드
    console.log('미니 FAB 클릭됨');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 메인 콘텐츠 */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">화면 콘텐츠</p>
      </main>

      {/* Mini FAB */}
      <button
        onClick={handleAddItem}
        className="fixed bottom-6 right-6 w-10 h-10 bg-[#6700e6] text-white rounded-full shadow-lg hover:bg-[#6700e6]/90 focus:outline-none focus:ring-2 focus:ring-[#6700e6] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
        aria-label="새 항목 추가"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MiniFabExample;`;

      case "speed-dial":
        return `import React, { useState } from 'react';
import { Plus, X, MessageSquare, Mail, Phone, Share2 } from 'lucide-react';

interface SpeedDialOption {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  action: () => void;
}

const SpeedDialFabExample: React.FC = () => {
  const [isDialOpen, setIsDialOpen] = useState(false);

  const speedDialOptions: SpeedDialOption[] = [
    {
      icon: MessageSquare,
      label: '메시지',
      color: 'bg-blue-500',
      action: () => console.log('메시지 기능 실행')
    },
    {
      icon: Mail,
      label: '이메일',
      color: 'bg-red-500',
      action: () => console.log('이메일 기능 실행')
    },
    {
      icon: Phone,
      label: '전화',
      color: 'bg-green-500',
      action: () => console.log('전화 기능 실행')
    },
    {
      icon: Share2,
      label: '공유',
      color: 'bg-purple-500',
      action: () => console.log('공유 기능 실행')
    }
  ];

  const toggleSpeedDial = () => {
    setIsDialOpen(!isDialOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 메인 콘텐츠 */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">화면 콘텐츠</p>
      </main>

      {/* Speed Dial FAB */}
      <div className="fixed bottom-6 right-6">
        {/* Speed Dial Options */}
        {isDialOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col items-end gap-3 mb-2">
            {speedDialOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {option.label}
                </span>
                <button
                  onClick={option.action}
                  className={\`p-3 \${option.color} text-white rounded-full shadow-md hover:scale-110 transition-transform duration-200\`}
                  aria-label={option.label}
                >
                  <option.icon className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={toggleSpeedDial}
          className="w-14 h-14 bg-[#6700e6] text-white rounded-full shadow-lg hover:bg-[#6700e6]/90 focus:outline-none focus:ring-2 focus:ring-[#6700e6] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
          aria-label={isDialOpen ? '스피드 다이얼 닫기' : '스피드 다이얼 열기'}
        >
          {isDialOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Plus className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SpeedDialFabExample;`;

      default: // basic
        return `import React from 'react';
import { Plus } from 'lucide-react';

const BasicFabExample: React.FC = () => {
  const handleAddItem = () => {
    // 버튼 클릭 시 실행할 코드
    console.log('기본 FAB 클릭됨');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 메인 콘텐츠 */}
      <main className="flex items-center justify-center h-96">
        <p className="text-gray-600">화면 콘텐츠</p>
      </main>

      {/* Basic FAB */}
      <button
        onClick={handleAddItem}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#6700e6] text-white rounded-full shadow-lg hover:bg-[#6700e6]/90 focus:outline-none focus:ring-2 focus:ring-[#6700e6] focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
        aria-label="새 항목 추가"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BasicFabExample;`;
    }
  };

  return (
    <SlideLayout title="FloatingActionButton (FAB)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-3">정의</h2>
              <p>
                Floating Action Button(FAB)은 화면 위에 떠 있는 원형 버튼으로,
                사용자가 앱에서 취할 수 있는 주요 액션을 나타냅니다. 일반적으로
                화면의 오른쪽 하단이나 중앙 하단에 위치하며, 가장 중요하거나
                자주 사용하는 작업에 빠르게 접근할 수 있게 합니다.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "basic"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("basic")}
                >
                  기본형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "extended"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("extended")}
                >
                  확장형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "mini"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("mini")}
                >
                  미니형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    fabType === "speed-dial"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setFabType("speed-dial")}
                >
                  스피드 다이얼
                </button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                {/* FAB 렌더링 */}
                {renderFAB()}

                {/* 설명 */}
                <div className="p-4 bg-white">
                  <h3 className="font-medium mb-2">
                    {fabType === "basic"
                      ? "기본 FAB"
                      : fabType === "extended"
                      ? "확장형 FAB"
                      : fabType === "mini"
                      ? "미니 FAB"
                      : "스피드 다이얼 FAB"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {fabType === "basic"
                      ? "일반적인 크기의 원형 버튼으로 아이콘만 표시합니다."
                      : fabType === "extended"
                      ? "텍스트와 아이콘을 함께 표시하는 확장된 형태의 FAB입니다."
                      : fabType === "mini"
                      ? "더 작은 크기의 FAB로 보조 액션에 사용됩니다."
                      : "클릭 시 여러 관련 액션을 표시하는 확장 가능한 FAB입니다."}
                  </p>

                  <div className="bg-gray-50 p-3 rounded-md border text-sm">
                    <strong>사용 예시:</strong>
                    <p className="mt-1">
                      {fabType === "basic"
                        ? "새 메시지 작성, 새 항목 추가 등 주요 액션"
                        : fabType === "extended"
                        ? "새 문서 만들기, 검색 시작하기 등 명확한 레이블이 필요한 경우"
                        : fabType === "mini"
                        ? "주요 FAB 옆에서 보조 액션 제공 또는 공간이 제한된 경우"
                        : "연락처 공유, 소셜 미디어 공유 등 여러 관련 옵션이 필요한 경우"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">FAB 유형</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>기본형 (Regular FAB)</strong>
                      <p className="text-sm text-gray-600">
                        지름 56dp의 표준 크기, 주요 액션에 사용
                      </p>
                    </li>
                    <li>
                      <strong>미니형 (Mini FAB)</strong>
                      <p className="text-sm text-gray-600">
                        지름 40dp의 작은 크기, 보조 액션에 사용
                      </p>
                    </li>
                    <li>
                      <strong>확장형 (Extended FAB)</strong>
                      <p className="text-sm text-gray-600">
                        텍스트와 아이콘을 함께 표시하는 직사각형 형태
                      </p>
                    </li>
                    <li>
                      <strong>스피드 다이얼 (Speed Dial)</strong>
                      <p className="text-sm text-gray-600">
                        클릭 시 여러 관련 액션을 보여주는 확장 가능 FAB
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md">
                  <h3 className="text-lg font-medium mb-2">위치 및 동작</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>일반적으로 오른쪽 하단이나 중앙 하단에 위치</li>
                    <li>스크롤 시에도 항상 보이도록 고정 위치 사용</li>
                    <li>화면 간 이동 시 일관된 위치 유지</li>
                    <li>탭 전환 시 FAB 액션이 변경될 수 있음</li>
                    <li>FAB는 화면에 표시된 내용과 관련된 액션 제공</li>
                    <li>접근성을 위한 충분한 터치 영역 확보</li>
                    <li>시각적 피드백과 애니메이션으로 상호작용 강화</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#6700e6]/20 bg-[#6700e6]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#6700e6]">
                디자인 권장사항
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>Z-축 그림자</strong>
                  <p className="text-sm">
                    FAB의 떠 있는 효과를 강조하기 위해 그림자 적용
                  </p>
                </li>
                <li>
                  <strong>명확한 아이콘 사용</strong>
                  <p className="text-sm">
                    FAB의 기능을 직관적으로 이해할 수 있는 아이콘 선택
                  </p>
                </li>
                <li>
                  <strong>사용자 인터페이스 일관성</strong>
                  <p className="text-sm">
                    애플리케이션의 브랜드 색상과 디자인 언어 유지
                  </p>
                </li>
                <li>
                  <strong>애니메이션 효과</strong>
                  <p className="text-sm">
                    클릭, 호버, 확장 시 부드러운 애니메이션 적용
                  </p>
                </li>
                <li>
                  <strong>모바일 최적화</strong>
                  <p className="text-sm">
                    터치 조작에 최적화된 크기와 간격 확보
                  </p>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 border rounded-md">
              <div className="overflow-x-auto rounded-lg">
                <PrismCode code={getReactCode()} language="typescript" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  FAB 유형 선택
                </label>
                <select
                  value={fabType}
                  onChange={(e) => setFabType(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="basic">기본형 (Regular FAB)</option>
                  <option value="extended">확장형 (Extended FAB)</option>
                  <option value="mini">미니형 (Mini FAB)</option>
                  <option value="speed-dial">스피드 다이얼 (Speed Dial)</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* 데모 섹션에서 FAB 표시 */}
                <div className="w-full h-64 bg-gray-50 border rounded-lg relative overflow-hidden">
                  <div className="absolute right-4 bottom-4">
                    {fabType === "extended" ? (
                      <button className="px-4 py-3 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center">
                        <Plus className="h-5 w-5 mr-2" />
                        <span className="font-medium text-sm">
                          새 항목 추가
                        </span>
                      </button>
                    ) : fabType === "mini" ? (
                      <button className="p-2 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center justify-center">
                        <Plus className="h-4 w-4" />
                      </button>
                    ) : fabType === "speed-dial" ? (
                      <div>
                        {isSpeedDialOpen && (
                          <div className="flex flex-col items-end gap-3 mb-3">
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                메시지
                              </span>
                              <button className="p-3 bg-blue-500 text-white rounded-full shadow-md">
                                <MessageSquare className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                이메일
                              </span>
                              <button className="p-3 bg-red-500 text-white rounded-full shadow-md">
                                <Mail className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                전화
                              </span>
                              <button className="p-3 bg-green-500 text-white rounded-full shadow-md">
                                <Phone className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="flex items-center">
                              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-2">
                                공유
                              </span>
                              <button className="p-3 bg-purple-500 text-white rounded-full shadow-md">
                                <Share2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        )}
                        <button
                          className="p-4 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center justify-center"
                          onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
                        >
                          {isSpeedDialOpen ? (
                            <X className="h-6 w-6" />
                          ) : (
                            <Plus className="h-6 w-6" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <button className="p-4 bg-[#6700e6] text-white rounded-full shadow-lg flex items-center justify-center">
                        <Plus className="h-6 w-6" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="w-full text-center text-sm mt-4">
                  {fabType === "speed-dial" && (
                    <p className="text-gray-600">
                      FAB를 클릭하여 스피드 다이얼 옵션을{" "}
                      {isSpeedDialOpen ? "닫기" : "열기"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
