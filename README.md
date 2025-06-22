# RailGuard - Система защиты топливной системы

Веб-приложение для продажи и управления заказами системы защиты топливной системы RailGuard.

## 🚀 Быстрый старт

### Предварительные требования

- Node.js (версия 14 или выше)
- PostgreSQL
- Yarn или npm

### Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/your-username/railguard.git
cd railguard
```

2. Установите зависимости:

```bash
yarn install
# или
npm install
```

3. Создайте файл .env на основе .env.example и заполните необходимые переменные окружения:

```bash
cp .env.example .env
```

4. Настройте базу данных:

```bash
npx prisma migrate dev
```

5. Запустите приложение:

```bash
yarn dev
# или
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

## 🛠 Технологии

- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Styled Components
- Telegram Bot API

## 📦 Структура проекта

```
├── components/     # React компоненты
├── contexts/       # React контексты
├── hooks/         # Пользовательские хуки
├── lib/           # Библиотеки и утилиты
├── pages/         # Страницы Next.js
├── prisma/        # Схема и миграции базы данных
├── public/        # Статические файлы
└── views/         # Компоненты представлений
```

## 🔒 Переменные окружения

Для работы приложения необходимо настроить следующие переменные окружения:

- `DATABASE_URL`: URL подключения к PostgreSQL
- `TELEGRAM_BOT_TOKEN`: Токен Telegram бота
- `TELEGRAM_CHAT_ID`: ID чата для уведомлений
- `NEXT_PUBLIC_SITE_URL`: URL сайта

## 📝 Лицензия

MIT
