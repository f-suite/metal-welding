import { SectionHeading, ButtonWithArrow } from "../shared";
import contentData from "../../../content/welding.json";

function TimelineImage() {
  return (
    <div className="bg-[#d9d9d9] h-[325px] relative shrink-0 w-[680px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {contentData.timeline.imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

function TimelineTable() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[446px]">
      <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
          {contentData.timeline.table.orderTypeLabel}
        </p>
        <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
          {contentData.timeline.table.rows.map((row, index) => (
            <p key={index} className="relative shrink-0">
              {row.orderType}
            </p>
          ))}
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
          {contentData.timeline.table.timelineLabel}
        </p>
        <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
          {contentData.timeline.table.rows.map((row, index) => (
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
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
          <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
            <SectionHeading text={contentData.timeline.title} className="whitespace-nowrap" />
            <TimelineTable />
          </div>
          <ButtonWithArrow text={contentData.timeline.buttonText} />
        </div>
        <TimelineImage />
      </div>
    </div>
  );
}
