"use client";

import { type ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Home as HomeIcon,
} from "lucide-react";
import TitleSlide from "@/components/slides/title-slide";
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
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type SlideDef = {
  id: string;
  title: string;
  section: string;
  component: ReactElement;
};

const REST_SLIDES: SlideDef[] = [
  { id: "overview", title: "개요", section: "Intro", component: <OverviewSlide /> },

  { id: "text", title: "Text", section: "UI 요소", component: <TextSlide /> },
  { id: "button", title: "Button", section: "UI 요소", component: <ButtonSlide /> },
  { id: "icon-button", title: "Icon Button", section: "UI 요소", component: <IconButtonSlide /> },
  { id: "outlined-button", title: "Outlined Button", section: "UI 요소", component: <OutlinedButtonSlide /> },
  { id: "input", title: "Input", section: "UI 요소", component: <InputSlide /> },
  { id: "radio-button", title: "Radio Button", section: "UI 요소", component: <RadioButtonSlide /> },
  { id: "checkbox", title: "Checkbox", section: "UI 요소", component: <CheckBoxSlide /> },
  { id: "dropdown", title: "Dropdown", section: "UI 요소", component: <DropdownSlide /> },
  { id: "selector", title: "Selector", section: "UI 요소", component: <SelectorSlide /> },
  { id: "form", title: "Form", section: "UI 요소", component: <FormSlide /> },
  { id: "slider", title: "Slider", section: "UI 요소", component: <SliderSlide /> },
  { id: "divider", title: "Divider", section: "UI 요소", component: <DividerSlide /> },
  { id: "date-picker", title: "Date Picker", section: "UI 요소", component: <DatePickerSlide /> },
  { id: "time-picker", title: "Time Picker", section: "UI 요소", component: <TimePickerSlide /> },
  { id: "table", title: "Table", section: "UI 요소", component: <TableSlide /> },
  { id: "progress-bar", title: "Progress Bar", section: "UI 요소", component: <ProgressBarSlide /> },

  { id: "padding-margin", title: "Padding · Margin", section: "UI 속성", component: <PaddingMarginSlide /> },

  { id: "click", title: "Click", section: "UI 액션", component: <ClickSlide /> },
  { id: "drag", title: "Drag", section: "UI 액션", component: <DragSlide /> },
  { id: "gesture", title: "Gesture", section: "UI 액션", component: <GestureSlide /> },
  { id: "keyboard", title: "Keyboard", section: "UI 액션", component: <KeyboardSlide /> },

  { id: "card-view", title: "Card View", section: "고급 컴포넌트", component: <CardViewSlide /> },
  { id: "list-view", title: "List View", section: "고급 컴포넌트", component: <ListViewSlide /> },
  { id: "grid-view", title: "Grid View", section: "고급 컴포넌트", component: <GridViewSlide /> },
  { id: "scroll-view", title: "Scroll View", section: "고급 컴포넌트", component: <ScrollViewSlide /> },
  { id: "infinite-scroll", title: "Infinite Scroll", section: "고급 컴포넌트", component: <InfiniteScrollSlide /> },
  { id: "drawer", title: "Drawer", section: "고급 컴포넌트", component: <DrawerSlide /> },
  { id: "bottom-navigation", title: "Bottom Navigation", section: "고급 컴포넌트", component: <BottomNavigationSlide /> },
  { id: "bottom-sheet", title: "Bottom Sheet", section: "고급 컴포넌트", component: <BottomSheetSlide /> },
  { id: "app-bar", title: "App Bar", section: "고급 컴포넌트", component: <AppBarSlide /> },
  { id: "tab-bar", title: "Tab Bar", section: "고급 컴포넌트", component: <TabBarSlide /> },
  { id: "fab", title: "FAB", section: "고급 컴포넌트", component: <FabSlide /> },
  { id: "search-bar", title: "Search Bar", section: "고급 컴포넌트", component: <SearchBarSlide /> },
  { id: "hero", title: "Hero", section: "고급 컴포넌트", component: <HeroSlide /> },

  { id: "conclusion", title: "결론", section: "Outro", component: <ConclusionSlide /> },
];

