import { SectionHeading } from "../shared";
import { usePageContent } from "../../../contexts/PageContentContext";

function CertificateItem({ imageUrl, imageAlt }: { imageUrl?: string; imageAlt: string }) {
  const hasImage = imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('http'));
  
  return (
    <div className="w-full sm:w-[calc(50%-10px)] lg:basis-0 bg-[#d9d9d9] lg:grow h-[400px] sm:h-[450px] md:h-[500px] lg:h-[546px] min-h-px min-w-px relative overflow-hidden">
      {hasImage ? (
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-4 sm:px-12 md:px-20 py-12 relative size-full">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic relative text-base sm:text-lg md:text-xl lg:text-[24px] text-black text-center">
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
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[39px] items-start relative w-full max-w-[1333px]">
      <SectionHeading text={contentData.certificates.title} />
      <div className="content-stretch flex flex-wrap gap-4 sm:gap-5 lg:gap-[20px] items-start relative w-full">
        {[...Array(count).keys()].map((_, i) => (
          <CertificateItem key={i} imageUrl={images[i]} imageAlt={contentData.certificates.imageAlt} />
        ))}
      </div>
    </div>
  );
}
