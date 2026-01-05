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
        <p className="mb-0 font-bold">Производство металлоконструкций</p>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">
            Мы предлагаем полный цикл услуг — от разработки проекта до монтажа. Если у вас нет готовой документации, наши инженеры помогут создать индивидуальное ТЗ, КМ и КМД с учетом ваших задач и бюджета.
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

function ServicesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Компания «РСПРОТРЭЙД» выполняет:</p>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full flex-wrap">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 min-w-[250px]">
          <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Изготовление конструкций любой сложности и объема</p>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 min-w-[250px]">
          <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Изготовление металлоконструкций «под ключ»</p>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 min-w-[250px]">
          <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Индивидуальное проектирование, в том числе КМ/КМД под ваши задачи</p>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 min-w-[250px]">
          <div className="bg-[#d9d9d9] shrink-0 size-[46px]" />
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Покраска, грунтование</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">Дополнительные возможности:</p>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[20px] text-black">
          Защита от коррозии методом горячего цинкования или холодного нанесения покрытий. Идеально для уличных конструкций, ферм, рекламных щитов.
        </p>
      </div>
    </div>
  );
}

function MetalGradesSection() {
  const grades = [
    {
      title: "Сталь СТ-3",
      description: "Универсальная углеродистая сталь для неответственных конструкций (ограждения, лестницы, несущие элементы низкой нагрузки)."
    },
    {
      title: "Сталь 09Г2С",
      description: "Низколегированная сталь с повышенной прочностью. Используется в сварных конструкциях, мостах, эстакадах, крановых балках."
    },
    {
      title: "Сталь СТ-20",
      description: "Конструкционная углеродистая сталь, применяемая для трубопроводов, крепежа и элементов с высокими требованиями к пластичности."
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Марки металлов, применяемые в производстве:</p>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full flex-wrap">
        {grades.map((grade, index) => (
          <div key={index} className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 min-w-[300px]">
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">{grade.title}</p>
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">{grade.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvantagesSection() {
  const advantages = [
    "Индивидуальный подход: Мы учитываем все ваши требования и предоставляем индивидуальные решения",
    "Высокое качество: Наши стальные конструкции соответствуют всем ГОСТам и стандартам",
    "Скорость и точность: Современное оборудование и опытная команда обеспечивают быстрое и точное выполнение заказов",
    "Соблюдение ГОСТ и СНиП",
    "Контроль качества на всех этапах",
    "Соблюдение договорных сроков",
    "Собственное производство"
  ];

  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full max-w-[1333px]">
      <div className="bg-[#d9d9d9] flex h-[577px] items-center justify-center px-[280px] py-[204px] relative shrink-0 w-[650px]">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Фото (контент)</p>
      </div>
      <div className="flex flex-col gap-[40px] items-start relative shrink-0 w-[653px]">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Преимущества работы с нами</p>
        <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col h-[129px] items-start p-[9px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
              <div className="basis-0 content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] grow items-start justify-between min-h-px min-w-px not-italic relative shrink-0 text-[16px] w-full">
                <p className="relative shrink-0 text-[#9f9f9f] w-full">[{String(index + 1).padStart(2, '0')}]</p>
                <p className="relative shrink-0 text-black w-full">{advantage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApplicationsSection() {
  const applications = [
    {
      category: "Жилое строительство",
      items: [
        "Каркасы малоэтажных строений",
        "Лестничные пролеты, балконы, козырьки",
        "Мансарды, веранды, пристройки",
        "Элементы кровли и перекрытий"
      ]
    },
    {
      category: "Промышленные комплексы",
      items: [
        "Ангары, склады",
        "Резервуары для хранения сырья и готовой продукции",
        "Технологические эстакады",
        "Опоры для оборудования и трубопроводов"
      ]
    },
    {
      category: "Коммерческие объекты",
      items: [
        "Павильоны, выставочные комплексы, спортивные арены",
        "Крытые парковки и навесы",
        "Стеллажные системы для логистических центров"
      ]
    },
    {
      category: "Дорожное хозяйство и реклама",
      items: [
        "Металлические ограждения, шумозащитные экраны",
        "Опоры освещения, светофоры, дорожные знаки",
        "Рекламные щиты, билборды, световые короба",
        "Торговые павильоны и нестандартные арт-объекты"
      ]
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Применение металлоконструкций:</p>
      <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
        {applications.map((app, index) => (
          <div key={index} className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
            <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">{app.category}:</p>
            <ul className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full list-disc list-inside">
              {app.items.map((item, itemIndex) => (
                <li key={itemIndex} className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[20px] text-black mt-[20px]">
        И это лишь малая часть того, что мы можем предложить! Если у вас нестандартный проект или уникальная задача — свяжитесь с нами. Мы с радостью поможем воплотить в жизнь даже самый заурядный проект, разработав конструкцию, которая идеально соответствует вашим требованиям.
      </p>
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black mt-[20px]">
        «Ваша идея. Наша сталь. Общий успех»
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
        — это не просто слоган, а принцип нашей работы. Мы бережно воплощаем Ваши технические задания.
      </p>
    </div>
  );
}

function StandardsSection() {
  const standards = [
    "ГОСТ 23118-2019 «Конструкции стальные строительные. Общие технические условия»",
    "ГОСТ 10922-2012 «Арматурные и закладные изделия, их сварные, вязанные и механические соединения для железобетонных конструкций. Общие технические условия»",
    "СТБ 1381-2003 «Ограждения лестниц, балконов и крыш стальные. Технические условия»"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">
        Производимые конструкции соответствуют высоким стандартам и соответствуют требованиям:
      </p>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        {standards.map((standard, index) => (
          <p key={index} className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black">
            {standard}
          </p>
        ))}
      </div>
      <div className="bg-[#d9d9d9] h-[400px] w-full mt-[20px]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">Сертификаты</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkStagesSection() {
  const stages = [
    "Заявка",
    "Расчет",
    "Проектирование",
    "Производство",
    "Покраска и защита",
    "Контроль качества"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Этапы работы</p>
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

function FAQSection() {
  const faqItems = [
    {
      question: "Какой срок изготовления металлоконструкций?",
      answer: "Срок изготовления зависит от сложности и объема заказа. Обычно это от 5 до 30 рабочих дней. Мы всегда соблюдаем договорные сроки и можем предложить срочное выполнение при необходимости."
    },
    {
      question: "Нужно ли предоставлять готовые чертежи?",
      answer: "Нет, не обязательно. Если у вас нет готовой документации, наши инженеры помогут создать индивидуальное ТЗ, КМ и КМД с учетом ваших задач и бюджета."
    },
    {
      question: "Какие виды защиты от коррозии вы предлагаете?",
      answer: "Мы предлагаем защиту от коррозии методом горячего цинкования или холодного нанесения покрытий. Также выполняем покраску и грунтование. Идеально для уличных конструкций, ферм, рекламных щитов."
    },
    {
      question: "Работаете ли вы с нестандартными проектами?",
      answer: "Да, мы с радостью беремся за нестандартные проекты и уникальные задачи. Наши инженеры разработают конструкцию, которая идеально соответствует вашим требованиям."
    },
    {
      question: "Какие марки металлов вы используете?",
      answer: "Мы работаем с различными марками стали: СТ-3 (для неответственных конструкций), 09Г2С (для сварных конструкций, мостов, эстакад), СТ-20 (для трубопроводов и крепежа). Выбор марки зависит от требований проекта."
    },
    {
      question: "Осуществляете ли вы монтаж конструкций?",
      answer: "Да, мы предлагаем полный цикл услуг — от разработки проекта до монтажа. Наша команда может выполнить монтаж на вашем объекте."
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase w-full">Часто задаваемые вопросы</p>
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

export default function ProizvodstvoMetallokonstrukcij() {
  return (
    <div className="bg-white relative size-full" data-name="Производство металлоконструкций">
      <div className="w-full max-w-[1385px] mx-auto p-[26px] pt-[124px]">
        <div className="flex flex-col gap-[140px] items-start">
          <HeroSection />
          <ServicesSection />
          <MetalGradesSection />
          <AdvantagesSection />
          <ApplicationsSection />
          <StandardsSection />
          <WorkStagesSection />
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

