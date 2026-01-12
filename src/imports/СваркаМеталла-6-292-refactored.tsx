import { useRef, useState, FormEvent } from "react";
import Slider from "react-slick";
import emailjs from "@emailjs/browser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import { emailjsConfig } from "../config/emailjs.config";
import { Header } from "../app/components/Header";
import {
  ButtonWithArrow,
  AdvantageCard,
  ServiceCard,
  MaterialCard,
  ProductCard,
  CapabilityCard,
  GuaranteeCard,
  FormInput,
  FormTextarea,
  WorkflowStep,
  SectionHeading,
} from "../app/components/shared";
import contentData from "../content/welding.json";

// Hero Section
function HeroImage() {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-[361px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {contentData.hero.imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] min-w-full not-italic relative shrink-0 text-[20px] text-black w-full break-words">
        {contentData.hero.description}
      </p>
      <ButtonWithArrow text={contentData.hero.buttonText} />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <div className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[56px] text-black uppercase w-full">
        <p className="mb-0 font-bold break-words">{contentData.hero.title}</p>
      </div>
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
}

// Capabilities Section
function CapabilitiesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <SectionHeading text={contentData.capabilities.title} />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black">
          {contentData.capabilities.subtitle}
        </p>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {contentData.capabilities.items.map((item, index) => (
            <CapabilityCard key={index} text={item} />
          ))}
        </div>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black break-words">
          {contentData.capabilities.footer}
        </p>
      </div>
    </div>
  );
}

// Advantages Section
function AdvantagesImage() {
  return (
    <div className="bg-[#d9d9d9] flex h-[577px] items-center justify-center px-[280px] py-[204px] relative shrink-0 w-[650px]">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        {contentData.advantages.imageAlt}
      </p>
    </div>
  );
}

function AdvantagesCards() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full h-full">
      <div className="flex gap-[33px] items-start relative shrink-0">
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <AdvantageCard number={contentData.advantages.items[0].number} text={contentData.advantages.items[0].text} />
          <AdvantageCard number={contentData.advantages.items[2].number} text={contentData.advantages.items[2].text} />
        </div>
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-[310px]">
          <AdvantageCard number={contentData.advantages.items[1].number} text={contentData.advantages.items[1].text} />
          <AdvantageCard number={contentData.advantages.items[3].number} text={contentData.advantages.items[3].text} />
        </div>
      </div>
      <div className="flex items-stretch relative w-full flex-1 min-h-0">
        <AdvantageCard
          number={contentData.advantages.items[4].number}
          text={contentData.advantages.items[4].text}
          width="w-full max-w-[653px]"
          height="h-full"
        />
      </div>
    </div>
  );
}

function AdvantagesSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex gap-[30px] items-stretch relative shrink-0 max-w-[1333px]">
        <AdvantagesImage />
        <div className="flex flex-col gap-[40px] items-start relative shrink-0 w-[653px] self-stretch">
          <SectionHeading text={contentData.advantages.title} />
          <div className="flex flex-col flex-1 min-h-0 relative shrink-0 w-full">
            <AdvantagesCards />
          </div>
        </div>
      </div>
    </div>
  );
}

