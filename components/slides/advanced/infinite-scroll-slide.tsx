"use client";

import SlideLayout from "../slide-layout";
import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { PrismCode } from "@/components/ui/prism/PrismCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [codeType, setCodeType] = useState<"react" | "flutter">("react");
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
        title: `인피니트 스크롤에 대한 포스트 #${id}`,
        content: `이것은 인피니트 스크롤 예시를 위한 더미 콘텐츠입니다. 이 포스트는 ID ${id}를 가지고 있습니다. 실제로는 API에서 데이터를 가져오게 됩니다.`,
        author: `사용자_${(id % 5) + 1}`,
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

      // 5페이지 후에는 더 이상 데이터가 없다고 설정
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

  // Intersection Observer를 사용한 무한 스크롤 구현
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

  // 초기 데이터 로드
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
              작성자: {post.author} • {post.date}
            </div>
            <div>
              좋아요 {post.likes} • 댓글 {post.comments}
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
            <span className="text-gray-600">로딩 중...</span>
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
        content: \`이것은 포스트 #\${id}의 내용입니다. 실제로는 API에서 데이터를 받아옵니다.\`,
        author: \`사용자_\${(id % 5) + 1}\`,
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
    
    // 5페이지 후에는 더 이상 데이터가 없다고 설정
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

  const getFlutterCode = () => {
    return `import 'package:flutter/material.dart';

class Post {
  final int id;
  final String title;
  final String content;
  final String author;
  final String date;
  final int likes;
  final int comments;

  Post({
    required this.id,
    required this.title,
    required this.content,
    required this.author,
    required this.date,
    required this.likes,
    required this.comments,
  });
}

class InfiniteScrollExample extends StatefulWidget {
  @override
  _InfiniteScrollExampleState createState() => _InfiniteScrollExampleState();
}

class _InfiniteScrollExampleState extends State<InfiniteScrollExample> {
  final ScrollController _scrollController = ScrollController();
  List<Post> _posts = [];
  int _currentPage = 1;
  bool _loading = false;
  bool _hasMore = true;

  @override
  void initState() {
    super.initState();
    _loadMorePosts();
    
    _scrollController.addListener(() {
      if (_scrollController.position.pixels >=
              _scrollController.position.maxScrollExtent - 200 &&
          !_loading &&
          _hasMore) {
        _loadMorePosts();
      }
    });
  }

  List<Post> _generatePosts(int pageNumber, int limit) {
    int startId = (pageNumber - 1) * limit + 1;
    List<Post> result = [];

    for (int id = startId; id < startId + limit; id++) {
      result.add(Post(
        id: id,
        title: '포스트 제목 #\$id',
        content: '이것은 포스트 #\$id의 내용입니다. 실제로는 API에서 데이터를 받아옵니다.',
        author: '사용자_\${(id % 5) + 1}',
        date: DateTime.now()
            .subtract(Duration(days: id))
            .toString()
            .substring(0, 10),
        likes: (id * 7) % 100,
        comments: (id * 3) % 20,
      ));
    }

    return result;
  }

  Future<void> _loadMorePosts() async {
    if (_loading || !_hasMore) return;

    setState(() {
      _loading = true;
    });

    // API 호출 시뮬레이션
    await Future.delayed(Duration(seconds: 1));

    List<Post> newPosts = _generatePosts(_currentPage, 10);

    setState(() {
      _posts.addAll(newPosts);
      _currentPage++;
      _loading = false;

      // 5페이지 후에는 더 이상 데이터가 없다고 설정
      if (_currentPage > 5) {
        _hasMore = false;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('무한 스크롤 예시'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: _posts.isEmpty && _loading
          ? Center(child: CircularProgressIndicator())
          : ListView.builder(
              controller: _scrollController,
              itemCount: _posts.length + (_hasMore ? 1 : 0),
              itemBuilder: (context, index) {
                if (index == _posts.length) {
                  // 로딩 표시기
                  return Container(
                    padding: EdgeInsets.all(16),
                    alignment: Alignment.center,
                    child: _loading
                        ? Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              CircularProgressIndicator(),
                              SizedBox(width: 16),
                              Text('로딩 중...'),
                            ],
                          )
                        : Text(
                            '더 이상 포스트가 없습니다.',
                            style: TextStyle(color: Colors.grey),
                          ),
                  );
                }

                final post = _posts[index];
                return Card(
                  margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  child: Padding(
                    padding: EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          post.title,
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          post.content,
                          style: TextStyle(
                            fontSize: 14,
                            color: Colors.grey[600],
                          ),
                        ),
                        SizedBox(height: 12),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              '작성자: \${post.author} • \${post.date}',
                              style: TextStyle(
                                fontSize: 12,
                                color: Colors.grey[500],
                              ),
                            ),
                            Text(
                              '좋아요 \${post.likes} • 댓글 \${post.comments}',
                              style: TextStyle(
                                fontSize: 12,
                                color: Colors.grey[500],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
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
                  무한 스크롤은 사용자가 페이지 하단에 도달했을 때 자동으로 추가
                  콘텐츠를 로드하는 UX 패턴입니다. 별도의 페이지 이동이나 '더 보기'
                  버튼 없이 연속적인 콘텐츠 소비 경험을 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-800">
                    구현 방식
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Intersection Observer API:</strong> 요소가 뷰포트에 들어왔는지 감지하는 현대적인 방식</li>
                    <li>• <strong>스크롤 이벤트:</strong> 스크롤 위치를 추적하는 전통적인 방식 (성능 주의)</li>
                    <li>• <strong>가상화(Virtualization):</strong> 대량의 데이터에서 화면에 보이는 항목만 렌더링</li>
                    <li>• <strong>페이지네이션 API 활용:</strong> 서버에서 페이지 또는 커서 기반 데이터 호출</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-800">
                    적용 사례
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 소셜 미디어 피드 (Facebook, Twitter, Instagram 등)</li>
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
                      <li>• 사용자 참여 증가</li>
                      <li>• 모바일 친화적</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">단점</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 성능 이슈 가능성</li>
                      <li>• 특정 항목 찾기 어려움</li>
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
                  <li>• 메모리 사용량 관리 (항목 수가 많을 경우)</li>
                  <li>• 디바운싱(debouncing) 또는 스로틀링(throttling) 적용</li>
                  <li>• 초기 로드 시간 최적화</li>
                  <li>• SEO 및 접근성 고려</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="flex justify-center mb-4">
              <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
                <button
                  onClick={() => setCodeType("react")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    codeType === "react"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  React + TypeScript
                </button>
                <button
                  onClick={() => setCodeType("flutter")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    codeType === "flutter"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Flutter + Dart
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language={codeType === "react" ? "typescript" : "dart"}
                code={codeType === "react" ? getReactCode() : getFlutterCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">무한 스크롤 데모</h4>
                <div className="text-sm text-gray-500">
                  현재 {posts.length}개 포스트 로드됨
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                아래로 스크롤하면 추가 포스트를 자동으로 로드합니다.
              </p>

              <div
                ref={containerRef}
                className="h-96 border rounded-lg overflow-y-auto bg-white p-4"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#6700e6 #f1f1f1",
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
                            작성자: {post.author} • {post.date}
                          </div>
                          <div>
                            좋아요 {post.likes} • 댓글 {post.comments}
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
                          <Loader2 className="w-5 h-5 text-[#6700e6] animate-spin" />
                          <span className="text-gray-600">로딩 중...</span>
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
                    <Loader2 className="w-6 h-6 text-[#6700e6] animate-spin" />
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