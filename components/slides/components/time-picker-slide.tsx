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
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?•ì˜</h3>
              <p>
                Time Picker???¬ìš©?ê? ?œê°„??? íƒ?????ˆëŠ” UI ?”ì†Œ?…ë‹ˆ?? ?? ë¶? ì´?ë°?AM/PM??? íƒ?????ˆëŠ”
                ?¸í„°?˜ì´?¤ë? ?œê³µ?©ë‹ˆ??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¬ìš© ?¬ë?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?½ì† ë°??Œì˜ ?ˆì•½</li>
                <li>?ŒëŒ ?¤ì •</li>
                <li>?ì—… ?œê°„ ?¤ì •</li>
                <li>ë°°ì†¡ ?œê°„ ? íƒ</li>
                <li>?¼ì • ê´€ë¦?/li>
                <li>?€???¸ë˜????/li>
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

// ê¸°ë³¸ ?œê°„ ? íƒê¸?const [time, setTime] = useState<string>("")

const handleTimeSelect = (hours: string, minutes: string, period: "AM" | "PM") => {
  setTime(\`\${hours}:\${minutes} \${period}\`)
}

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className="w-[240px] justify-start text-left font-normal"
    >
      {time || "?œê°„ ? íƒ"}
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

// ì»¤ìŠ¤?€ ?œê°„ ? íƒê¸?const [hours, setHours] = useState<string>("12")
const [minutes, setMinutes] = useState<string>("00")
const [period, setPeriod] = useState<"AM" | "PM">("PM")

<div className="flex items-center space-x-2">
  {/* ?œê°„ ? íƒ */}
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

  {/* ë¶?? íƒ */}
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

  {/* AM/PM ? íƒ */}
  <select
    value={period}
    onChange={(e) => setPeriod(e.target.value as "AM" | "PM")}
    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
  >
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </select>
</div>

// 24?œê°„ ?•ì‹?¼ë¡œ ë³€??const convertTo24Hour = (hours: string, period: "AM" | "PM"): string => {
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
                  <p className="text-sm">? íƒ???œê°„: {formatTime()}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    24?œê°„ ?•ì‹:{" "}
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
