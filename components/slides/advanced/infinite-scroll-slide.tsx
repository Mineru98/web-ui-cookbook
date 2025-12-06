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
  const [codeType, setCodeType] = useState<"react">("react");
  const loaderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ?”ë? ?¬ìŠ¤???ì„± ?¬í¼ ?¨ìˆ˜
  const generatePosts = (pageNumber: number, limit: number) => {
    const startId = (pageNumber - 1) * limit + 1;
    const endId = startId + limit - 1;
    const result: Post[] = [];

    for (let id = startId; id <= endId; id++) {
      const post: Post = {
        id,
        title: `?¸í”¼?ˆíŠ¸ ?¤í¬ë¡¤ì— ?€???¬ìŠ¤??#${id}`,
        content: `?´ê²ƒ?€ ?¸í”¼?ˆíŠ¸ ?¤í¬ë¡??ˆì‹œë¥??„í•œ ?”ë? ì½˜í…ì¸ ì…?ˆë‹¤. ???¬ìŠ¤?¸ëŠ” ID ${id}ë¥?ê°€ì§€ê³??ˆìŠµ?ˆë‹¤. ?¤ì œë¡œëŠ” API?ì„œ ?°ì´?°ë? ê°€?¸ì˜¤ê²??©ë‹ˆ??`,
        author: `?¬ìš©??${(id % 5) + 1}`,
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

  // ?˜ì´ì§€ ë¡œë”© ?¨ìˆ˜
  const loadMorePosts = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    // API ?¸ì¶œ ?œë??ˆì´??    setTimeout(() => {
      const newPosts = generatePosts(page, 5);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);

      // 5?˜ì´ì§€ ?„ì—?????´ìƒ ?°ì´?°ê? ?†ë‹¤ê³??¤ì •
      if (page >= 5) {
        setHasMore(false);
      }
    }, 1000);
  };

  // Intersection Observer ?¤ì •
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

  // ì´ˆê¸° ?¬ìŠ¤??ë¡œë”©
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

  // Intersection Observerë¥??¬ìš©??ë¬´í•œ ?¤í¬ë¡?êµ¬í˜„
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

  // ì´ˆê¸° ?°ì´??ë¡œë“œ
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
              ?‘ì„±?? {post.author} ??{post.date}
            </div>
            <div>
              ì¢‹ì•„??{post.likes} ???“ê? {post.comments}
            </div>
          </div>
        </div>
      ))}

      {/* ë¡œë”© ?œì‹œê¸?*/}
      <div
        ref={loaderRef}
        className="py-8 flex justify-center items-center"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
            <span className="text-gray-600">ë¡œë”© ì¤?..</span>
          </div>
        ) : !hasMore ? (
          <span className="text-gray-500">???´ìƒ ?¬ìŠ¤?¸ê? ?†ìŠµ?ˆë‹¤.</span>
        ) : null}
      </div>
    </div>
  );
};

