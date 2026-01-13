interface SectionHeadingProps {
  text: string;
  uppercase?: boolean;
  className?: string;
}

export function SectionHeading({ text, uppercase = true, className = "" }: SectionHeadingProps) {
  return (
    <p
      className={`font-medium leading-[110%] md:leading-[100%] tracking-[0%] not-italic relative shrink-0 text-2xl sm:text-3xl md:text-[40px] text-black ${uppercase ? 'uppercase' : ''} w-full ${className}`}
    >
      {text}
    </p>
  );
}
