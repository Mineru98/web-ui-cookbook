"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">시트 열기</Button>
      </SheetTrigger>
      {/* title 속성으로 접근성을 제공할 수 있습니다.*/}
      <SheetContent title="시트 제목">
        <SheetHeader>
          <SheetTitle>설정</SheetTitle>
          <SheetDescription>계정 설정을 변경할 수 있습니다.</SheetDescription>
        </SheetHeader>
        <div className="py-4">여기에 시트 내용을 넣어갑니다.</div>
        <SheetFooter>
          <Button>변경사항 저장</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetWithHiddenTitle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">제목 없는 시트</Button>
      </SheetTrigger>
      {/* VisuallyHidden을 사용하지 않고 title 속성만으로 접근성을 제공합니다.*/}
      <SheetContent title="숨겨진 시트 제목">
        <div className="py-4">
          이 시트처럼 제목이 화면에는 보이지 않지만 스크린리더에는 제목을 읽을
          수 있습니다.
        </div>
        <SheetFooter>
          <Button>확인</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
