import { SectionHeading } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function CertificateItem({ imageUrl, imageAlt }: { imageUrl?: string; imageAlt: string }) {
  const hasImage = imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('http'));
  
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px relative shrink-0 overflow-hidden">
      {hasImage ? (
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
              {imageAlt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function CertificatesSection() {
  const contentData = usePageContent();
  const images = contentData.certificates.images || [];
  const count = images.length || contentData.certificates.count || 3;
  
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <SectionHeading text={contentData.certificates.title} />
      <div className="content-stretch flex gap-[20px] h-[546px] items-start relative shrink-0 w-full">
        {[...Array(count).keys()].map((_, i) => (
          <CertificateItem key={i} imageUrl={images[i]} imageAlt={contentData.certificates.imageAlt} />
        ))}
      </div>
    </div>
  );
}
