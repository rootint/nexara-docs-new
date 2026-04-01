import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import localFont from 'next/font/local';
import { BackgroundBlobs } from '@/components/background-blobs';
import type { Metadata } from 'next';

const golosText = localFont({
  src: [
    {
      path: './fonts/golos-text-latin.woff2',
      style: 'normal',
    },
    {
      path: './fonts/golos-text-latin-ext.woff2',
      style: 'normal',
    },
    {
      path: './fonts/golos-text-cyrillic.woff2',
      style: 'normal',
    },
    {
      path: './fonts/golos-text-cyrillic-ext.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-golos',
});

const siteUrl = 'https://docs.nexara.ru';

export const metadata: Metadata = {
  title: {
    default: 'Документация Nexara',
    template: '%s | Документация Nexara',
  },
  description:
    'Документация Nexara API — транскрипция аудио с помощью искусственного интеллекта. Руководства, справочник API и примеры интеграции.',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'Документация Nexara',
    title: 'Документация Nexara',
    description:
      'Документация Nexara API — транскрипция аудио с помощью искусственного интеллекта. Руководства, справочник API и примеры интеграции.',
    images: [
      {
        url: '/og/guides',
        width: 1200,
        height: 630,
        alt: 'Документация Nexara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Документация Nexara',
    description:
      'Документация Nexara API — транскрипция аудио с помощью искусственного интеллекта.',
    images: ['/og/guides'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${golosText.className} dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: 'dark', enableSystem: false, forcedTheme: 'dark' }}>
          <BackgroundBlobs />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
