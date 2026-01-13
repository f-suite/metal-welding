interface FormInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  error?: string;
  required?: boolean;
}

export function FormInput({
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  required = false
}: FormInputProps) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="bg-white h-[62px] relative shrink-0 w-full" data-name="Container">
        <div
          aria-hidden="true"
          className={`absolute border border-solid inset-0 pointer-events-none ${error ? 'border-red-500' : 'border-[#d9d9d9]'}`}
        />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center p-[14px] relative size-full">
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              className={`font-normal leading-[100%] tracking-[-2%] not-italic w-full text-[16px] bg-transparent outline-none placeholder:text-[#9f9f9f] ${error ? 'text-red-500' : 'text-black'}`}
            />
          </div>
        </div>
      </div>
      {error && (
        <p className="font-normal leading-[100%] tracking-[-2%] not-italic relative shrink-0 text-[14px] text-red-500 px-[14px]">
          {error}
        </p>
      )}
    </div>
  );
}
