interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  const hasImage = image && (image.startsWith('/') || image.startsWith('http'));
  
  return (
    <div className="w-full sm:w-[calc(50%-10px)] lg:basis-0 content-stretch flex flex-col gap-2 sm:gap-2.5 md:gap-[10px] lg:grow items-start min-h-px min-w-px relative">
      <div className="bg-[#d9d9d9] h-[160px] sm:h-[180px] md:h-[199px] w-full overflow-hidden flex items-center justify-center">
        {hasImage ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="font-normal leading-[100%] tracking-[0%] not-italic text-base sm:text-lg md:text-[18px] text-black text-center px-4">
            {image}
          </p>
        )}
      </div>
      <p className="font-medium leading-[110%] md:leading-[100%] tracking-[0%] not-italic relative text-base sm:text-[17px] md:text-[18px] text-black w-full">
        {title}
      </p>
      <p className="font-normal leading-[130%] md:leading-[120%] tracking-[0%] not-italic relative text-xs sm:text-[13px] md:text-[14px] text-black w-full whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
