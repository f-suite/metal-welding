# Настройка отправки email через EmailJS

## Шаг 1: Регистрация на EmailJS

1. Перейдите на https://www.emailjs.com/
2. Зарегистрируйтесь или войдите в аккаунт
3. Перейдите в Dashboard

## Шаг 2: Настройка Email сервиса

1. В Dashboard перейдите в раздел **Email Services**
2. Нажмите **Add New Service**
3. Выберите ваш email провайдер (Gmail, Outlook, и т.д.)
4. Следуйте инструкциям для подключения
5. Сохраните **Service ID** (например: `service_xxxxx`)

## Шаг 3: Создание шаблона email

1. В Dashboard перейдите в раздел **Email Templates**
2. Нажмите **Create New Template**
3. Используйте следующие переменные в шаблоне:
   - `{{from_name}}` - имя отправителя
   - `{{from_phone}}` - телефон отправителя
   - `{{message}}` - комментарий/сообщение
   - `{{to_email}}` - email получателя

Пример шаблона:
```
Тема: Новая заявка с сайта

Имя: {{from_name}}
Телефон: {{from_phone}}
Сообщение: {{message}}
```

4. Сохраните **Template ID** (например: `template_xxxxx`)

## Шаг 4: Получение Public Key

1. В Dashboard перейдите в раздел **Account** → **General**
2. Найдите **Public Key** в разделе API Keys
3. Скопируйте ключ

## Шаг 5: Настройка переменных окружения

Создайте файл `.env` в корне проекта и добавьте:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_TO_EMAIL=your-email@example.com
```

**Важно:** 
- Файл `.env` уже добавлен в `.gitignore` и не будет загружен в репозиторий
- Переменные окружения должны начинаться с `VITE_` для работы с Vite

## Шаг 6: Альтернативная настройка (без .env)

Если вы не хотите использовать переменные окружения, отредактируйте файл:
`src/config/emailjs.config.ts`

И замените значения по умолчанию на ваши ключи:

```typescript
export const emailjsConfig = {
  publicKey: "your_public_key_here",
  serviceId: "your_service_id_here",
  templateId: "your_template_id_here",
  toEmail: "your-email@example.com",
};
```

## Проверка работы

После настройки:
1. Запустите проект: `npm run dev`
2. Заполните форму на сайте
3. Отправьте форму
4. Проверьте ваш email - должно прийти письмо с данными формы

## Устранение неполадок

- **Ошибка "Invalid Public Key"**: Проверьте правильность Public Key
- **Ошибка "Service not found"**: Проверьте Service ID
- **Ошибка "Template not found"**: Проверьте Template ID
- **Email не приходит**: Проверьте настройки email сервиса в EmailJS Dashboard

