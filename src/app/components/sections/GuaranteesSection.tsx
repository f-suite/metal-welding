import { SectionHeading, GuaranteeCard } from "../shared";
import contentData from "../../../content/welding.json";

export function GuaranteesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <SectionHeading text={contentData.guarantees.title} />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {contentData.guarantees.items.map((guarantee, index) => (
            <GuaranteeCard key={index} text={guarantee} />
          ))}
        </div>
      </div>
    </div>
  );
}
