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
    { id: 1, name: "?çÍ∏∏??, email: "hong@example.com", role: "Í¥ÄÎ¶¨Ïûê" },
    { id: 2, name: "ÍπÄÏ≤†Ïàò", email: "kim@example.com", role: "?¨Ïö©?? },
    { id: 3, name: "?¥ÏòÅ??, email: "lee@example.com", role: "?∏Ïßë?? },
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
            <TabsTrigger value="description">?§Î™Ö</TabsTrigger>
            <TabsTrigger value="code">ÏΩîÎìú</TabsTrigger>
            <TabsTrigger value="demo">?∞Î™®</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?ïÏùò</h3>
              <p>
                Table?Ä ?âÍ≥º ?¥Î°ú Íµ¨ÏÑ±???∞Ïù¥?∞Î? ?úÏãú?òÎäî UI ?îÏÜå?ÖÎãà?? Íµ¨Ï°∞?îÎêú ?ïÎ≥¥Î•??®Í≥º?ÅÏúºÎ°?Î≥¥Ïó¨Ï£ºÎäî ??                ?¨Ïö©?©Îãà??
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">?¨Ïö© ?¨Î?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>?∞Ïù¥??Î™©Î°ù ?úÏãú</li>
                <li>?¨Ïö©??Í¥ÄÎ¶??∏ÌÑ∞?òÏù¥??/li>
                <li>?¨Í≥† Í¥ÄÎ¶?/li>
                <li>Í∏àÏúµ ?∞Ïù¥???úÏãú</li>
                <li>?ºÏ†ï Î∞??úÍ∞Ñ??/li>
                <li>ÎπÑÍµê Ï∞®Ìä∏</li>
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
    { id: 1, name: '?çÍ∏∏??, email: 'hong@example.com', role: 'Í¥ÄÎ¶¨Ïûê' },
    { id: 2, name: 'ÍπÄÏ≤†Ïàò', email: 'kim@example.com', role: '?¨Ïö©?? },
    { id: 3, name: '?¥ÏòÅ??, email: 'lee@example.com', role: '?∏Ïßë?? },
  ]);

  const deleteRow = (id: number) => {
    setData(data.filter(row => row.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Í∏∞Î≥∏ ?åÏù¥Î∏?*/}
      <div>
        <h3 className="text-lg font-semibold mb-2">Í∏∞Î≥∏ ?åÏù¥Î∏?/h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>?¥Î¶Ñ</TableHead>
              <TableHead>?¥Î©î??/TableHead>
              <TableHead>??ï†</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>?çÍ∏∏??/TableCell>
              <TableCell>hong@example.com</TableCell>
              <TableCell>Í¥ÄÎ¶¨Ïûê</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ÍπÄÏ≤†Ïàò</TableCell>
              <TableCell>kim@example.com</TableCell>
              <TableCell>?¨Ïö©??/TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* ?ôÏ†Å ?∞Ïù¥?∞Í? ?àÎäî ?åÏù¥Î∏?*/}
      <div>
        <h3 className="text-lg font-semibold mb-2">?ôÏ†Å ?∞Ïù¥???åÏù¥Î∏?/h3>
        <Table>
          <TableCaption>?¨Ïö©??Î™©Î°ù</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>?¥Î¶Ñ</TableHead>
              <TableHead>?¥Î©î??/TableHead>
              <TableHead>??ï†</TableHead>
              <TableHead>?°ÏÖò</TableHead>
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
                    ??†ú
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ?§Ì??ºÎßÅ???åÏù¥Î∏?*/}
      <div>
        <h3 className="text-lg font-semibold mb-2">?§Ì??ºÎßÅ???åÏù¥Î∏?/h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="h-12">?úÌíàÎ™?/TableHead>
                <TableHead>Í∞ÄÍ≤?/TableHead>
                <TableHead>?¨Í≥†</TableHead>
                <TableHead className="text-right">?ÅÌÉú</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">?∏Ìä∏Î∂?/TableCell>
                <TableCell>??,200,000</TableCell>
                <TableCell>15</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                    ?¨Í≥†?àÏùå
                  </span>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">ÎßàÏö∞??/TableCell>
                <TableCell>??5,000</TableCell>
                <TableCell>0</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-50 text-red-700">
                    ?àÏ†à
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
                      ?¥Î¶Ñ
                    </Label>
                    <Input
                      id="name"
                      value={newRow.name}
                      onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                      placeholder="?¥Î¶Ñ ?ÖÎ†•"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      ?¥Î©î??                    </Label>
                    <Input
                      id="email"
                      value={newRow.email}
                      onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
                      placeholder="?¥Î©î???ÖÎ†•"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="mb-2 block">
                      ??ï†
                    </Label>
                    <Input
                      id="role"
                      value={newRow.role}
                      onChange={(e) => setNewRow({ ...newRow, role: e.target.value })}
                      placeholder="??ï† ?ÖÎ†•"
                    />
                  </div>
                </div>
                <Button onClick={addRow} disabled={!newRow.name || !newRow.email || !newRow.role}>
                  ??Ï∂îÍ?
                </Button>
              </div>

              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableCaption>?¨Ïö©??Î™©Î°ù</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>?¥Î¶Ñ</TableHead>
                      <TableHead>?¥Î©î??/TableHead>
                      <TableHead>??ï†</TableHead>
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
