"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function TimePickerSlide() {
  const [hours, setHours] = useState<string>("12")
  const [minutes, setMinutes] = useState<string>("00")
  const [period, setPeriod] = useState<"AM" | "PM">("PM")

  const formatTime = () => {
    return `${hours}:${minutes} ${period}`
  }

  return (
    <SlideLayout title="Time Picker">
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
                Time Picker는 사용자가 시간을 선택할 수 있는 UI 요소입니다. 시, 분, 초와 AM/PM을 선택할 수 있는
                인터페이스를 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>예약 및 회의 예약</li>
                <li>알람 설정</li>
                <li>작업 시간 설정</li>
                <li>배송 시간 선택</li>
                <li>일정 관리</li>
                <li>타이머 설정</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="typescript"
                code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// 기본 ?�간 ?�택�?const [time, setTime] = useState<string>("")

const handleTimeSelect = (hours: string, minutes: string, period: "AM" | "PM") => {
  setTime(\`\${hours}:\${minutes} \${period}\`)
}

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className="w-[240px] justify-start text-left font-normal"
    >
      {time || "?�간 ?�택"}
      <Clock className="ml-auto h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-4" align="start">
    <div className="flex space-x-2">
      <select className="p-2 border rounded-md">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
          <option key={hour} value={hour.toString().padStart(2, "0")}>
            {hour.toString().padStart(2, "0")}
          </option>
        ))}
      </select>
      <span className="flex items-center">:</span>
      <select className="p-2 border rounded-md">
        {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
          <option key={minute} value={minute.toString().padStart(2, "0")}>
            {minute.toString().padStart(2, "0")}
          </option>
        ))}
      </select>
      <select className="p-2 border rounded-md">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  </PopoverContent>
</Popover>

// 커스?� ?�간 ?�택�?const [hours, setHours] = useState<string>("12")
const [minutes, setMinutes] = useState<string>("00")
const [period, setPeriod] = useState<"AM" | "PM">("PM")

<div className="flex items-center space-x-2">
  {/* ?�간 ?�택 */}
  <select
    value={hours}
    onChange={(e) => setHours(e.target.value)}
    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
  >
    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
      <option key={hour} value={hour.toString().padStart(2, "0")}>
        {hour.toString().padStart(2, "0")}
      </option>
    ))}
  </select>

  <span className="text-lg font-medium">:</span>

  {/* �??�택 */}
  <select
    value={minutes}
    onChange={(e) => setMinutes(e.target.value)}
    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
  >
    {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
      <option key={minute} value={minute.toString().padStart(2, "0")}>
        {minute.toString().padStart(2, "0")}
      </option>
    ))}
  </select>

  {/* AM/PM ?�택 */}
  <select
    value={period}
    onChange={(e) => setPeriod(e.target.value as "AM" | "PM")}
    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
  >
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </select>
</div>

// 24?�간 ?�식?�로 변??const convertTo24Hour = (hours: string, period: "AM" | "PM"): string => {
  const hour = parseInt(hours)
  if (period === "AM") {
    return hour === 12 ? "00" : hours
  } else {
    return hour === 12 ? "12" : (hour + 12).toString()
  }
}`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex flex-col items-center space-y-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                      {formatTime()}
                      <Clock className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4" align="start">
                    <div className="flex space-x-2">
                      <select value={hours} onChange={(e) => setHours(e.target.value)} className="p-2 border rounded-md">
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                          <option key={hour} value={hour.toString().padStart(2, "0")}>
                            {hour.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                      <span className="flex items-center">:</span>
                      <select
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                        className="p-2 border rounded-md"
                      >
                        {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                          <option key={minute} value={minute.toString().padStart(2, "0")}>
                            {minute.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                      <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value as "AM" | "PM")}
                        className="p-2 border rounded-md"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </PopoverContent>
                </Popover>

                <div className="text-center">
                  <p className="text-sm">?�택???�간: {formatTime()}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    24?�간 ?�식:{" "}
                    {period === "AM"
                      ? hours === "12"
                        ? "00"
                        : hours
                      : hours === "12"
                        ? "12"
                        : (Number.parseInt(hours) + 12).toString()}
                    :{minutes}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
