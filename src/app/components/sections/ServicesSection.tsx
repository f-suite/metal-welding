import { SectionHeading, ServiceCard } from "../shared";
import contentData from "../../../content/welding.json";

export function ServicesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <SectionHeading text={contentData.services.title} />
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        {contentData.services.items.map((service, index) => (
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
