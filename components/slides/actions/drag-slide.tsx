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
    { id: "task-1", content: "?”ì???œìŠ¤???¤ê³„", category: "?”ì?? },
    { id: "task-2", content: "?€?´ì–´?„ë ˆ???‘ì„±", category: "?”ì?? },
    { id: "task-3", content: "?¬ìš©???ŒìŠ¤??ì§„í–‰", category: "ë¦¬ì„œì¹? },
    { id: "task-4", content: "ì»´í¬?ŒíŠ¸ ê°œë°œ", category: "ê°œë°œ" },
    { id: "task-5", content: "ë¬¸ì„œ??, category: "ê¸°í?" },
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

      // ?œë˜ê·¸ëœ ??ª© ?œê±°
      newTasks.splice(draggedItem, 1);
      // ???„ì¹˜????ª© ?½ì…
      newTasks.splice(index, 0, draggedTask);

      setTasks(newTasks);
      setDraggedItem(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  // ?œë˜ê·?ê°€?¥í•œ ?¬ê°???”ì†Œ
  const DraggableBox = () => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [isDragging, setIsDragging] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);
    const dragStartPos = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      // ë§ˆìš°???œì‘ ?„ì¹˜ ?€??      dragStartPos.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging) return;

      // ???„ì¹˜ ê³„ì‚°
      const newX = e.clientX - dragStartPos.current.x;
      const newY = e.clientY - dragStartPos.current.y;

      // ?´ë™ ë²”ìœ„ ?œí•œ
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
          className={`absolute cursor-grab bg-[#49bcf3] text-white rounded-md p-2 shadow-md flex items-center ${
            isDragging ? "cursor-grabbing opacity-80" : ""
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onMouseDown={handleMouseDown}
        >
          <GridIcon className="w-4 h-4 mr-2" />
          <span>?œë˜ê·?ê°€?¥í•œ ?”ì†Œ</span>
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          ??ë°•ìŠ¤ë¥??´ë¦­?˜ê³  ?œë˜ê·¸í•´ë³´ì„¸??        </div>
      </div>
    );
  };

  return (
    <SlideLayout title="Drag (?œë˜ê·?">
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
                ?œë˜ê·?Drag)???”ì†Œë¥??´ë¦­?˜ê³  ë§ˆìš°??ë²„íŠ¼???„ë¥¸ ?íƒœ?ì„œ
                ?„ì¹˜ë¥?ë³€ê²½í•˜???¬ìš©???¸í„°?‰ì…˜ ë°©ì‹?…ë‹ˆ?? React?ì„œ??ë§ˆìš°??                ?´ë²¤?¸ë‚˜ HTML5 Drag & Drop APIë¥??¬ìš©?˜ì—¬ êµ¬í˜„?˜ë©°, ì£¼ë¡œ ??ª©
                ?¬ì •?? ?„ì¹˜ ë³€ê²? ?”ì†Œ???´ë™ ?±ì— ?¬ìš©?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">
                ?œë˜ê·??í˜¸?‘ìš© ? í˜•
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?”ì†Œ ?„ì¹˜ ë³€ê²?(?ìœ  ?´ë™)</li>
                <li>ëª©ë¡ ?œì„œ ë³€ê²?(?œë˜ê·????œë¡­)</li>
                <li>?¬ê¸° ì¡°ì ˆ (ë¦¬ì‚¬?´ì§•)</li>
                <li>ìº”ë²„???”ì†Œ ?œë˜ê·?(?”ì????</li>
                <li>?Œì¼ ?œë˜ê·?(?Œì¼ ?œìŠ¤???í˜¸?‘ìš©)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">êµ¬í˜„ ê³ ë ¤?¬í•­</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?œë˜ê·?ì¤‘ì¸ ?íƒœë¥??œê°?ìœ¼ë¡??œì‹œ</li>
                <li>?œë¡­ ê°€?¥í•œ ?ì—­ ?œì‹œ</li>
                <li>?œë˜ê·?ì¤‘ì—??ë¶€?œëŸ¬???±ëŠ¥ ? ì?</li>
                <li>?°ì¹˜ ê¸°ê¸°?ì„œ???œë˜ê·?ì§€??/li>
                <li>?‘ê·¼?±ì„ ?„í•œ ?¤ë³´???€ì²??µì…˜ ?œê³µ</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={`// ?œë˜ê·?ê°€?¥í•œ React ì»´í¬?ŒíŠ¸
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
        ?œë˜ê·?      </div>
    </div>
  );
}

// ë¦¬ìŠ¤???¬ì •?¬ì„ ?„í•œ HTML5 Drag & Drop API
interface Task {
  id: string;
  content: string;
  category: string;
}

function ReorderableList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', content: '?”ì???œìŠ¤???¤ê³„', category: '?”ì?? },
    { id: '2', content: 'ì»´í¬?ŒíŠ¸ ê°œë°œ', category: 'ê°œë°œ' }
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

// ?œë˜ê·????œë¡­???„í•œ HTML5 API ?¬ìš©
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
    setDropMessage(\`\${data} ?œë¡­??`);
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
        ?œë˜ê·?ê°€??      </div>
      
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
            isDragOver ? '?œë¡­?˜ë ¤ë©??“ìœ¼?¸ìš”' : '?¬ê¸°???œë¡­?˜ì„¸??
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
                  <h3 className="font-medium">?œë˜ê·????œë¡­ ëª©ë¡</h3>
                  <p className="text-sm text-gray-600">
                    ??ª©???œë˜ê·¸í•˜???œì„œë¥?ë³€ê²½í•´ë³´ì„¸??                  </p>
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
