"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">?œíŠ¸ ?´ê¸°</Button>
      </SheetTrigger>
      {/* title ?ì„±?€ ?‘ê·¼?±ì„ ?„í•´ ?„ìˆ˜?…ë‹ˆ??*/}
      <SheetContent title="?œíŠ¸ ?œëª©">
        <SheetHeader>
          <SheetTitle>?¤ì •</SheetTitle>
          <SheetDescription>
            ê³„ì • ?˜ê²½?¤ì •??ë³€ê²½í•  ???ˆìŠµ?ˆë‹¤.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          ?¬ê¸°???œíŠ¸ ?´ìš©???¤ì–´ê°‘ë‹ˆ??
        </div>
        <SheetFooter>
          <Button>ë³€ê²½ì‚¬???€??/Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function SheetWithHiddenTitle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">?œëª© ?¨ê? ?œíŠ¸</Button>
      </SheetTrigger>
      {/* VisuallyHidden???¬ìš©?˜ì? ?Šê³ ??title ?ì„±???µí•´ ?‘ê·¼?±ì„ ?œê³µ?©ë‹ˆ??*/}
      <SheetContent title="?¨ê²¨ì§??œíŠ¸ ?œëª©">
        <div className="py-4">
          ???œíŠ¸???œê°???œëª© ?†ì´ ?´ìš©ë§??œì‹œ?˜ì?ë§? ?¤í¬ë¦?ë¦¬ë”???œëª©???½ì„ ???ˆìŠµ?ˆë‹¤.
        </div>
        <SheetFooter>
          <Button>?•ì¸</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
} 