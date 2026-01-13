interface WorkflowStepProps {
  number: string;
  title: string;
}

export function WorkflowStep({ number, title }: WorkflowStepProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-[#d9d9d9] uppercase">
          {number}
        </p>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
          <p className="font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black break-words">
            {title}
          </p>
          <div className="bg-[#d9d9d9] shrink-0 size-[14px]" />
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1380 1">
            <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="1380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
