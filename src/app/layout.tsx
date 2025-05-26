import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppShell from '@/components/layout/app-shell';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

// TODO: Замените URL на актуальный адрес вашего сайта и изображение на релевантное
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deutschmeister.app'; // Пример URL
const ogImageUrl = `${siteUrl}/og-image.png`; // Предполагается, что у вас будет изображение в /public/og-image.png

export const metadata: Metadata = {
  title: 'DeutschMeister - Изучай немецкий с ИИ',
  description: 'DeutschMeister - ваш интеллектуальный помощник для изучения немецкого языка. Грамматика, лексика, упражнения и тесты с поддержкой ИИ. Начните учиться бесплатно и без регистрации!',
  keywords: ['немецкий язык', 'учить немецкий', 'Deutsch lernen', 'DeutschMeister', 'ИИ для изучения языков', 'немецкая грамматика', 'немецкая лексика', 'тесты по немецкому'],
  robots: 'index, follow',
  openGraph: {
    title: 'DeutschMeister - Изучай немецкий с ИИ эффективно!',
    description: 'Интерактивные уроки, тесты и AI-помощник для изучения немецкого языка от A1 до C2.',
    url: siteUrl,
    siteName: 'DeutschMeister',
    images: [
      {
        url: ogImageUrl, // Замените на URL вашего изображения 1200x630
        width: 1200,
        height: 630,
        alt: 'DeutschMeister - Изучение немецкого языка с ИИ',
      },
    ],
    locale: 'ru_RU', // Укажите основной язык контента
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeutschMeister - Продвинутое изучение немецкого с AI',
    description: 'Откройте для себя эффективный способ изучения немецкого языка с DeutschMeister. Уроки, тесты, AI.',
    images: [ogImageUrl], // Замените на URL вашего изображения
    // creator: '@ ваш_твиттер_аккаунт', // если есть
  },
  // Можно добавить и другие мета-теги, например:
  // themeColor: '#64B5F6', // Для цвета адресной строки в мобильных браузерах
  // icons: {
  //   apple: '/apple-touch-icon.png', // Для iOS
  // },
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
