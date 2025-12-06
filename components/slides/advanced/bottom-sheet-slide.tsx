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
  const [codeType, setCodeType] = useState<"react">("react");

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
              <h3 className="text-lg font-medium">?„í„° ?¤ì •</h3>
              <button
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">ê°€ê²?ë²”ìœ„</h4>
                <div className="flex gap-2">
                  <input type="range" className="w-full accent-[#49bcf3]" />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>??</span>
                  <span>??0,000</span>
                  <span>??00,000+</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">ì¹´í…Œê³ ë¦¬</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["?˜ë¥˜", "? ë°œ", "?¡ì„¸?œë¦¬", "ê°€ë°?, "ë·°í‹°", "ê°€??].map(
                    (category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category}`}
                          className="w-4 h-4 rounded accent-[#49bcf3]"
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
                  ì´ˆê¸°??                </button>
                <button
                  onClick={closeSheet}
                  className="flex-1 px-3 py-2 bg-[#49bcf3] text-white rounded-md text-sm hover:bg-[#49bcf3]/90"
                >
                  ?ìš©?˜ê¸°
                </button>
              </div>
            </div>
          </div>
        );

      case "scrollable":
        return (
          <div>
            <div className="px-4 py-3 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
              <h3 className="text-lg font-medium">?“ê? (25ê°?</h3>
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
                        <div className="w-8 h-8 rounded-full bg-[#49bcf3]/20 flex items-center justify-center text-[#49bcf3]">
                          {String.fromCharCode(65 + (idx % 26))}
                        </div>
                        <div className="ml-2">
                          <div className="font-medium text-sm">
                            ?¬ìš©??idx + 1}
                          </div>
                          <div className="text-xs text-gray-500">3????/div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm">
                      {idx % 3 === 0
                        ? "?•ë§ ? ìš©???´ìš©?…ë‹ˆ?? ê°ì‚¬?©ë‹ˆ??"
                        : idx % 3 === 1
                        ? "ì¢‹ì? ?•ë³´ ê³µìœ ?´ì£¼?”ì„œ ê°ì‚¬?©ë‹ˆ?? ë§ì? ?„ì????˜ì—ˆ?´ìš”."
                        : "???´ìš©???€??ì¢€ ???ì„¸???Œê³  ?¶ì–´?? ì¶”ê? ?¤ëª… ë¶€?ë“œë¦½ë‹ˆ??"}
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
              <h3 className="text-lg font-medium">ë¬¸ì„œ ?‘ì—…</h3>
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
                <span>ê³µìœ ?˜ê¸°</span>
              </button>
              <button
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Copy className="h-5 w-5 mr-3 text-gray-500" />
                <span>ë³µì‚¬?˜ê¸°</span>
              </button>
              <button
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Edit className="h-5 w-5 mr-3 text-[#49bcf3]" />
                <span>?¸ì§‘?˜ê¸°</span>
              </button>
              <button
                className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg"
                onClick={closeSheet}
              >
                <Download className="h-5 w-5 mr-3 text-purple-500" />
                <span>?¤ìš´ë¡œë“œ</span>
              </button>
              <div className="py-2">
                <div className="border-t"></div>
              </div>
              <button
                className="w-full flex items-center p-3 hover:bg-red-50 rounded-lg text-red-500"
                onClick={closeSheet}
              >
                <Trash className="h-5 w-5 mr-3" />
                <span>?? œ?˜ê¸°</span>
              </button>
            </div>
          </div>
        );

      default: // basic
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">ë°”í? ?œíŠ¸ ?œëª©</h3>
              <button
                onClick={closeSheet}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              ë°”í? ?œíŠ¸???”ë©´ ?„ë˜?ì„œ ?¬ë¼?¤ëŠ” ì»´í¬?ŒíŠ¸ë¡? ì¶”ê? ?•ë³´???‘ì—…??              ?œì‹œ?˜ëŠ” ???¬ìš©?©ë‹ˆ?? ?¤ì–‘???’ì´?€ ì½˜í…ì¸ ë¡œ êµ¬ì„±?????ˆìŠµ?ˆë‹¤.
            </p>

            <div className="mt-2">
              <div className="flex justify-center gap-3">
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "small"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("small")}
                >
                  ?‘ì? ?’ì´
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "medium"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("medium")}
                >
                  ì¤‘ê°„ ?’ì´
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "large"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("large")}
                >
                  ???’ì´
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-xs ${
                    sheetHeight === "full"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("full")}
                >
                  ?„ì²´ ?”ë©´
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

// ?¬ìš© ?ˆì‹œ
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
          ?œíŠ¸ ?´ê¸°
        </button>
        
        <select 
          value={height} 
          onChange={(e) => setHeight(e.target.value as any)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="small">?‘ê²Œ</option>
          <option value="medium">ì¤‘ê°„</option>
          <option value="large">?¬ê²Œ</option>
          <option value="full">?„ì²´</option>
        </select>
      </div>

      <BottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        height={height}
      >
        <div className="text-center py-8">
          <h3 className="text-lg font-semibold mb-2">ê¸°ë³¸ ë°”í? ?œíŠ¸</h3>
          <p className="text-gray-600 mb-4">
            ?´ê²ƒ?€ ê¸°ë³¸?ì¸ ë°”í? ?œíŠ¸?…ë‹ˆ??
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            ?«ê¸°
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

  // ESC ?¤ë¡œ ?«ê¸°
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // ?¤í¬ë¡?ë°©ì?
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
            aria-label="?«ê¸°"
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

// ?¬ìš© ?ˆì‹œ
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
          ëª¨ë‹¬ ?œíŠ¸ ?´ê¸°
        </button>
        
        <select 
          value={height} 
          onChange={(e) => setHeight(e.target.value as any)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="small">?‘ê²Œ</option>
          <option value="medium">ì¤‘ê°„</option>
          <option value="large">?¬ê²Œ</option>
          <option value="full">?„ì²´</option>
        </select>
      </div>

      <ModalBottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        height={height}
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">ëª¨ë‹¬ ë°”í? ?œíŠ¸</h3>
          <p className="text-gray-600 mb-4">
            ?´ê²ƒ?€ ëª¨ë‹¬ ?•íƒœ??ë°”í? ?œíŠ¸?…ë‹ˆ?? ë°°ê²½???´ë¦­?˜ê±°??ESC ?¤ë? ?ŒëŸ¬???«ì„ ???ˆìŠµ?ˆë‹¤.
          </p>
          <div className="space-y-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                ??ª© {i + 1}
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
  title = "ì¹´í…Œê³ ë¦¬ ? íƒ",
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
              aria-label="?«ê¸°"
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
              ì·¨ì†Œ
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              ? íƒ ?„ë£Œ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ?¬ìš© ?ˆì‹œ
const ScrollableBottomSheetExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    "?„ì?œí’ˆ", "?˜ë¥˜", "?„ì„œ", "?¤í¬ì¸?, "ê°€?„ì œ??, 
    "?”ì¥??, "?í’ˆ", "?„êµ¬", "ê°€êµ?, "?ë™ì°¨ìš©??,
    "ê±´ê°•?©í’ˆ", "ë°˜ë ¤?™ë¬¼?©í’ˆ", "ë¬¸êµ¬", "?Œì•…", "?í™”"
  ];

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
      >
        ì¹´í…Œê³ ë¦¬ ? íƒ <ChevronDown className="h-4 w-4" />
      </button>

      <ScrollableBottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        height="large"
        title="?í’ˆ ì¹´í…Œê³ ë¦¬"
        categories={categories}
      >
        <div className="mt-4 space-y-4">
          <h4 className="font-medium text-gray-800">ì¶”ê? ?µì…˜</h4>
          <div className="space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">?µì…˜ {i + 1}</div>
                <div className="text-sm text-gray-600">?ì„¸ ?¤ëª… ?ìŠ¤??/div>
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
                aria-label="?«ê¸°"
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
              ì·¨ì†Œ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ?¬ìš© ?ˆì‹œ
const ActionBottomSheetExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions: ActionItem[] = [
    {
      icon: Share,
      label: "ê³µìœ ?˜ê¸°",
      action: () => console.log("ê³µìœ ?˜ê¸°")
    },
    {
      icon: Copy,
      label: "ë³µì‚¬?˜ê¸°",
      action: () => console.log("ë³µì‚¬?˜ê¸°")
    },
    {
      icon: Download,
      label: "?¤ìš´ë¡œë“œ",
      action: () => console.log("?¤ìš´ë¡œë“œ")
    },
    {
      icon: Heart,
      label: "ì¢‹ì•„??,
      action: () => console.log("ì¢‹ì•„??)
    },
    {
      icon: Edit,
      label: "?¸ì§‘?˜ê¸°",
      action: () => console.log("?¸ì§‘?˜ê¸°")
    },
    {
      icon: Trash,
      label: "?? œ?˜ê¸°",
      action: () => console.log("?? œ?˜ê¸°"),
      destructive: true
    }
  ];

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        ?¡ì…˜ ?œíŠ¸ ?´ê¸°
      </button>

      <ActionBottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="ë¬¸ì„œ ?‘ì—…"
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

  return (
    <SlideLayout title="Bottom Sheet (ë°”í? ?œíŠ¸)">
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
                ë°”í? ?œíŠ¸???”ë©´ ?˜ë‹¨?ì„œ ?¬ë¼?¤ëŠ” ?¨ë„ë¡? ì£??”ë©´??? ì??˜ë©´??                ì¶”ê??ì¸ ì½˜í…ì¸ ë‚˜ ?‘ì—…???œì‹œ?©ë‹ˆ?? ?€?”ìƒ??Modal)???€?ˆìœ¼ë¡?
                ë¬¸ë§¥??? ì??˜ë©´???í˜¸?‘ìš©?????ˆëŠ” UI ?¨í„´?…ë‹ˆ??
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">ë°”í? ?œíŠ¸ ? í˜•</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>ê¸°ë³¸??(Standard)</strong>
                    <p className="text-sm text-gray-600">
                      ?¼ë°˜?ì¸ ë°”í? ?œíŠ¸ë¡? ì¶”ê? ?•ë³´???¤ì •???œì‹œ
                    </p>
                  </li>
                  <li>
                    <strong>ëª¨ë‹¬??(Modal)</strong>
                    <p className="text-sm text-gray-600">
                      ë°°ê²½???´ë‘?Œì?ë©?ì£?ì½˜í…ì¸ ì????¸í„°?™ì…˜ ì°¨ë‹¨
                    </p>
                  </li>
                  <li>
                    <strong>?•ì¥??(Expandable)</strong>
                    <p className="text-sm text-gray-600">
                      ?¬ëŸ¬ ?¨ê³„???’ì´ë¡??•ì¥ ê°€?¥í•œ ?•íƒœ
                    </p>
                  </li>
                  <li>
                    <strong>?¤í¬ë¡¤í˜• (Scrollable)</strong>
                    <p className="text-sm text-gray-600">
                      ê¸¸ì´ê°€ ê¸?ì½˜í…ì¸ ë? ?œì‹œ?˜ê¸° ?„í•´ ?´ë? ?¤í¬ë¡??œê³µ
                    </p>
                  </li>
                  <li>
                    <strong>?¡ì…˜ ?œíŠ¸ (Action Sheet)</strong>
                    <p className="text-sm text-gray-600">
                      ?¬ëŸ¬ ?‘ì—… ?µì…˜??ë¦¬ìŠ¤?¸ë¡œ ?œê³µ
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">?¬ìš© ?¬ë?</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>?„í„°ë§?ë°??•ë ¬ ?µì…˜</li>
                  <li>?“ê? ë°?ë¦¬ë·° ëª©ë¡</li>
                  <li>ì§€???ì„¸ ?•ë³´</li>
                  <li>ê³µìœ  ë©”ë‰´</li>
                  <li>?¤ì • ?¨ë„</li>
                  <li>ë¯¸ë””??ì»¨íŠ¸ë¡?/li>
                  <li>???…ë ¥</li>
                  <li>?¥ë°”êµ¬ë‹ˆ ?”ì•½</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">
                  ?¬ìš©??ê²½í—˜ ê³ ë ¤?¬í•­
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>ë¶€?œëŸ½ê³??ì—°?¤ëŸ¬??? ë‹ˆë©”ì´??/li>
                  <li>
                    ?¬ëŸ¬ ë°©ë²•?¼ë¡œ ?«ì„ ???ˆëŠ” ?µì…˜ (?¸ë“¤ ?œë˜ê·? ?¸ë? ?´ë¦­, X
                    ë²„íŠ¼)
                  </li>
                  <li>?ì ˆ???’ì´ë¡?ì¤‘ìš” ì½˜í…ì¸??œì‹œ</li>
                  <li>?í™©??ë§ëŠ” ?¤ë³´??ì²˜ë¦¬</li>
                  <li>?œìŠ¤ì²?ì§€??(?¤ì??´í”„ë¡??«ê¸°)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 border border-[#49bcf3]/20 bg-[#49bcf3]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#49bcf3]">
                êµ¬í˜„ ??              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>?°ì¹˜ ?œìŠ¤ì²??¸ì‹?¼ë¡œ ?¤ì??´í”„?˜ì—¬ ?´ê³  ?«ê¸° êµ¬í˜„</li>
                <li>ë³€??transform) ?ì„±?¼ë¡œ ?±ëŠ¥ ìµœì ?”ëœ ? ë‹ˆë©”ì´??/li>
                <li>?ë‹¨ ?¥ê·¼ ëª¨ì„œë¦¬ì? ?¸ë“¤ ë°”ë¡œ ?œê°???¸ì????¥ìƒ</li>
                <li>ëª¨ë°”???¤ë³´???œì‹œ ???ì ˆ???„ì¹˜ ì¡°ì •</li>
                <li>?¤ë‹¨ê³??’ì´(ê¸°ë³¸, ì¤‘ê°„, ìµœë?)ë¡??¬ìš©??ê²½í—˜ ê°œì„ </li>
                <li>?¤ë²„?¤í¬ë¡??™ì‘ ì²˜ë¦¬ (?œíŠ¸ ì½˜í…ì¸??ì— ?„ë‹¬?ˆì„ ??</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={getReactCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex justify-center mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "basic"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("basic")}
                >
                  ê¸°ë³¸??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "modal"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("modal")}
                >
                  ëª¨ë‹¬??                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "scrollable"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("scrollable")}
                >
                  ?¤í¬ë¡?                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetType === "actions"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetType("actions")}
                >
                  ?¡ì…˜
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "small"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("small")}
                >
                  ?‘ê²Œ
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "medium"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("medium")}
                >
                  ì¤‘ê°„
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "large"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("large")}
                >
                  ?¬ê²Œ
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    sheetHeight === "full"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSheetHeight("full")}
                >
                  ?„ì²´ ?”ë©´
                </button>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={toggleSheet}
                className="px-6 py-3 bg-[#49bcf3] text-white rounded-lg hover:bg-[#5a00cc] transition-colors"
              >
                ë°”í? ?œíŠ¸ ?´ê¸°
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-medium mb-2">?°ëª¨</h4>
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
