import { plugin as shadcn } from "@shadcn/lint"
import { defineConfig } from "eslint/config"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { shadcn },
    rules: {
      "shadcn/no-restyle": [
        "error",
        {
          allow: ["layout"],
          contracts: [
            // 텍스트 컴포넌트는 호출처가 타이포그래피·색을 정한다.
            // 커스텀 타이포 토큰은 em 자간이 부모 크기로 상속되는 문제가 있어
            // 감싸지 말고 요소에 직접 붙이도록 이름으로 허용한다.
            {
              pattern: "^Ko(Text|Heading)$",
              allow: [
                "layout",
                "typography",
                "color",
                "tracking-eyebrow",
                "tracking-eyebrow-wide",
                "leading-display",
              ],
            },
            { pattern: "^Button$", allow: ["layout", "press"] },
            // 목차 시트 너비(88vw)는 globals.css 의 w-sheet 로만 지정한다.
            { pattern: "^SheetContent$", allow: ["layout", "w-sheet"] },
          ],
        },
      ],
      "shadcn/no-raw-colors": "error",
      "shadcn/no-arbitrary-values": "error",
      "shadcn/no-inline-styles": "error",
      "shadcn/no-unknown-classes": [
        "error",
        {
          // Tailwind 가 아닌 라이브러리/마커 클래스. 이름으로만 허용한다.
          allow: [
            "day-range-end",
            "day-outside",
            "toaster",
            "destructive",
          ],
        },
      ],
      "shadcn/require-static-classes": "error",
    },
  },
  {
    // 컴포넌트는 자기 모양을 스스로 정하므로 구조적 값(ring-[3px] 등)을 허용한다.
    files: ["components/ui/**"],
    rules: {
      "shadcn/no-restyle": "off",
      "shadcn/no-arbitrary-values": "off",
      "shadcn/require-static-classes": "off",
    },
  },
])
