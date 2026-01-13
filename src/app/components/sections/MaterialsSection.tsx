import { SectionHeading, MaterialCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function MaterialsSection() {
  const contentData = usePageContent();
  return (
    <div className="bg-[#f0f0f0] relative w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-5 sm:gap-6 md:gap-[22px] items-start p-4 sm:p-6 md:p-[30px] relative w-full">
          <SectionHeading text={contentData.materials.title} />
          <p className="font-normal leading-[130%] md:leading-[100%] tracking-[0%] not-italic relative text-lg sm:text-xl md:text-[24px] text-black">
            {contentData.materials.subtitle}
          </p>
          <div className="content-stretch flex flex-wrap gap-4 sm:gap-5 lg:gap-[20px] items-start relative w-full">
            {contentData.materials.items.map((material: string, index: number) => (
              <MaterialCard key={index} name={material} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
