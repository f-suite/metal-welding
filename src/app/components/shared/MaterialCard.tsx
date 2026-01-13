interface MaterialCardProps {
  name: string;
}

export function MaterialCard({ name }: MaterialCardProps) {
  return (
    <div className="w-full sm:w-[calc(50%-10px)] lg:basis-0 lg:grow h-[160px] sm:h-[180px] md:h-[199px] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-3 sm:p-[13px] relative size-full">
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative w-full">
            <div className="bg-[#d9d9d9] shrink-0 size-10 sm:size-11 md:size-[46px]" />
            <div className="content-stretch flex flex-col items-start relative w-full">
              <p className="font-medium leading-[110%] md:leading-[100%] tracking-[0%] not-italic relative text-base sm:text-[17px] md:text-[18px] text-black w-full">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
