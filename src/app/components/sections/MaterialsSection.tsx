import { SectionHeading, MaterialCard } from "../shared";
import contentData from "../../../content/welding.json";

export function MaterialsSection() {
  return (
    <div className="bg-[#f0f0f0] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[22px] items-start p-[30px] relative w-full">
          <SectionHeading text={contentData.materials.title} />
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black break-words">
            {contentData.materials.subtitle}
          </p>
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
            {contentData.materials.items.map((material, index) => (
              <MaterialCard key={index} name={material} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