export default function Home(): ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSlide = useCallback((index: number): void => {
    setCurrentSlide((s) => {
      const max = REST_SLIDES.length; // total - 1 (title is index 0)
      if (index < 0 || index > max) return s;
      return index;
    });
  }, []);

  const goToNext = useCallback((): void => {
    setCurrentSlide((s) => Math.min(s + 1, REST_SLIDES.length));
  }, []);

  const goToPrevious = useCallback((): void => {
    setCurrentSlide((s) => Math.max(s - 1, 0));
  }, []);

  const goToHome = useCallback((): void => {
    setCurrentSlide(0);
  }, []);

  const SLIDES = useMemo<SlideDef[]>(
    () => [
      {
        id: "title",
        title: "표지",
        section: "Intro",
        component: <TitleSlide onStart={goToNext} />,
      },
      ...REST_SLIDES,
    ],
    [goToNext],
  );

  const total = SLIDES.length;
  const progress = ((currentSlide + 1) / total) * 100;
  const active = SLIDES[currentSlide];

  const groupedSlides = useMemo(() => {
    const groups: Array<{ section: string; items: Array<SlideDef & { index: number }> }> = [];
    SLIDES.forEach((slide, index) => {
      const last = groups[groups.length - 1];
      if (last && last.section === slide.section) {
        last.items.push({ ...slide, index });
      } else {
        groups.push({ section: slide.section, items: [{ ...slide, index }] });
      }
    });
    return groups;
  }, [SLIDES]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (menuOpen) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToHome();
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(total - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goToNext, goToPrevious, goToHome, goToSlide, menuOpen, total]);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      {/* Slide stage */}
      <main className="relative flex-1 overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-transform duration-500 ease-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
            }`}
          >
            {slide.component}
          </div>
        ))}
      </main>

      {/* Progress */}
      <div
        className="h-0.5 w-full bg-border/60"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={currentSlide + 1}
        aria-label="슬라이드 진행률"
      >
        <div
          className="h-full bg-gradient-to-r from-primary to-sky-400 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Bottom nav */}
      <nav className="flex flex-shrink-0 items-center justify-between gap-2 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-5 sm:py-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToHome}
            aria-label="홈으로"
            className="press focus-ring h-9 w-9"
          >
            <HomeIcon className="h-4 w-4" />
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="목차"
                className="press focus-ring h-9 w-9"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              title="목차"
              description="슬라이드 목차"
              side="left"
              className="w-[88vw] max-w-[360px] sm:w-[400px]"
            >
              <div className="flex h-full flex-col">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Contents
                  </p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight">목차</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="num font-medium text-foreground">
                      {currentSlide + 1}
                    </span>{" "}
                    / <span className="num">{total}</span> 페이지
                  </p>
                </div>

                <div className="scrollbar-clean mt-5 flex-1 space-y-5 overflow-y-auto pr-1">
                  {groupedSlides.map((group) => (
                    <div key={group.section}>
                      <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {group.section}
                      </h3>
                      <div className="space-y-0.5">
                        {group.items.map((item) => {
                          const isActive = item.index === currentSlide;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => {
                                goToSlide(item.index);
                                setMenuOpen(false);
                              }}
                              className={`focus-ring press group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                isActive
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-secondary"
                              }`}
                              aria-current={isActive ? "page" : undefined}
                            >
                              <span
                                className={`num inline-flex h-6 min-w-[1.6rem] items-center justify-center rounded-md px-1.5 text-[11px] font-semibold tabular-nums ${
                                  isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-muted text-muted-foreground group-hover:bg-background"
                                }`}
                              >
                                {item.index + 1}
                              </span>
                              <span className="truncate font-medium">
                                {item.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex min-w-0 flex-col items-center gap-0.5 text-center">
          <span className="truncate text-xs font-medium text-foreground sm:text-sm">
            {active.title}
          </span>
          <span className="num text-[11px] text-muted-foreground tabular-nums">
            {currentSlide + 1} / {total}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            disabled={currentSlide === 0}
            aria-label="이전 슬라이드"
            className="press focus-ring h-9 w-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={goToNext}
            disabled={currentSlide === SLIDES.length - 1}
            aria-label="다음 슬라이드"
            className="press focus-ring h-9 w-9"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
