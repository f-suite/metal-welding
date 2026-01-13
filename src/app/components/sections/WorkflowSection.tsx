import { SectionHeading, WorkflowStep } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

export function WorkflowSection() {
  const contentData = usePageContent();
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <SectionHeading text={contentData.workflow.title} />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1333px]">
        {contentData.workflow.steps.map((step, index) => (
          <WorkflowStep key={index} number={step.number} title={step.title} />
        ))}
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        <span>{`*Весь процесс прозрачен: `}</span>
        <span className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic text-[24px]">
          {contentData.workflow.footerBold}
        </span>
        {`, на какой стадии находится проект.`}
      </p>
    </div>
  );
}
