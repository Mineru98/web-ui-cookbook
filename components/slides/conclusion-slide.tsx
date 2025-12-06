export default function ConclusionSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#49bcf3] to-[#2a8bc4]">
      <h1 className="text-4xl font-bold mb-8 text-white">결론</h1>

      <div className="max-w-2xl text-center text-white">
        <p className="text-xl mb-6">
          UI 컴포?�트?� ?�호?�용 방식???�???�해???�과?�인 ?�자?�과 개발??          ?�심?�니??
        </p>

        <ul className="text-left space-y-4 mb-8">
          <li className="flex items-start">
            <div className="mr-3 text-xl">??/div>
            <div>
              <strong className="text-white/90">?��????�어 ?�용</strong>
              <p className="text-white/80 text-base">
                ?� ?�체가 ?�일??UI ?�어�??�용?�면 ?�통�??�업???�활?�집?�다.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="mr-3 text-xl">??/div>
            <div>
              <strong className="text-white/90">?�용??경험 중심 ?�계</strong>
              <p className="text-white/80 text-base">
                ?�절??UI ?�소 ?�택?� 직�??�이�??�용?�기 ?�운 ?�터?�이?�로
                ?�어집니??
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="mr-3 text-xl">??/div>
            <div>
              <strong className="text-white/90">?�근??고려</strong>
              <p className="text-white/80 text-base">
                ?�양???�호?�용 방식??지?�하??모든 ?�용?��? ?�근?????�는
                UI�?구축?�세??
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="mr-3 text-xl">??/div>
            <div>
              <strong className="text-white/90">
                ?�사??가?�한 컴포?�트 ?�계
              </strong>
              <p className="text-white/80 text-base">
                ???�계??컴포?�트 ?�스?��? 개발 ?�율?�과 ?�자???��??�을
                ?�입?�다.
              </p>
            </div>
          </li>
        </ul>

        <div className="mt-8 bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">?�음 ?�계</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-white/20 p-4 rounded-md flex-1">
              <h4 className="font-medium mb-2">UI ?�자???�스??구축</h4>
              <p className="text-sm">
                조직 ?�체?�서 ?�용?????�는 ?��???컴포?�트 ?�이브러�?개발
              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-md flex-1">
              <h4 className="font-medium mb-2">?�용???�스??진행</h4>
              <p className="text-sm">
                ?�제 ?�용?��? ?�?�으�?UI 컴포?�트?� ?�호?�용 ?�스??              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-md flex-1">
              <h4 className="font-medium mb-2">최신 UI ?�렌???�습</h4>
              <p className="text-sm">
                지?�적???�습???�해 UI ?�자????�� ?�상
              </p>
            </div>
          </div>
        </div>

        <p className="text-xl mt-8 font-light">감사?�니??/p>
      </div>
    </div>
  );
}
