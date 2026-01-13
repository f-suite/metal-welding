# Инструкция по добавлению изображений

## Структура папок

```
public/images/
├── hero/           - Главные баннеры на hero-секциях
├── gallery/        - Фотографии для галереи "Наши работы"
├── advantages/     - Изображения для секции "Преимущества"
├── services/       - Фотографии услуг/видов работ
├── certificates/   - Сертификаты
├── timeline/       - Изображения для секции "Сроки выполнения"
└── contact/        - Фото менеджера
```

## Как добавить изображение

### 1. Для Hero-секции (главный баннер)

**Файл JSON:** `src/content/welding.json` (или другой)

Заменить:
```json
"hero": {
  "imageAlt": "Фото (контент)",
  "imageUrl": ""
}
```

На:
```json
"hero": {
  "imageAlt": "Сварка металлоконструкций",
  "imageUrl": "/images/hero/welding-banner.jpg"
}
```

**Шаги:**
1. Поместите изображение в `public/images/hero/welding-banner.jpg`
2. Обновите `imageUrl` в JSON файле
3. Обновите `imageAlt` на описание изображения

### 2. Для Галереи

**Файл JSON:**
```json
"gallery": {
  "imageAlt": "Наши работы",
  "imageUrls": [
    "/images/gallery/work-1.jpg",
    "/images/gallery/work-2.jpg",
    "/images/gallery/work-3.jpg"
  ]
}
```

1. Поместите фотографии в `public/images/gallery/`
2. Добавьте массив `imageUrls` с путями к изображениям
3. Количество фотографий определяется длиной массива

### 3. Для Сертификатов

**Файл JSON:**
```json
"certificates": {
  "imageUrls": [
    "/images/certificates/cert-1.jpg",
    "/images/certificates/cert-2.jpg",
    "/images/certificates/cert-3.jpg"
  ]
}
```

### 4. Для Услуг/Видов работ

**Файл JSON:**
```json
"services": {
  "items": [
    {
      "image": "/images/services/mig-mag.jpg",
      "title": "MIG/MAG сварка",
      "description": "..."
    }
  ]
}
```

### 5. Для Фото менеджера

**Файл JSON:**
```json
"contact": {
  "managerPhoto": "/images/contact/manager-alexey.jpg",
  "managerName": "Алексей"
}
```

## Рекомендуемые размеры

- **Hero banner:** 800x400px
- **Галерея:** 600x400px
- **Сертификаты:** 600x800px (вертикально)
- **Услуги:** 400x250px
- **Фото менеджера:** 600x400px

## Форматы

Рекомендуемые форматы:
- `.jpg` / `.jpeg` - для фотографий
- `.png` - для изображений с прозрачностью
- `.webp` - для оптимизации размера (современный формат)

## Оптимизация

Перед загрузкой оптимизируйте изображения:
- Используйте сервисы типа TinyPNG, Squoosh
- Рекомендуемый размер файла: до 200-300 КБ
- Качество JPEG: 80-85%

## Плейсхолдеры

Если изображение не указано (`imageUrl: ""`), будет показан серый блок с текстом "Фото (контент)".

