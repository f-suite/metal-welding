import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import svgPaths from "../../imports/svg-mj3zdjuk7f";

export function WorksSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[350px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase whitespace-nowrap">Наши работы</p>
          </div>
          <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="bg-[#e9e9e9] content-stretch flex items-center p-[18px] relative size-[60px] hover:bg-[#d0d0d0] transition-colors">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="arrow_forward_ios">
                        <mask height="24" id="mask0_4_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                          <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                        </mask>
                        <g mask="url(#mask0_4_370)">
                          <path d={svgPaths.p11a80500} fill="var(--fill-0, #1C1B1F)" id="arrow_forward_ios_2" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-[#d9d9d9] content-stretch flex items-center p-[18px] relative shrink-0 size-[60px] hover:bg-[#c0c0c0] transition-colors cursor-pointer"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="arrow_forward_ios">
                    <mask height="24" id="mask0_4_371" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                    </mask>
                    <g mask="url(#mask0_4_371)">
                      <path d={svgPaths.p11a80500} fill="var(--fill-0, #1C1B1F)" id="arrow_forward_ios_2" />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="px-[11px]">
                <div className="bg-[#d9d9d9] h-[361px] w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
                      <p className="font-['Montserrat',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
