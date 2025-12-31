import { useState, FormEvent } from "react";
import svgPaths from "../../imports/svg-mj3zdjuk7f";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comments: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь можно добавить логику отправки формы
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
    setFormData({ name: "", phone: "", comments: "" });
  };

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Остались вопросы?</p>
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-[680px]">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[280px] py-[204px] relative size-full">
              <p className="font-['Montserrat',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">{`Фото менеджера и его должность `}</p>
            </div>
          </div>
          <div className="absolute bg-white flex flex-col items-center justify-center left-[15px] px-[12px] py-[1px] z-10" style={{ bottom: '10px' }}>
            <p className="font-['Montserrat',sans-serif] leading-[normal] not-italic text-[18px] text-black whitespace-nowrap">Алексей</p>
          </div>
          <div className="absolute bg-white flex flex-col items-center justify-center left-[442px] px-[12px] py-[1px] z-10" style={{ bottom: '10px' }}>
            <p className="font-['Montserrat',sans-serif] leading-[normal] not-italic text-[18px] text-black whitespace-nowrap">Старший менеджер</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-[680px]">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="bg-white h-[62px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center p-[14px] relative size-full">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Имя"
                    required
                    className="font-['Montserrat',sans-serif] leading-[normal] not-italic w-full text-[16px] text-black tracking-[-0.32px] bg-transparent outline-none placeholder:text-[#9f9f9f]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[62px] items-start relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none" />
              <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[12px] shrink-0">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[14px] relative size-full">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Телефон"
                      required
                      className="font-['Montserrat',sans-serif] leading-[normal] not-italic w-full text-[16px] text-black tracking-[-0.32px] bg-transparent outline-none placeholder:text-[#9f9f9f]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[151px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start p-[14px] relative size-full">
                  <textarea
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Комментарии..."
                    className="font-['Montserrat',sans-serif] leading-[normal] not-italic w-full h-full text-[16px] text-black tracking-[-0.32px] bg-transparent outline-none resize-none placeholder:text-[#9f9f9f]"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Отправить</p>
            <div className="h-[20px] relative shrink-0 w-[36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
                <g id="Frame 2">
                  <path d={svgPaths.p3a3b3200} fill="var(--stroke-0, black)" id="Arrow 1" />
                </g>
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
