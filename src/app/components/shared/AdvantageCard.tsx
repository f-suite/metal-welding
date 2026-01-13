interface AdvantageCardProps {
  number: string;
  text: string;
  width?: string;
  height?: string;
}

export function AdvantageCard({ number, text, width = "w-[310px]", height = "h-[129px]" }: AdvantageCardProps) {
  return (
    <div className={`flex flex-col ${height} items-start px-[12px] pt-[10px] pb-[10px] relative shrink-0 ${width} overflow-hidden`}>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col justify-between font-normal leading-[100%] tracking-[0%] gap-[20px] items-end not-italic relative shrink-0 text-[16px] w-full h-full">
        <p className="relative shrink-0 text-[#9f9f9f] w-full">{number}</p>
        <p className="relative shrink-0 text-black w-full break-words">{text}</p>
      </div>
    </div>
  );
}
