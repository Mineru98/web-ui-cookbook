"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function TableSlide() {
  const [data, setData] = useState([
    { id: 1, name: "홍길동", email: "hong@example.com", role: "관리자" },
    { id: 2, name: "김철수", email: "kim@example.com", role: "사용자" },
    { id: 3, name: "이영희", email: "lee@example.com", role: "편집자" },
  ])

  const [newRow, setNewRow] = useState({ name: "", email: "", role: "" })

  const addRow = () => {
    if (newRow.name && newRow.email && newRow.role) {
      setData([...data, { id: data.length + 1, ...newRow }])
      setNewRow({ name: "", email: "", role: "" })
    }
  }

  return (
    <SlideLayout title="Table">
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
                Table은 행과 열로 구성된 데이터를 표시하는 UI 요소입니다. 구조화된 정보를 효과적으로 보여주는 데
                사용됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>데이터 목록 표시</li>
                <li>사용자 관리 인터페이스</li>
                <li>재고 관리</li>
                <li>금융 데이터 표시</li>
                <li>일정 및 시간표</li>
                <li>비교 차트</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const TableExample: React.FC = () => {
  const [data, setData] = useState<User[]>([
    { id: 1, name: '홍길동', email: 'hong@example.com', role: '관리자' },
    { id: 2, name: '김철수', email: 'kim@example.com', role: '사용자' },
    { id: 3, name: '이영희', email: 'lee@example.com', role: '편집자' },
  ]);

  const deleteRow = (id: number) => {
    setData(data.filter(row => row.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* 기본 테이블 */}
      <div>
        <h3 className="text-lg font-semibold mb-2">기본 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>홍길동</TableCell>
              <TableCell>hong@example.com</TableCell>
              <TableCell>관리자</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>김철수</TableCell>
              <TableCell>kim@example.com</TableCell>
              <TableCell>사용자</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* 동적 데이터가 있는 테이블 */}
      <div>
        <h3 className="text-lg font-semibold mb-2">동적 데이터 테이블</h3>
        <Table>
          <TableCaption>사용자 목록</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>액션</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => deleteRow(row.id)}
                  >
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 스타일링된 테이블 */}
      <div>
        <h3 className="text-lg font-semibold mb-2">스타일링된 테이블</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="h-12">제품명</TableHead>
                <TableHead>가격</TableHead>
                <TableHead>재고</TableHead>
                <TableHead className="text-right">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">노트북</TableCell>
                <TableCell>₩1,200,000</TableCell>
                <TableCell>15</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                    재고있음
                  </span>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">마우스</TableCell>
                <TableCell>₩45,000</TableCell>
                <TableCell>0</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-50 text-red-700">
                    품절
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TableExample;`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      이름
                    </Label>
                    <Input
                      id="name"
                      value={newRow.name}
                      onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                      placeholder="이름 입력"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      이메일
                    </Label>
                    <Input
                      id="email"
                      value={newRow.email}
                      onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
                      placeholder="이메일 입력"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="mb-2 block">
                      역할
                    </Label>
                    <Input
                      id="role"
                      value={newRow.role}
                      onChange={(e) => setNewRow({ ...newRow, role: e.target.value })}
                      placeholder="역할 입력"
                    />
                  </div>
                </div>
                <Button onClick={addRow} disabled={!newRow.name || !newRow.email || !newRow.role}>
                  행 추가
                </Button>
              </div>

              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableCaption>사용자 목록</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>이름</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>역할</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
