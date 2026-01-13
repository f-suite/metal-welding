import { SectionHeading, FormInput, FormTextarea, ButtonWithArrow } from "../shared";
import { useContactForm } from "../../../hooks/useContactForm";
import { usePageContent } from "../../../contexts/PageContentContext";

function ManagerPhoto({ data }: { data: any }) {
  return (
    <div className="bg-[#d9d9d9] h-[361px] relative shrink-0 w-[654px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[280px] py-[204px] relative size-full">
          <p className="font-normal leading-[100%] tracking-[0%] not-italic relative shrink-0 text-[24px] text-black text-nowrap">
            {data.managerPhoto}
          </p>
          <div className="absolute bg-white flex flex-col items-center justify-center left-[15px] px-[12px] py-[10px] z-10 bottom-[40px]">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black whitespace-nowrap">
              {data.managerName}
            </p>
          </div>
          <div className="absolute bg-white flex flex-col items-center justify-center left-[430px] px-[12px] py-[10px] z-10 bottom-[40px]">
            <p className="font-normal leading-[100%] tracking-[0%] not-italic text-[18px] text-black whitespace-nowrap">
              {data.managerRole}
            </p>
          </div>
        </div>
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
      className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-[654px]"
    >
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
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
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full max-w-[1333px]">
      <SectionHeading text={contentData.contact.title} />
      <div className="content-stretch flex items-start justify-between gap-[25px] relative shrink-0 w-full">
        <ManagerPhoto data={contentData.contact} />
        <ContactForm data={contentData.contact} />
      </div>
    </div>
  );
}
