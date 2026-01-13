import { SectionHeading, AdvantageCard } from "../shared";
import contentData from "../../../content/welding.json";

function AdvantagesImage() {
  return (
    <div className="bg-[#d9d9d9] flex h-[577px] items-center justify-center px-[280px] py-[204px] relative shrink-0 w-[650px]">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        {contentData.advantages.imageAlt}
      </p>
    </div>
  );
}

function AdvantagesCards() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full h-full">
      <div className="flex gap-[33px] items-start relative shrink-0">
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <AdvantageCard
            number={contentData.advantages.items[0].number}
            text={contentData.advantages.items[0].text}
          />
          <AdvantageCard
            number={contentData.advantages.items[2].number}
            text={contentData.advantages.items[2].text}
          />
        </div>
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <AdvantageCard
            number={contentData.advantages.items[1].number}
            text={contentData.advantages.items[1].text}
          />
          <AdvantageCard
            number={contentData.advantages.items[3].number}
            text={contentData.advantages.items[3].text}
          />
        </div>
      </div>
      <div className="flex items-stretch relative w-full flex-1 min-h-0">
        <AdvantageCard
          number={contentData.advantages.items[4].number}
          text={contentData.advantages.items[4].text}
          width="w-full max-w-[653px]"
          height="h-full"
        />
      </div>
    </div>
  );
}

export function AdvantagesSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex gap-[30px] items-stretch relative shrink-0 max-w-[1333px]">
        <AdvantagesImage />
        <div className="flex flex-col gap-[40px] items-start relative shrink-0 w-[653px] self-stretch">
          <SectionHeading text={contentData.advantages.title} />
          <div className="flex flex-col flex-1 min-h-0 relative shrink-0 w-full">
            <AdvantagesCards />
          </div>
        </div>
      </div>
    </div>
  );
}
