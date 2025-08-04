"use client";

import SlideLayout from "../slide-layout";
import { useState } from "react";
import { PrismCode } from "../../ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function CardViewSlide() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards: Card[] = [
    {
      id: 1,
      title: "카드 컴포넌트 디자인",
      description:
        "사용자 인터페이스를 위한 효과적인 카드 컴포넌트 디자인 방법",
      image: "📱",
      tags: ["UI", "디자인", "카드"],
    },
    {
      id: 2,
      title: "반응형 카드 레이아웃",
      description: "다양한 화면 크기에 맞춰 조정되는 반응형 카드 레이아웃 구현",
      image: "💻",
      tags: ["반응형", "레이아웃", "CSS"],
    },
    {
      id: 3,
      title: "카드 상호작용",
      description: "카드 컴포넌트의 클릭, 호버 등 사용자 상호작용 효과 적용",
      image: "👆",
      tags: ["상호작용", "애니메이션"],
    },
  ];

  return (
    <SlideLayout title="Card View (카드 뷰)">
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
                카드 뷰는 관련 정보를 담은 컨테이너로, 주로 이미지, 제목, 간략한
                설명과 액션을 포함합니다. 정보를 시각적으로 구분하고 그룹화하여
                사용자가 콘텐츠를 쉽게 스캔하고 상호작용할 수 있게 합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">주요 구성 요소</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>제목: 간결하고 명확한 제목</li>
                <li>이미지/아이콘: 시각적 요소 (선택 사항)</li>
                <li>설명: 간략한 내용 요약</li>
                <li>액션 버튼: 상호작용 요소</li>
                <li>메타데이터: 태그, 날짜, 저자 등</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>상품 목록 (이커머스)</li>
                <li>뉴스 및 블로그 글</li>
                <li>소셜 미디어 포스트</li>
                <li>대시보드 정보 패널</li>
                <li>사용자 프로필</li>
                <li>프로젝트 또는 태스크 표시</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onAction?: () => void;
}

const CardComponent: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  onAction 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      {/* 카드 이미지 */}
      <div className="h-32 bg-gradient-to-r from-[#6700e6]/80 to-[#6700e6] flex items-center justify-center">
        <span className="text-4xl" role="img" aria-label="이미지">
          {image}
        </span>
      </div>
      
      {/* 카드 내용 */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        
        {/* 태그 목록 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#6700e6]/10 text-[#6700e6] text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* 카드 액션 */}
      <div className="bg-gray-50 border-t border-gray-200 p-3 flex justify-end">
        <button
          onClick={onAction}
          className="px-3 py-2 bg-[#6700e6] text-white text-sm font-medium rounded-md hover:bg-[#6700e6]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6700e6] focus:ring-offset-2"
          aria-label="자세히 보기"
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
};

// 사용 예시
const CardExample: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: "카드 컴포넌트 디자인",
      description: "사용자 인터페이스를 위한 효과적인 카드 컴포넌트 디자인 방법",
      image: "📱",
      tags: ["UI", "디자인", "카드"],
    },
    {
      id: 2,
      title: "반응형 카드 레이아웃",
      description: "다양한 화면 크기에 맞춰 조정되는 반응형 카드 레이아웃 구현",
      image: "💻",
      tags: ["반응형", "레이아웃", "CSS"],
    },
    {
      id: 3,
      title: "카드 상호작용",
      description: "카드 컴포넌트의 클릭, 호버 등 사용자 상호작용 효과 적용",
      image: "👆",
      tags: ["상호작용", "애니메이션"],
    },
  ];

  const handleCardAction = (cardId: number) => {
    console.log(\`Card \${cardId} action clicked\`);
    // 여기에 카드 액션 로직 구현
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <CardComponent
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          tags={card.tags}
          onAction={() => handleCardAction(card.id)}
        />
      ))}
    </div>
  );
};

export default CardExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-medium mb-4">카드 컴포넌트 예시</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                      selectedCard === card.id ? "ring-2 ring-[#6700e6]" : ""
                    }`}
                    onClick={() =>
                      setSelectedCard(card.id === selectedCard ? null : card.id)
                    }
                  >
                    <div className="h-32 bg-gradient-to-r from-[#6700e6]/80 to-[#6700e6] flex items-center justify-center text-4xl">
                      {card.image}
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-lg mb-2">{card.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {card.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-[#6700e6]/10 text-[#6700e6] text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t p-3 flex justify-end bg-gray-50">
                      <button className="px-3 py-1 bg-[#6700e6] text-white text-sm rounded-md hover:bg-[#6700e6]/90">
                        자세히 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {selectedCard && (
                <div className="mt-4 p-4 bg-[#6700e6]/10 rounded-md">
                  <p className="text-sm text-[#6700e6]">
                    카드 #{selectedCard}가 선택되었습니다. 실제
                    애플리케이션에서는 상세 정보 표시, 모달 열기, 새 페이지로
                    이동 등의 작업이 수행될 수 있습니다.
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
