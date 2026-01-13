import { SectionHeading, CapabilityCard } from "../shared";
import contentData from "../../../content/welding.json";

export function CapabilitiesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <SectionHeading text={contentData.capabilities.title} />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">
          {contentData.capabilities.subtitle}
        </p>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {contentData.capabilities.items.map((item, index) => (
            <CapabilityCard key={index} text={item} />
          ))}
        </div>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black break-words">
          {contentData.capabilities.footer}
        </p>
      </div>
    </div>
  );
}
