"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import { Heart } from "lucide-react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GridItem {
  id: number;
  title: string;
  image: string;
  category: string;
  likes: number;
  isLiked: boolean;
}

export default function GridViewSlide() {
  const [items, setItems] = useState<GridItem[]>([
    {
      id: 1,
      title: "???ê²½",
      image: "?Œ²",
      category: "?ì—°",
      likes: 24,
      isLiked: false,
    },
    {
      id: 2,
      title: "?´ë? ?¼ëª°",
      image: "?ï¸?,
      category: "?ì—°",
      likes: 18,
      isLiked: false,
    },
    {
      id: 3,
      title: "?„ì‹œ ?ê²½",
      image: "?™ï¸?,
      category: "ê±´ì¶•",
      likes: 15,
      isLiked: false,
    },
    {
      id: 4,
      title: "???•ìƒ",
      image: "?”ï¸?,
      category: "?ì—°",
      likes: 32,
      isLiked: false,
    },
    {
      id: 5,
      title: "ë¹Œë”©",
      image: "?¢",
      category: "ê±´ì¶•",
      likes: 12,
      isLiked: false,
    },
    {
      id: 6,
      title: "ê½ƒë°­",
      image: "?Œ¸",
      category: "?ì—°",
      likes: 28,
      isLiked: false,
    },
    {
      id: 7,
      title: "êµëŸ‰",
      image: "?Œ‰",
      category: "ê±´ì¶•",
      likes: 19,
      isLiked: false,
    },
    {
      id: 8,
      title: "ë§›ìˆ???Œì‹",
      image: "?•",
      category: "?Œì‹",
      likes: 21,
      isLiked: false,
    },
    {
      id: 9,
      title: "?„ì„œê´€",
      image: "?“š",
      category: "ê±´ì¶•",
      likes: 8,
      isLiked: false,
    },
  ]);

  const [gridSize, setGridSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [codeType, setCodeType] = useState<"react">("react");

  const handleLike = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isLiked: !item.isLiked,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1,
          };
        }
        return item;
      })
    );
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  const categories = Array.from(new Set(items.map((item) => item.category)));

  const getReactCode = () => {
    return `import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface GridItem {
  id: number;
  title: string;
  image: string;
  category: string;
  likes: number;
  isLiked: boolean;
}

interface GridViewProps {
  items: GridItem[];
  gridSize?: 'small' | 'medium' | 'large';
  onLike?: (id: number) => void;
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
}

const GridView: React.FC<GridViewProps> = ({
  items,
  gridSize = 'medium',
  onLike,
  selectedCategory,
  onCategoryChange
}) => {
  const getGridClasses = () => {
    switch (gridSize) {
      case 'small':
        return 'grid-cols-4 md:grid-cols-6 lg:grid-cols-8';
      case 'medium':
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      case 'large':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      default:
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange?.(null)}
          className={\`px-3 py-1 rounded-full text-sm font-medium transition-colors \${
            selectedCategory === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }\`}
        >
          ?„ì²´
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange?.(category)}
            className={\`px-3 py-1 rounded-full text-sm font-medium transition-colors \${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Size Controls */}
      <div className="flex gap-2">
        {(['small', 'medium', 'large'] as const).map(size => (
          <button
            key={size}
            className={\`px-3 py-1 rounded text-sm font-medium transition-colors \${
              gridSize === size
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            {size === 'small' ? '?‘ê²Œ' : size === 'medium' ? 'ë³´í†µ' : '?¬ê²Œ'}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={\`grid \${getGridClasses()} gap-4\`}>
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-4xl">
              {item.image}
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{item.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{item.likes}ê°?/span>
                <button
                  onClick={() => onLike?.(item.id)}
                  className={\`p-1 rounded-full transition-colors \${
                    item.isLiked 
                      ? 'text-red-500 hover:text-red-600' 
                      : 'text-gray-400 hover:text-gray-500'
                  }\`}
                >
                  <Heart className={\`h-4 w-4 \${item.isLiked ? 'fill-current' : ''}\`} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Usage Example
const App: React.FC = () => {
  const [items, setItems] = useState<GridItem[]>([
    {
      id: 1,
      title: "???ê²½",
      image: "?Œ²",
      category: "?ì—°",
      likes: 24,
      isLiked: false,
    },
    // ... more items
  ]);

  const [gridSize, setGridSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleLike = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isLiked: !item.isLiked,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <GridView
      items={items}
      gridSize={gridSize}
      onLike={handleLike}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />
  );
};

export default App;`;
  };


  return (
    <SlideLayout title="Grid View (ê·¸ë¦¬??ë·?">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Grid View?€?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Grid View??2ì°¨ì› ê²©ì ?•íƒœë¡??„ì´?œë“¤??ë°°ì¹˜?˜ëŠ” ?ˆì´?„ì›ƒ ì»´í¬?ŒíŠ¸?…ë‹ˆ?? 
                  ?´ë?ì§€ ê°¤ëŸ¬ë¦? ?í’ˆ ëª©ë¡, ì¹´ë“œ ?ˆì´?„ì›ƒ ?±ì— ì£¼ë¡œ ?¬ìš©?©ë‹ˆ??
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-2 text-gray-800">
                  ì£¼ìš” ?¹ì§•
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>??<strong>ë°˜ì‘???”ì??</strong> ?”ë©´ ?¬ê¸°???°ë¼ ?ë™?¼ë¡œ ????ì¡°ì •</li>
                  <li>??<strong>ê· ë“±???¬ê¸°:</strong> ëª¨ë“  ?„ì´?œì´ ?¼ì •???¬ê¸°ë¥?? ì?</li>
                  <li>??<strong>?¤í¬ë¡?ì§€??</strong> ?´ìš©??ë§ì„ ???ë™?¼ë¡œ ?¤í¬ë¡??œê³µ</li>
                  <li>??<strong>?°ì¹˜ ì¹œí™”??</strong> ëª¨ë°”???”ë°”?´ìŠ¤?ì„œ ì§ê??ì¸ ?ìƒ‰</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-2 text-gray-800">
                  ?¬ìš© ?¬ë?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>???¬ì§„ ê°¤ëŸ¬ë¦?ë°??´ë?ì§€ ?¨ë²”</li>
                  <li>???í’ˆ ì¹´íƒˆë¡œê·¸ ë°??¼í•‘ëª??í’ˆ ì§„ì—´</li>
                  <li>?????„ì´ì½?ê·¸ë¦¬??(?ˆìŠ¤?¬ë¦°)</li>
                  <li>???¬íŠ¸?´ë¦¬??ë°??‘í’ˆ ?„ì‹œ</li>
                  <li>???´ìŠ¤ ê¸°ì‚¬ ?¸ë„¤???ˆì´?„ì›ƒ</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-2 text-gray-800">
                  êµ¬í˜„ ??ê³ ë ¤?¬í•­
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>???ì ˆ???´ë?ì§€ ë¹„ìœ¨ê³??¬ê¸° ?¤ì •</li>
                  <li>??ë¡œë”© ?íƒœ ë°??Œë ˆ?´ìŠ¤?€???œê³µ</li>
                  <li>???‘ê·¼?±ì„ ?„í•œ ?¤ë³´???¤ë¹„ê²Œì´??ì§€??/li>
                  <li>???±ëŠ¥ ìµœì ?”ë? ?„í•œ ê°€?í™”(Virtualization) ê³ ë ¤</li>
                  <li>???¤í¬ë¡??„ì¹˜ ?€??ë°?ë¬´í•œ ?¤í¬ë¡?ê¸°ëŠ¥ ê³ ë ¤</li>
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
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Grid View ?°ëª¨</h4>
                <div className="text-sm text-gray-500">
                  {filteredItems.length}ê°???ª©
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === null
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedCategory(null)}
                >
                  ?„ì²´
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Grid Size Controls */}
              <div className="flex gap-2 mb-6">
                <button
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    gridSize === "small"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setGridSize("small")}
                >
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-current"></div>
                    ))}
                  </div>
                </button>
                <button
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    gridSize === "medium"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setGridSize("medium")}
                >
                  <div className="grid grid-cols-2 gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-current"></div>
                    ))}
                  </div>
                </button>
                <button
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    gridSize === "large"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setGridSize("large")}
                >
                  <div className="grid grid-cols-1 gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </button>
              </div>

              {/* Grid */}
              <div
                className={`grid gap-4 ${
                  gridSize === "small"
                    ? "grid-cols-4"
                    : gridSize === "medium"
                    ? "grid-cols-3"
                    : "grid-cols-2"
                }`}
              >
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="aspect-square bg-gray-100 flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="p-2">
                      <h4
                        className={`font-medium text-sm mb-1 text-gray-800 ${
                          gridSize === "small" ? "text-xs" : "text-sm"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {item.category}
                        </span>
                        <button
                          onClick={() => handleLike(item.id)}
                          className={`flex items-center gap-1 text-xs transition-colors ${
                            item.isLiked
                              ? "text-red-500"
                              : "text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              item.isLiked ? "fill-current" : ""
                            }`}
                          />
                          <span className="text-xs">{item.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}