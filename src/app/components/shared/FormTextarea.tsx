interface FormTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export function FormTextarea({ value, onChange, placeholder }: FormTextareaProps) {
  return (
    <div className="bg-white h-[151px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[14px] relative size-full">
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="font-normal leading-[100%] tracking-[-2%] not-italic w-full h-full text-[16px] text-black bg-transparent outline-none resize-none placeholder:text-[#9f9f9f]"
          />
        </div>
      </div>
    </div>
  );
}
