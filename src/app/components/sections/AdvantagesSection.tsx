import { SectionHeading, AdvantageCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function AdvantagesImage({ imageUrl, imageAlt }: { imageUrl?: string; imageAlt: string }) {
  const hasImage = imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('http'));

  return (
    <div className="hidden lg:flex bg-[#d9d9d9] items-center justify-center relative w-full max-w-[650px] aspect-square overflow-hidden">
      {hasImage ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center px-12 py-12 size-full">
          <p className="font-normal leading-[100%] tracking-[0%] not-italic relative text-xl text-black text-center">
            {imageAlt}
          </p>
        </div>
      )}
    </div>
  );
}

function AdvantagesCards({ items }: { items: any[] }) {
  return (
    <div className="content-stretch flex flex-col gap-5 sm:gap-6 md:gap-[30px] items-start relative w-full h-full">
      {/* Mobile/Tablet/Medium: single column, full width */}
      <div className="flex flex-col lg:hidden gap-5 sm:gap-6 md:gap-[30px] w-full">
        {items.map((item, index) => (
          <AdvantageCard
            key={index}
            number={item.number}
            text={item.text}
            width="w-full"
          />
        ))}
      </div>
      
      {/* Desktop (lg+): original 2-column layout */}
      <div className="hidden lg:flex flex-col gap-[30px] w-full h-full">
        <div className="flex gap-[33px] items-start">
          <div className="flex flex-col gap-[30px] items-start flex-1">
            <AdvantageCard
              number={items[0].number}
              text={items[0].text}
              width="w-[310px]"
            />
            {items[2] && (
              <AdvantageCard
                number={items[2].number}
                text={items[2].text}
                width="w-[310px]"
              />
            )}
          </div>
          <div className="flex flex-col gap-[30px] items-start flex-1">
            {items[1] && (
              <AdvantageCard
                number={items[1].number}
                text={items[1].text}
                width="w-[310px]"
              />
            )}
            {items[3] && (
              <AdvantageCard
                number={items[3].number}
                text={items[3].text}
                width="w-[310px]"
              />
            )}
          </div>
        </div>
        {items[4] && (
          <div className="flex items-stretch w-full flex-1 min-h-0">
            <AdvantageCard
              number={items[4].number}
              text={items[4].text}
              width="w-full max-w-[653px]"
              height="h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function AdvantagesSection() {
  const contentData = usePageContent();
  const hasImage = contentData.advantages.imageUrl && (contentData.advantages.imageUrl.startsWith('/') || contentData.advantages.imageUrl.startsWith('http'));

  return (
    <div className="content-stretch flex items-start relative w-full">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[30px] items-stretch relative w-full lg:max-w-[1333px]">
        {/* Desktop image (left side) */}
        <AdvantagesImage imageUrl={contentData.advantages.imageUrl} imageAlt={contentData.advantages.imageAlt} />
        
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-[40px] items-start relative w-full lg:flex-1 lg:max-w-[653px] self-stretch">
          <SectionHeading text={contentData.advantages.title} />
          
          {/* Mobile/Tablet image (below title) */}
          <div className="lg:hidden w-full bg-[#d9d9d9] aspect-square relative overflow-hidden">
            {hasImage ? (
              <img
                src={contentData.advantages.imageUrl}
                alt={contentData.advantages.imageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center size-full px-4 sm:px-12">
                <p className="font-normal leading-[100%] tracking-[0%] not-italic text-base sm:text-lg md:text-[24px] text-black text-center">
                  {contentData.advantages.imageAlt}
                </p>
              </div>
            )}
          </div>
          
          <div className="flex flex-col flex-1 min-h-0 relative w-full">
            <AdvantagesCards items={contentData.advantages.items} />
          </div>
        </div>
      </div>
    </div>
  );
}
