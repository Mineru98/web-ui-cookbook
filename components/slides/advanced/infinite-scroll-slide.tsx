"use client";

import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Loader2, MessageCircle } from "lucide-react";
import { type ReactElement, useCallback, useEffect, useRef, useState } from "react";
import SlideLayout from "../slide-layout";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  avatar: string;
  date: string;
  likes: number;
  comments: number;
  tag: string;
  accent: string;
}

const TOPICS: Array<{ title: string; content: string; tag: string; accent: string }> = [
  {
    title: "디자인 시스템 토큰 설계 노트",
    content:
      "색·간격·모션을 토큰으로 묶으면 디자이너와 엔지니어가 동일한 어휘로 대화할 수 있습니다.",
    tag: "Design System",
    accent: "from-sky-500/20 to-sky-500/0",
  },
  {
    title: "버튼 상태 8가지를 정리해봤어요",
    content:
      "default · hover · active · focus · disabled · loading · success · destructive — 인터랙션이 살아 있어야 신뢰감이 생깁니다.",
    tag: "Interaction",
    accent: "from-violet-500/20 to-violet-500/0",
  },
  {
    title: "모바일에서 한국어 줄바꿈, 어떻게 처리하시나요?",
    content:
      "word-break: keep-all 한 줄로 어색한 단어 끊김이 사라집니다. 작은 디테일이 가독성을 크게 바꿔요.",
    tag: "Typography",
    accent: "from-amber-500/20 to-amber-500/0",
  },
  {
    title: "스크롤 인터랙션, 어디까지 해보셨어요?",
    content:
      "Sticky · Parallax · Scroll-driven 애니메이션까지 — 스크롤은 이제 단순한 이동이 아니라 스토리텔링 도구입니다.",
    tag: "Motion",
    accent: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    title: "폼 입력 UX 체크리스트",
    content:
      "Label · Placeholder · Helper · Error 네 단계로 나눠 설계하면 사용자가 길을 잃지 않습니다.",
    tag: "Form UX",
    accent: "from-rose-500/20 to-rose-500/0",
  },
  {
    title: "다크 모드 컬러 토큰 만들기",
    content:
      "단순히 반전이 아니라 HSL 의 L 값을 곡선처럼 조절해야 시각적 대비가 자연스럽게 유지됩니다.",
    tag: "Color",
    accent: "from-indigo-500/20 to-indigo-500/0",
  },
  {
    title: "접근성 포커스 링 다시 보기",
    content:
      "outline: none 으로 지우지 말고, ring-offset 으로 배경과 분리해 보이게 디자인하세요.",
    tag: "A11y",
    accent: "from-teal-500/20 to-teal-500/0",
  },
  {
    title: "Bento Grid 가 다시 유행하는 이유",
    content:
      "동등한 카드의 단조로움을 깨고, 정보의 위계를 면적으로 표현할 수 있어 시선이 자연스럽게 흐릅니다.",
    tag: "Layout",
    accent: "from-fuchsia-500/20 to-fuchsia-500/0",
  },
];

const AUTHORS = [
  { name: "박도현", avatar: "🦊" },
  { name: "이서진", avatar: "🐻" },
  { name: "하윤서", avatar: "🐰" },
  { name: "정민재", avatar: "🦉" },
  { name: "김지안", avatar: "🦁" },
  { name: "최서연", avatar: "🐯" },
  { name: "장하린", avatar: "🐼" },
  { name: "오태경", avatar: "🦝" },
];

const BATCH_SIZE = 6;

function generatePosts(pageNumber: number, limit: number): Post[] {
  const startId = (pageNumber - 1) * limit + 1;
  const result: Post[] = [];

  for (let i = 0; i < limit; i += 1) {
    const id = startId + i;
    const topic = TOPICS[(id - 1) % TOPICS.length];
    const author = AUTHORS[(id - 1) % AUTHORS.length];
    const minutesAgo = id * 7 + Math.floor(Math.random() * 13);
    const date =
      minutesAgo < 60
        ? `${minutesAgo}분 전`
        : minutesAgo < 60 * 24
          ? `${Math.floor(minutesAgo / 60)}시간 전`
          : `${Math.floor(minutesAgo / (60 * 24))}일 전`;

    result.push({
      id,
      title: `#${id} ${topic.title}`,
      content: topic.content,
      author: author.name,
      avatar: author.avatar,
      date,
      likes: 12 + ((id * 37) % 240),
      comments: 1 + ((id * 11) % 38),
      tag: topic.tag,
      accent: topic.accent,
    });
  }

  return result;
}

