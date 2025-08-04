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
    // 실제로는 여기서 API 호출 등의 작업을 수행
  }

  return (
    <SlideLayout title="Form">
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
                Form은 사용자로부터 데이터를 수집하기 위한 여러 입력 요소를 그룹화한 UI 컴포넌트입니다. 텍스트 필드,
                체크박스, 라디오 버튼 등 다양한 입력 요소를 포함할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>로그인/회원가입</li>
                <li>연락처 정보 수집</li>
                <li>설문조사</li>
                <li>결제 정보 입력</li>
                <li>검색 필터</li>
                <li>설정 구성</li>
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
    
    // 폼 검증
    if (!formData.name) {
      alert('이름을 입력하세요');
      return;
    }
    if (!formData.email) {
      alert('이메일을 입력하세요');
      return;
    }
    if (!formData.agreeTerms) {
      alert('이용약관에 동의해주세요');
      return;
    }
    
    // 폼 제출 처리
    console.log('폼 제출:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 이름 필드 */}
      <div className="space-y-2">
        <Label htmlFor="name" className="font-bold">이름</Label>
        <Input
          id="name"
          name="name"
          placeholder="이름을 입력하세요"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* 이메일 필드 */}
      <div className="space-y-2">
        <Label htmlFor="email" className="font-bold">이메일</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* 비밀번호 필드 */}
      <div className="space-y-2">
        <Label htmlFor="password" className="font-bold">비밀번호</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* 약관 동의 체크박스 */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreeTerms}
          onCheckedChange={handleCheckboxChange}
        />
        <Label htmlFor="terms">이용약관에 동의합니다</Label>
      </div>
      
      {/* 제출 버튼 */}
      <Button 
        type="submit" 
        className="w-full"
        disabled={!formData.name || !formData.email || !formData.agreeTerms}
      >
        제출하기
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
                  <h3 className="text-lg font-semibold text-green-800 mb-2">폼이 제출되었습니다!</h3>
                  <p className="text-green-700">다음 정보가 제출되었습니다:</p>
                  <ul className="mt-2 space-y-1 text-green-700">
                    <li>
                      <strong>이름:</strong> {formData.name}
                    </li>
                    <li>
                      <strong>이메일:</strong> {formData.email}
                    </li>
                    <li>
                      <strong>비밀번호:</strong> ••••••••
                    </li>
                    <li>
                      <strong>이용약관 동의:</strong> {formData.agreeTerms ? "예" : "아니오"}
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
                    다시 작성하기
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="이름을 입력하세요"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="이메일을 입력하세요"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={formData.agreeTerms} onCheckedChange={handleCheckboxChange} />
                    <Label htmlFor="terms">이용약관에 동의합니다</Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.password || !formData.agreeTerms}
                  >
                    제출하기
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
