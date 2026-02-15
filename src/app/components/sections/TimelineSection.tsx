import { SectionHeading, ButtonWithArrow } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function TimelineImage({ imageUrl, imageAlt }: { imageUrl?: string; imageAlt: string }) {
  const hasImage = imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('http'));
  
  return (
    <div className="hidden lg:flex bg-[#d9d9d9] h-[325px] relative w-full max-w-[680px] overflow-hidden">
      {hasImage ? (
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-12 py-12 relative size-full">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic relative text-xl text-black text-center">
              {imageAlt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function TimelineTable({ table }: { table: any }) {
  return (
    <div className="content-stretch flex gap-8 sm:gap-12 md:gap-[60px] items-start lg:items-center relative w-full lg:w-auto">
      <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-[23px] items-start relative">
        <p className="font-medium leading-[100%] tracking-[0%] not-italic relative text-base sm:text-[17px] md:text-[18px] text-black">
          {table.orderTypeLabel}
        </p>
        <div className="content-stretch flex flex-col font-normal leading-[120%] md:leading-[100%] tracking-[0%] gap-3 sm:gap-[16px] items-start not-italic relative text-sm sm:text-[15px] md:text-[16px] text-black">
          {table.rows.map((row: any, index: number) => (
            <p key={index} className="relative">
              {row.orderType}
            </p>
          ))}
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-[23px] items-start relative">
        <p className="font-medium leading-[110%] md:leading-[100%] tracking-[0%] not-italic relative text-base sm:text-[17px] md:text-[18px] text-black">
          {table.timelineLabel}
        </p>
        <div className="content-stretch flex flex-col font-normal leading-[120%] md:leading-[100%] tracking-[0%] gap-3 sm:gap-3.5 md:gap-[16px] items-start not-italic relative text-sm sm:text-[15px] md:text-[16px] text-black">
          {table.rows.map((row: any, index: number) => (
            <p key={index} className="relative">
              {row.timeline}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TimelineSection() {
  const contentData = usePageContent();
  const hasImage = contentData.timeline.imageUrl && (contentData.timeline.imageUrl.startsWith('/') || contentData.timeline.imageUrl.startsWith('http'));
  
  return (
    <div className="content-stretch flex items-start relative w-full">
      <div className="content-stretch flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-[22px] items-start min-h-px min-w-px relative w-full">
        <div className="w-full lg:basis-0 content-stretch flex flex-col lg:grow items-start justify-between min-h-px min-w-px relative lg:self-stretch">
          <div className="content-stretch flex flex-col gap-5 sm:gap-6 md:gap-[22px] items-start relative w-full">
            <SectionHeading text={contentData.timeline.title} />
            
            {/* Mobile/Tablet image (below title) */}
            <div className="lg:hidden w-full bg-[#d9d9d9] h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden">
              {hasImage ? (
                <img 
                  src={contentData.timeline.imageUrl} 
                  alt={contentData.timeline.imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center size-full px-4 sm:px-12">
                  <p className="font-normal leading-[100%] tracking-[0%] not-italic text-base sm:text-lg md:text-xl text-black text-center">
                    {contentData.timeline.imageAlt}
                  </p>
                </div>
              )}
            </div>
            
            <TimelineTable table={contentData.timeline.table} />
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <ButtonWithArrow text={contentData.timeline.buttonText} />
          </div>
        </div>
        <TimelineImage imageUrl={contentData.timeline.imageUrl} imageAlt={contentData.timeline.imageAlt} />
      </div>
    </div>
  );
}
