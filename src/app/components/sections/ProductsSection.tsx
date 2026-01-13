import { SectionHeading, ProductCard } from "../shared";
import contentData from "../../../content/welding.json";

export function ProductsSection() {
  const firstRow = contentData.products.items.slice(0, 4);
  const secondRow = contentData.products.items.slice(4, 8);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
        <SectionHeading text={contentData.products.title} />
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {firstRow.map((product, index) => (
            <ProductCard key={index} name={product} />
          ))}
        </div>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {secondRow.map((product, index) => (
            <ProductCard key={index} name={product} />
          ))}
        </div>
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        {contentData.products.footer}
      </p>
    </div>
  );
}
