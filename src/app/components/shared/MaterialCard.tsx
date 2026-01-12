interface MaterialCardProps {
  name: string;
}

export function MaterialCard({ name }: MaterialCardProps) {
  return (
    <div className="basis-0 grow h-[199px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[13px] relative size-full">
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
            <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
