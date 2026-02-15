import { useRef } from "react";
import Slider from "react-slick";
import { ArrowForwardIos } from "../icons";
import { GALLERY_SLIDER_SETTINGS } from "../../../constants/slider";
import { usePageContent } from "../../../contexts/PageContentContext";

function GalleryImage({ imageUrl, imageAlt }: { imageUrl?: string; imageAlt: string }) {
  const hasImage = imageUrl && (imageUrl.startsWith('/') || imageUrl.startsWith('http'));
  
  return (
    <div className="bg-[#d9d9d9] h-[240px] sm:h-[300px] md:h-[361px] relative w-full overflow-hidden">
      {hasImage ? (
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-4 sm:px-12 md:px-20 py-8 sm:py-12 relative size-full">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic relative text-base sm:text-lg md:text-[24px] text-black text-center">
              {imageAlt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function GalleryControls({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex gap-3 sm:gap-[15px] items-center relative">
      <button
        onClick={onPrev}
        className="flex items-center justify-center relative cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#e9e9e9] content-stretch flex items-center p-3 sm:p-4 md:p-[18px] relative size-12 sm:size-14 md:size-[60px] hover:bg-[#d0d0d0] transition-colors">
            <ArrowForwardIos />
          </div>
        </div>
      </button>
      <button
        onClick={onNext}
        className="bg-[#d9d9d9] content-stretch flex items-center p-3 sm:p-4 md:p-[18px] relative size-12 sm:size-14 md:size-[60px] hover:bg-[#c0c0c0] transition-colors cursor-pointer"
      >
        <ArrowForwardIos />
      </button>
    </div>
  );
}

function GallerySlider({
  sliderRef,
  title,
  images,
  imageAlt
}: {
  sliderRef: React.RefObject<Slider>;
  title: string;
  images?: string[];
  imageAlt: string;
}) {
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const imageCount = images?.length || 3;

  return (
    <div className="w-full content-stretch flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-[22px] items-start min-h-px min-w-px relative">
      {/* Mobile/Tablet: Title on top */}
      <div className="lg:hidden w-full">
        <p className="font-medium leading-[100%] tracking-[0%] not-italic relative text-2xl sm:text-3xl md:text-[40px] text-black uppercase">
          {title}
        </p>
      </div>
      
      {/* Desktop: Title and Controls on left */}
      <div className="hidden lg:flex content-stretch flex-col items-start justify-between relative self-stretch min-w-[289px]">
        <div className="content-stretch flex flex-col items-start relative">
          <p className="font-medium leading-[100%] tracking-[0%] not-italic relative text-[40px] text-black uppercase whitespace-nowrap">
            {title}
          </p>
        </div>
        <GalleryControls onPrev={handlePrev} onNext={handleNext} />
      </div>
      
      {/* Slider */}
      <div className="w-full lg:flex-1 overflow-hidden">
        <Slider ref={sliderRef} {...GALLERY_SLIDER_SETTINGS}>
          {[...Array(imageCount).keys()].map((i) => (
            <div key={i} className="px-2 sm:px-[11px]">
              <GalleryImage imageUrl={images?.[i]} imageAlt={imageAlt} />
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Mobile/Tablet: Controls on bottom */}
      <div className="lg:hidden w-full flex justify-center">
        <GalleryControls onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
}

export function GallerySection() {
  const contentData = usePageContent();
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="content-stretch flex items-start relative w-full max-w-[1333px]">
      <GallerySlider
        sliderRef={sliderRef}
        title={contentData.gallery.title}
        images={contentData.gallery.images}
        imageAlt={contentData.gallery.imageAlt}
      />
    </div>
  );
}
