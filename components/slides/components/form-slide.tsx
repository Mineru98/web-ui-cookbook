"use client"

import type React from "react"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function FormSlide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // ?¤ì œë¡œëŠ” ?¬ê¸°??API ?¸ì¶œ ?±ì˜ ?‘ì—…???˜í–‰
  }

  return (
    <SlideLayout title="Form">
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
                Form?€ ?¬ìš©?ë¡œë¶€???°ì´?°ë? ?˜ì§‘?˜ê¸° ?„í•œ ?¬ëŸ¬ ?…ë ¥ ?”ì†Œë¥?ê·¸ë£¹?”í•œ UI ì»´í¬?ŒíŠ¸?…ë‹ˆ?? ?ìŠ¤???„ë“œ,
                ì²´í¬ë°•ìŠ¤, ?¼ë””??ë²„íŠ¼ ???¤ì–‘???…ë ¥ ?”ì†Œë¥??¬í•¨?????ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ë¡œê·¸???Œì›ê°€??/li>
                <li>?°ë½ì²??•ë³´ ?˜ì§‘</li>
                <li>?¤ë¬¸ì¡°ì‚¬</li>
                <li>ê²°ì œ ?•ë³´ ?…ë ¥</li>
                <li>ê²€???„í„°</li>
                <li>?¤ì • êµ¬ì„±</li>
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
import { Checkbox } from '@/components/ui/checkbox';

interface FormData {
  name: string;
  email: string;
  password: string;
  agreeTerms: boolean;
}

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ??ê²€ì¦?    if (!formData.name) {
      alert('?´ë¦„???…ë ¥?˜ì„¸??);
      return;
    }
    if (!formData.email) {
      alert('?´ë©”?¼ì„ ?…ë ¥?˜ì„¸??);
      return;
    }
    if (!formData.agreeTerms) {
      alert('?´ìš©?½ê????™ì˜?´ì£¼?¸ìš”');
      return;
    }
    
    // ???œì¶œ ì²˜ë¦¬
    console.log('???œì¶œ:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ?´ë¦„ ?„ë“œ */}
      <div className="space-y-2">
        <Label htmlFor="name" className="font-bold">?´ë¦„</Label>
        <Input
          id="name"
          name="name"
          placeholder="?´ë¦„???…ë ¥?˜ì„¸??
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* ?´ë©”???„ë“œ */}
      <div className="space-y-2">
        <Label htmlFor="email" className="font-bold">?´ë©”??/Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="?´ë©”?¼ì„ ?…ë ¥?˜ì„¸??
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* ë¹„ë?ë²ˆí˜¸ ?„ë“œ */}
      <div className="space-y-2">
        <Label htmlFor="password" className="font-bold">ë¹„ë?ë²ˆí˜¸</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="ë¹„ë?ë²ˆí˜¸ë¥??…ë ¥?˜ì„¸??
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* ?½ê? ?™ì˜ ì²´í¬ë°•ìŠ¤ */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreeTerms}
          onCheckedChange={handleCheckboxChange}
        />
        <Label htmlFor="terms">?´ìš©?½ê????™ì˜?©ë‹ˆ??/Label>
      </div>
      
      {/* ?œì¶œ ë²„íŠ¼ */}
      <Button 
        type="submit" 
        className="w-full"
        disabled={!formData.name || !formData.email || !formData.agreeTerms}
      >
        ?œì¶œ?˜ê¸°
      </Button>
    </form>
  );
};

export default FormExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              {isSubmitted ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">?¼ì´ ?œì¶œ?˜ì—ˆ?µë‹ˆ??</h3>
                  <p className="text-green-700">?¤ìŒ ?•ë³´ê°€ ?œì¶œ?˜ì—ˆ?µë‹ˆ??</p>
                  <ul className="mt-2 space-y-1 text-green-700">
                    <li>
                      <strong>?´ë¦„:</strong> {formData.name}
                    </li>
                    <li>
                      <strong>?´ë©”??</strong> {formData.email}
                    </li>
                    <li>
                      <strong>ë¹„ë?ë²ˆí˜¸:</strong> ?¢â€¢â€¢â€¢â€¢â€¢â€¢â€?                    </li>
                    <li>
                      <strong>?´ìš©?½ê? ?™ì˜:</strong> {formData.agreeTerms ? "?? : "?„ë‹ˆ??}
                    </li>
                  </ul>
                  <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        password: "",
                        agreeTerms: false,
                      })
                    }}
                  >
                    ?¤ì‹œ ?‘ì„±?˜ê¸°
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">?´ë¦„</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="?´ë¦„???…ë ¥?˜ì„¸??
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">?´ë©”??/Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="?´ë©”?¼ì„ ?…ë ¥?˜ì„¸??
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">ë¹„ë?ë²ˆí˜¸</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="ë¹„ë?ë²ˆí˜¸ë¥??…ë ¥?˜ì„¸??
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={formData.agreeTerms} onCheckedChange={handleCheckboxChange} />
                    <Label htmlFor="terms">?´ìš©?½ê????™ì˜?©ë‹ˆ??/Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.password || !formData.agreeTerms}
                  >
                    ?œì¶œ?˜ê¸°
                  </Button>
                </form>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
