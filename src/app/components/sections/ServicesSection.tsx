import { SectionHeading, ServiceCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function ServicesSection() {
  const contentData = usePageContent();

  return (
    <div className="content-stretch flex flex-col gap-5 sm:gap-6 md:gap-[22px] items-start relative w-full">
      <SectionHeading text={contentData.services.title} />
      <div className="content-stretch flex flex-wrap gap-4 sm:gap-5 lg:gap-[20px] items-start relative w-full">
        {contentData.services.items.map((service: any, index: number) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
