"use client";

import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SlideLayout from "../slide-layout";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
}

export default function InfiniteScrollSlide() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [codeType, setCodeType] = useState<"react">("react");
  const loaderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 더미 포스트 생성 헬퍼 함수
  const generatePosts = (pageNumber: number, limit: number) => {
    const startId = (pageNumber - 1) * limit + 1;
    const endId = startId + limit - 1;
    const result: Post[] = [];

    for (let id = startId; id <= endId; id++) {
      const post: Post = {
        id,
        title: `인피니트 스크롤에 맞는 포스트 #${id}`,
        content: `이것은 인피니트 스크롤을 시연하기 위한 더미 콘텐츠입니다. 이 포스트는 ID ${id}를 가지고 있습니다. 실제로는 API에서 데이터를 가져오겠지만,`,
        author: `사용자${(id % 5) + 1}`,
        date: new Date(Date.now() - id * 86400000).toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 20),
      };
      result.push(post);
    }

    return result;
  };

  // 페이지 로딩 함수
  const loadMorePosts = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // API 호출 시뮬레이션
    setTimeout(() => {
      const newPosts = generatePosts(page, 5);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);

      // 5페이지 이후에는 더 이상 페이지가 없다고 설정
      if (page >= 5) {
        setHasMore(false);
      }
    }, 1000);
  };

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, loading, hasMore]);

  // 초기 포스트 로딩
  useEffect(() => {
    loadMorePosts();
  }, []);

  const getReactCode = () => {
    return `import React, { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
}

interface InfiniteScrollProps {
  loadMore: () => Promise<Post[]>;
  hasMore: boolean;
  loading: boolean;
  className?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  loadMore,
  hasMore,
  loading,
  className = ''
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Intersection Observer를 활용한 무한 스크롤 구현
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, loading, hasMore]);

  const handleLoadMore = async () => {
    try {
      const newPosts = await loadMore();
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Failed to load more posts:', error);
    }
  };

  // 초기 페이지 로드
  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <div className={\`space-y-4 \${className}\`}>
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 border rounded-lg hover:shadow-sm transition-shadow bg-white"
        >
          <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-3">{post.content}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              작성자: {post.author} · {post.date}
            </div>
            <div>
              좋아요 {post.likes} · 댓글 {post.comments}
            </div>
          </div>
        </div>
      ))}

      {/* 로딩 표시기 */}
      <div
        ref={loaderRef}
        className="py-8 flex justify-center items-center"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
            <span className="text-gray-600">로딩 중..</span>
          </div>
        ) : !hasMore ? (
          <span className="text-gray-500">더 이상 포스트가 없습니다.</span>
        ) : null}
      </div>
    </div>
  );
};

// 사용 예시
const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // API 호출 시뮬레이션
  const generatePosts = (pageNumber: number, limit: number = 10): Post[] => {
    const startId = (pageNumber - 1) * limit + 1;
    const posts: Post[] = [];

    for (let id = startId; id < startId + limit; id++) {
      posts.push({
        id,
        title: \`포스트 제목 #\${id}\`,
        content: \`이것은 포스트 #\${id}의 내용입니다. 실제로는 API에서 데이터를 받아오겠지만,\`,
        author: \`사용자\${(id % 5) + 1}\`,
        date: new Date(Date.now() - id * 86400000).toLocaleDateString('ko-KR'),
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 20),
      });
    }

    return posts;
  };

  const loadMore = async (): Promise<Post[]> => {
    setLoading(true);

    // API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newPosts = generatePosts(currentPage, 10);
    
    // 5페이지 이후에는 더 이상 페이지가 없다고 설정
    if (currentPage >= 5) {
      setHasMore(false);
    }

    setCurrentPage(prev => prev + 1);
    setLoading(false);

    return newPosts;
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">무한 스크롤 예시</h1>
      <div className="h-96 overflow-y-auto border rounded-lg p-4">
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMore}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default App;`;
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
                  무한 스크롤을 사용하면 페이지 단위의 전달을 없이 자동으로 추가
                  콘텐츠를 로드하는 UX 패턴입니다. 별도로 페이지 이동이나
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
                      단위 커서 기반 페이지네이션 호출
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

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-blue-800">
                  장단점 비교
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">장점</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 연속적인 탐색 경험</li>
                      <li>• 페이지 전환 없음</li>
                      <li>• 사용자 참여 증대</li>
                      <li>• 모바일 친화적</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">단점</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 성능 이슈 가능성</li>
                      <li>• 특정 위치 찾기 어려움</li>
                      <li>• 접근성 문제 발생 가능</li>
                      <li>• SEO 최적화 어려움</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-yellow-800">
                  구현 시 고려사항
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 로딩 상태 표시기 제공</li>
                  <li>• 에러 처리 및 재시도 메커니즘</li>
                  <li>• 메모리 사용량 관리(데이터가 많을 경우)</li>
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
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">무한 스크롤 데모</h4>
                <div className="text-sm text-gray-500">
                  현재 {posts.length}개의 포스트가 로드됨
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                아래로 스크롤하면 추가 포스트가 자동으로 로드됩니다.
              </p>

              <div
                ref={containerRef}
                className="h-96 border rounded-lg overflow-y-auto bg-white p-4"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#49bcf3 #f1f1f1",
                }}
              >
                {posts.length > 0 ? (
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 border rounded-lg hover:shadow-sm transition-shadow"
                      >
                        <h4 className="font-medium text-lg">{post.title}</h4>
                        <p className="text-gray-600 my-2">{post.content}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <div>
                            작성자: {post.author} · {post.date}
                          </div>
                          <div>
                            좋아요 {post.likes} · 댓글 {post.comments}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* 로딩 표시기 */}
                    <div
                      ref={loaderRef}
                      className="py-4 flex justify-center items-center"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 text-[#49bcf3] animate-spin" />
                          <span className="text-gray-600">로딩 중..</span>
                        </div>
                      ) : !hasMore ? (
                        <span className="text-gray-500">
                          더 이상 포스트가 없습니다.
                        </span>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex justify-center items-center">
                    <Loader2 className="w-6 h-6 text-[#49bcf3] animate-spin" />
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
}
