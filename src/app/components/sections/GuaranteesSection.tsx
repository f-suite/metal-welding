import { SectionHeading, GuaranteeCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function GuaranteesSection() {
  const contentData = usePageContent();
  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[39px] items-start relative w-full">
      <SectionHeading text={contentData.guarantees.title} />
      <div className="content-stretch flex flex-wrap gap-4 sm:gap-5 lg:gap-[20px] items-start relative w-full">
        {contentData.guarantees.items.map((guarantee: string, index: number) => (
          <GuaranteeCard key={index} text={guarantee} />
        ))}
      </div>
    </div>
  );
}
