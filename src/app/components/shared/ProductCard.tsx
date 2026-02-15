interface ProductCardProps {
  name: string;
}

export function ProductCard({ name }: ProductCardProps) {
  return (
    <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] content-stretch flex flex-col gap-2 sm:gap-2.5 md:gap-[10px] items-start min-h-px min-w-px relative">
      <div className="bg-[#d9d9d9] h-[120px] sm:h-[135px] md:h-[145px] w-full" />
      <p className="font-normal leading-[120%] md:leading-[100%] tracking-[0%] not-italic relative text-xs sm:text-[13px] md:text-[14px] text-black w-full">
        {name}
      </p>
    </div>
  );
}
