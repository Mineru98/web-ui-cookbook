"use client";

import { useState } from "react";
import SlideLayout from "../slide-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";

export default function DropdownSlide() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [items, setItems] = useState<string[]>([
    "프로필",
    "설정",
    "알림",
    "도움말",
  ]);
  const [newItem, setNewItem] = useState<string>("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  return (
    <SlideLayout title="Dropdown">
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
                Dropdown은 클릭하면 옵션 목록이 표시되는 UI 요소입니다. 공간을
                절약하면서 여러 옵션을 제공할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>내비게이션 메뉴</li>
                <li>설정 메뉴</li>
                <li>정렬 및 필터 옵션</li>
                <li>언어 선택</li>
                <li>사용자 프로필 메뉴</li>
                <li>컨텍스트 메뉴 (우클릭 메뉴)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const DropdownExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <div className="space-y-4">
      {/* 기본 드롭다운 메뉴 */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>메뉴</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="font-bold">내 계정</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => console.log('선택됨: profile')}>
            프로필
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log('선택됨: settings')}>
            설정
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log('선택됨: logout')}>
            로그아웃
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* 이벤트 핸들러가 있는 드롭다운 메뉴 (Select) */}
      <Select onValueChange={(value) => {
        setSelectedValue(value);
        if (value === 'profile') {
          console.log('프로필');
        } else if (value === 'settings') {
          console.log('설정');
        }
      }}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="메뉴 열기" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="profile">프로필</SelectItem>
          <SelectItem value="settings">설정</SelectItem>
          <SelectItem value="help">도움말</SelectItem>
          <SelectItem value="logout">로그아웃</SelectItem>
        </SelectContent>
      </Select>

      {selectedValue && (
        <p className="text-sm text-muted-foreground">
          선택된 값: {selectedValue}
        </p>
      )}
    </div>
  );
};

export default DropdownExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="새 메뉴 항목 추가"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button
                    onClick={addItem}
                    className="px-4 py-2 bg-[#6700e6] text-white rounded-md"
                  >
                    추가
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      메뉴 <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>메뉴 항목</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {items.map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        onSelect={() => setSelectedItem(item)}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {selectedItem && (
                  <p className="mt-4 text-sm">선택된 항목: {selectedItem}</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
