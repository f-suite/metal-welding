import { SectionHeading } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function CertificateItem({ imageAlt }: { imageAlt: string }) {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CertificatesSection() {
  const contentData = usePageContent();
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <SectionHeading text={contentData.certificates.title} />
      <div className="content-stretch flex gap-[20px] h-[546px] items-start relative shrink-0 w-full">
        {[...Array(contentData.certificates.count).keys()].map((_, i) => (
          <CertificateItem key={i} imageAlt={contentData.certificates.imageAlt} />
        ))}
      </div>
    </div>
  );
}