// ?¬ìš© ?ˆì‹œ
const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // API ?¸ì¶œ ?œë??ˆì´??  const generatePosts = (pageNumber: number, limit: number = 10): Post[] => {
    const startId = (pageNumber - 1) * limit + 1;
    const posts: Post[] = [];

    for (let id = startId; id < startId + limit; id++) {
      posts.push({
        id,
        title: \`?¬ìŠ¤???œëª© #\${id}\`,
        content: \`?´ê²ƒ?€ ?¬ìŠ¤??#\${id}???´ìš©?…ë‹ˆ?? ?¤ì œë¡œëŠ” API?ì„œ ?°ì´?°ë? ë°›ì•„?µë‹ˆ??\`,
        author: \`?¬ìš©??\${(id % 5) + 1}\`,
        date: new Date(Date.now() - id * 86400000).toLocaleDateString('ko-KR'),
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 20),
      });
    }

    return posts;
  };

  const loadMore = async (): Promise<Post[]> => {
    setLoading(true);

    // API ?¸ì¶œ ?œë??ˆì´??    await new Promise(resolve => setTimeout(resolve, 1000));

    const newPosts = generatePosts(currentPage, 10);
    
    // 5?˜ì´ì§€ ?„ì—?????´ìƒ ?°ì´?°ê? ?†ë‹¤ê³??¤ì •
    if (currentPage >= 5) {
      setHasMore(false);
    }

    setCurrentPage(prev => prev + 1);
    setLoading(false);

    return newPosts;
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">ë¬´í•œ ?¤í¬ë¡??ˆì‹œ</h1>
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
    <SlideLayout title="Infinite Scroll (ë¬´í•œ ?¤í¬ë¡?">
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">?¤ëª…</TabsTrigger>
            <TabsTrigger value="code">ì½”ë“œ</TabsTrigger>
            <TabsTrigger value="demo">?°ëª¨</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  ë¬´í•œ ?¤í¬ë¡¤ì´?€?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  ë¬´í•œ ?¤í¬ë¡¤ì? ?¬ìš©?ê? ?˜ì´ì§€ ?˜ë‹¨???„ë‹¬?ˆì„ ???ë™?¼ë¡œ ì¶”ê?
                  ì½˜í…ì¸ ë? ë¡œë“œ?˜ëŠ” UX ?¨í„´?…ë‹ˆ?? ë³„ë„???˜ì´ì§€ ?´ë™?´ë‚˜ '??ë³´ê¸°'
                  ë²„íŠ¼ ?†ì´ ?°ì†?ì¸ ì½˜í…ì¸??Œë¹„ ê²½í—˜???œê³µ?©ë‹ˆ??
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-800">
                    êµ¬í˜„ ë°©ì‹
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>??<strong>Intersection Observer API:</strong> ?”ì†Œê°€ ë·°í¬?¸ì— ?¤ì–´?”ëŠ”ì§€ ê°ì??˜ëŠ” ?„ë??ì¸ ë°©ì‹</li>
                    <li>??<strong>?¤í¬ë¡??´ë²¤??</strong> ?¤í¬ë¡??„ì¹˜ë¥?ì¶”ì ?˜ëŠ” ?„í†µ?ì¸ ë°©ì‹ (?±ëŠ¥ ì£¼ì˜)</li>
                    <li>??<strong>ê°€?í™”(Virtualization):</strong> ?€?‰ì˜ ?°ì´?°ì—???”ë©´??ë³´ì´????ª©ë§??Œë”ë§?/li>
                    <li>??<strong>?˜ì´ì§€?¤ì´??API ?œìš©:</strong> ?œë²„?ì„œ ?˜ì´ì§€ ?ëŠ” ì»¤ì„œ ê¸°ë°˜ ?°ì´???¸ì¶œ</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-800">
                    ?ìš© ?¬ë?
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>???Œì…œ ë¯¸ë””???¼ë“œ (Facebook, Twitter, Instagram ??</li>
                    <li>??ê²€??ê²°ê³¼ ëª©ë¡</li>
                    <li>???œí’ˆ ì¹´íƒˆë¡œê·¸</li>
                    <li>???´ìŠ¤ ?¼ë“œ</li>
                    <li>???´ë?ì§€ ê°¤ëŸ¬ë¦?/li>
                    <li>???“ê? ?¹ì…˜</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-blue-800">
                  ?¥ë‹¨??ë¹„êµ
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">?¥ì </h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>???°ì†?ì¸ ?ìƒ‰ ê²½í—˜</li>
                      <li>???˜ì´ì§€ ?„í™˜ ?†ìŒ</li>
                      <li>???¬ìš©??ì°¸ì—¬ ì¦ê?</li>
                      <li>??ëª¨ë°”??ì¹œí™”??/li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">?¨ì </h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>???±ëŠ¥ ?´ìŠˆ ê°€?¥ì„±</li>
                      <li>???¹ì • ??ª© ì°¾ê¸° ?´ë ¤?€</li>
                      <li>???‘ê·¼??ë¬¸ì œ ë°œìƒ ê°€??/li>
                      <li>??SEO ìµœì ???´ë ¤?€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-yellow-800">
                  êµ¬í˜„ ??ê³ ë ¤?¬í•­
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>??ë¡œë”© ?íƒœ ?œì‹œê¸??œê³µ</li>
                  <li>???ëŸ¬ ì²˜ë¦¬ ë°??¬ì‹œ??ë©”ì»¤?ˆì¦˜</li>
                  <li>??ë©”ëª¨ë¦??¬ìš©??ê´€ë¦?(??ª© ?˜ê? ë§ì„ ê²½ìš°)</li>
                  <li>???”ë°”?´ì‹±(debouncing) ?ëŠ” ?¤ë¡œ?€ë§?throttling) ?ìš©</li>
                  <li>??ì´ˆê¸° ë¡œë“œ ?œê°„ ìµœì ??/li>
                  <li>??SEO ë°??‘ê·¼??ê³ ë ¤</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">

            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                language="typescript"
                code={getReactCode()}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">ë¬´í•œ ?¤í¬ë¡??°ëª¨</h4>
                <div className="text-sm text-gray-500">
                  ?„ì¬ {posts.length}ê°??¬ìŠ¤??ë¡œë“œ??                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                ?„ë˜ë¡??¤í¬ë¡¤í•˜ë©?ì¶”ê? ?¬ìŠ¤?¸ë? ?ë™?¼ë¡œ ë¡œë“œ?©ë‹ˆ??
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
                            ?‘ì„±?? {post.author} ??{post.date}
                          </div>
                          <div>
                            ì¢‹ì•„??{post.likes} ???“ê? {post.comments}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* ë¡œë”© ?œì‹œê¸?*/}
                    <div
                      ref={loaderRef}
                      className="py-4 flex justify-center items-center"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 text-[#49bcf3] animate-spin" />
                          <span className="text-gray-600">ë¡œë”© ì¤?..</span>
                        </div>
                      ) : !hasMore ? (
                        <span className="text-gray-500">
                          ???´ìƒ ?¬ìŠ¤?¸ê? ?†ìŠµ?ˆë‹¤.
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