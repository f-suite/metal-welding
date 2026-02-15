interface WorkflowStepProps {
  number: string;
  title: string;
}

export function WorkflowStep({ number, title }: WorkflowStepProps) {
  return (
    <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-[20px] items-start relative w-full">
      <div className="h-0 relative w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center sm:justify-between relative w-full">
        <div className="bg-[#d9d9d9] shrink-0 size-3 absolute right-0 top-1/2 -translate-y-1/2 sm:hidden" />
        <p className="font-semibold leading-[100%] tracking-[0%] not-italic relative text-2xl sm:text-3xl md:text-[40px] text-[#d9d9d9] uppercase sm:shrink-0">
          {number}
        </p>
        <div className="content-stretch flex items-center gap-3 sm:gap-4 md:justify-between relative w-full md:w-auto md:flex-1 md:max-w-[794px]">
          <p className="font-normal leading-[120%] md:leading-[100%] tracking-[0%] not-italic relative text-base sm:text-lg md:text-[22px] text-black flex-1">
            {title}
          </p>
          <div className="bg-[#d9d9d9] shrink-0 hidden sm:block size-[14px]" />
        </div>
      </div>
      <div className="h-0 relative w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
