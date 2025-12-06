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
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?•ì˜</h3>
              <p>
                Icon Button?€ ?ìŠ¤???€???„ì´ì½˜ì„ ?¬ìš©?˜ëŠ” ë²„íŠ¼?…ë‹ˆ?? ê³µê°„???ˆì•½?˜ë©´?œë„ ì§ê??ì¸ ?˜ë?ë¥??„ë‹¬????                ?ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?´ë°” (Toolbar)?ì„œ???¡ì…˜ ë²„íŠ¼</li>
                <li>?Œì…œ ë¯¸ë””???í˜¸?‘ìš© (ì¢‹ì•„?? ê³µìœ  ??</li>
                <li>ì»´íŒ©?¸í•œ UIê°€ ?„ìš”??ëª¨ë°”???¸í„°?˜ì´??/li>
                <li>?´ë¹„ê²Œì´??ì»¨íŠ¸ë¡?(?¤ë¡œ ê°€ê¸? ????</li>
                <li>?íƒœ ? ê? (?Œì†Œê±??Œì†Œê±??´ì œ, ë¶ë§ˆ????</li>
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
      {/* ê¸°ë³¸ ?„ì´ì½?ë²„íŠ¼ */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">ê¸°ë³¸ ?„ì´ì½?ë²„íŠ¼</h3>
        <Button size="icon" onClick={() => {}}>
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* ?¤ì–‘???¤í??¼ì˜ ?„ì´ì½?ë²„íŠ¼ */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">?¤ì–‘???¤í???/h3>
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

      {/* ?‘ê·¼?±ì„ ?„í•œ aria-label ì¶”ê? */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">?‘ê·¼??ê³ ë ¤</h3>
        <Button 
          size="icon" 
          onClick={() => {}} 
          aria-label="?¤ì •"
          title="?¤ì •"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* ?´ë²¤???¸ë“¤?¬ê? ?ˆëŠ” ?„ì´ì½?ë²„íŠ¼ */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">?íƒœ ë³€??ë²„íŠ¼</h3>
        <Button 
          variant={liked ? "default" : "outline"}
          size="icon"
          onClick={() => {
            setLiked(!liked);
            console.log(liked ? "ì¢‹ì•„??ì·¨ì†Œ" : "ì¢‹ì•„??);
          }}
          className={liked ? "bg-red-500 hover:bg-red-600" : ""}
        >
          <ThumbsUp className={\`h-4 w-4 \${liked ? 'fill-current' : ''}\`} />
        </Button>
      </div>

      {/* ?¤ì–‘???¬ê¸°???„ì´ì½?ë²„íŠ¼ */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">?¤ì–‘???¬ê¸°</h3>
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

      {/* ?¤ìš©?ì¸ ?„ì´ì½?ë²„íŠ¼??*/}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">?¤ìš©?ì¸ ?ˆì‹œ</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" aria-label="?¤ìš´ë¡œë“œ">
            <Download className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" aria-label="ê³µìœ ">
            <Share className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" aria-label="?¸ì§‘">
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
                <label className="block text-sm font-medium mb-2">?„ì´ì½?? íƒ</label>
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
