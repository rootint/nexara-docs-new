import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import localFont from 'next/font/local';
import { BackgroundBlobs } from '@/components/background-blobs';

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

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${golosText.className} dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <BackgroundBlobs />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
