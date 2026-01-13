import { ButtonWithArrow } from "../shared";
import contentData from "../../../content/welding.json";

function HeroImage() {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-[361px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {contentData.hero.imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-full break-words">
        {contentData.hero.description}
      </p>
      <ButtonWithArrow text={contentData.hero.buttonText} />
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <div className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[56px] text-black uppercase w-full">
        <p className="mb-0 font-bold break-words">{contentData.hero.title}</p>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
}
