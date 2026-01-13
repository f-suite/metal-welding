import { SectionHeading, ButtonWithArrow } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function TimelineImage({ imageUrl, imageAlt }: { imageUrl?: string; imageAlt: string }) {
  const hasImage = imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('http'));
  
  return (
    <div className="bg-[#d9d9d9] h-[325px] relative shrink-0 w-[680px] overflow-hidden">
      {hasImage ? (
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

function TimelineTable({ table }: { table: any }) {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[446px]">
      <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
        <p className="font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
          {table.orderTypeLabel}
        </p>
        <div className="content-stretch flex flex-col font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
          {table.rows.map((row: any, index: number) => (
            <p key={index} className="relative shrink-0">
              {row.orderType}
            </p>
          ))}
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
        <p className="font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
          {table.timelineLabel}
        </p>
        <div className="content-stretch flex flex-col font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
          {table.rows.map((row: any, index: number) => (
            <p key={index} className="relative shrink-0">
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
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
          <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
            <SectionHeading text={contentData.timeline.title} className="whitespace-nowrap" />
            <TimelineTable table={contentData.timeline.table} />
          </div>
          <ButtonWithArrow text={contentData.timeline.buttonText} />
        </div>
        <TimelineImage imageUrl={contentData.timeline.imageUrl} imageAlt={contentData.timeline.imageAlt} />
      </div>
    </div>
  );
}
