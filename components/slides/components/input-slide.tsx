"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function InputSlide() {
  const [inputType, setInputType] = useState<string>("text")
  const [placeholder, setPlaceholder] = useState<string>("?¬ê¸°???…ë ¥?˜ì„¸??)
  const [value, setValue] = useState<string>("")

  return (
    <SlideLayout title="Input / TextField">
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
                Input(?ëŠ” TextField)?€ ?¬ìš©?ë¡œë¶€???ìŠ¤???°ì´?°ë? ?…ë ¥ë°›ëŠ” UI ?”ì†Œ?…ë‹ˆ?? ?¤ì–‘??? í˜•???°ì´???ìŠ¤??
                ?«ì, ?´ë©”?? ë¹„ë?ë²ˆí˜¸ ??ë¥??˜ì§‘?????ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ë¡œê·¸???Œì›ê°€???‘ì‹</li>
                <li>ê²€???„ë“œ</li>
                <li>?°ë½ì²??•ë³´ ?˜ì§‘</li>
                <li>?¤ë¬¸ì¡°ì‚¬ ë°??¼ë“œë°??‘ì‹</li>
                <li>ê²°ì œ ?•ë³´ ?…ë ¥</li>
                <li>?„í„°ë§?ë°??•ë ¬ ?µì…˜</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const InputExample: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="space-y-4">
      {/* ê¸°ë³¸ ?…ë ¥ ?„ë“œ */}
      <Input 
        placeholder="?´ë¦„???…ë ¥?˜ì„¸?? 
      />

      {/* ?ˆì´ë¸”ì´ ?ˆëŠ” ?…ë ¥ ?„ë“œ */}
      <div className="space-y-2">
        <Label htmlFor="email">?´ë©”??/Label>
        <Input
          id="email"
          type="email"
          placeholder="?´ë©”??ì£¼ì†Œ"
        />
      </div>

      {/* ë¹„í™œ?±í™”???…ë ¥ ?„ë“œ */}
      <Input 
        disabled 
        value="?¸ì§‘?????†ìŒ" 
        readOnly
      />

      {/* ?¤ì–‘??? í˜•???…ë ¥ ?„ë“œ */}
      <div className="space-y-2">
        {/* ë¹„ë?ë²ˆí˜¸ ?„ë“œ */}
        <Input
          type="password"
          placeholder="ë¹„ë?ë²ˆí˜¸"
        />
        
        {/* ?«ì ?…ë ¥ */}
        <Input
          type="number"
          placeholder="?˜ì´"
        />
        
        {/* ? ì§œ ?…ë ¥ */}
        <Input
          type="date"
          defaultValue={new Date().toISOString().split('T')[0]}
        />
        
        {/* ?Œì¼ ? íƒ */}
        <div className="flex items-center space-x-2">
          <Input
            type="file"
            className="hidden"
            id="file-upload"
          />
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            ?Œì¼ ? íƒ
          </Button>
        </div>
      </div>

      {/* ?´ë²¤???¸ë“¤?¬ê? ?ˆëŠ” ?…ë ¥ ?„ë“œ */}
      <Input
        placeholder="ê²€??.."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default InputExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">?…ë ¥ ?„ë“œ ? í˜•</label>
                  <select
                    value={inputType}
                    onChange={(e) => setInputType(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="text">?ìŠ¤??(Text)</option>
                    <option value="password">ë¹„ë?ë²ˆí˜¸ (Password)</option>
                    <option value="email">?´ë©”??(Email)</option>
                    <option value="number">?«ì (Number)</option>
                    <option value="tel">?„í™”ë²ˆí˜¸ (Tel)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">?Œë ˆ?´ìŠ¤?€??/label>
                  <Input
                    type="text"
                    value={placeholder}
                    onChange={(e) => setPlaceholder(e.target.value)}
                    placeholder="?Œë ˆ?´ìŠ¤?€???ìŠ¤???…ë ¥"
                  />
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <div className="space-y-2">
                  <Label htmlFor="demo-input">?°ëª¨ ?…ë ¥ ?„ë“œ</Label>
                  <Input
                    id="demo-input"
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>

                {value && <p className="mt-4 text-sm">?…ë ¥??ê°? {value}</p>}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
