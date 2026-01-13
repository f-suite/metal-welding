import { ArrowIcon } from "./ArrowIcon";

interface ButtonWithArrowProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  showArrow?: boolean;
}

export function ButtonWithArrow({
  text,
  onClick,
  type = "button",
  disabled = false,
  showArrow = true
}: ButtonWithArrowProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <p className="font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        {text}
      </p>
      {showArrow && <ArrowIcon />}
    </button>
  );
}
