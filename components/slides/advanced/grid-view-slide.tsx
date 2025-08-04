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
      title: "숲 풍경",
      image: "🌲",
      category: "자연",
      likes: 24,
      isLiked: false,
    },
    {
      id: 2,
      title: "해변 일몰",
      image: "🏝️",
      category: "자연",
      likes: 18,
      isLiked: false,
    },
    {
      id: 3,
      title: "도시 풍경",
      image: "🏙️",
      category: "건축",
      likes: 15,
      isLiked: false,
    },
    {
      id: 4,
      title: "산 정상",
      image: "🏔️",
      category: "자연",
      likes: 32,
      isLiked: false,
    },
    {
      id: 5,
      title: "빌딩",
      image: "🏢",
      category: "건축",
      likes: 12,
      isLiked: false,
    },
    {
      id: 6,
      title: "꽃밭",
      image: "🌸",
      category: "자연",
      likes: 28,
      isLiked: false,
    },
    {
      id: 7,
      title: "교량",
      image: "🌉",
      category: "건축",
      likes: 19,
      isLiked: false,
    },
    {
      id: 8,
      title: "맛있는 음식",
      image: "🍕",
      category: "음식",
      likes: 21,
      isLiked: false,
    },
    {
      id: 9,
      title: "도서관",
      image: "📚",
      category: "건축",
      likes: 8,
      isLiked: false,
    },
  ]);

  const [gridSize, setGridSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [codeType, setCodeType] = useState<"react" | "flutter">("react");

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
          전체
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
            {size === 'small' ? '작게' : size === 'medium' ? '보통' : '크게'}
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
                <span className="text-xs text-gray-600">{item.likes}개</span>
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
      title: "숲 풍경",
      image: "🌲",
      category: "자연",
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

  const getFlutterCode = () => {
    return `// GridView.count를 사용한 고정 열 수 그리드
GridView.count(
  crossAxisCount: 3, // 열 수
  crossAxisSpacing: 16, // 가로 간격
  mainAxisSpacing: 16, // 세로 간격
  children: [
    // 그리드 항목들
    for (int i = 0; i < 9; i++)
      Container(
        color: Colors.green[100 * ((i % 5) + 1)],
        child: Center(
          child: Text('항목 \$i'),
        ),
      ),
  ],
)

// GridView.builder를 사용한 동적 그리드
GridView.builder(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2, // 열 수
    crossAxisSpacing: 8,
    mainAxisSpacing: 8,
  ),
  itemCount: items.length,
  itemBuilder: (context, index) {
    return Card(
      child: Column(
        children: [
          Expanded(
            child: Container(
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: NetworkImage(items[index].image),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              items[index].title,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
          ),
        ],
      ),
    );
  },
)

// GridView.extent를 사용한 고정 너비 그리드
GridView.extent(
  maxCrossAxisExtent: 200, // 최대 너비
  crossAxisSpacing: 8,
  mainAxisSpacing: 8,
  children: [
    for (var item in items)
      Card(
        child: InkWell(
          onTap: () => _handleItemTap(item),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(item.icon, size: 48),
              SizedBox(height: 8),
              Text(item.title),
              Text(
                '\${item.likes} 좋아요',
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.grey[600],
                ),
              ),
            ],
          ),
        ),
      ),
  ],
)

// 스테이거드 그리드 (flutter_staggered_grid_view 패키지)
StaggeredGrid.count(
  crossAxisCount: 4,
  mainAxisSpacing: 4,
  crossAxisSpacing: 4,
  children: [
    StaggeredGridTile.count(
      crossAxisCellCount: 2,
      mainAxisCellCount: 2,
      child: Container(
        color: Colors.green,
        child: Center(child: Text('타일 1')),
      ),
    ),
    StaggeredGridTile.count(
      crossAxisCellCount: 2,
      mainAxisCellCount: 1,
      child: Container(
        color: Colors.blue,
        child: Center(child: Text('타일 2')),
      ),
    ),
    // 더 많은 타일들...
  ],
)

// 그리드 항목 데이터 모델
class GridItem {
  final String id;
  final String title;
  final String image;
  final String category;
  int likes;
  bool isLiked;

  GridItem({
    required this.id,
    required this.title,
    required this.image,
    required this.category,
    required this.likes,
    required this.isLiked,
  });
}

// 그리드 위젯 구현
class CustomGridView extends StatefulWidget {
  final List<GridItem> items;
  final int crossAxisCount;
  final double aspectRatio;

  const CustomGridView({
    Key? key,
    required this.items,
    this.crossAxisCount = 2,
    this.aspectRatio = 1.0,
  }) : super(key: key);

  @override
  _CustomGridViewState createState() => _CustomGridViewState();
}

class _CustomGridViewState extends State<CustomGridView> {
  void _toggleLike(int index) {
    setState(() {
      widget.items[index].isLiked = !widget.items[index].isLiked;
      widget.items[index].likes += widget.items[index].isLiked ? 1 : -1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: widget.crossAxisCount,
        childAspectRatio: widget.aspectRatio,
        crossAxisSpacing: 8,
        mainAxisSpacing: 8,
      ),
      itemCount: widget.items.length,
      itemBuilder: (context, index) {
        final item = widget.items[index];
        return Card(
          elevation: 2,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                child: Container(
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: NetworkImage(item.image),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      item.title,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 14,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    SizedBox(height: 4),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          '\${item.likes} 좋아요',
                          style: TextStyle(
                            fontSize: 12,
                            color: Colors.grey[600],
                          ),
                        ),
                        GestureDetector(
                          onTap: () => _toggleLike(index),
                          child: Icon(
                            item.isLiked ? Icons.favorite : Icons.favorite_border,
                            color: item.isLiked ? Colors.red : Colors.grey,
                            size: 16,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}`;
  };

  return (
    <SlideLayout title="Grid View (그리드 뷰)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Grid View란?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Grid View는 2차원 격자 형태로 아이템들을 배치하는 레이아웃 컴포넌트입니다. 
                  이미지 갤러리, 상품 목록, 카드 레이아웃 등에 주로 사용됩니다.
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-2 text-gray-800">
                  주요 특징
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>반응형 디자인:</strong> 화면 크기에 따라 자동으로 열 수 조정</li>
                  <li>• <strong>균등한 크기:</strong> 모든 아이템이 일정한 크기를 유지</li>
                  <li>• <strong>스크롤 지원:</strong> 내용이 많을 때 자동으로 스크롤 제공</li>
                  <li>• <strong>터치 친화적:</strong> 모바일 디바이스에서 직관적인 탐색</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-2 text-gray-800">
                  사용 사례
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 사진 갤러리 및 이미지 앨범</li>
                  <li>• 상품 카탈로그 및 쇼핑몰 상품 진열</li>
                  <li>• 앱 아이콘 그리드 (홈스크린)</li>
                  <li>• 포트폴리오 및 작품 전시</li>
                  <li>• 뉴스 기사 썸네일 레이아웃</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-2 text-gray-800">
                  구현 시 고려사항
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 적절한 이미지 비율과 크기 설정</li>
                  <li>• 로딩 상태 및 플레이스홀더 제공</li>
                  <li>• 접근성을 위한 키보드 네비게이션 지원</li>
                  <li>• 성능 최적화를 위한 가상화(Virtualization) 고려</li>
                  <li>• 스크롤 위치 저장 및 무한 스크롤 기능 고려</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="flex justify-center mb-4">
              <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
                <button
                  onClick={() => setCodeType("react")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    codeType === "react"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  React + TypeScript
                </button>
                <button
                  onClick={() => setCodeType("flutter")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    codeType === "flutter"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
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
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Grid View 데모</h4>
                <div className="text-sm text-gray-500">
                  {filteredItems.length}개 항목
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
                  전체
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