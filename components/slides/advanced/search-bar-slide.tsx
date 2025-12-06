"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import {
  Search,
  X,
  Mic,
  ArrowLeft,
  Filter,
  Camera,
  Sliders,
} from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SearchBarSlide() {
  const [searchBarType, setSearchBarType] = useState<
    "basic" | "expandable" | "persistent" | "with-filters"
  >("basic");
  const [searchText, setSearchText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [codeType, setCodeType] = useState<"react">("react");

  const handleClear = () => {
    setSearchText("");
  };

  const renderSearchBar = () => {
    switch (searchBarType) {
      case "expandable":
        return (
          <div className="bg-white border-b p-2">
            <div className="flex items-center">
              {isExpanded ? (
                <>
                  <button
                    className="p-2 text-gray-500"
                    onClick={() => setIsExpanded(false)}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??
                      className="w-full pl-3 pr-8 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#49bcf3]"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                      <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={handleClear}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <button className="p-2 text-gray-500 ml-1">
                    <Mic className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <>
                  <span className="text-lg font-medium flex-1">???€?´í?</span>
                  <button
                    className="p-2 text-gray-500"
                    onClick={() => setIsExpanded(true)}
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        );

      case "persistent":
        return (
          <div className="bg-[#49bcf3] text-white p-2">
            <div className="flex items-center">
              <button className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex-1 mx-2 relative bg-[#49bcf3]/20 rounded-lg flex items-center">
                <Search className="h-4 w-4 absolute left-3 text-white/70" />
                <input
                  type="text"
                  placeholder="ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??
                  className="w-full pl-9 pr-8 py-2 bg-transparent text-white placeholder-white/70 border-0 focus:outline-none focus:ring-0"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText && (
                  <button
                    className="absolute right-2 text-white/70"
                    onClick={handleClear}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <button className="p-2">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>
        );

      case "with-filters":
        return (
          <div className="bg-white border-b">
            <div className="p-2">
              <div className="flex items-center relative bg-gray-100 rounded-lg">
                <Search className="h-4 w-4 absolute left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??
                  className="w-full pl-9 pr-8 py-2.5 bg-transparent border-0 focus:outline-none focus:ring-0"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText ? (
                  <button
                    className="absolute right-2 text-gray-400"
                    onClick={handleClear}
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : (
                  <button className="absolute right-2 text-gray-400">
                    <Mic className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="py-1 px-2 flex items-center overflow-x-auto gap-2 whitespace-nowrap">
              <button className="px-3 py-1 text-xs bg-[#49bcf3]/10 text-[#49bcf3] rounded-full flex items-center">
                <Filter className="h-3 w-3 mr-1" />
                ?„í„°
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                ìµœì‹ ??              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                ?¸ê¸°??              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                ê°€ê²??????              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                ê°€ê²??’ì???              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                ?‰ì ??              </button>
            </div>
          </div>
        );

      default: // basic
        return (
          <div className="bg-white border-b p-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??
                className="w-full pl-10 pr-8 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#49bcf3]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                {searchText && (
                  <button
                    className="h-full px-2 text-gray-400"
                    onClick={handleClear}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button className="h-full px-3 text-gray-500">
                  <Mic className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  const getReactCode = () => {
    switch (searchBarType) {
      case "basic":
        return `import React, { useState } from 'react';
import { Search, X, Mic } from 'lucide-react';

interface BasicSearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  showMicButton?: boolean;
  className?: string;
}

const BasicSearchBar: React.FC<BasicSearchBarProps> = ({
  placeholder = "ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??,
  onSearch,
  showMicButton = true,
  className = ""
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit} className={\`relative \${className}\`}>
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-5 w-5 text-gray-400" />
        
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
        
        <div className="absolute right-2 flex items-center gap-1">
          {searchText && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="ê²€?‰ì–´ ì§€?°ê¸°"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
          
          {showMicButton && (
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="?Œì„± ê²€??
            >
              <Mic className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

// ?¬ìš© ?ˆì‹œ
const BasicSearchBarExample: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("ê²€??", query);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">ê¸°ë³¸ ê²€??ë°?/h3>
      <BasicSearchBar 
        placeholder="?í’ˆ??ê²€?‰í•˜?¸ìš”"
        onSearch={handleSearch}
        showMicButton={true}
      />
    </div>
  );
};

export default BasicSearchBarExample;`;

      case "expandable":
        return `import React, { useState, useRef, useEffect } from 'react';
import { Search, ArrowLeft, X, Mic } from 'lucide-react';

interface ExpandableSearchBarProps {
  title?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const ExpandableSearchBar: React.FC<ExpandableSearchBarProps> = ({
  title = "ê²€??,
  placeholder = "ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??,
  onSearch,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setSearchText("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  const handleClear = () => {
    setSearchText("");
  };

  if (!isExpanded) {
    return (
      <div className={\`flex items-center justify-between p-4 border-b \${className}\`}>
        <h1 className="text-xl font-semibold">{title}</h1>
        <button
          onClick={handleExpand}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="ê²€???´ê¸°"
        >
          <Search className="h-6 w-6" />
        </button>
      </div>
    );
  }

  return (
    <div className={\`flex items-center p-4 border-b bg-white \${className}\`}>
      <button
        onClick={handleCollapse}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-2"
        aria-label="ê²€???«ê¸°"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      
      <form onSubmit={handleSubmit} className="flex-1">
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={placeholder}
            className="w-full py-2 text-lg outline-none"
          />
          
          <div className="flex items-center gap-1">
            {searchText && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="ê²€?‰ì–´ ì§€?°ê¸°"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            )}
            
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="?Œì„± ê²€??
            >
              <Mic className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// ?¬ìš© ?ˆì‹œ
const ExpandableSearchBarExample: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("ê²€??", query);
  };

  return (
    <div className="max-w-md mx-auto border rounded-lg overflow-hidden">
      <ExpandableSearchBar 
        title="?¼í•‘"
        placeholder="?í’ˆëª…ì„ ?…ë ¥?˜ì„¸??
        onSearch={handleSearch}
      />
      <div className="p-4 text-center text-gray-500">
        ê²€???„ì´ì½˜ì„ ?´ë¦­?˜ì—¬ ?•ì¥?´ë³´?¸ìš”
      </div>
    </div>
  );
};

export default ExpandableSearchBarExample;`;

      case "persistent":
        return `import React, { useState } from 'react';
import { Search, X, Mic, ArrowLeft } from 'lucide-react';

interface PersistentSearchBarProps {
  title?: string;
  placeholder?: string;
  backgroundColor?: string;
  textColor?: string;
  onSearch?: (query: string) => void;
  onBack?: () => void;
  className?: string;
}

const PersistentSearchBar: React.FC<PersistentSearchBarProps> = ({
  title = "ê²€??,
  placeholder = "ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??,
  backgroundColor = "bg-green-600",
  textColor = "text-white",
  onSearch,
  onBack,
  className = ""
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <div className={\`\${backgroundColor} \${textColor} p-4 \${className}\`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {onBack && (
            <button
              onClick={onBack}
              className="p-1 hover:bg-white/10 rounded-full transition-colors mr-3"
              aria-label="?¤ë¡œ ê°€ê¸?
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          )}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </div>
      
      {/* Search Bar */}
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center bg-white rounded-lg">
          <Search className="absolute left-3 h-5 w-5 text-gray-400" />
          
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-20 py-3 text-gray-900 rounded-lg outline-none"
          />
          
          <div className="absolute right-2 flex items-center gap-1">
            {searchText && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="ê²€?‰ì–´ ì§€?°ê¸°"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
            
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="?Œì„± ê²€??
            >
              <Mic className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// ?¬ìš© ?ˆì‹œ
const PersistentSearchBarExample: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("ê²€??", query);
  };

  const handleBack = () => {
    console.log("?¤ë¡œ ê°€ê¸?);
  };

  return (
    <div className="max-w-md mx-auto">
      <PersistentSearchBar 
        title="?¥ì†Œ ê²€??
        placeholder="?¥ì†Œ??ì£¼ì†Œë¥?ê²€?‰í•˜?¸ìš”"
        backgroundColor="bg-blue-600"
        onSearch={handleSearch}
        onBack={handleBack}
      />
      <div className="p-6 text-center text-gray-500">
        ??ë°”ì— ?µí•©???êµ¬ ê²€??ë°?      </div>
    </div>
  );
};

export default PersistentSearchBarExample;`;

      case "with-filters":
        return `import React, { useState } from 'react';
import { Search, X, Mic, Filter, Sliders } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  active: boolean;
}

interface FilterSearchBarProps {
  placeholder?: string;
  filters?: FilterOption[];
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: FilterOption[]) => void;
  className?: string;
}

const FilterSearchBar: React.FC<FilterSearchBarProps> = ({
  placeholder = "ê²€?‰ì–´ë¥??…ë ¥?˜ì„¸??,
  filters = [],
  onSearch,
  onFilterChange,
  className = ""
}) => {
  const [searchText, setSearchText] = useState("");
  const [localFilters, setLocalFilters] = useState<FilterOption[]>(filters);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  const handleClear = () => {
    setSearchText("");
  };

  const handleFilterToggle = (filterId: string) => {
    const updatedFilters = localFilters.map(filter =>
      filter.id === filterId ? { ...filter, active: !filter.active } : filter
    );
    setLocalFilters(updatedFilters);
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  return (
    <div className={\`\${className}\`}>
      {/* Search Input */}
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center mb-4">
          <Search className="absolute left-3 h-5 w-5 text-gray-400" />
          
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
          
          <div className="absolute right-2 flex items-center gap-1">
            {searchText && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="ê²€?‰ì–´ ì§€?°ê¸°"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
            
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="?Œì„± ê²€??
            >
              <Mic className="h-4 w-4 text-gray-400" />
            </button>
            
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="?„í„° ?¤ì •"
            >
              <Sliders className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </form>
      
      {/* Filter Chips */}
      {localFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {localFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterToggle(filter.id)}
              className={\`px-3 py-1.5 text-sm rounded-full border transition-colors \${
                filter.active
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }\`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ?¬ìš© ?ˆì‹œ
const FilterSearchBarExample: React.FC = () => {
  const [filters, setFilters] = useState<FilterOption[]>([
    { id: "category", label: "ì¹´í…Œê³ ë¦¬", active: false },
    { id: "price", label: "ê°€ê²?, active: true },
    { id: "brand", label: "ë¸Œëœ??, active: false },
    { id: "rating", label: "?‰ì ", active: false },
    { id: "delivery", label: "ë°°ì†¡", active: false },
  ]);

  const handleSearch = (query: string) => {
    console.log("ê²€??", query);
  };

  const handleFilterChange = (updatedFilters: FilterOption[]) => {
    setFilters(updatedFilters);
    console.log("?„í„° ë³€ê²?", updatedFilters);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">?„í„°??ê²€??ë°?/h3>
      <FilterSearchBar 
        placeholder="?í’ˆ??ê²€?‰í•˜?¸ìš”"
        filters={filters}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterSearchBarExample;`;

      default:
        return getReactCode(); // Fallback to basic
    }
  };


  return (
    <SlideLayout title="Search Bar (ê²€??ë°?">
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
                ê²€??ë°?Search Bar)???¬ìš©?ê? ? í”Œë¦¬ì??´ì…˜ ?´ì—???¹ì • ì½˜í…ì¸ ë?
                ê²€?‰í•  ???ˆê²Œ ?´ì£¼???¬ìš©???¸í„°?˜ì´???”ì†Œ?…ë‹ˆ?? ?¼ë°˜?ìœ¼ë¡?                ?ìŠ¤???…ë ¥ ?„ë“œ?€ ê²€???„ì´ì½˜ìœ¼ë¡?êµ¬ì„±?˜ë©°, ?Œë¡œ???Œì„± ê²€??
                ?„í„°ë§??µì…˜ ??ì¶”ê? ê¸°ëŠ¥???¬í•¨?????ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">ê²€??ë°?? í˜•</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>ê¸°ë³¸??(Basic)</strong>
                    <p className="text-sm text-gray-600">
                      ??ƒ ?œì‹œ?˜ëŠ” ê¸°ë³¸?ì¸ ê²€???„ë“œ
                    </p>
                  </li>
                  <li>
                    <strong>?•ì¥??(Expandable)</strong>
                    <p className="text-sm text-gray-600">
                      ?„ì´ì½˜ì„ ?´ë¦­?˜ë©´ ?•ì¥?˜ëŠ” ê²€??ë°?                    </p>
                  </li>
                  <li>
                    <strong>?êµ¬??(Persistent)</strong>
                    <p className="text-sm text-gray-600">
                      ??ë°”ì— ?µí•©???•íƒœ??ê²€???„ë“œ
                    </p>
                  </li>
                  <li>
                    <strong>?„í„°??(With Filters)</strong>
                    <p className="text-sm text-gray-600">
                      ì¶”ê? ?„í„° ?µì…˜???¬í•¨??ê²€??ë°?                    </p>
                  </li>
                  <li>
                    <strong>?œì œ?¤íŠ¸??(Suggestions)</strong>
                    <p className="text-sm text-gray-600">
                      ê²€?‰ì–´ ?…ë ¥ ???œì•ˆ ??ª©???œì‹œ
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">ì£¼ìš” êµ¬ì„± ?”ì†Œ</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>ê²€???„ì´ì½?/li>
                  <li>?ìŠ¤???…ë ¥ ?„ë“œ</li>
                  <li>ì§€?°ê¸° ë²„íŠ¼</li>
                  <li>?Œì„± ê²€??ë²„íŠ¼ (? íƒ)</li>
                  <li>?„í„° ?µì…˜ (? íƒ)</li>
                  <li>ì¶”ì²œ ê²€?‰ì–´ (? íƒ)</li>
                  <li>ìµœê·¼ ê²€?‰ì–´ (? íƒ)</li>
                </ul>
              </div>
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
            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "basic"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("basic")}
                >
                  ê¸°ë³¸??                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "expandable"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("expandable")}
                >
                  ?•ì¥??                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "persistent"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("persistent")}
                >
                  ?êµ¬??                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "with-filters"
                      ? "bg-[#49bcf3] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("with-filters")}
                >
                  ?„í„°??                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">ê²€??ë°??°ëª¨</h4>
              <div className="bg-white p-4 rounded border">
                {renderSearchBar()}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
