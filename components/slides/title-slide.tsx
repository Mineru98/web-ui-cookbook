export default function TitleSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#49bcf3] to-[#2a8bc4]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-center whitespace-nowrap">
        UI 컴포넌트 교육 자료
      </h1>
      <p className="text-lg sm:text-xl text-white/80 max-w-2xl text-center">
        모바일 애플리케이션 개발에 필요한 UI 컴포넌트, 속성, 액션에 대한 종합
        가이드
      </p>
    </div>
  );
}
