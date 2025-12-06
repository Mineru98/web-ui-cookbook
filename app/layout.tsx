import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Web UI 용어 정리",
    template: "%s | Web UI 용어 정리",
  },
  description:
    "웹 UI 개발에 필요한 주요 용어들을 정리한 사이트입니다. 프론트엔드 개발, 디자인 시스템, 사용자 인터페이스 관련 용어와 개념을 쉽게 이해하고 학습할 수 있습니다.",
  keywords: [
    "UI 용어",
    "웹 UI",
    "프론트엔드",
    "용어 정리",
    "UI 디자인",
    "웹 개발",
    "사용자 인터페이스",
    "디자인 시스템",
    "컴포넌트",
    "웹 표준",
  ],
  authors: [{ name: "EliceLab" }],
  creator: "EliceLab",
  publisher: "EliceLab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://web-ui-cookbook.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://web-ui-cookbook.vercel.app",
    title: "Web UI 용어 정리",
    description:
      "웹 UI 개발에 필요한 주요 용어들을 정리한 사이트입니다. 프론트엔드 개발, 디자인 시스템, 사용자 인터페이스 관련 용어와 개념을 쉽게 이해하고 학습할 수 있습니다.",
    siteName: "Web UI 용어 정리",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Web UI 용어 정리",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web UI 용어 정리",
    description:
      "웹 UI 개발에 필요한 주요 용어들을 정리한 사이트입니다. 프론트엔드 개발, 디자인 시스템, 사용자 인터페이스 관련 용어와 개념을 쉽게 이해하고 학습할 수 있습니다.",
    images: ["/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  generator: "Mineru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
