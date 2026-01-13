import { SectionHeading, CapabilityCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function CapabilitiesSection() {
  const contentData = usePageContent();
  const { title, subtitle, items, footer } = contentData.capabilities;

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <SectionHeading text={title} />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">
          {subtitle}
        </p>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {items.map((item: string, index: number) => (
            <CapabilityCard key={index} text={item} />
          ))}
        </div>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black break-words">
          {footer}
        </p>
      </div>
    </div>
  );
}
