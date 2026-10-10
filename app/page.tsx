"use client";

import {
  type CSSProperties,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import OverviewSlide from "@/components/slides/overview-slide";
import TextSlide from "@/components/slides/components/text-slide";
import ButtonSlide from "@/components/slides/components/button-slide";
import IconButtonSlide from "@/components/slides/components/icon-button-slide";
import OutlinedButtonSlide from "@/components/slides/components/outlined-button-slide";
import InputSlide from "@/components/slides/components/input-slide";
import RadioButtonSlide from "@/components/slides/components/radio-button-slide";
import CheckBoxSlide from "@/components/slides/components/checkbox-slide";
import DropdownSlide from "@/components/slides/components/dropdown-slide";
import SelectorSlide from "@/components/slides/components/selector-slide";
import FormSlide from "@/components/slides/components/form-slide";
import SliderSlide from "@/components/slides/components/slider-slide";
import DividerSlide from "@/components/slides/components/divider-slide";
import DatePickerSlide from "@/components/slides/components/date-picker-slide";
import TimePickerSlide from "@/components/slides/components/time-picker-slide";
import TableSlide from "@/components/slides/components/table-slide";
import ProgressBarSlide from "@/components/slides/components/progress-bar-slide";
import PaddingMarginSlide from "@/components/slides/properties/padding-margin-slide";
import ClickSlide from "@/components/slides/actions/click-slide";
import DragSlide from "@/components/slides/actions/drag-slide";
import GestureSlide from "@/components/slides/actions/gesture-slide";
import KeyboardSlide from "@/components/slides/actions/keyboard-slide";
import CardViewSlide from "@/components/slides/advanced/card-view-slide";
import ListViewSlide from "@/components/slides/advanced/list-view-slide";
import GridViewSlide from "@/components/slides/advanced/grid-view-slide";
import ScrollViewSlide from "@/components/slides/advanced/scroll-view-slide";
import InfiniteScrollSlide from "@/components/slides/advanced/infinite-scroll-slide";
import DrawerSlide from "@/components/slides/advanced/drawer-slide";
import BottomNavigationSlide from "@/components/slides/advanced/bottom-navigation-slide";
import BottomSheetSlide from "@/components/slides/advanced/bottom-sheet-slide";
import AppBarSlide from "@/components/slides/advanced/app-bar-slide";
import TabBarSlide from "@/components/slides/advanced/tab-bar-slide";
import FabSlide from "@/components/slides/advanced/fab-slide";
import SearchBarSlide from "@/components/slides/advanced/search-bar-slide";
import HeroSlide from "@/components/slides/advanced/hero-slide";
import ConclusionSlide from "@/components/slides/conclusion-slide";
import { CoverScreen } from "@/components/cookbook/cover-screen";
import { LessonScreen, type ArticleMotion } from "@/components/cookbook/lesson-screen";
import { prefersReducedMotion } from "@/components/cookbook/motion";
import { OverviewScreen } from "@/components/cookbook/overview-screen";
import { LESSONS } from "@/lib/lessons";

type Screen = "cover" | "overview" | "lesson";
type LayerMotion = "none" | "reveal" | "recede" | "leave";
type Origin = { x: number; y: number; r: number };
type Rect = { l: number; t: number; w: number; h: number };
type ZoomState = { rect: Rect; stage: 0 | 1 | 2 };

/** 레슨 id → 본문 슬라이드 (순서와 메타는 lib/lessons.ts 가 정한다) */
const SLIDE_BODIES: Record<string, ReactElement> = {
  "overview": <OverviewSlide />,
  "text": <TextSlide />,
  "button": <ButtonSlide />,
  "icon-button": <IconButtonSlide />,
  "outlined-button": <OutlinedButtonSlide />,
  "input": <InputSlide />,
  "radio-button": <RadioButtonSlide />,
  "checkbox": <CheckBoxSlide />,
  "dropdown": <DropdownSlide />,
  "selector": <SelectorSlide />,
  "form": <FormSlide />,
  "slider": <SliderSlide />,
  "divider": <DividerSlide />,
  "date-picker": <DatePickerSlide />,
  "time-picker": <TimePickerSlide />,
  "table": <TableSlide />,
  "progress-bar": <ProgressBarSlide />,
  "padding-margin": <PaddingMarginSlide />,
  "click": <ClickSlide />,
  "drag": <DragSlide />,
  "gesture": <GestureSlide />,
  "keyboard": <KeyboardSlide />,
  "card-view": <CardViewSlide />,
  "list-view": <ListViewSlide />,
  "grid-view": <GridViewSlide />,
  "scroll-view": <ScrollViewSlide />,
  "infinite-scroll": <InfiniteScrollSlide />,
  "drawer": <DrawerSlide />,
  "bottom-navigation": <BottomNavigationSlide />,
  "bottom-sheet": <BottomSheetSlide />,
  "app-bar": <AppBarSlide />,
  "tab-bar": <TabBarSlide />,
  "fab": <FabSlide />,
  "search-bar": <SearchBarSlide />,
  "hero": <HeroSlide />,
  "conclusion": <ConclusionSlide />,
};

const LAST_INDEX = LESSONS.length - 1;

const LAYER_MOTION_CLASS: Record<LayerMotion, string> = {
  none: "",
  reveal: "anim-reveal",
  recede: "anim-recede",
  leave: "anim-leave",
};

type ScreenLayerProps = {
  isTop: boolean;
  motion: LayerMotion;
  origin: Origin;
  children: ReactNode;
};

function ScreenLayer({ isTop, motion, origin, children }: ScreenLayerProps): ReactElement {
  const vars = {
    "--x": `${origin.x}px`,
    "--y": `${origin.y}px`,
    "--r": `${origin.r}px`,
  } as CSSProperties;
  return (
    <div
      className={
        isTop
          ? `absolute inset-0 z-2 overflow-hidden bg-background ${LAYER_MOTION_CLASS[motion]}`
          : `absolute inset-0 z-1 overflow-hidden bg-background ${LAYER_MOTION_CLASS[motion]}`
      }
      style={vars}
    >
      {children}
    </div>
  );
}

const EMPTY_RECT: Rect = { l: 0, t: 0, w: 0, h: 0 };

export default function Home(): ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  /** 슬라이드 전환 중에도 "다음 목표 레슨"을 즉시 반영해 연속 입력이 이어지게 한다 */
  const indexRef = useRef(0);

  const [screen, setScreen] = useState<Screen>("cover");
  const [prev, setPrev] = useState<Screen | null>(null);
  const [mode, setMode] = useState<"reveal" | null>(null);
  const [leaving, setLeaving] = useState(false);
  const [origin, setOrigin] = useState<Origin>({ x: 0, y: 0, r: 0 });
  const [zoom, setZoom] = useState<ZoomState | null>(null);
  const [index, setIndex] = useState(0);
  const [visited, setVisited] = useState<ReadonlySet<number>>(new Set());
  const [articleMotion, setArticleMotion] = useState<ArticleMotion>("none");
  const [tab, setTab] = useState("all");
  const [gridKey, setGridKey] = useState(0);

  const clearTimers = (): void => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };
  const later = (fn: () => void, ms: number): void => {
    timers.current.push(setTimeout(fn, ms));
  };

  useEffect(() => clearTimers, []);

  /** 클릭 지점(없으면 화면 중앙)과 그 지점에서 화면 끝까지의 거리를 root 기준으로 잰다 */
  const measure = (e: MouseEvent<HTMLElement> | null): Origin & { rect: Rect } => {
    const root = rootRef.current;
    if (!root) return { x: 0, y: 0, r: 2400, rect: EMPTY_RECT };
    const R = root.getBoundingClientRect();
    const b = e ? e.currentTarget.getBoundingClientRect() : R;
    const x = (e && e.clientX ? e.clientX : b.left + b.width / 2) - R.left;
    const y = (e && e.clientY ? e.clientY : b.top + b.height / 2) - R.top;
    const r = Math.ceil(Math.hypot(Math.max(x, R.width - x), Math.max(y, R.height - y))) + 24;
    return { x, y, r, rect: { l: b.left - R.left, t: b.top - R.top, w: b.width, h: b.height } };
  };

  const openLesson = (i: number, motion: ArticleMotion = "none"): void => {
    indexRef.current = i;
    setIndex(i);
    setArticleMotion(motion);
    setVisited((v) => new Set(v).add(i));
  };

  const showOverview = (nextTab: string): void => {
    setTab(nextTab);
    setGridKey((k) => k + 1);
  };

  const settle = (target: Screen): void => {
    setScreen(target);
    setPrev(null);
    setMode(null);
    setLeaving(false);
    setZoom(null);
  };

  /** 표지 → 레슨/목차: 클릭 지점에서 원형으로 번지며 이전 화면은 뒤로 물러난다 */
  const reveal = (e: MouseEvent<HTMLElement> | null, target: Screen, before: () => void): void => {
    clearTimers();
    before();
    if (prefersReducedMotion()) {
      settle(target);
      return;
    }
    const o = measure(e);
    setOrigin({ x: o.x, y: o.y, r: o.r });
    setPrev(screen);
    setScreen(target);
    setMode("reveal");
    setLeaving(false);
    setZoom(null);
    later(() => {
      setPrev(null);
      setMode(null);
    }, 860);
  };

  /** 레슨 → 표지/목차: 현재 화면이 작아지며 사라진 뒤 대상 화면이 등장한다 */
  const recede = (target: Screen, before: () => void): void => {
    clearTimers();
    if (prefersReducedMotion()) {
      before();
      settle(target);
      return;
    }
    setLeaving(true);
    setPrev(null);
    setMode(null);
    later(() => {
      before();
      settle(target);
    }, 260);
  };

  /** 목차 카드 → 레슨: 카드 사각형이 전체 화면으로 커진 뒤 레슨이 떠오른다 */
  const zoomTo = (e: MouseEvent<HTMLElement>, i: number): void => {
    clearTimers();
    if (prefersReducedMotion()) {
      openLesson(i);
      settle("lesson");
      return;
    }
    const o = measure(e);
    setZoom({ rect: o.rect, stage: 0 });
    setPrev(null);
    setMode(null);
    setLeaving(false);
    later(() => setZoom((z) => (z ? { ...z, stage: 1 } : z)), 30);
    later(() => {
      openLesson(i);
      setScreen("lesson");
      setZoom((z) => (z ? { ...z, stage: 2 } : z));
    }, 560);
    later(() => setZoom(null), 900);
  };

  /** 레슨 ↔ 레슨: 본문만 빠져나가고 새 본문이 진행 방향에서 들어온다 */
  const slide = (i: number): void => {
    const cur = indexRef.current;
    if (i < 0 || i > LAST_INDEX || i === cur) return;
    const forward = i > cur;
    clearTimers();
    indexRef.current = i;
    if (prefersReducedMotion()) {
      openLesson(i);
      return;
    }
    setArticleMotion(forward ? "out-left" : "out-right");
    later(() => openLesson(i, forward ? "in-right" : "in-left"), 200);
  };

  const goCover = (): void => recede("cover", () => undefined);
  const goOverview = (): void => recede("overview", () => showOverview("all"));

  const handleKey = (e: KeyboardEvent): void => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const target = e.target as HTMLElement | null;
    if (target && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) return;
    if (prev || zoom || leaving) return;

    const isNext = e.key === "ArrowRight" || e.key === "PageDown";
    const isPrev = e.key === "ArrowLeft" || e.key === "PageUp";
    if (!isNext && !isPrev && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();

    if (screen === "cover") {
      if (isNext) reveal(null, "lesson", () => openLesson(0));
      else if (e.key === "End") reveal(null, "lesson", () => openLesson(LAST_INDEX));
    } else if (screen === "overview") {
      if (e.key === "Home") goCover();
    } else if (isNext) slide(indexRef.current + 1);
    else if (isPrev) slide(indexRef.current - 1);
    else if (e.key === "Home") goCover();
    else slide(LAST_INDEX);
  };

  const keyHandler = useRef(handleKey);
  useEffect(() => {
    keyHandler.current = handleKey;
  });
  useEffect(() => {
    const listener = (e: KeyboardEvent): void => keyHandler.current(e);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  const motionOf = (name: Screen): LayerMotion => {
    if (screen === name) return mode === "reveal" ? "reveal" : leaving ? "leave" : "none";
    return mode === "reveal" ? "recede" : "none";
  };
  const isOn = (name: Screen): boolean => screen === name || prev === name;

  return (
    <div ref={rootRef} className="relative h-dvh min-h-160 overflow-hidden bg-background text-foreground">
      {isOn("cover") ? (
        <ScreenLayer isTop={screen === "cover"} motion={motionOf("cover")} origin={origin}>
          <CoverScreen
            onStart={(e) => reveal(e, "lesson", () => openLesson(0))}
            onOverview={(e, nextTab) => reveal(e, "overview", () => showOverview(nextTab))}
            onResume={(e) => reveal(e, "lesson", () => openLesson(indexRef.current))}
          />
        </ScreenLayer>
      ) : null}

      {isOn("overview") ? (
        <ScreenLayer isTop={screen === "overview"} motion={motionOf("overview")} origin={origin}>
          <OverviewScreen
            currentIndex={index}
            visited={visited}
            tab={tab}
            gridKey={gridKey}
            onTab={showOverview}
            onOpen={zoomTo}
            onBack={goCover}
          />
        </ScreenLayer>
      ) : null}

      {isOn("lesson") ? (
        <ScreenLayer isTop={screen === "lesson"} motion={motionOf("lesson")} origin={origin}>
          <LessonScreen
            index={index}
            visited={visited}
            articleMotion={articleMotion}
            onHome={goCover}
            onOverview={goOverview}
            onSlide={slide}
          >
            {SLIDE_BODIES[LESSONS[index].id]}
          </LessonScreen>
        </ScreenLayer>
      ) : null}

      {zoom ? (
        <div
          aria-hidden
          data-stage={zoom.stage}
          className="zoom-overlay pointer-events-none z-5 box-border border border-primary bg-primary-soft"
          style={
            {
              "--zl": `${zoom.rect.l}px`,
              "--zt": `${zoom.rect.t}px`,
              "--zw": `${zoom.rect.w}px`,
              "--zh": `${zoom.rect.h}px`,
            } as CSSProperties
          }
        />
      ) : null}
    </div>
  );
}
