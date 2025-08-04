"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Heart, ThumbsUp, Star, Bell, Home, Settings } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function IconButtonSlide() {
  const [selectedIcon, setSelectedIcon] = useState<string>("heart")

  const getIcon = () => {
    switch (selectedIcon) {
      case "heart":
        return <Heart className="h-4 w-4" />
      case "thumbsUp":
        return <ThumbsUp className="h-4 w-4" />
      case "star":
        return <Star className="h-4 w-4" />
      case "bell":
        return <Bell className="h-4 w-4" />
      case "home":
        return <Home className="h-4 w-4" />
      case "settings":
        return <Settings className="h-4 w-4" />
      default:
        return <Heart className="h-4 w-4" />
    }
  }

  return (
    <SlideLayout title="Icon Button">
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
                Icon Button은 텍스트 대신 아이콘을 사용하는 버튼입니다. 공간을 절약하면서도 직관적인 의미를 전달할 수
                있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>툴바 (Toolbar)에서의 액션 버튼</li>
                <li>소셜 미디어 상호작용 (좋아요, 공유 등)</li>
                <li>컴팩트한 UI가 필요한 모바일 인터페이스</li>
                <li>내비게이션 컨트롤 (뒤로 가기, 홈 등)</li>
                <li>상태 토글 (음소거/음소거 해제, 북마크 등)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Star, 
  Bell, 
  Settings, 
  ThumbsUp, 
  Download,
  Share,
  Plus,
  Trash2,
  Edit
} from 'lucide-react';

const IconButtonExample: React.FC = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-6">
      {/* 기본 아이콘 버튼 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">기본 아이콘 버튼</h3>
        <Button size="icon" onClick={() => {}}>
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* 다양한 스타일의 아이콘 버튼 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">다양한 스타일</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => {}}>
            <Star className="h-4 w-4" />
          </Button>
          
          <Button variant="secondary" size="icon" onClick={() => {}}>
            <Bell className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => {}}>
            <Settings className="h-4 w-4" />
          </Button>
          
          <Button variant="destructive" size="icon" onClick={() => {}}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 접근성을 위한 aria-label 추가 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">접근성 고려</h3>
        <Button 
          size="icon" 
          onClick={() => {}} 
          aria-label="설정"
          title="설정"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* 이벤트 핸들러가 있는 아이콘 버튼 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">상태 변화 버튼</h3>
        <Button 
          variant={liked ? "default" : "outline"}
          size="icon"
          onClick={() => {
            setLiked(!liked);
            console.log(liked ? "좋아요 취소" : "좋아요");
          }}
          className={liked ? "bg-red-500 hover:bg-red-600" : ""}
        >
          <ThumbsUp className={\`h-4 w-4 \${liked ? 'fill-current' : ''}\`} />
        </Button>
      </div>

      {/* 다양한 크기의 아이콘 버튼 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">다양한 크기</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Plus className="h-3 w-3" />
          </Button>
          
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" className="h-12 w-12">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* 실용적인 아이콘 버튼들 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">실용적인 예시</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" aria-label="다운로드">
            <Download className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" aria-label="공유">
            <Share className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" aria-label="편집">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IconButtonExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">아이콘 선택</label>
                <select
                  value={selectedIcon}
                  onChange={(e) => setSelectedIcon(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="heart">Heart</option>
                  <option value="thumbsUp">Thumbs Up</option>
                  <option value="star">Star</option>
                  <option value="bell">Bell</option>
                  <option value="home">Home</option>
                  <option value="settings">Settings</option>
                </select>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="icon">{getIcon()}</Button>

                <Button variant="outline" size="icon">
                  {getIcon()}
                </Button>

                <Button variant="secondary" size="icon">
                  {getIcon()}
                </Button>

                <Button variant="ghost" size="icon">
                  {getIcon()}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
