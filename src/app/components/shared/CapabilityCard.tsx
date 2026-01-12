interface CapabilityCardProps {
  text: string;
}

export function CapabilityCard({ text }: CapabilityCardProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-full break-words">
        {text}
      </p>
    </div>
  );
}
