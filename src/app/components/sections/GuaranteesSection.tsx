import { SectionHeading, GuaranteeCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function GuaranteesSection() {
  const contentData = usePageContent();
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <SectionHeading text={contentData.guarantees.title} />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {contentData.guarantees.items.map((guarantee: string, index: number) => (
            <GuaranteeCard key={index} text={guarantee} />
          ))}
        </div>
      </div>
    </div>
  );
}
