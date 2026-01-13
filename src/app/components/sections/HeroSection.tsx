import { ButtonWithArrow } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function HeroImage({ imageAlt }: { imageAlt: string }) {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-[361px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroContent({ description, buttonText }: { description: string; buttonText: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-full break-words">
        {description}
      </p>
      <ButtonWithArrow text={buttonText} />
    </div>
  );
}

export function HeroSection() {
  const contentData = usePageContent();
  const { title, description, buttonText, imageAlt } = contentData.hero;

  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <div className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[56px] text-black uppercase w-full">
        <p className="mb-0 font-bold break-words">{title}</p>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <HeroContent description={description} buttonText={buttonText} />
        <HeroImage imageAlt={imageAlt} />
      </div>
    </div>
  );
}
