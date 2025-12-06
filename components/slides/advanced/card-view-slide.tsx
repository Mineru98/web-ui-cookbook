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
      title: "ì¹´ë“œ ì»´í¬?ŒíŠ¸ ?”ì??,
      description:
        "?¬ìš©???¸í„°?˜ì´?¤ë? ?„í•œ ?¨ê³¼?ì¸ ì¹´ë“œ ì»´í¬?ŒíŠ¸ ?”ì??ë°©ë²•",
      image: "?“±",
      tags: ["UI", "?”ì??, "ì¹´ë“œ"],
    },
    {
      id: 2,
      title: "ë°˜ì‘??ì¹´ë“œ ?ˆì´?„ì›ƒ",
      description: "?¤ì–‘???”ë©´ ?¬ê¸°??ë§ì¶° ì¡°ì •?˜ëŠ” ë°˜ì‘??ì¹´ë“œ ?ˆì´?„ì›ƒ êµ¬í˜„",
      image: "?’»",
      tags: ["ë°˜ì‘??, "?ˆì´?„ì›ƒ", "CSS"],
    },
    {
      id: 3,
      title: "ì¹´ë“œ ?í˜¸?‘ìš©",
      description: "ì¹´ë“œ ì»´í¬?ŒíŠ¸???´ë¦­, ?¸ë²„ ???¬ìš©???í˜¸?‘ìš© ?¨ê³¼ ?ìš©",
      image: "?‘†",
      tags: ["?í˜¸?‘ìš©", "? ë‹ˆë©”ì´??],
    },
  ];

  return (
    <SlideLayout title="Card View (ì¹´ë“œ ë·?">
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
                ì¹´ë“œ ë·°ëŠ” ê´€???•ë³´ë¥??´ì? ì»¨í…Œ?´ë„ˆë¡? ì£¼ë¡œ ?´ë?ì§€, ?œëª©, ê°„ëµ??                ?¤ëª…ê³??¡ì…˜???¬í•¨?©ë‹ˆ?? ?•ë³´ë¥??œê°?ìœ¼ë¡?êµ¬ë¶„?˜ê³  ê·¸ë£¹?”í•˜??                ?¬ìš©?ê? ì½˜í…ì¸ ë? ?½ê²Œ ?¤ìº”?˜ê³  ?í˜¸?‘ìš©?????ˆê²Œ ?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">ì£¼ìš” êµ¬ì„± ?”ì†Œ</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>?œëª©: ê°„ê²°?˜ê³  ëª…í™•???œëª©</li>
                <li>?´ë?ì§€/?„ì´ì½? ?œê°???”ì†Œ (? íƒ ?¬í•­)</li>
                <li>?¤ëª…: ê°„ëµ???´ìš© ?”ì•½</li>
                <li>?¡ì…˜ ë²„íŠ¼: ?í˜¸?‘ìš© ?”ì†Œ</li>
                <li>ë©”í??°ì´?? ?œê·¸, ? ì§œ, ?€????/li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>?í’ˆ ëª©ë¡ (?´ì»¤ë¨¸ìŠ¤)</li>
                <li>?´ìŠ¤ ë°?ë¸”ë¡œê·?ê¸€</li>
                <li>?Œì…œ ë¯¸ë””???¬ìŠ¤??/li>
                <li>?€?œë³´???•ë³´ ?¨ë„</li>
                <li>?¬ìš©???„ë¡œ??/li>
                <li>?„ë¡œ?íŠ¸ ?ëŠ” ?œìŠ¤???œì‹œ</li>
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
      {/* ì¹´ë“œ ?´ë?ì§€ */}
      <div className="h-32 bg-gradient-to-r from-[#49bcf3]/80 to-[#49bcf3] flex items-center justify-center">
        <span className="text-4xl" role="img" aria-label="?´ë?ì§€">
          {image}
        </span>
      </div>
      
      {/* ì¹´ë“œ ?´ìš© */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        
        {/* ?œê·¸ ëª©ë¡ */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#49bcf3]/10 text-[#49bcf3] text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* ì¹´ë“œ ?¡ì…˜ */}
      <div className="bg-gray-50 border-t border-gray-200 p-3 flex justify-end">
        <button
          onClick={onAction}
          className="px-3 py-2 bg-[#49bcf3] text-white text-sm font-medium rounded-md hover:bg-[#49bcf3]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#49bcf3] focus:ring-offset-2"
          aria-label="?ì„¸??ë³´ê¸°"
        >
          ?ì„¸??ë³´ê¸°
        </button>
      </div>
    </div>
  );
};

// ?¬ìš© ?ˆì‹œ
const CardExample: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: "ì¹´ë“œ ì»´í¬?ŒíŠ¸ ?”ì??,
      description: "?¬ìš©???¸í„°?˜ì´?¤ë? ?„í•œ ?¨ê³¼?ì¸ ì¹´ë“œ ì»´í¬?ŒíŠ¸ ?”ì??ë°©ë²•",
      image: "?“±",
      tags: ["UI", "?”ì??, "ì¹´ë“œ"],
    },
    {
      id: 2,
      title: "ë°˜ì‘??ì¹´ë“œ ?ˆì´?„ì›ƒ",
      description: "?¤ì–‘???”ë©´ ?¬ê¸°??ë§ì¶° ì¡°ì •?˜ëŠ” ë°˜ì‘??ì¹´ë“œ ?ˆì´?„ì›ƒ êµ¬í˜„",
      image: "?’»",
      tags: ["ë°˜ì‘??, "?ˆì´?„ì›ƒ", "CSS"],
    },
    {
      id: 3,
      title: "ì¹´ë“œ ?í˜¸?‘ìš©",
      description: "ì¹´ë“œ ì»´í¬?ŒíŠ¸???´ë¦­, ?¸ë²„ ???¬ìš©???í˜¸?‘ìš© ?¨ê³¼ ?ìš©",
      image: "?‘†",
      tags: ["?í˜¸?‘ìš©", "? ë‹ˆë©”ì´??],
    },
  ];

  const handleCardAction = (cardId: number) => {
    console.log(\`Card \${cardId} action clicked\`);
    // ?¬ê¸°??ì¹´ë“œ ?¡ì…˜ ë¡œì§ êµ¬í˜„
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
              <h3 className="text-lg font-medium mb-4">ì¹´ë“œ ì»´í¬?ŒíŠ¸ ?ˆì‹œ</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                      selectedCard === card.id ? "ring-2 ring-[#49bcf3]" : ""
                    }`}
                    onClick={() =>
                      setSelectedCard(card.id === selectedCard ? null : card.id)
                    }
                  >
                    <div className="h-32 bg-gradient-to-r from-[#49bcf3]/80 to-[#49bcf3] flex items-center justify-center text-4xl">
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
                            className="px-2 py-0.5 bg-[#49bcf3]/10 text-[#49bcf3] text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t p-3 flex justify-end bg-gray-50">
                      <button className="px-3 py-1 bg-[#49bcf3] text-white text-sm rounded-md hover:bg-[#49bcf3]/90">
                        ?ì„¸??ë³´ê¸°
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {selectedCard && (
                <div className="mt-4 p-4 bg-[#49bcf3]/10 rounded-md">
                  <p className="text-sm text-[#49bcf3]">
                    ì¹´ë“œ #{selectedCard}ê°€ ? íƒ?˜ì—ˆ?µë‹ˆ?? ?¤ì œ
                    ? í”Œë¦¬ì??´ì…˜?ì„œ???ì„¸ ?•ë³´ ?œì‹œ, ëª¨ë‹¬ ?´ê¸°, ???˜ì´ì§€ë¡?                    ?´ë™ ?±ì˜ ?‘ì—…???˜í–‰?????ˆìŠµ?ˆë‹¤.
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
