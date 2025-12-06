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
      title: "UI ?”ì??ì´ˆì•ˆ ?„ì„±",
      description: "ëª¨ë°”????ë©”ì¸ ?”ë©´ UI ?”ì??ì´ˆì•ˆ ?„ë£Œ",
      status: "completed",
      priority: "high",
    },
    {
      id: 2,
      title: "ì»´í¬?ŒíŠ¸ ?¼ì´ë¸ŒëŸ¬ë¦?êµ¬ì¶•",
      description: "?¬ì‚¬??ê°€?¥í•œ UI ì»´í¬?ŒíŠ¸ ?¸íŠ¸ ê°œë°œ",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: 3,
      title: "?¬ìš©???ŒìŠ¤??ì§„í–‰",
      description: "?„ë¡œ? í??…ì— ?€???¬ìš©???¼ë“œë°??˜ì§‘",
      status: "pending",
      priority: "high",
    },
    {
      id: 4,
      title: "?‘ê·¼??ê²€??,
      description: "WCAG ê°€?´ë“œ?¼ì¸???°ë¥¸ ?‘ê·¼??ê²€??,
      status: "pending",
      priority: "medium",
    },
    {
      id: 5,
      title: "?”ì??ê°€?´ë“œ ë¬¸ì„œ??,
      description: "UI ?¤í???ê°€?´ë“œ ë°??¬ìš© ë°©ë²• ë¬¸ì„œ??,
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

  // ?íƒœ???°ë¥¸ ?¤í????´ë˜??  const getStatusClass = (status: string) => {
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

  // ?°ì„ ?œìœ„???°ë¥¸ ?¤í????´ë˜??  const getPriorityClass = (priority: string) => {
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
          selectedItem === item.id ? "ring-2 ring-[#49bcf3]" : ""
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
                ? "bg-[#49bcf3]"
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
    <SlideLayout title="List View (ë¦¬ìŠ¤??ë·?">
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
                ë¦¬ìŠ¤??ë·°ëŠ” ??ª©???¸ë¡œë¡??˜ì—´?˜ëŠ” UI ?¨í„´?¼ë¡œ, ì£¼ë¡œ ?ìŠ¤?¸ì?
                ê°„ë‹¨??ì»¨íŠ¸ë¡¤ë¡œ êµ¬ì„±?©ë‹ˆ?? ?¬ìš©?ê? ?¬ëŸ¬ ??ª©???ìƒ‰?˜ê³ 
                ? íƒ?˜ë©° ?‘ì—…?????ˆëŠ” ?¨ìœ¨?ì¸ ë°©ë²•???œê³µ?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¼ë°˜?ì¸ ?©ë„</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?´ë©”?? ë©”ì‹œì§€, ?Œë¦¼ ?œì‹œ</li>
                <li>?¤ì • ?µì…˜ ?˜ì—´</li>
                <li>?‘ì—… ëª©ë¡ ê´€ë¦?/li>
                <li>ê²€??ê²°ê³¼ ?œì‹œ</li>
                <li>?°ë½ì²?ëª©ë¡ ê´€ë¦?/li>
                <li>ì½˜í…ì¸?ì¹´í…Œê³ ë¦¬ ?ìƒ‰</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">ì£¼ìš” ?¹ì§•</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?¼ê?????ª© ?•ì‹</li>
                <li>?¤í¬ë¡?ê°€?¥í•œ ?¸í„°?˜ì´??/li>
                <li>??ª©ë³?ì»¨í…?¤íŠ¸ ?‘ì—…</li>
                <li>? íƒ/ë¹„ì„ ???íƒœ UI</li>
                <li>?¤ì–‘??ë°€???ˆì´?„ì›ƒ ì§€??/li>
                <li>?Œì–´???ˆë¡œê³ ì¹¨ ???œìŠ¤ì²?ì§€??/li>
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
      title: "UI ?”ì??ì´ˆì•ˆ ?„ì„±", 
      description: "ëª¨ë°”????ë©”ì¸ ?”ë©´ UI ?”ì??ì´ˆì•ˆ ?„ë£Œ",
      status: "completed",
      priority: "high"
    },
    { 
      id: 2, 
      title: "ì»´í¬?ŒíŠ¸ ?¼ì´ë¸ŒëŸ¬ë¦?êµ¬ì¶•", 
      description: "?¬ì‚¬??ê°€?¥í•œ UI ì»´í¬?ŒíŠ¸ ?¸íŠ¸ ê°œë°œ",
      status: "in-progress",
      priority: "medium"
    },
    { 
      id: 3, 
      title: "?¬ìš©???ŒìŠ¤??ì§„í–‰", 
      description: "?„ë¡œ? í??…ì— ?€???¬ìš©???¼ë“œë°??˜ì§‘",
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
  
  // ?íƒœ???°ë¥¸ ?¤í????´ë˜??  const getStatusClass = (status: string): string => {
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
  
  // ?°ì„ ?œìœ„???°ë¥¸ ?¤í????´ë˜??  const getPriorityClass = (priority: string): string => {
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
        className={\`border rounded-md mb-2 overflow-hidden transition-all cursor-pointer \${selectedItem === item.id ? 'ring-2 ring-[#49bcf3]' : ''}\`}
        onClick={() => handleItemTap(item.id)}
      >
        <div className={\`p-4 \${viewType === "compact" ? 'py-2' : ''} flex items-center\`}>
          <div 
            className={\`w-6 h-6 rounded-full flex items-center justify-center mr-3 cursor-pointer \${item.status === "completed" ? 'bg-[#49bcf3]' : 'border border-gray-300'}\`}
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
      {/* ?¤ë” */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">?…ë¬´ ëª©ë¡</h1>
        <select
          value={viewType}
          onChange={(e) => setViewType(e.target.value as ViewType)}
          className="px-3 py-1 border rounded-md text-sm"
        >
          <option value="default">ê¸°ë³¸ ë³´ê¸°</option>
          <option value="compact">ê°„ê²°??ë³´ê¸°</option>
          <option value="detailed">?ì„¸ ë³´ê¸°</option>
        </select>
      </div>

      {/* ë¦¬ìŠ¤??*/}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="overflow-y-auto max-h-96">
          {renderListItems()}
        </div>
      </div>
      
      {/* ? íƒ????ª© ?•ë³´ */}
      {selectedItem && (
        <div className="mt-4 p-4 bg-[#49bcf3]/10 rounded-md">
          <p className="text-sm text-[#49bcf3]">
            ??ª© #{selectedItem}ê°€ ? íƒ?˜ì—ˆ?µë‹ˆ?? ?¤ì œ ? í”Œë¦¬ì??´ì…˜?ì„œ???ì„¸ ?•ë³´ ?œì‹œ, 
            ?‘ì—… ?íƒœ ë³€ê²? ?? œ ?±ì˜ ?‘ì—…???˜í–‰?????ˆìŠµ?ˆë‹¤.
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
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setViewType("default")}
                >
                  ê¸°ë³¸ ë³´ê¸°
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    viewType === "compact"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setViewType("compact")}
                >
                  ê°„ê²°??ë³´ê¸°
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    viewType === "detailed"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setViewType("detailed")}
                >
                  ?ì„¸ ë³´ê¸°
                </button>
              </div>

              <div className="border rounded-lg p-4 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">?…ë¬´ ëª©ë¡</h3>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <MoreVertical className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-64">
                  {renderListItems()}
                </div>
              </div>

              {selectedItem && (
                <div className="mt-4 p-4 bg-[#49bcf3]/10 rounded-md">
                  <p className="text-sm text-[#49bcf3]">
                    ??ª© #{selectedItem}ê°€ ? íƒ?˜ì—ˆ?µë‹ˆ?? ?¤ì œ
                    ? í”Œë¦¬ì??´ì…˜?ì„œ???ì„¸ ?•ë³´ ?œì‹œ, ?‘ì—… ?íƒœ ë³€ê²? ?? œ ?±ì˜
                    ?‘ì—…???˜í–‰?????ˆìŠµ?ˆë‹¤.
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
