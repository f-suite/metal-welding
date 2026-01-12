interface ProductCardProps {
  name: string;
}

export function ProductCard({ name }: ProductCardProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[145px] shrink-0 w-full" />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full">
        {name}
      </p>
    </div>
  );
}
