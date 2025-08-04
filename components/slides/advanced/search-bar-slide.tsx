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
  const [codeType, setCodeType] = useState<"react" | "flutter">("react");

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
                      placeholder="검색어를 입력하세요"
                      className="w-full pl-3 pr-8 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6700e6]"
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
                  <span className="text-lg font-medium flex-1">앱 타이틀</span>
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
          <div className="bg-[#6700e6] text-white p-2">
            <div className="flex items-center">
              <button className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex-1 mx-2 relative bg-[#6700e6]/20 rounded-lg flex items-center">
                <Search className="h-4 w-4 absolute left-3 text-white/70" />
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
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
                  placeholder="검색어를 입력하세요"
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
              <button className="px-3 py-1 text-xs bg-[#6700e6]/10 text-[#6700e6] rounded-full flex items-center">
                <Filter className="h-3 w-3 mr-1" />
                필터
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                최신순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                인기순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                가격 낮은순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                가격 높은순
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                평점순
              </button>
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
                placeholder="검색어를 입력하세요"
                className="w-full pl-10 pr-8 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6700e6]"
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
  placeholder = "검색어를 입력하세요",
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
              aria-label="검색어 지우기"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
          
          {showMicButton && (
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="음성 검색"
            >
              <Mic className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

// 사용 예시
const BasicSearchBarExample: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("검색:", query);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">기본 검색 바</h3>
      <BasicSearchBar 
        placeholder="상품을 검색하세요"
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
  title = "검색",
  placeholder = "검색어를 입력하세요",
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
          aria-label="검색 열기"
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
        aria-label="검색 닫기"
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
                aria-label="검색어 지우기"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            )}
            
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="음성 검색"
            >
              <Mic className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// 사용 예시
const ExpandableSearchBarExample: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("검색:", query);
  };

  return (
    <div className="max-w-md mx-auto border rounded-lg overflow-hidden">
      <ExpandableSearchBar 
        title="쇼핑"
        placeholder="상품명을 입력하세요"
        onSearch={handleSearch}
      />
      <div className="p-4 text-center text-gray-500">
        검색 아이콘을 클릭하여 확장해보세요
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
  title = "검색",
  placeholder = "검색어를 입력하세요",
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
              aria-label="뒤로 가기"
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
                aria-label="검색어 지우기"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
            
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="음성 검색"
            >
              <Mic className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// 사용 예시
const PersistentSearchBarExample: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("검색:", query);
  };

  const handleBack = () => {
    console.log("뒤로 가기");
  };

  return (
    <div className="max-w-md mx-auto">
      <PersistentSearchBar 
        title="장소 검색"
        placeholder="장소나 주소를 검색하세요"
        backgroundColor="bg-blue-600"
        onSearch={handleSearch}
        onBack={handleBack}
      />
      <div className="p-6 text-center text-gray-500">
        앱 바에 통합된 영구 검색 바
      </div>
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
  placeholder = "검색어를 입력하세요",
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
                aria-label="검색어 지우기"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
            
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="음성 검색"
            >
              <Mic className="h-4 w-4 text-gray-400" />
            </button>
            
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="필터 설정"
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

// 사용 예시
const FilterSearchBarExample: React.FC = () => {
  const [filters, setFilters] = useState<FilterOption[]>([
    { id: "category", label: "카테고리", active: false },
    { id: "price", label: "가격", active: true },
    { id: "brand", label: "브랜드", active: false },
    { id: "rating", label: "평점", active: false },
    { id: "delivery", label: "배송", active: false },
  ]);

  const handleSearch = (query: string) => {
    console.log("검색:", query);
  };

  const handleFilterChange = (updatedFilters: FilterOption[]) => {
    setFilters(updatedFilters);
    console.log("필터 변경:", updatedFilters);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">필터형 검색 바</h3>
      <FilterSearchBar 
        placeholder="상품을 검색하세요"
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

  const getFlutterCode = () => {
    return `// ${
      searchBarType === "basic"
        ? "기본 검색 바"
        : searchBarType === "expandable"
        ? "확장형 검색 바"
        : searchBarType === "persistent"
        ? "영구형 검색 바"
        : "필터형 검색 바"
    } 구현 예시

import 'package:flutter/material.dart';

class ${
      searchBarType === "basic"
        ? "BasicSearchBar"
        : searchBarType === "expandable"
        ? "ExpandableSearchBar"
        : searchBarType === "persistent"
        ? "PersistentSearchBar"
        : "FilterSearchBar"
    } extends StatefulWidget {
  @override
  _${
    searchBarType === "basic"
      ? "BasicSearchBar"
      : searchBarType === "expandable"
      ? "ExpandableSearchBar"
      : searchBarType === "persistent"
      ? "PersistentSearchBar"
      : "FilterSearchBar"
  }State createState() => _${
      searchBarType === "basic"
        ? "BasicSearchBar"
        : searchBarType === "expandable"
        ? "ExpandableSearchBar"
        : searchBarType === "persistent"
        ? "PersistentSearchBar"
        : "FilterSearchBar"
    }State();
}

class _${
      searchBarType === "basic"
        ? "BasicSearchBar"
        : searchBarType === "expandable"
        ? "ExpandableSearchBar"
        : searchBarType === "persistent"
        ? "PersistentSearchBar"
        : "FilterSearchBar"
    }State extends State<${
      searchBarType === "basic"
        ? "BasicSearchBar"
        : searchBarType === "expandable"
        ? "ExpandableSearchBar"
        : searchBarType === "persistent"
        ? "PersistentSearchBar"
        : "FilterSearchBar"
    }> {
  TextEditingController _searchController = TextEditingController();
  ${searchBarType === "expandable" ? "bool _isExpanded = false;" : ""}
  ${searchBarType === "with-filters" ? "List<String> _selectedFilters = [];" : ""}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('${
          searchBarType === "basic"
            ? "기본 검색 바"
            : searchBarType === "expandable"
            ? "확장형 검색 바"
            : searchBarType === "persistent"
            ? "영구형 검색 바"
            : "필터형 검색 바"
        }'),
        backgroundColor: Color(0xFF6700E6),
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            _buildSearchBar(),
            ${searchBarType === "with-filters" ? "_buildFilterChips()," : ""}
          ],
        ),
      ),
    );
  }

  Widget _buildSearchBar() {
    return TextField(
      controller: _searchController,
      decoration: InputDecoration(
        hintText: '검색어를 입력하세요',
        prefixIcon: Icon(Icons.search),
        suffixIcon: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (_searchController.text.isNotEmpty)
              IconButton(
                icon: Icon(Icons.clear),
                onPressed: () {
                  _searchController.clear();
                  setState(() {});
                },
              ),
            IconButton(
              icon: Icon(Icons.mic),
              onPressed: () {
                // 음성 검색 기능
              },
            ),
          ],
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.0),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.0),
          borderSide: BorderSide(color: Color(0xFF6700E6), width: 2),
        ),
      ),
      onChanged: (value) {
        setState(() {});
      },
      onSubmitted: (value) {
        // 검색 실행
        print('검색: \$value');
      },
    );
  }

  ${
    searchBarType === "with-filters"
      ? `Widget _buildFilterChips() {
    List<String> filters = ['카테고리', '가격', '브랜드', '평점', '배송'];
    
    return Wrap(
      spacing: 8.0,
      children: filters.map((filter) {
        bool isSelected = _selectedFilters.contains(filter);
        return FilterChip(
          label: Text(filter),
          selected: isSelected,
          onSelected: (selected) {
            setState(() {
              if (selected) {
                _selectedFilters.add(filter);
              } else {
                _selectedFilters.remove(filter);
              }
            });
          },
          selectedColor: Color(0xFF6700E6).withOpacity(0.2),
          checkmarkColor: Color(0xFF6700E6),
        );
      }).toList(),
    );
  }`
      : ""
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }
}`;
  };

  return (
    <SlideLayout title="Search Bar (검색 바)">
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
                검색 바(Search Bar)는 사용자가 애플리케이션 내에서 특정 콘텐츠를
                검색할 수 있게 해주는 사용자 인터페이스 요소입니다. 일반적으로
                텍스트 입력 필드와 검색 아이콘으로 구성되며, 때로는 음성 검색,
                필터링 옵션 등 추가 기능을 포함할 수 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">검색 바 유형</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>기본형 (Basic)</strong>
                    <p className="text-sm text-gray-600">
                      항상 표시되는 기본적인 검색 필드
                    </p>
                  </li>
                  <li>
                    <strong>확장형 (Expandable)</strong>
                    <p className="text-sm text-gray-600">
                      아이콘을 클릭하면 확장되는 검색 바
                    </p>
                  </li>
                  <li>
                    <strong>영구형 (Persistent)</strong>
                    <p className="text-sm text-gray-600">
                      앱 바에 통합된 형태의 검색 필드
                    </p>
                  </li>
                  <li>
                    <strong>필터형 (With Filters)</strong>
                    <p className="text-sm text-gray-600">
                      추가 필터 옵션이 포함된 검색 바
                    </p>
                  </li>
                  <li>
                    <strong>서제스트형 (Suggestions)</strong>
                    <p className="text-sm text-gray-600">
                      검색어 입력 시 제안 항목을 표시
                    </p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">주요 구성 요소</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>검색 아이콘</li>
                  <li>텍스트 입력 필드</li>
                  <li>지우기 버튼</li>
                  <li>음성 검색 버튼 (선택)</li>
                  <li>필터 옵션 (선택)</li>
                  <li>추천 검색어 (선택)</li>
                  <li>최근 검색어 (선택)</li>
                </ul>
              </div>
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
            <div className="mb-6">
              <div className="flex justify-center mb-6 flex-wrap gap-2">
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "basic"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("basic")}
                >
                  기본형
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "expandable"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("expandable")}
                >
                  확장형
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "persistent"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("persistent")}
                >
                  영구형
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded-full ${
                    searchBarType === "with-filters"
                      ? "bg-[#6700e6] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSearchBarType("with-filters")}
                >
                  필터형
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">검색 바 데모</h4>
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
