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
                Date Picker???¬ìš©?ê? ? ì§œë¥?? íƒ?????ˆëŠ” ìº˜ë¦°???•íƒœ??UI ?”ì†Œ?…ë‹ˆ?? ? ì§œ ?…ë ¥??ì§ê??ì´ê³??¬ìš©?˜ê¸°
                ?½ê²Œ ë§Œë“¤?´ì¤?ˆë‹¤.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?ˆì•½ ?œìŠ¤??(?¸í…”, ??³µê¶???</li>
                <li>?¼ì • ê´€ë¦?ë°?ìº˜ë¦°????/li>
                <li>?´ë²¤??ê³„íš</li>
                <li>?ë…„?”ì¼ ?…ë ¥</li>
                <li>? ì§œ ë²”ìœ„ ?„í„°</li>
                <li>?„ë¡œ?íŠ¸ ë§ˆê°???¤ì •</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
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

// ê¸°ë³¸ ? ì§œ ? íƒê¸?const [date, setDate] = useState<Date>()

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className={cn(
        "w-[240px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      {date ? format(date, "yyyy??MM??dd??) : "? ì§œ ? íƒ"}
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

// ? ì§œ ë²”ìœ„ ? íƒê¸?const [dateRange, setDateRange] = useState<{
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
            {format(dateRange.from, "yyyy??MM??dd??)} -{" "}
            {format(dateRange.to, "yyyy??MM??dd??)}
          </>
        ) : (
          format(dateRange.from, "yyyy??MM??dd??)
        )
      ) : (
        "? ì§œ ë²”ìœ„ ? íƒ"
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

// ?¤ì¤‘ ? ì§œ ? íƒê¸?const [selectedDates, setSelectedDates] = useState<Date[]>([])

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
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex flex-col items-center space-y-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      {date ? format(date, "PPP", { locale: ko }) : <span>? ì§œ ? íƒ</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>

                {date && (
                  <p className="text-sm">? íƒ??? ì§œ: {format(date, "yyyy??MM??dd??(EEEE)", { locale: ko })}</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
