import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { validateName, validatePhone } from "../utils/validation";
import { emailjsConfig } from "../config/emailjs.config";

interface FormData {
  name: string;
  phone: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

interface ValidationMessages {
  form: {
    nameRequired: string;
    nameMinLength: string;
    namePattern: string;
    phoneRequired: string;
    phoneFormat13: string;
    phoneFormat11: string;
    phoneFormatGeneral: string;
    successMessage: string;
    errorMessage: string;
    errorPublicKey: string;
    errorService: string;
    errorTemplate: string;
    errorTryLater: string;
  };
}

export const useContactForm = (messages: ValidationMessages) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nameError = validateName(formData.name, {
      required: messages.form.nameRequired,
      minLength: messages.form.nameMinLength,
      pattern: messages.form.namePattern,
    });

    const phoneError = validatePhone(formData.phone, {
      required: messages.form.phoneRequired,
      format13: messages.form.phoneFormat13,
      format11: messages.form.phoneFormat11,
      formatGeneral: messages.form.phoneFormatGeneral,
    });

    const newErrors: FormErrors = {};
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
        messages.form.successMessage
          .replace("{name}", formData.name)
          .replace("{phone}", formData.phone)
      );
      setFormData({ name: "", phone: "", comments: "" });
      setErrors({});
    } catch (error: any) {
      console.error("Ошибка отправки формы:", error);

      let errorMessage = messages.form.errorMessage;

      if (error?.text) {
        errorMessage += `\n\nДетали: ${error.text}`;
      } else if (error?.message) {
        errorMessage += `\n\n${error.message}`;
      }

      if (error?.text?.includes("Invalid Public Key") || error?.text?.includes("public key")) {
        errorMessage = messages.form.errorPublicKey;
      } else if (error?.text?.includes("Service not found") || error?.text?.includes("service")) {
        errorMessage = messages.form.errorService;
      } else if (error?.text?.includes("Template not found") || error?.text?.includes("template")) {
        errorMessage = messages.form.errorTemplate;
      }

      alert(errorMessage + "\n\n" + messages.form.errorTryLater);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setFormData({ ...formData, name: newName });
    if (errors.name !== undefined || newName.length > 0) {
      const error = validateName(newName, {
        required: messages.form.nameRequired,
        minLength: messages.form.nameMinLength,
        pattern: messages.form.namePattern,
      });
      setErrors({ ...errors, name: error });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setFormData({ ...formData, phone: newPhone });
    if (errors.phone !== undefined || newPhone.length > 0) {
      const error = validatePhone(newPhone, {
        required: messages.form.phoneRequired,
        format13: messages.form.phoneFormat13,
        format11: messages.form.phoneFormat11,
        formatGeneral: messages.form.phoneFormatGeneral,
      });
      setErrors({ ...errors, phone: error });
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    handleSubmit,
    handleNameChange,
    handlePhoneChange,
  };
};
