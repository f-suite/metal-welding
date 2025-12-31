import { useState, FormEvent } from "react";
import { WorksSlider } from "../components/WorksSlider";
import { Header } from "../components/Header";
import svgPaths from "../../imports/svg-mj3zdjuk7f";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../../config/emailjs.config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

function ArrowIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 20">
        <g id="Frame 2">
          <path d={svgPaths.p3a3b3200} fill="var(--stroke-0, black)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <div className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[56px] text-black uppercase">
        <p className="mb-0 font-bold">ЛАЗЕРНАЯ РЕЗКА</p>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">
            Профессиональная лазерная резка металла. Точная геометрия, идеальные края и быстрые сроки — от 1 часа. Работаем как с единичными деталями, так и с серией. Берёмся за сложные контуры, тонкие элементы и аккуратные фаски там, где другие отказывают.
          </p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[22px] text-black text-nowrap">Запросить расчет</p>
            <ArrowIcon />
          </div>
        </div>
        <div className="basis-0 bg-[#d9d9d9] grow h-[361px] min-h-px min-w-px relative shrink-0">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
              <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvantagesSection() {
  const advantages = [
    "Высокая точность до ±0,05 мм",
    "Гладкий чистый рез — без искривлений, заусенцев и термодеформаций",
    "Быстрое изготовление — от 1 дня, срочно — от 3 часов",
    "Работа со сложной геометрией",
    "Минимальный отход материала",
    "Возможность мелких деталей и тонких линий",
    "Резка по чертежам: DXF, DWG"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        🔥 Преимущества лазерной резки
      </p>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        {advantages.map((advantage, index) => (
          <div key={index} className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
            <div className="bg-[#d9d9d9] shrink-0 size-[8px] rounded-full mt-[8px]" />
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black flex-1">
              {advantage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaterialsSection() {
  const materials = [
    "Сталь (черная, оцинкованная)",
    "Нержавеющая сталь",
    "Алюминий",
    "Латунь, медь"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        📌 Материалы, с которыми работаем
      </p>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">Металлы:</p>
        <ul className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full list-disc list-inside">
          {materials.map((material, index) => (
            <li key={index} className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
              {material}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EquipmentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        🏭 Оборудование
      </p>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">
          Оптоволоконный лазерный станок RT3015A, Rauti
        </p>
        <ul className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full list-disc list-inside">
          <li className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
            стабильная мощность на высоких скоростях
          </li>
          <li className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
            аккуратная кромка без оплавлений
          </li>
          <li className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
            ровная геометрия даже на малых деталях
          </li>
          <li className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
            минимальный расход материала
          </li>
        </ul>
      </div>
    </div>
  );
}

function TermsSection() {
  const terms = [
    { task: "Небольшие изделия", term: "от 3–6 часов" },
    { task: "Средние партии", term: "1–2 дня" },
    { task: "Серийное производство", term: "от 3–7 дней" },
    { task: "Срочный заказ", term: "от 1 часа (по согласованию)" }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        ⏳ Сроки выполнения
      </p>
      <div className="content-stretch flex flex-col gap-[0px] items-start relative shrink-0 w-full border border-[#d9d9d9]">
        <div className="content-stretch flex items-start relative shrink-0 w-full border-b border-[#d9d9d9] bg-[#f5f5f5]">
          <div className="basis-0 content-stretch flex items-center p-[15px] grow min-h-px min-w-px relative shrink-0 border-r border-[#d9d9d9]">
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">Задача</p>
          </div>
          <div className="basis-0 content-stretch flex items-center p-[15px] grow min-h-px min-w-px relative shrink-0">
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">Срок</p>
          </div>
        </div>
        {terms.map((item, index) => (
          <div key={index} className="content-stretch flex items-start relative shrink-0 w-full border-b border-[#d9d9d9] last:border-b-0">
            <div className="basis-0 content-stretch flex items-center p-[15px] grow min-h-px min-w-px relative shrink-0 border-r border-[#d9d9d9]">
              <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[16px] text-black">{item.task}</p>
            </div>
            <div className="basis-0 content-stretch flex items-center p-[15px] grow min-h-px min-w-px relative shrink-0">
              <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[16px] text-black">{item.term}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        НАШИ ЦЕНЫ
      </p>
      <div className="bg-[#d9d9d9] h-[400px] w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Таблица цен (отдельный файл)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuaranteesSection() {
  const guarantees = [
    "Гарантия точности — повторяемость реза на 100%",
    "Гарантия сроков — если задерживаем, скидка 10%",
    "Гарантия качества — идеальные края, соответствие чертежу"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        ✔ Гарантии
      </p>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        {guarantees.map((guarantee, index) => (
          <div key={index} className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
            <div className="bg-[#d9d9d9] shrink-0 size-[8px] rounded-full mt-[8px]" />
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black flex-1">
              {guarantee}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkStagesSection() {
  const stages = [
    "Заявка / звонок",
    "Получение чертежа",
    "Расчёт стоимости",
    "Запуск в производство",
    "Контроль качества",
    "Выдача заказа / доставка"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">🔧 Этапы работы</p>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full flex-wrap">
        {stages.map((stage, index) => (
          <div key={index} className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 min-w-[200px]">
            <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
              {index + 1}. {stage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificatesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        Наши сертификаты
      </p>
      <div className="bg-[#d9d9d9] h-[400px] w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Сертификаты на оборудование</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const faqItems = [
    {
      question: "Можно ли привезти свой материал?",
      answer: "Да, работаем с материалами заказчика."
    },
    {
      question: "Какие форматы файлов принимаете?",
      answer: "DXF, DWG"
    },
    {
      question: "Есть ли минимальный заказ?",
      answer: "Минимум — 200 РУБ."
    },
    {
      question: "Делаете доставку?",
      answer: "Да, по городу и РБ транспортными компаниями."
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">❓ FAQ — Частые вопросы клиентов</p>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#d9d9d9]">
              <AccordionTrigger className="font-['Montserrat',sans-serif] font-medium text-[18px] text-black text-left hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

function ManagerContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Имя обязательно для заполнения";
    }
    if (name.trim().length < 2) {
      return "Имя должно содержать минимум 2 символа";
    }
    if (!/^[а-яА-ЯёЁa-zA-Z\s\-]+$/.test(name.trim())) {
      return "Имя может содержать только буквы, пробелы и дефисы";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Телефон обязателен для заполнения";
    }
    
    const trimmed = phone.trim();
    
    if (trimmed.startsWith('+')) {
      if (trimmed.length !== 13) {
        return "Телефон должен быть в формате +375######### (ровно 13 символов)";
      }
      if (!/^\+375\d{9}$/.test(trimmed)) {
        return "Телефон должен быть в формате +375######### (ровно 13 символов)";
      }
      return undefined;
    } else if (trimmed.startsWith('80')) {
      if (trimmed.length !== 11) {
        return "Телефон должен быть в формате 80######### (ровно 11 символов)";
      }
      if (!/^80\d{9}$/.test(trimmed)) {
        return "Телефон должен быть в формате 80######### (ровно 11 символов)";
      }
      return undefined;
    } else {
      return "Телефон должен быть в формате +375######### или 80#########";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    const newErrors: { name?: string; phone?: string } = {};
    if (nameError) newErrors.name = nameError;
    if (phoneError) newErrors.phone = phoneError;
    
    setErrors(newErrors);
    
    if (nameError || phoneError) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (emailjsConfig.publicKey === "YOUR_PUBLIC_KEY" || !emailjsConfig.publicKey) {
        throw new Error("Public Key не настроен.");
      }
      
      if (emailjsConfig.templateId === "YOUR_TEMPLATE_ID" || !emailjsConfig.templateId) {
        throw new Error("Template ID не настроен.");
      }
      
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.comments || "Комментарий не указан",
        to_email: emailjsConfig.toEmail,
      };
      
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        {
          publicKey: emailjsConfig.publicKey,
        }
      );
      
      alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
      setFormData({ name: "", phone: "", comments: "" });
      setErrors({});
    } catch (error: any) {
      console.error("Ошибка отправки формы:", error);
      alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setFormData({ ...formData, name: newName });
    if (errors.name !== undefined || newName.length > 0) {
      const error = validateName(newName);
      setErrors({ ...errors, name: error });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setFormData({ ...formData, phone: newPhone });
    if (errors.phone !== undefined || newPhone.length > 0) {
      const error = validatePhone(newPhone);
      setErrors({ ...errors, phone: error });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Остались вопросы?</p>
      <div className="content-stretch flex items-start justify-between gap-[25px] relative shrink-0 w-full">
        <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-[680px]">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[280px] py-[204px] relative size-full">
              <p className="font-['Montserrat',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">{`Фото менеджера `}</p>
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
                    onChange={handleNameChange}
                    placeholder="Имя"
                    required
                    className="font-['Montserrat',sans-serif] leading-[normal] not-italic w-full text-[16px] text-black tracking-[-0.32px] bg-transparent outline-none placeholder:text-[#9f9f9f]"
                  />
                </div>
              </div>
            </div>
            {errors.name && (
              <p className="font-['Montserrat',sans-serif] text-[14px] text-red-500">{errors.name}</p>
            )}
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex h-[62px] items-start relative shrink-0 w-full">
                <div aria-hidden="true" className={`absolute border ${errors.phone ? 'border-red-500' : 'border-[#d9d9d9]'} border-solid inset-[-1px] pointer-events-none`} />
                <div className="basis-0 bg-white grow h-[62px] min-h-px min-w-px relative rounded-[12px] shrink-0">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center p-[14px] relative size-full">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Телефон"
                        className="font-['Montserrat',sans-serif] leading-[normal] not-italic w-full text-[16px] text-black tracking-[-0.32px] bg-transparent outline-none placeholder:text-[#9f9f9f]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {errors.phone && (
                <p className="font-['Montserrat',sans-serif] text-[14px] text-red-500">{errors.phone}</p>
              )}
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
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
              {isSubmitting ? "Отправка..." : "Отправить"}
            </p>
            {!isSubmitting && <ArrowIcon />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LazernayaRezka() {
  return (
    <div className="bg-white relative size-full" data-name="Лазерная резка">
      <div className="w-full max-w-[1385px] mx-auto p-[26px] pt-[124px]">
        <div className="flex flex-col gap-[140px] items-start">
          <HeroSection />
          <AdvantagesSection />
          <MaterialsSection />
          <EquipmentSection />
          <TermsSection />
          <PricesSection />
          <GuaranteesSection />
          <WorkStagesSection />
          <CertificatesSection />
          <WorksSlider />
          <FAQSection />
          <ManagerContactSection />
        </div>
        <p className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[40px] text-black text-nowrap uppercase mt-[98px] mb-[45px] text-center">ФУТЕР</p>
      </div>
      <Header />
    </div>
  );
}

