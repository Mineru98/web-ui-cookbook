"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Filter,
  X,
  Share,
  Trash,
  Edit,
  Copy,
  Download,
  Heart,
} from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BottomSheetSlide() {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetHeight, setSheetHeight] = useState<
    "small" | "medium" | "large" | "full"
  >("medium");
  const [sheetType, setSheetType] = useState<
    "basic" | "modal" | "scrollable" | "actions"
  >("basic");
  const [codeType, setCodeType] = useState<"react" | "flutter">("react");

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  const getHeightClass = () => {
    switch (sheetHeight) {
      case "small":
        return "h-1/4";
      case "medium":
        return "h-1/2";
      case "large":
        return "h-3/4";
      case "full":
        return "h-full";
      default:
        return "h-1/2";
    }
  };

  const renderSheetContent = () => {
    switch (sheetType) {
      case "modal":
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">필터 설정</h3>
              <button
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">가격 범위</h4>
                <div className="flex gap-2">
                  <input type="range" className="w-full accent-[#6700e6]" />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>₩0</span>
                  <span>₩50,000</span>
                  <span>₩100,000+</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">카테고리</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["의류", "신발", "액세서리", "가방", "뷰티", "가전"].map(
                    (category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category}`}
                          className="w-4 h-4 rounded accent-[#6700e6]"
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm"
                        >
                          {category}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button
                  onClick={closeSheet}
                  className="flex-1 px-3 py-2 border rounded-md text-sm hover:bg-gray-50"
                >
                  초기화
                </button>
                <button
                  onClick={closeSheet}
                  className="flex-1 px-3 py-2 bg-[#6700e6] text-white rounded-md text-sm hover:bg-[#6700e6]/90"
                >
                  적용하기
                </button>
              </div>
            </div>
          </div>
        );

      case "scrollable":
        return (
          <div>
            <div className="px-4 py-3 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
              <h3 className="text-lg font-medium">댓글 (25개)</h3>
              <button
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto max-h-[calc(100%-3rem)]">
              <div className="space-y-4">
                {[...Array(12)].map((_, idx) => (
                  <div key={idx} className="border-b pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#6700e6]/20 flex items-center justify-center text-[#6700e6]">
                          {String.fromCharCode(65 + (idx % 26))}
                        </div>
                        <div className="ml-2">
                          <div className="font-medium text-sm">
                            사용자{idx + 1}
                          </div>
                          <div className="text-xs text-gray-500">3일 전</div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm">
                      {idx % 3 === 0
                        ? "정말 유용한 내용입니다. 감사합니다!"
                        : idx % 3 === 1
                        ? "좋은 정보 공유해주셔서 감사합니다. 많은 도움이 되었어요."
                        : "이 내용에 대해 좀 더 자세히 알고 싶어요. 추가 설명 부탁드립니다."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "actions":
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">문서 작업</h3>
              <button
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-2">
              <button
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Share className="h-5 w-5 mr-3 text-blue-500" />
                <span>공유하기</span>
              </button>
              <button
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Copy className="h-5 w-5 mr-3 text-gray-500" />
                <span>복사하기</span>
              </button>
              <button
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Edit className="h-5 w-5 mr-3 text-[#6700e6]" />
                <span>편집하기</span>
              </button>
              <button
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Download className="h-5 w-5 mr-3 text-purple-500" />
                <span>다운로드</span>
              </button>
              <div className="py-2">
                <div className="border-t"></div>
              </div>
              <button
                className="w-full flex items-center p-3 hover:bg-red-50 rounded-lg text-red-500"
                onClick={closeSheet}
              >
                <Trash className="h-5 w-5 mr-3" />
                <span>삭제하기</span>
              </button>
            </div>
          </div>
        );

      default: // basic
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">바텀 시트 제목</h3>
              <button
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              바텀 시트는 화면 아래에서 올라오는 컴포넌트로, 추가 정보나 작업을
              표시하는 데 사용됩니다. 다양한 높이와 콘텐츠로 구성할 수 있습니다.
            </p>

            <div className="mt-2">
              <div className="flex justify-center gap-3">
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "small"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("small")}
                >
                  작은 높이
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "medium"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("medium")}
                >
                  중간 높이
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "large"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("large")}
                >
                  큰 높이
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "full"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("full")}
                >
                  전체 화면
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  const getReactCode = () => {
    switch (sheetType) {
      case "basic":
        return `import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  height?: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  height = 'medium',
  children
}) => {
  const getHeightClass = () => {
    switch (height) {
      case 'small': return 'h-1/4';
      case 'medium': return 'h-1/2';
      case 'large': return 'h-3/4';
      case 'full': return 'h-full';
      default: return 'h-1/2';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className={\`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl transform transition-transform duration-300 ease-out \${getHeightClass()}\`}>
        {/* Handle */}
        <div className="flex justify-center pt-2 pb-4">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>
        
        {/* Content */}
        <div className="px-4 pb-4 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

// 사용 예시
const BasicBottomSheetExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<'small' | 'medium' | 'large' | 'full'>('medium');

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          시트 열기
        </button>
        
        <select 
          value={height} 
          onChange={(e) => setHeight(e.target.value as any)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="small">작게</option>
          <option value="medium">중간</option>
          <option value="large">크게</option>
          <option value="full">전체</option>
        </select>
      </div>

      <BottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        height={height}
      >
        <div className="text-center py-8">
          <h3 className="text-lg font-semibold mb-2">기본 바텀 시트</h3>
          <p className="text-gray-600 mb-4">
            이것은 기본적인 바텀 시트입니다.
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            닫기
          </button>
        </div>
      </BottomSheet>
    </div>
  );
};

export default BasicBottomSheetExample;`;

      case "modal":
        return `import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  height?: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
}

const ModalBottomSheet: React.FC<ModalBottomSheetProps> = ({
  isOpen,
  onClose,
  height = 'medium',
  children
}) => {
  const getHeightClass = () => {
    switch (height) {
      case 'small': return 'h-1/4';
      case 'medium': return 'h-1/2';
      case 'large': return 'h-3/4';
      case 'full': return 'h-full';
      default: return 'h-1/2';
    }
  };

  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Modal Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Bottom Sheet */}
      <div className={\`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl transform transition-transform duration-300 ease-out \${getHeightClass()}\`}>
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex justify-center w-full">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="닫기"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

// 사용 예시
const ModalBottomSheetExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<'small' | 'medium' | 'large' | 'full'>('medium');

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          모달 시트 열기
        </button>
        
        <select 
          value={height} 
          onChange={(e) => setHeight(e.target.value as any)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="small">작게</option>
          <option value="medium">중간</option>
          <option value="large">크게</option>
          <option value="full">전체</option>
        </select>
      </div>

      <ModalBottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        height={height}
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">모달 바텀 시트</h3>
          <p className="text-gray-600 mb-4">
            이것은 모달 형태의 바텀 시트입니다. 배경을 클릭하거나 ESC 키를 눌러서 닫을 수 있습니다.
          </p>
          <div className="space-y-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                항목 {i + 1}
              </div>
            ))}
          </div>
        </div>
      </ModalBottomSheet>
    </div>
  );
};

export default ModalBottomSheetExample;`;

      case "scrollable":
        return `import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface ScrollableBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  height?: 'small' | 'medium' | 'large' | 'full';
  children: React.ReactNode;
  title?: string;
  categories?: string[];
}

const ScrollableBottomSheet: React.FC<ScrollableBottomSheetProps> = ({
  isOpen,
  onClose,
  height = 'large',
  children,
  title = "카테고리 선택",
  categories = []
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const getHeightClass = () => {
    switch (height) {
      case 'small': return 'h-1/4';
      case 'medium': return 'h-1/2';
      case 'large': return 'h-3/4';
      case 'full': return 'h-full';
      default: return 'h-3/4';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Scrollable Bottom Sheet */}
      <div className={\`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl \${getHeightClass()}\`}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="닫기"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {/* Handle */}
          <div className="flex justify-center pt-2">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full pb-4">
          <div className="px-4 py-2">
            {categories.map((category, index) => (
              <label
                key={index}
                className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-5 h-5 text-purple-600"
                />
                <span className="ml-3 text-gray-700">{category}</span>
              </label>
            ))}
          </div>
          
          {/* Additional scrollable content */}
          <div className="px-4">
            {children}
          </div>
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              취소
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              선택 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 사용 예시
const ScrollableBottomSheetExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    "전자제품", "의류", "도서", "스포츠", "가전제품", 
    "화장품", "식품", "완구", "가구", "자동차용품",
    "건강용품", "반려동물용품", "문구", "음악", "영화"
  ];

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
      >
        카테고리 선택 <ChevronDown className="h-4 w-4" />
      </button>

      <ScrollableBottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        height="large"
        title="상품 카테고리"
        categories={categories}
      >
        <div className="mt-4 space-y-4">
          <h4 className="font-medium text-gray-800">추가 옵션</h4>
          <div className="space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">옵션 {i + 1}</div>
                <div className="text-sm text-gray-600">상세 설명 텍스트</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollableBottomSheet>
    </div>
  );
};

export default ScrollableBottomSheetExample;`;

      case "actions":
        return `import React, { useState } from 'react';
import { X, Share, Trash, Edit, Copy, Download, Heart } from 'lucide-react';

interface ActionItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  action: () => void;
  destructive?: boolean;
}

interface ActionBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  actions: ActionItem[];
}

const ActionBottomSheet: React.FC<ActionBottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  actions
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Action Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl">
        {title && (
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="닫기"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        )}
        
        {/* Handle */}
        <div className="flex justify-center pt-2 pb-4">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>
        
        {/* Actions */}
        <div className="px-4 pb-4">
          <div className="space-y-1">
            {actions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    action.action();
                    onClose();
                  }}
                  className={\`w-full flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors \${
                    action.destructive ? 'text-red-600' : 'text-gray-700'
                  }\`}
                >
                  <IconComponent className={\`h-5 w-5 mr-3 \${
                    action.destructive ? 'text-red-500' : 'text-gray-500'
                  }\`} />
                  <span className="font-medium">{action.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Cancel button */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 사용 예시
const ActionBottomSheetExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions: ActionItem[] = [
    {
      icon: Share,
      label: "공유하기",
      action: () => console.log("공유하기")
    },
    {
      icon: Copy,
      label: "복사하기",
      action: () => console.log("복사하기")
    },
    {
      icon: Download,
      label: "다운로드",
      action: () => console.log("다운로드")
    },
    {
      icon: Heart,
      label: "좋아요",
      action: () => console.log("좋아요")
    },
    {
      icon: Edit,
      label: "편집하기",
      action: () => console.log("편집하기")
    },
    {
      icon: Trash,
      label: "삭제하기",
      action: () => console.log("삭제하기"),
      destructive: true
    }
  ];

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        액션 시트 열기
      </button>

      <ActionBottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="문서 작업"
        actions={actions}
      />
    </div>
  );
};

export default ActionBottomSheetExample;`;

      default:
        return getReactCode(); // Fallback to basic
    }
  };

  const getFlutterCode = () => {
    return `import 'package:flutter/material.dart';

class BottomSheetExample extends StatefulWidget {
  @override
  _BottomSheetExampleState createState() => _BottomSheetExampleState();
}

class _BottomSheetExampleState extends State<BottomSheetExample> {
  SheetHeight _sheetHeight = SheetHeight.medium;
  SheetType _sheetType = SheetType.basic;
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Bottom Sheet 예제'),
        backgroundColor: Color(0xFF6700E6),
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            // 높이 선택
            Card(
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('높이 선택', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                    SizedBox(height: 8),
                    Wrap(
                      spacing: 8.0,
                      children: [
                        ChoiceChip(
                          label: Text('작게'),
                          selected: _sheetHeight == SheetHeight.small,
                          onSelected: (_) => setState(() => _sheetHeight = SheetHeight.small),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetHeight == SheetHeight.small ? Colors.white : null),
                        ),
                        ChoiceChip(
                          label: Text('중간'),
                          selected: _sheetHeight == SheetHeight.medium,
                          onSelected: (_) => setState(() => _sheetHeight = SheetHeight.medium),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetHeight == SheetHeight.medium ? Colors.white : null),
                        ),
                        ChoiceChip(
                          label: Text('크게'),
                          selected: _sheetHeight == SheetHeight.large,
                          onSelected: (_) => setState(() => _sheetHeight = SheetHeight.large),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetHeight == SheetHeight.large ? Colors.white : null),
                        ),
                        ChoiceChip(
                          label: Text('전체'),
                          selected: _sheetHeight == SheetHeight.full,
                          onSelected: (_) => setState(() => _sheetHeight = SheetHeight.full),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetHeight == SheetHeight.full ? Colors.white : null),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            
            SizedBox(height: 16),
            
            // 타입 선택
            Card(
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('타입 선택', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                    SizedBox(height: 8),
                    Wrap(
                      spacing: 8.0,
                      children: [
                        ChoiceChip(
                          label: Text('기본형'),
                          selected: _sheetType == SheetType.basic,
                          onSelected: (_) => setState(() => _sheetType = SheetType.basic),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetType == SheetType.basic ? Colors.white : null),
                        ),
                        ChoiceChip(
                          label: Text('모달형'),
                          selected: _sheetType == SheetType.modal,
                          onSelected: (_) => setState(() => _sheetType = SheetType.modal),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetType == SheetType.modal ? Colors.white : null),
                        ),
                        ChoiceChip(
                          label: Text('스크롤'),
                          selected: _sheetType == SheetType.scrollable,
                          onSelected: (_) => setState(() => _sheetType = SheetType.scrollable),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetType == SheetType.scrollable ? Colors.white : null),
                        ),
                        ChoiceChip(
                          label: Text('액션'),
                          selected: _sheetType == SheetType.actions,
                          onSelected: (_) => setState(() => _sheetType = SheetType.actions),
                          selectedColor: Color(0xFF6700E6),
                          labelStyle: TextStyle(color: _sheetType == SheetType.actions ? Colors.white : null),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            
            SizedBox(height: 24),
            
            // 시트 열기 버튼
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () => _showBottomSheet(context),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color(0xFF6700E6),
                  foregroundColor: Colors.white,
                  padding: EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
                child: Text('Bottom Sheet 열기', style: TextStyle(fontSize: 16)),
              ),
            ),
          ],
        ),
      ),
    );
  }
  
  void _showBottomSheet(BuildContext context) {
    switch (_sheetType) {
      case SheetType.basic:
        _showBasicBottomSheet(context);
        break;
      case SheetType.modal:
        _showModalBottomSheet(context);
        break;
      case SheetType.scrollable:
        _showScrollableBottomSheet(context);
        break;
      case SheetType.actions:
        _showActionBottomSheet(context);
        break;
    }
  }
  
  void _showBasicBottomSheet(BuildContext context) {
    showBottomSheet(
      context: context,
      builder: (context) => Container(
        height: _getSheetHeight(context),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
          boxShadow: [BoxShadow(color: Colors.black26, blurRadius: 10)],
        ),
        child: Column(
          children: [
            // 핸들
            Container(
              margin: EdgeInsets.symmetric(vertical: 8),
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey[300],
                borderRadius: BorderRadius.circular(2),
              ),
            ),
            // 내용
            Expanded(
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('기본 바텀 시트', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                    SizedBox(height: 8),
                    Text('이것은 기본적인 바텀 시트입니다.', style: TextStyle(color: Colors.grey[600])),
                    SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () => Navigator.pop(context),
                      child: Text('닫기'),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
  
  void _showModalBottomSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => Container(
        height: _getSheetHeight(context),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
        ),
        child: Column(
          children: [
            // 헤더
            Container(
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
                border: Border(bottom: BorderSide(color: Colors.grey[200]!)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('모달 바텀 시트', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.close),
                  ),
                ],
              ),
            ),
            // 내용
            Expanded(
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  children: [
                    Text('모달 형태의 바텀 시트입니다.', style: TextStyle(color: Colors.grey[600])),
                    SizedBox(height: 16),
                    Expanded(
                      child: ListView.builder(
                        itemCount: 10,
                        itemBuilder: (context, index) => ListTile(
                          title: Text('항목 \${index + 1}'),
                          leading: CircleAvatar(child: Text('\${index + 1}')),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
  
  void _showScrollableBottomSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => Container(
        height: _getSheetHeight(context),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
        ),
        child: Column(
          children: [
            // 헤더
            Container(
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
                border: Border(bottom: BorderSide(color: Colors.grey[200]!)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('카테고리 선택', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.close),
                  ),
                ],
              ),
            ),
            // 스크롤 가능한 내용
            Expanded(
              child: ListView.builder(
                itemCount: 20,
                itemBuilder: (context, index) => ListTile(
                  title: Text('카테고리 \${index + 1}'),
                  leading: Radio(
                    value: index,
                    groupValue: -1,
                    onChanged: (value) {},
                    activeColor: Color(0xFF6700E6),
                  ),
                  onTap: () => Navigator.pop(context),
                ),
              ),
            ),
            // 푸터
            Container(
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
                border: Border(top: BorderSide(color: Colors.grey[200]!)),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => Navigator.pop(context),
                      child: Text('취소'),
                    ),
                  ),
                  SizedBox(width: 8),
                  Expanded(
                    child: ElevatedButton(
                      onPressed: () => Navigator.pop(context),
                      style: ElevatedButton.styleFrom(backgroundColor: Color(0xFF6700E6)),
                      child: Text('선택 완료', style: TextStyle(color: Colors.white)),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
  
  void _showActionBottomSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (context) => Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // 핸들
            Container(
              margin: EdgeInsets.symmetric(vertical: 8),
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey[300],
                borderRadius: BorderRadius.circular(2),
              ),
            ),
            // 헤더
            Padding(
              padding: EdgeInsets.all(16),
              child: Text('문서 작업', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            ),
            // 액션 항목들
            ListTile(
              leading: Icon(Icons.share, color: Colors.blue),
              title: Text('공유하기'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.copy, color: Colors.grey),
              title: Text('복사하기'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.download, color: Colors.green),
              title: Text('다운로드'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.favorite, color: Colors.red),
              title: Text('좋아요'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.edit, color: Colors.orange),
              title: Text('편집하기'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.delete, color: Colors.red),
              title: Text('삭제하기'),
              onTap: () => Navigator.pop(context),
            ),
            // 취소 버튼
            Container(
              width: double.infinity,
              margin: EdgeInsets.all(16),
              child: OutlinedButton(
                onPressed: () => Navigator.pop(context),
                child: Text('취소'),
              ),
            ),
          ],
        ),
      ),
    );
  }
  
  double _getSheetHeight(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    switch (_sheetHeight) {
      case SheetHeight.small:
        return screenHeight * 0.25;
      case SheetHeight.medium:
        return screenHeight * 0.5;
      case SheetHeight.large:
        return screenHeight * 0.75;
      case SheetHeight.full:
        return screenHeight * 0.95;
    }
  }
}

enum SheetHeight { small, medium, large, full }
enum SheetType { basic, modal, scrollable, actions }`;
  };

  return (
    <SlideLayout title="Bottom Sheet (바텀 시트)">
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
                바텀 시트는 화면 하단에서 올라오는 패널로, 주 화면을 유지하면서
                추가적인 콘텐츠나 작업을 표시합니다. 대화상자(Modal)의 대안으로,
                문맥을 유지하면서 상호작용할 수 있는 UI 패턴입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">바텀 시트 유형</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>기본형 (Standard)</strong>
                    <p className="text-sm text-gray-600">
                      일반적인 바텀 시트로, 추가 정보나 설정을 표시
                    </p>
                  </li>
                  <li>
                    <strong>모달형 (Modal)</strong>
                    <p className="text-sm text-gray-600">
                      배경이 어두워지며 주 콘텐츠와의 인터랙션 차단
                    </p>
                  </li>
                  <li>
                    <strong>확장형 (Expandable)</strong>
                    <p className="text-sm text-gray-600">
                      여러 단계의 높이로 확장 가능한 형태
                    </p>
                  </li>
                  <li>
                    <strong>스크롤형 (Scrollable)</strong>
                    <p className="text-sm text-gray-600">
                      길이가 긴 콘텐츠를 표시하기 위해 내부 스크롤 제공
                    </p>
                  </li>
                  <li>
                    <strong>액션 시트 (Action Sheet)</strong>
                    <p className="text-sm text-gray-600">
                      여러 작업 옵션을 리스트로 제공
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">사용 사례</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>필터링 및 정렬 옵션</li>
                  <li>댓글 및 리뷰 목록</li>
                  <li>지도 상세 정보</li>
                  <li>공유 메뉴</li>
                  <li>설정 패널</li>
                  <li>미디어 컨트롤</li>
                  <li>폼 입력</li>
                  <li>장바구니 요약</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">
                  사용자 경험 고려사항
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>부드럽고 자연스러운 애니메이션</li>
                  <li>
                    여러 방법으로 닫을 수 있는 옵션 (핸들 드래그, 외부 클릭, X
                    버튼)
                  </li>
                  <li>적절한 높이로 중요 콘텐츠 표시</li>
                  <li>상황에 맞는 키보드 처리</li>
                  <li>제스처 지원 (스와이프로 닫기)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#6700e6]/20 bg-[#6700e6]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#6700e6]">
                구현 팁
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>터치 제스처 인식으로 스와이프하여 열고 닫기 구현</li>
                <li>변환(transform) 속성으로 성능 최적화된 애니메이션</li>
                <li>상단 둥근 모서리와 핸들 바로 시각적 인지성 향상</li>
                <li>모바일 키보드 표시 시 적절한 위치 조정</li>
                <li>다단계 높이(기본, 중간, 최대)로 사용자 경험 개선</li>
                <li>오버스크롤 동작 처리 (시트 콘텐츠 끝에 도달했을 때)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="flex justify-center mb-4">
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded text-sm ${
                    codeType === "react"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setCodeType("react")}
                >
                  React + TypeScript
                </button>
                <button
                  className={`px-4 py-2 rounded text-sm ${
                    codeType === "flutter"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setCodeType("flutter")}
                >
                  Flutter + Dart
                </button>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language={codeType === "react" ? "typescript" : "dart"}
                code={codeType === "react" ? getReactCode() : getFlutterCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex justify-center mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "basic"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("basic")}
                >
                  기본형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "modal"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("modal")}
                >
                  모달형
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "scrollable"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("scrollable")}
                >
                  스크롤
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "actions"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("actions")}
                >
                  액션
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "small"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("small")}
                >
                  작게
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "medium"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("medium")}
                >
                  중간
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "large"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("large")}
                >
                  크게
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "full"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("full")}
                >
                  전체 화면
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={toggleSheet}
                className="px-6 py-3 bg-[#6700e6] text-white rounded-lg hover:bg-[#5a00cc] transition-colors"
              >
                바텀 시트 열기
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-medium mb-2">데모</h4>
              <div className="h-64 bg-white rounded border relative overflow-hidden">
                {renderSheetContent()}
              </div>
            </div>

            {/* Actual Bottom Sheet */}
            {isOpen && (
              <div className="fixed inset-0 z-50">
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                  onClick={closeSheet}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl transform transition-transform duration-300 ease-out ${
                    isOpen ? "translate-y-0" : "translate-y-full"
                  } ${getHeightClass()}`}
                >
                  <div className="flex justify-center pt-2 pb-4">
                    <div className="w-10 h-1 bg-gray-300 rounded-full" />
                  </div>
                  {renderSheetContent()}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
