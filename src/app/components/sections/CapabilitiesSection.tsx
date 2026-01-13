import { SectionHeading, CapabilityCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function CapabilitiesSection() {
  const contentData = usePageContent();
  const { title, subtitle, items, footer } = contentData.capabilities;

  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[39px] items-start relative shrink-0 w-full">
      <SectionHeading text={title} />
      <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-normal leading-[130%] md:leading-[100%] tracking-[0%] not-italic relative shrink-0 text-lg sm:text-xl md:text-[24px] text-black">
          {subtitle}
        </p>
        <div className="content-stretch flex flex-wrap gap-4 sm:gap-5 md:gap-[20px] items-start relative shrink-0 w-full">
          {items.map((item: string, index: number) => (
            <CapabilityCard key={index} text={item} />
          ))}
        </div>
        <p className="font-normal leading-[130%] md:leading-[100%] tracking-[0%] not-italic relative shrink-0 text-lg sm:text-xl md:text-[24px] text-black">
          {footer}
        </p>
      </div>
    </div>
  );
}
