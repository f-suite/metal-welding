interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  const hasImage = image && (image.startsWith('/') || image.startsWith('http'));
  
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="bg-[#d9d9d9] h-[199px] shrink-0 w-full overflow-hidden flex items-center justify-center">
        {hasImage ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black text-nowrap px-4">
            {image}
          </p>
        )}
      </div>
      <p className="font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black w-full break-words">
        {title}
      </p>
      <p className="font-normal leading-[120%] tracking-[0%] not-italic relative shrink-0 text-[14px] text-black w-full break-words whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
