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
    "?„ë¡œ??,
    "?¤ì •",
    "?Œë¦¼",
    "?„ì?ë§?,
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
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?•ì˜</h3>
              <p>
                Dropdown?€ ?´ë¦­?˜ë©´ ?µì…˜ ëª©ë¡???œì‹œ?˜ëŠ” UI ?”ì†Œ?…ë‹ˆ?? ê³µê°„??                ?ˆì•½?˜ë©´???¬ëŸ¬ ?µì…˜???œê³µ?????ˆìŠµ?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?´ë¹„ê²Œì´??ë©”ë‰´</li>
                <li>?¤ì • ë©”ë‰´</li>
                <li>?•ë ¬ ë°??„í„° ?µì…˜</li>
                <li>?¸ì–´ ? íƒ</li>
                <li>?¬ìš©???„ë¡œ??ë©”ë‰´</li>
                <li>ì»¨í…?¤íŠ¸ ë©”ë‰´ (?°í´ë¦?ë©”ë‰´)</li>
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
      {/* ê¸°ë³¸ ?œë¡­?¤ìš´ ë©”ë‰´ */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>ë©”ë‰´</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="font-bold">??ê³„ì •</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => console.log('? íƒ?? profile')}>
            ?„ë¡œ??          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log('? íƒ?? settings')}>
            ?¤ì •
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => console.log('? íƒ?? logout')}>
            ë¡œê·¸?„ì›ƒ
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* ?´ë²¤???¸ë“¤?¬ê? ?ˆëŠ” ?œë¡­?¤ìš´ ë©”ë‰´ (Select) */}
      <Select onValueChange={(value) => {
        setSelectedValue(value);
        if (value === 'profile') {
          console.log('?„ë¡œ??);
        } else if (value === 'settings') {
          console.log('?¤ì •');
        }
      }}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="ë©”ë‰´ ?´ê¸°" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="profile">?„ë¡œ??/SelectItem>
          <SelectItem value="settings">?¤ì •</SelectItem>
          <SelectItem value="help">?„ì?ë§?/SelectItem>
          <SelectItem value="logout">ë¡œê·¸?„ì›ƒ</SelectItem>
        </SelectContent>
      </Select>

      {selectedValue && (
        <p className="text-sm text-muted-foreground">
          ? íƒ??ê°? {selectedValue}
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
                    placeholder="??ë©”ë‰´ ??ª© ì¶”ê?"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button
                    onClick={addItem}
                    className="px-4 py-2 bg-[#49bcf3] text-white rounded-md"
                  >
                    ì¶”ê?
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      ë©”ë‰´ <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>ë©”ë‰´ ??ª©</DropdownMenuLabel>
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
                  <p className="mt-4 text-sm">? íƒ????ª©: {selectedItem}</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
