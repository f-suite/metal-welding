/**
 * Валидация имени
 * @param name - имя для валидации
 * @param messages - объект с сообщениями об ошибках
 * @returns строка с ошибкой или undefined
 */
export const validateName = (
  name: string,
  messages: {
    required: string;
    minLength: string;
    pattern: string;
  }
): string | undefined => {
  if (!name.trim()) {
    return messages.required;
  }
  if (name.trim().length < 2) {
    return messages.minLength;
  }
  if (!/^[а-яА-ЯёЁa-zA-Z\s\-]+$/.test(name.trim())) {
    return messages.pattern;
  }
  return undefined;
};

/**
 * Валидация белорусского номера телефона
 * Поддерживаемые форматы:
 * - +375######### (13 символов)
 * - 80######### (11 символов)
 * @param phone - номер телефона для валидации
 * @param messages - объект с сообщениями об ошибках
 * @returns строка с ошибкой или undefined
 */
export const validatePhone = (
  phone: string,
  messages: {
    required: string;
    format13: string;
    format11: string;
    formatGeneral: string;
  }
): string | undefined => {
  if (!phone.trim()) {
    return messages.required;
  }

  const trimmed = phone.trim();

  if (trimmed.startsWith('+')) {
    if (trimmed.length !== 13) {
      return messages.format13;
    }
    if (!/^\+375\d{9}$/.test(trimmed)) {
      return messages.format13;
    }
    return undefined;
  } else if (trimmed.startsWith('80')) {
    if (trimmed.length !== 11) {
      return messages.format11;
    }
    if (!/^80\d{9}$/.test(trimmed)) {
      return messages.format11;
    }
    return undefined;
  } else {
    return messages.formatGeneral;
  }
};