// Services Section
function ServicesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <SectionHeading text={contentData.services.title} />
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        {contentData.services.items.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

// Materials Section
function MaterialsSection() {
  return (
    <div className="bg-[#f0f0f0] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[22px] items-start p-[30px] relative w-full">
          <SectionHeading text={contentData.materials.title} />
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black break-words">
            {contentData.materials.subtitle}
          </p>
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
            {contentData.materials.items.map((material, index) => (
              <MaterialCard key={index} name={material} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Products Section
function ProductsSection() {
  const firstRow = contentData.products.items.slice(0, 4);
  const secondRow = contentData.products.items.slice(4, 8);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
        <SectionHeading text={contentData.products.title} />
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {firstRow.map((product, index) => (
            <ProductCard key={index} name={product} />
          ))}
        </div>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {secondRow.map((product, index) => (
            <ProductCard key={index} name={product} />
          ))}
        </div>
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        {contentData.products.footer}
      </p>
    </div>
  );
}

// Timeline Section
function TimelineImage() {
  return (
    <div className="bg-[#d9d9d9] h-[325px] relative shrink-0 w-[680px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {contentData.timeline.imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

function TimelineTable() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[446px]">
      <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
          {contentData.timeline.table.orderTypeLabel}
        </p>
        <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
          {contentData.timeline.table.rows.map((row, index) => (
            <p key={index} className="relative shrink-0">
              {row.orderType}
            </p>
          ))}
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0">
        <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
          {contentData.timeline.table.timelineLabel}
        </p>
        <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] gap-[16px] items-start not-italic relative shrink-0 text-[16px] text-black text-nowrap">
          {contentData.timeline.table.rows.map((row, index) => (
            <p key={index} className="relative shrink-0">
              {row.timeline}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
          <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
            <SectionHeading text={contentData.timeline.title} className="whitespace-nowrap" />
            <TimelineTable />
          </div>
          <ButtonWithArrow text={contentData.timeline.buttonText} />
        </div>
        <TimelineImage />
      </div>
    </div>
  );
}

// Guarantees Section
function GuaranteesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <SectionHeading text={contentData.guarantees.title} />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {contentData.guarantees.items.map((guarantee, index) => (
            <GuaranteeCard key={index} text={guarantee} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Workflow Section
function WorkflowSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <SectionHeading text={contentData.workflow.title} />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1333px]">
        {contentData.workflow.steps.map((step, index) => (
          <WorkflowStep key={index} number={step.number} title={step.title} />
        ))}
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
        <span>{`*Весь процесс прозрачен: `}</span>
        <span className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic text-[24px]">
          {contentData.workflow.footerBold}
        </span>
        {`, на какой стадии находится проект.`}
      </p>
    </div>
  );
}

// Certificates Section
function CertificateItem() {
  return (
    <div className="basis-0 bg-[#d9d9d9] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {contentData.certificates.imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

function CertificatesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <SectionHeading text={contentData.certificates.title} />
      <div className="content-stretch flex gap-[20px] h-[546px] items-start relative shrink-0 w-full">
        {[...Array(contentData.certificates.count).keys()].map((_, i) => (
          <CertificateItem key={i} />
        ))}
      </div>
    </div>
  );
}

// Gallery Section
function GalleryImage() {
  return (
    <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {contentData.gallery.imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_4_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_4_370)">
            <path d="M7.15 21.1l-1.4-1.4L14.3 11L5.75 2.35l1.4-1.4L16.1 9.9Q16.675 10.475 16.675 11Q16.675 11.525 16.1 12.1Z" fill="var(--fill-0, #1C1B1F)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GalleryControls({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <button
        onClick={onPrev}
        className="flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#e9e9e9] content-stretch flex items-center p-[18px] relative size-[60px] hover:bg-[#d0d0d0] transition-colors">
            <ArrowForwardIos />
          </div>
        </div>
      </button>
      <button
        onClick={onNext}
        className="bg-[#d9d9d9] content-stretch flex items-center p-[18px] relative shrink-0 size-[60px] hover:bg-[#c0c0c0] transition-colors cursor-pointer"
      >
        <ArrowForwardIos />
      </button>
    </div>
  );
}

function GallerySlider({ sliderRef }: { sliderRef: React.RefObject<Slider> }) {
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 min-w-[289px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <p className="font-['Montserrat',sans-serif] font-medium leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[40px] text-black uppercase whitespace-nowrap">
            {contentData.gallery.title}
          </p>
        </div>
        <GalleryControls onPrev={handlePrev} onNext={handleNext} />
      </div>
      <div className="flex-1 overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {[...Array(contentData.gallery.imageCount).keys()].map((i) => (
            <div key={i} className="px-[11px]">
              <GalleryImage />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function GallerySection() {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full max-w-[1333px]">
      <GallerySlider sliderRef={sliderRef} />
    </div>
  );
}

// Contact Section
function ManagerPhoto() {
  return (
    <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-[654px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {contentData.contact.managerPhoto}
          </p>
          <div className="absolute bg-white flex flex-col items-center justify-center left-[15px] px-[12px] py-[10px] z-10 bottom-[40px]">
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black whitespace-nowrap">
              {contentData.contact.managerName}
            </p>
          </div>
          <div className="absolute bg-white flex flex-col items-center justify-center left-[430px] px-[12px] py-[10px] z-10 bottom-[40px]">
            <p className="font-['Montserrat',sans-serif] font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black whitespace-nowrap">
              {contentData.contact.managerRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return contentData.contact.form.nameRequired;
    }
    if (name.trim().length < 2) {
      return contentData.contact.form.nameMinLength;
    }
    if (!/^[а-яА-ЯёЁa-zA-Z\s\-]+$/.test(name.trim())) {
      return contentData.contact.form.namePattern;
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return contentData.contact.form.phoneRequired;
    }

    const trimmed = phone.trim();

    if (trimmed.startsWith('+')) {
      if (trimmed.length !== 13) {
        return contentData.contact.form.phoneFormat13;
      }
      if (!/^\+375\d{9}$/.test(trimmed)) {
        return contentData.contact.form.phoneFormat13;
      }
      return undefined;
    } else if (trimmed.startsWith('80')) {
      if (trimmed.length !== 11) {
        return contentData.contact.form.phoneFormat11;
      }
      if (!/^80\d{9}$/.test(trimmed)) {
        return contentData.contact.form.phoneFormat11;
      }
      return undefined;
    } else {
      return contentData.contact.form.phoneFormatGeneral;
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
        throw new Error("Public Key не настроен. Пожалуйста, настройте VITE_EMAILJS_PUBLIC_KEY в .env файле или в конфигурации.");
      }

      if (emailjsConfig.templateId === "YOUR_TEMPLATE_ID" || !emailjsConfig.templateId) {
        throw new Error("Template ID не настроен. Пожалуйста, настройте VITE_EMAILJS_TEMPLATE_ID в .env файле или в конфигурации.");
      }

      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.comments || "Комментарий не указан",
        to_email: emailjsConfig.toEmail,
      };

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        {
          publicKey: emailjsConfig.publicKey,
        }
      );

      console.log("Email успешно отправлен:", response);

      alert(
        contentData.contact.form.successMessage
          .replace("{name}", formData.name)
          .replace("{phone}", formData.phone)
      );
      setFormData({ name: "", phone: "", comments: "" });
      setErrors({});
    } catch (error: any) {
      console.error("Ошибка отправки формы:", error);

      let errorMessage = contentData.contact.form.errorMessage;

      if (error?.text) {
        errorMessage += `\n\nДетали: ${error.text}`;
      } else if (error?.message) {
        errorMessage += `\n\n${error.message}`;
      }

      if (error?.text?.includes("Invalid Public Key") || error?.text?.includes("public key")) {
        errorMessage = contentData.contact.form.errorPublicKey;
      } else if (error?.text?.includes("Service not found") || error?.text?.includes("service")) {
        errorMessage = contentData.contact.form.errorService;
      } else if (error?.text?.includes("Template not found") || error?.text?.includes("template")) {
        errorMessage = contentData.contact.form.errorTemplate;
      }

      alert(errorMessage + "\n\n" + contentData.contact.form.errorTryLater);
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
    <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-[654px]">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <FormInput
          value={formData.name}
          onChange={handleNameChange}
          placeholder={contentData.contact.form.namePlaceholder}
          error={errors.name}
          required
        />
        <FormInput
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder={contentData.contact.form.phonePlaceholder}
          type="tel"
          error={errors.phone}
          required
        />
        <FormTextarea
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          placeholder={contentData.contact.form.commentsPlaceholder}
        />
      </div>
      <ButtonWithArrow
        text={isSubmitting ? contentData.contact.form.submittingButton : contentData.contact.form.submitButton}
        type="submit"
        disabled={isSubmitting}
        showArrow={!isSubmitting}
      />
    </form>
  );
}

function ContactSection() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <SectionHeading text={contentData.contact.title} />
      <div className="content-stretch flex items-start justify-between gap-[25px] relative shrink-0 w-full">
        <ManagerPhoto />
        <ContactForm />
      </div>
    </div>
  );
}

// Main Page Component
function MainContent() {
  return (
    <div className="flex flex-col gap-[140px] items-start">
      <HeroSection />
      <CapabilitiesSection />
      <AdvantagesSection />
      <ServicesSection />
      <MaterialsSection />
      <ProductsSection />
      <TimelineSection />
      <GuaranteesSection />
      <WorkflowSection />
      <CertificatesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Сварка металла">
      <div className="w-full max-w-[1385px] mx-auto p-[26px] pt-[124px]">
        <MainContent />
        <p className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[40px] text-black text-nowrap uppercase mt-[98px] mb-[20px] text-center">
          {contentData.footer.text}
        </p>
      </div>
      <Header />
    </div>
  );
}
