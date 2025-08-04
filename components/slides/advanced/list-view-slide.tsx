"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import { Check, ChevronRight, MoreVertical } from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ListItem {
  id: number;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  priority: "high" | "medium" | "low";
}

export default function ListViewSlide() {
  const [items, setItems] = useState<ListItem[]>([
    {
      id: 1,
      title: "UI 디자인 초안 완성",
      description: "모바일 앱 메인 화면 UI 디자인 초안 완료",
      status: "completed",
      priority: "high",
    },
    {
      id: 2,
      title: "컴포넌트 라이브러리 구축",
      description: "재사용 가능한 UI 컴포넌트 세트 개발",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: 3,
      title: "사용자 테스트 진행",
      description: "프로토타입에 대한 사용자 피드백 수집",
      status: "pending",
      priority: "high",
    },
    {
      id: 4,
      title: "접근성 검토",
      description: "WCAG 가이드라인에 따른 접근성 검토",
      status: "pending",
      priority: "medium",
    },
    {
      id: 5,
      title: "디자인 가이드 문서화",
      description: "UI 스타일 가이드 및 사용 방법 문서화",
      status: "in-progress",
      priority: "low",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [viewType, setViewType] = useState<"default" | "compact" | "detailed">(
    "default"
  );

  const toggleItemStatus = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newStatus =
            item.status === "pending"
              ? "in-progress"
              : item.status === "in-progress"
              ? "completed"
              : "pending";

          return { ...item, status: newStatus };
        }
        return item;
      })
    );
  };

  // 상태에 따른 스타일 클래스
  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // 우선순위에 따른 스타일 클래스
  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderListItems = () => {
    return items.map((item) => (
      <div
        key={item.id}
        className={`border rounded-md mb-2 overflow-hidden transition-all ${
          selectedItem === item.id ? "ring-2 ring-[#6700e6]" : ""
        }`}
        onClick={() =>
          setSelectedItem(item.id === selectedItem ? null : item.id)
        }
      >
        <div
          className={`p-4 ${
            viewType === "compact" ? "py-2" : ""
          } flex items-center`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 cursor-pointer ${
              item.status === "completed"
                ? "bg-[#6700e6]"
                : "border border-gray-300"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              toggleItemStatus(item.id);
            }}
          >
            {item.status === "completed" && (
              <Check className="w-4 h-4 text-white" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4
                className={`font-medium ${
                  item.status === "completed"
                    ? "line-through text-gray-500"
                    : ""
                }`}
              >
                {item.title}
              </h4>

              <span
                className={`text-xs px-2 py-0.5 rounded ${getPriorityClass(
                  item.priority
                )}`}
              >
                {item.priority}
              </span>
            </div>

            {viewType !== "compact" && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}

            {viewType === "detailed" && (
              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded ${getStatusClass(
                    item.status
                  )}`}
                >
                  {item.status.replace("-", " ")}
                </span>
                <span className="text-xs text-gray-500">ID: {item.id}</span>
              </div>
            )}
          </div>

          <div className="flex items-center">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <SlideLayout title="List View (리스트 뷰)">
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
                리스트 뷰는 항목을 세로로 나열하는 UI 패턴으로, 주로 텍스트와
                간단한 컨트롤로 구성됩니다. 사용자가 여러 항목을 탐색하고
                선택하며 작업할 수 있는 효율적인 방법을 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">일반적인 용도</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>이메일, 메시지, 알림 표시</li>
                <li>설정 옵션 나열</li>
                <li>작업 목록 관리</li>
                <li>검색 결과 표시</li>
                <li>연락처 목록 관리</li>
                <li>콘텐츠 카테고리 탐색</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">주요 특징</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>일관된 항목 형식</li>
                <li>스크롤 가능한 인터페이스</li>
                <li>항목별 컨텍스트 작업</li>
                <li>선택/비선택 상태 UI</li>
                <li>다양한 밀도 레이아웃 지원</li>
                <li>끌어서 새로고침 등 제스처 지원</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { Check, ChevronRight, MoreVertical } from 'lucide-react';

interface ListItem {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  priority: 'high' | 'medium' | 'low';
}

type ViewType = 'default' | 'compact' | 'detailed';

const ListViewExample: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([
    { 
      id: 1, 
      title: "UI 디자인 초안 완성", 
      description: "모바일 앱 메인 화면 UI 디자인 초안 완료",
      status: "completed",
      priority: "high"
    },
    { 
      id: 2, 
      title: "컴포넌트 라이브러리 구축", 
      description: "재사용 가능한 UI 컴포넌트 세트 개발",
      status: "in-progress",
      priority: "medium"
    },
    { 
      id: 3, 
      title: "사용자 테스트 진행", 
      description: "프로토타입에 대한 사용자 피드백 수집",
      status: "pending",
      priority: "high"
    },
  ]);
  
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [viewType, setViewType] = useState<ViewType>('default');
  
  const toggleItemStatus = (id: number) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        const newStatus = 
          item.status === "pending" ? "in-progress" : 
          item.status === "in-progress" ? "completed" : 
          "pending";
        
        return { ...item, status: newStatus };
      }
      return item;
    }));
  };
  
  // 상태에 따른 스타일 클래스
  const getStatusClass = (status: string): string => {
    switch(status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  // 우선순위에 따른 스타일 클래스
  const getPriorityClass = (priority: string): string => {
    switch(priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleItemTap = (id: number) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  const renderListItems = () => {
    return items.map(item => (
      <div 
        key={item.id}
        className={\`border rounded-md mb-2 overflow-hidden transition-all cursor-pointer \${selectedItem === item.id ? 'ring-2 ring-[#6700e6]' : ''}\`}
        onClick={() => handleItemTap(item.id)}
      >
        <div className={\`p-4 \${viewType === "compact" ? 'py-2' : ''} flex items-center\`}>
          <div 
            className={\`w-6 h-6 rounded-full flex items-center justify-center mr-3 cursor-pointer \${item.status === "completed" ? 'bg-[#6700e6]' : 'border border-gray-300'}\`}
            onClick={(e) => {
              e.stopPropagation();
              toggleItemStatus(item.id);
            }}
          >
            {item.status === "completed" && <Check className="w-4 h-4 text-white" />}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className={\`font-medium \${item.status === "completed" ? 'line-through text-gray-500' : ''}\`}>
                {item.title}
              </h4>
              
              <span className={\`text-xs px-2 py-0.5 rounded \${getPriorityClass(item.priority)}\`}>
                {item.priority}
              </span>
            </div>
            
            {viewType !== "compact" && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
            
            {viewType === "detailed" && (
              <div className="mt-2 flex items-center gap-2">
                <span className={\`text-xs px-2 py-0.5 rounded \${getStatusClass(item.status)}\`}>
                  {item.status.replace('-', ' ')}
                </span>
                <span className="text-xs text-gray-500">ID: {item.id}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">업무 목록</h1>
        <select
          value={viewType}
          onChange={(e) => setViewType(e.target.value as ViewType)}
          className="px-3 py-1 border rounded-md text-sm"
        >
          <option value="default">기본 보기</option>
          <option value="compact">간결한 보기</option>
          <option value="detailed">상세 보기</option>
        </select>
      </div>

      {/* 리스트 */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="overflow-y-auto max-h-96">
          {renderListItems()}
        </div>
      </div>
      
      {/* 선택된 항목 정보 */}
      {selectedItem && (
        <div className="mt-4 p-4 bg-[#6700e6]/10 rounded-md">
          <p className="text-sm text-[#6700e6]">
            항목 #{selectedItem}가 선택되었습니다. 실제 애플리케이션에서는 상세 정보 표시, 
            작업 상태 변경, 삭제 등의 작업이 수행될 수 있습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default ListViewExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex gap-4 mb-4">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    viewType === "default"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setViewType("default")}
                >
                  기본 보기
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    viewType === "compact"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setViewType("compact")}
                >
                  간결한 보기
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    viewType === "detailed"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setViewType("detailed")}
                >
                  상세 보기
                </button>
              </div>

              <div className="border rounded-lg p-4 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">업무 목록</h3>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <MoreVertical className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-64">
                  {renderListItems()}
                </div>
              </div>

              {selectedItem && (
                <div className="mt-4 p-4 bg-[#6700e6]/10 rounded-md">
                  <p className="text-sm text-[#6700e6]">
                    항목 #{selectedItem}가 선택되었습니다. 실제
                    애플리케이션에서는 상세 정보 표시, 작업 상태 변경, 삭제 등의
                    작업이 수행될 수 있습니다.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
