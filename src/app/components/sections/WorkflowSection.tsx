import { SectionHeading, WorkflowStep } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function WorkflowSection() {
  const contentData = usePageContent();
  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[39px] items-start relative w-full max-w-[1333px]">
      <SectionHeading text={contentData.workflow.title} />
      <div className="content-stretch flex flex-col items-start relative w-full">
        {contentData.workflow.steps.map((step: any, index: number) => (
          <WorkflowStep key={index} number={step.number} title={step.title} />
        ))}
      </div>
      <p className="font-normal leading-[130%] md:leading-[100%] tracking-[0%] not-italic relative text-base sm:text-lg md:text-[24px] text-black">
        <span>{`*Весь процесс прозрачен: `}</span>
        <span className="font-medium leading-[130%] md:leading-[100%] tracking-[0%] not-italic text-base sm:text-lg md:text-[24px]">
          {contentData.workflow.footerBold}
        </span>
        {`, на какой стадии находится проект.`}
      </p>
    </div>
  );
}
