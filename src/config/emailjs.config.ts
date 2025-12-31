// Конфигурация EmailJS
// Для работы необходимо:
// 1. Зарегистрироваться на https://www.emailjs.com/
// 2. Создать сервис (Gmail, Outlook и т.д.)
// 3. Создать шаблон email
// 4. Получить Public Key, Service ID и Template ID
// 5. Заполнить значения ниже или использовать переменные окружения

export const emailjsConfig = {
  // Public Key из EmailJS Dashboard -> Account -> API Keys
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  
  // Service ID из EmailJS Dashboard -> Email Services
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  
  // Template ID из EmailJS Dashboard -> Email Templates
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  
  // Email получателя (можно также настроить в шаблоне)
  toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL,
};

