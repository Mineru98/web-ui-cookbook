"use client";

import SlideLayout from "../slide-layout";
import { useState, useRef } from "react";
import { GridIcon, GripVertical } from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Task {
  id: string;
  content: string;
  category: string;
}

export default function DragSlide() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "task-1", content: "디자인 시스템 설계", category: "디자인" },
    { id: "task-2", content: "와이어프레임 작성", category: "디자인" },
    { id: "task-3", content: "사용자 테스트 진행", category: "리서치" },
    { id: "task-4", content: "컴포넌트 개발", category: "개발" },
    { id: "task-5", content: "문서화", category: "기타" },
  ]);

  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItem === null) return;

    if (draggedItem !== index) {
      const newTasks = [...tasks];
      const draggedTask = newTasks[draggedItem];

      // 드래그된 항목 제거
      newTasks.splice(draggedItem, 1);
      // 새 위치에 항목 삽입
      newTasks.splice(index, 0, draggedTask);

      setTasks(newTasks);
      setDraggedItem(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  // 드래그 가능한 사각형 요소
  const DraggableBox = () => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [isDragging, setIsDragging] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);
    const dragStartPos = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      // 마우스 시작 위치 저장
      dragStartPos.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging) return;

      // 새 위치 계산
      const newX = e.clientX - dragStartPos.current.x;
      const newY = e.clientY - dragStartPos.current.y;

      // 이동 범위 제한
      const containerRect =
        boxRef.current?.parentElement?.getBoundingClientRect();
      const boxRect = boxRef.current?.getBoundingClientRect();

      if (containerRect && boxRect) {
        const minX = 0;
        const maxX = containerRect.width - boxRect.width;
        const minY = 0;
        const maxY = containerRect.height - boxRect.height;

        setPosition({
          x: Math.max(minX, Math.min(maxX, newX)),
          y: Math.max(minY, Math.min(maxY, newY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    return (
      <div
        className="relative border-2 border-dashed border-gray-300 rounded-lg h-48 mb-6"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          ref={boxRef}
          className={`absolute cursor-grab bg-[#6700e6] text-white rounded-md p-2 shadow-md flex items-center ${
            isDragging ? "cursor-grabbing opacity-80" : ""
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onMouseDown={handleMouseDown}
        >
          <GridIcon className="w-4 h-4 mr-2" />
          <span>드래그 가능한 요소</span>
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          이 박스를 클릭하고 드래그해보세요
        </div>
      </div>
    );
  };

  return (
    <SlideLayout title="Drag (드래그)">
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
                드래그(Drag)는 요소를 클릭하고 마우스 버튼을 누른 상태에서
                위치를 변경하는 사용자 인터렉션 방식입니다. React에서는 마우스
                이벤트나 HTML5 Drag & Drop API를 사용하여 구현하며, 주로 항목
                재정렬, 위치 변경, 요소의 이동 등에 사용됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">
                드래그 상호작용 유형
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>요소 위치 변경 (자유 이동)</li>
                <li>목록 순서 변경 (드래그 앤 드롭)</li>
                <li>크기 조절 (리사이징)</li>
                <li>캔버스 요소 드래그 (디자인 툴)</li>
                <li>파일 드래그 (파일 시스템 상호작용)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">구현 고려사항</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>드래그 중인 상태를 시각적으로 표시</li>
                <li>드롭 가능한 영역 표시</li>
                <li>드래그 중에도 부드러운 성능 유지</li>
                <li>터치 기기에서의 드래그 지원</li>
                <li>접근성을 위한 키보드 대체 옵션 제공</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// 드래그 가능한 React 컴포넌트
import { useState, useRef } from 'react';

function DraggableExample() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStartPos.current.x;
    const newY = e.clientY - dragStartPos.current.y;
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="relative w-80 h-60 border-2 border-gray-300"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={elementRef}
        className={\`absolute w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-white cursor-grab \${
          isDragging ? 'cursor-grabbing opacity-80' : ''
        }\`}
        style={{
          left: \`\${position.x}px\`,
          top: \`\${position.y}px\`,
        }}
        onMouseDown={handleMouseDown}
      >
        드래그
      </div>
    </div>
  );
}

// 리스트 재정렬을 위한 HTML5 Drag & Drop API
interface Task {
  id: string;
  content: string;
  category: string;
}

function ReorderableList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', content: '디자인 시스템 설계', category: '디자인' },
    { id: '2', content: '컴포넌트 개발', category: '개발' }
  ]);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;
    
    const newTasks = [...tasks];
    const draggedTask = newTasks[draggedItem];
    
    newTasks.splice(draggedItem, 1);
    newTasks.splice(index, 0, draggedTask);
    
    setTasks(newTasks);
    setDraggedItem(index);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={task.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
          className={\`p-3 border rounded mb-2 cursor-move \${
            draggedItem === index ? 'opacity-50' : ''
          }\`}
        >
          <div className="font-medium">{task.content}</div>
          <div className="text-sm text-gray-500">{task.category}</div>
        </div>
      ))}
    </div>
  );
}

// 드래그 앤 드롭을 위한 HTML5 API 사용
function DragDropExample() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [dropMessage, setDropMessage] = useState('');

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'draggable-item');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    setDropMessage(\`\${data} 드롭됨\`);
    setIsDragOver(false);
    
    setTimeout(() => setDropMessage(''), 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        draggable
        onDragStart={handleDragStart}
        className="w-24 h-12 bg-green-500 text-white flex items-center justify-center cursor-grab rounded"
      >
        드래그 가능
      </div>
      
      <div
        className={\`w-48 h-24 border-2 border-dashed rounded flex items-center justify-center \${
          isDragOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
        }\`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <span className="text-sm text-gray-600">
          {dropMessage || (
            isDragOver ? '드롭하려면 놓으세요' : '여기에 드롭하세요'
          )}
        </span>
      </div>
    </div>
  );
}`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 space-y-6">
              <DraggableBox />

              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-slate-50 p-3 border-b">
                  <h3 className="font-medium">드래그 앤 드롭 목록</h3>
                  <p className="text-sm text-gray-600">
                    항목을 드래그하여 순서를 변경해보세요
                  </p>
                </div>

                <div className="p-3 bg-white">
                  {tasks.map((task, index) => (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragEnd={handleDragEnd}
                      className={`border rounded-md p-3 mb-2 bg-white flex items-center ${
                        draggedItem === index ? "opacity-50" : ""
                      }`}
                    >
                      <div className="cursor-grab mr-3 text-gray-400 hover:text-gray-600">
                        <GripVertical size={18} />
                      </div>
                      <div>
                        <div className="font-medium">{task.content}</div>
                        <div className="text-xs text-gray-500">
                          {task.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
