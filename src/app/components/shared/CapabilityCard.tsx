interface CapabilityCardProps {
  text: string;
}

export function CapabilityCard({ text }: CapabilityCardProps) {
  return (
    <div className="w-full sm:w-[calc(50%-10px)] lg:basis-0 content-stretch flex flex-col gap-2 sm:gap-2.5 md:gap-[10px] lg:grow items-start min-h-px min-w-px relative">
      <div className="bg-[#d9d9d9] shrink-0 size-10 sm:size-11 md:size-[46px]" />
      <p className="font-normal leading-[120%] md:leading-[100%] tracking-[0%] min-w-full not-italic relative text-xs sm:text-sm md:text-[14px] text-black w-full">
        {text}
      </p>
    </div>
  );
}