function InfiniteScrollDemo(): ReactElement {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef(1);
  const loadingRef = useRef(false);

  const isLoaderInView = useCallback((): boolean => {
    const target = loaderRef.current;
    const root = containerRef.current;
    if (!target || !root) return false;
    const t = target.getBoundingClientRect();
    const r = root.getBoundingClientRect();
    return t.top < r.bottom + 240;
  }, []);

  const loadMore = useCallback((): void => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);

    setTimeout(() => {
      const nextPage = pageRef.current;
      const newPosts = generatePosts(nextPage, BATCH_SIZE);
      setPosts((prev) => [...prev, ...newPosts]);
      pageRef.current = nextPage + 1;
      loadingRef.current = false;
      setLoading(false);

      requestAnimationFrame(() => {
        if (isLoaderInView()) loadMore();
      });
    }, 600);
  }, [isLoaderInView]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const onScroll = (): void => {
      if (isLoaderInView()) loadMore();
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    loadMore();

    return () => {
      root.removeEventListener("scroll", onScroll);
    };
  }, [loadMore, isLoaderInView]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h4 className="text-lg font-semibold">무한 스크롤 데모</h4>
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="num tabular-nums">{posts.length}</span>
          <span>개 로드됨</span>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-600">
        아래로 스크롤하면 추가 포스트가 끝없이 자동으로 로드됩니다.
      </p>

      <div
        ref={containerRef}
        className="scrollbar-clean h-96 overflow-y-auto rounded-xl border border-border bg-muted/30 p-3 sm:p-4"
      >
        <div className="space-y-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="reveal-up group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${post.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative flex items-start gap-3">
                <div
                  aria-hidden
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background text-xl ring-1 ring-border"
                >
                  {post.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {post.author}
                    </span>
                    <span aria-hidden>·</span>
                    <span className="num tabular-nums">{post.date}</span>
                    <span className="ml-auto inline-flex items-center rounded-full bg-foreground/[0.06] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-foreground/70">
                      {post.tag}
                    </span>
                  </div>
                  <h5 className="mt-1.5 text-sm font-semibold leading-snug text-foreground sm:text-base">
                    {post.title}
                  </h5>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {post.content}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5" aria-hidden />
                      <span className="num tabular-nums">{post.likes}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle
                        className="h-3.5 w-3.5"
                        aria-hidden
                      />
                      <span className="num tabular-nums">{post.comments}</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div
            ref={loaderRef}
            className="flex items-center justify-center py-5"
            aria-live="polite"
          >
            {loading ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <Loader2
                  className="h-4 w-4 animate-spin text-primary"
                  aria-hidden
                />
                <span>새로운 포스트 불러오는 중…</span>
              </div>
            ) : (
              <span className="text-xs text-muted-foreground">
                조금만 더 내려보세요
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InfiniteScrollSlide(): ReactElement {
  const getReactCode = (): string => {
    return `import { useCallback, useEffect, useRef, useState } from 'react';

interface Post { id: number; title: string; }

function generatePosts(page: number, limit: number): Post[] {
  const start = (page - 1) * limit + 1;
  return Array.from({ length: limit }, (_, i) => ({
    id: start + i,
    title: \`#\${start + i} 새로운 포스트\`,
  }));
}

export function InfiniteList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  // refs avoid stale-closure bugs inside the observer callback
  const pageRef = useRef(1);
  const loadingRef = useRef(false);

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);

    setTimeout(() => {
      const nextPage = pageRef.current;
      setPosts((prev) => [...prev, ...generatePosts(nextPage, 6)]);
      pageRef.current = nextPage + 1;
      loadingRef.current = false;
      setLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    const target = loaderRef.current;
    const root = containerRef.current;
    if (!target || !root) return;

    const io = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && loadMore(),
      { root, threshold: 0, rootMargin: '120px' },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [loadMore]);

  useEffect(() => { loadMore(); }, [loadMore]);

  return (
    <div ref={containerRef} className="h-96 overflow-y-auto">
      {posts.map((p) => (
        <article key={p.id}>{p.title}</article>
      ))}
      <div ref={loaderRef}>{loading && 'Loading...'}</div>
    </div>
  );
}`;
  };

  return (
    <SlideLayout title="Infinite Scroll (무한 스크롤)">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  무한 스크롤이란?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  무한 스크롤을 사용하면 페이지 단위의 전환 없이 자동으로 추가
                  콘텐츠를 로드하는 UX 패턴입니다. 별도 페이지 이동이나
                  '더보기' 버튼 없이 연속적인 콘텐츠 탐색 경험을 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-800">
                    구현 방식
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • <strong>Intersection Observer API:</strong> 요소가
                      뷰포트에 들어오는지 감지하는 현대적인 방식
                    </li>
                    <li>
                      • <strong>스크롤 이벤트:</strong> 스크롤 위치를 추적하는
                      전통적인 방식 (성능 주의)
                    </li>
                    <li>
                      • <strong>가상화(Virtualization):</strong> 대량의 데이터에
                      대해 보이는 부분만 렌더링
                    </li>
                    <li>
                      • <strong>페이지네이션 API 활용:</strong> 서버에서 페이지
                      단위 또는 커서 기반 페이지네이션 호출
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-800">
                    사용 사례
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • 소셜 미디어 피드 (Facebook, Twitter, Instagram 등)
                    </li>
                    <li>• 검색 결과 목록</li>
                    <li>• 제품 카탈로그</li>
                    <li>• 뉴스 피드</li>
                    <li>• 이미지 갤러리</li>
                    <li>• 댓글 섹션</li>
                  </ul>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-sky-800">
                  장단점 비교
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-emerald-700 mb-2">장점</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 연속적인 탐색 경험</li>
                      <li>• 페이지 전환 없음</li>
                      <li>• 사용자 참여 증대</li>
                      <li>• 모바일 친화적</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-rose-700 mb-2">단점</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 성능 이슈 가능성</li>
                      <li>• 특정 위치 찾기 어려움</li>
                      <li>• 접근성 문제 발생 가능</li>
                      <li>• SEO 최적화 어려움</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-amber-800">
                  구현 시 고려사항
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 로딩 상태 표시기 제공</li>
                  <li>• 에러 처리 및 재시도 메커니즘</li>
                  <li>• 메모리 사용량 관리 (데이터가 많을 경우)</li>
                  <li>• 디바운싱(debouncing) 또는 스로틀링(throttling) 활용</li>
                  <li>• 초기 로드 시간 최적화</li>
                  <li>• SEO 및 접근성 고려</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode language="typescript" code={getReactCode()} />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <InfiniteScrollDemo />
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
