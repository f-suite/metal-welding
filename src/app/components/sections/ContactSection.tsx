import { SectionHeading, FormInput, FormTextarea, ButtonWithArrow } from "../shared";
import { useContactForm } from "../../../hooks/useContactForm";
import { usePageContent } from "../../../contexts/PageContentContext";

function ManagerPhoto({ data }: { data: any }) {
  const hasImage = data.managerPhoto && (data.managerPhoto.startsWith('/') || data.managerPhoto.startsWith('http'));
  
  return (
    <div className="bg-[#d9d9d9] h-[280px] sm:h-[320px] md:h-[361px] relative w-full overflow-hidden">
      {hasImage ? (
        <img 
          src={data.managerPhoto} 
          alt={`${data.managerName} - ${data.managerRole}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-2 items-center justify-center px-4 sm:px-12 py-12 relative size-full">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic relative text-base sm:text-lg md:text-[24px] text-black text-center">
              {data.managerPhoto}
            </p>
          </div>
        </div>
      )}
      <div className="absolute bg-white flex flex-col items-center justify-center left-3 sm:left-4 md:left-[15px] px-3 sm:px-[12px] py-2 sm:py-2.5 md:py-[10px] z-10 bottom-6 sm:bottom-8 md:bottom-[40px]">
        <p className="font-normal leading-[100%] tracking-[0%] not-italic text-sm sm:text-base md:text-[18px] text-black whitespace-nowrap">
          {data.managerName}
        </p>
      </div>
      <div className="absolute bg-white flex flex-col items-center justify-center right-3 sm:right-4 md:right-[15px] px-3 sm:px-[12px] py-2 sm:py-2.5 md:py-[10px] z-10 bottom-6 sm:bottom-8 md:bottom-[40px]">
        <p className="font-normal leading-[100%] tracking-[0%] not-italic text-sm sm:text-base md:text-[18px] text-black whitespace-nowrap">
          {data.managerRole}
        </p>
      </div>
    </div>
  );
}

function ContactForm({ data }: { data: any }) {
  const {
    formData,
    setFormData,
    errors,
    isSubmitting,
    handleSubmit,
    handleNameChange,
    handlePhoneChange,
  } = useContactForm(data);

  return (
    <form
      onSubmit={handleSubmit}
      className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[37px] items-start relative w-full"
    >
      <div className="content-stretch flex flex-col gap-3 sm:gap-[12px] items-start relative w-full">
        <FormInput
          value={formData.name}
          onChange={handleNameChange}
          placeholder={data.form.namePlaceholder}
          error={errors.name}
          required
        />
        <FormInput
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder={data.form.phonePlaceholder}
          type="tel"
          error={errors.phone}
          required
        />
        <FormTextarea
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          placeholder={data.form.commentsPlaceholder}
        />
      </div>
      <ButtonWithArrow
        text={
          isSubmitting
            ? data.form.submittingButton
            : data.form.submitButton
        }
        type="submit"
        disabled={isSubmitting}
        showArrow={!isSubmitting}
      />
    </form>
  );
}

export function ContactSection() {
  const contentData = usePageContent();

  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-[39px] items-start relative w-full max-w-[1333px]">
      <SectionHeading text={contentData.contact.title} />
      <div className="content-stretch flex flex-col lg:flex-row items-start lg:justify-between gap-6 sm:gap-8 md:gap-[25px] relative w-full">
        <div className="w-full lg:w-[654px]">
          <ManagerPhoto data={contentData.contact} />
        </div>
        <div className="w-full lg:w-[654px]">
          <ContactForm data={contentData.contact} />
        </div>
      </div>
    </div>
  );
}
