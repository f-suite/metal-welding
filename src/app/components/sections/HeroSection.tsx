import { ButtonWithArrow } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function HeroImage({ imageAlt, imageUrl }: { imageAlt: string; imageUrl?: string }) {
  return (
    <div className="hidden md:flex basis-0 bg-[#d9d9d9] grow h-[361px] min-h-px min-w-px relative shrink-0 overflow-hidden">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
              {imageAlt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function HeroContent({ description, buttonText }: { description: string; buttonText: string }) {
  return (
    <div className="w-full md:basis-0 content-stretch flex flex-col gap-5 md:gap-[23px] md:grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-normal leading-[130%] md:leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-base sm:text-lg md:text-[20px] text-black w-full">
        {description}
      </p>
      <ButtonWithArrow text={buttonText} />
    </div>
  );
}

export function HeroSection() {
  const contentData = usePageContent();
  const { title, titleMobile, description, buttonText, imageAlt, imageUrl } = contentData.hero;

  return (
    <div className="content-stretch flex flex-col gap-5 sm:gap-6 md:gap-[26px] items-start relative w-full">
      {/* Mobile title */}
      {titleMobile && (
        <div className="md:hidden font-bold leading-[110%] tracking-[0%] not-italic relative shrink-0 text-[32px] sm:text-[40px] text-black uppercase w-full">
          <p className="mb-0 font-bold">{titleMobile}</p>
        </div>
      )}
      {/* Desktop title */}
      <div className={`font-bold leading-[110%] md:leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-black uppercase w-full ${titleMobile ? 'hidden md:block' : ''}`}>
        <p className="mb-0 font-bold">{title}</p>
      </div>
      {/* Mobile image */}
      <div className="md:hidden w-full bg-[#d9d9d9] h-[240px] sm:h-[300px] relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-4 sm:px-12 py-8 sm:py-12 relative size-full">
              <p className="font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-base sm:text-lg text-black text-center">
                {imageAlt}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative w-full">
        <HeroContent description={description} buttonText={buttonText} />
        <HeroImage imageAlt={imageAlt} imageUrl={imageUrl} />
      </div>
    </div>
  );
}
