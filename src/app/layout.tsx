import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppShell from '@/components/layout/app-shell';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

// TODO: Замените URL на актуальный адрес вашего сайта при публикации
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deutschmeister.app'; // Пример URL, лучше задать через .env
const ogImageUrl = `${siteUrl}/og-image.png`; // Предполагается, что у вас будет изображение в /public/og-image.png (1200x630)

export const metadata: Metadata = {
  title: 'DeutschMeister - Изучай немецкий с ИИ | Уроки, тесты, прогресс',
  description: 'DeutschMeister - ваш персональный AI-репетитор для эффективного изучения немецкого языка от A1 до C2. Интерактивные уроки, грамматика, лексика, тесты с проверкой ИИ и отслеживание прогресса. Начните учиться бесплатно и без регистрации!',
  keywords: [
    'немецкий язык', 'учить немецкий', 'Deutsch lernen', 'DeutschMeister', 'AI', 'ИИ', 'искусственный интеллект', 
    'изучение языков', 'немецкая грамматика', 'немецкая лексика', 'тесты по немецкому', 'уроки немецкого',
    'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Goethe Zertifikat', 'TestDaF', 'подготовка к экзамену по немецкому',
    'самоучитель немецкого', 'немецкий онлайн', 'бесплатные уроки немецкого'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Для цвета адресной строки в мобильных браузерах
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#64B5F6' }, // Soft Blue for light theme
    { media: '(prefers-color-scheme: dark)', color: '#263238' },  // Darker blue-gray for dark theme
  ],
  // Иконки
  icons: {
    icon: '/favicon.ico', // Стандартный favicon
    shortcut: '/favicon-16x16.png', // Пример для ярлыков
    apple: '/apple-touch-icon.png', // Для iOS home screen
    // Можно добавить другие размеры и типы, если они есть
  },
  // Open Graph (для Facebook, VK, Telegram, WhatsApp и т.д.)
  openGraph: {
    title: 'DeutschMeister: Эффективное изучение немецкого языка с AI-помощником',
    description: 'От A1 до C2: интерактивные уроки, тесты с AI-проверкой, отслеживание прогресса. Начните свой путь к свободному владению немецким уже сегодня - бесплатно и без регистрации!',
    url: siteUrl,
    siteName: 'DeutschMeister',
    images: [
      {
        url: ogImageUrl, // URL вашего OG-изображения (1200x630px)
        width: 1200,
        height: 630,
        alt: 'DeutschMeister - Изучение немецкого языка с искусственным интеллектом',
      },
      // Можно добавить больше изображений, если необходимо
      // {
      //   url: `${siteUrl}/og-image-alt.png`, // Альтернативное изображение
      //   width: 800,
      //   height: 600,
      //   alt: 'Альтернативное описание для OG-изображения DeutschMeister',
      // }
    ],
    locale: 'ru_RU', // Основной язык контента
    type: 'website', // Тип контента
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image', // Тип карточки (summary, summary_large_image, app, player)
    title: 'DeutschMeister - Ваш AI-гид в мире немецкого языка',
    description: 'Интерактивные уроки (A1-C2), AI-проверка упражнений, тесты и трекер прогресса. Учите немецкий эффективно, бесплатно и без регистрации с DeutschMeister!',
    // site: '@ВашТвиттерАккаунтСайта', // Если есть
    // creator: '@ВашТвиттерАккаунтАвтора', // Если есть
    images: [ogImageUrl], // URL изображения для Twitter (должно быть таким же или похожим на og:image)
  },
  // Для верификации сайта в поисковых системах (если нужно)
  // verification: {
  //   google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_SITE_VERIFICATION_CODE',
  // },
  // Canonical URL (если есть страницы с одинаковым контентом под разными URL)
  // alternates: {
  //   canonical: siteUrl,
  //   languages: {
  //     'ru-RU': siteUrl,
  //     // 'en-US': `${siteUrl}/en`, // Если есть англоязычная версия
  //   },
  // },
  manifest: '/site.webmanifest', // Если вы используете PWA
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AppShell>{children}</AppShell>
        <Toaster />
      </body>
    </html>
  );
}
