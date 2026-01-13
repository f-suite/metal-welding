import { SectionHeading, ProductCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function ProductsSection() {
  const contentData = usePageContent();

  return (
    <div className="content-stretch flex flex-col gap-8 sm:gap-10 md:gap-[40px] items-start relative w-full">
      <div className="content-stretch flex flex-col gap-5 sm:gap-6 md:gap-[22px] items-start relative w-full">
        <SectionHeading text={contentData.products.title} />
        <div className="content-stretch flex flex-wrap gap-4 sm:gap-5 lg:gap-[20px] items-start relative w-full">
          {contentData.products.items.map((product: string, index: number) => (
            <ProductCard key={index} name={product} />
          ))}
        </div>
      </div>
      <p className="font-normal leading-[130%] md:leading-[100%] tracking-[0%] not-italic relative text-lg sm:text-xl md:text-[24px] text-black">
        {contentData.products.footer}
      </p>
    </div>
  );
}
