import { SectionHeading, AdvantageCard } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function AdvantagesImage({ imageUrl, imageAlt }: { imageUrl?: string; imageAlt: string }) {
  const hasImage = imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('http'));

  return (
    <div className="bg-[#d9d9d9] flex h-[577px] items-center justify-center relative shrink-0 w-[650px] overflow-hidden">
      {hasImage ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center px-[280px] py-[204px] size-full">
          <p className="font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {imageAlt}
          </p>
        </div>
      )}
    </div>
  );
}

function AdvantagesCards({ items }: { items: any[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full h-full">
      <div className="flex gap-[33px] items-start relative shrink-0">
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <AdvantageCard
            number={items[0].number}
            text={items[0].text}
          />
          <AdvantageCard
            number={items[2].number}
            text={items[2].text}
          />
        </div>
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <AdvantageCard
            number={items[1].number}
            text={items[1].text}
          />
          <AdvantageCard
            number={items[3].number}
            text={items[3].text}
          />
        </div>
      </div>
      <div className="flex items-stretch relative w-full flex-1 min-h-0">
        <AdvantageCard
          number={items[4].number}
          text={items[4].text}
          width="w-full max-w-[653px]"
          height="h-full"
        />
      </div>
    </div>
  );
}

export function AdvantagesSection() {
  const contentData = usePageContent();

  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex gap-[30px] items-stretch relative shrink-0 max-w-[1333px]">
        <AdvantagesImage imageUrl={contentData.advantages.imageUrl} imageAlt={contentData.advantages.imageAlt} />
        <div className="flex flex-col gap-[40px] items-start relative shrink-0 w-[653px] self-stretch">
          <SectionHeading text={contentData.advantages.title} />
          <div className="flex flex-col flex-1 min-h-0 relative shrink-0 w-full">
            <AdvantagesCards items={contentData.advantages.items} />
          </div>
        </div>
      </div>
    </div>
  );
}
