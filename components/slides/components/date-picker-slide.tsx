"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function DatePickerSlide() {
  const [date, setDate] = useState<Date>()

  return (
    <SlideLayout title="Date Picker">
      <div className="max-h-slide-body overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md border border-border">
                <h3 className="text-lg font-semibold mb-2">정의</h3>
                <p>
                  Date Picker는 사용자가 날짜를 선택할 수 있는 캘린더 형태의 UI 요소입니다. 날짜 입력을 직관적이고 사용하기
                  쉽게 만들어줍니다.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-border">
                <h3 className="text-lg font-semibold mb-2">주요 사례</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>예약 시스템 (호텔, 항공권 등)</li>
                  <li>일정 관리자 캘린더</li>
                  <li>이벤트 계획</li>
                  <li>생년월일 입력</li>
                  <li>날짜 범위 필터</li>
                  <li>프로젝트 마감일 설정</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-foreground p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// 기본 날짜 선택기
const [date, setDate] = useState<Date>()

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className={cn(
        "w-[240px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      {date ? format(date, "yyyy년 MM월 dd일") : "날짜 선택"}
      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
    />
  </PopoverContent>
</Popover>

// 날짜 범위 선택기
const [dateRange, setDateRange] = useState<{
  from: Date | undefined
  to: Date | undefined
}>({ from: undefined, to: undefined })

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className={cn(
        "w-[300px] justify-start text-left font-normal",
        !dateRange?.from && "text-muted-foreground"
      )}
    >
      {dateRange?.from ? (
        dateRange.to ? (
          <>
            {format(dateRange.from, "yyyy년 MM월 dd일")} -{" "}
            {format(dateRange.to, "yyyy년 MM월 dd일")}
          </>
        ) : (
          format(dateRange.from, "yyyy년 MM월 dd일")
        )
      ) : (
        "날짜 범위 선택"
      )}
      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
    />
  </PopoverContent>
</Popover>

// 다중 날짜 선택기
const [selectedDates, setSelectedDates] = useState<Date[]>([])

<Calendar
  mode="multiple"
  selected={selectedDates}
  onSelect={(dates) => setSelectedDates(dates || [])}
  className="rounded-md border"
/>`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-border">
              <div className="flex flex-col items-center space-y-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-60 justify-start text-left"
                    >
                      <span className={cn("font-normal", !date && "text-muted-foreground")}>
                        {date ? format(date, "PPP", { locale: ko }) : "날짜 선택"}
                      </span>
                      <CalendarIcon className={cn("ml-auto h-4 w-4 opacity-50", !date && "text-muted-foreground")} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto" align="start">
                    <div className="-m-4">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </div>
                  </PopoverContent>
                </Popover>

                {date && (
                  <p className="text-sm">선택된 날짜: {format(date, "yyyy년 MM월 dd일 (EEEE)", { locale: ko })}</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
