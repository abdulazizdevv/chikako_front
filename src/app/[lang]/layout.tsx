import type { Metadata } from 'next';
import { Baloo_2 } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { i18n } from '../../../i18n.config';
import './globals.css';
import Layout from '@/components/Layout/Layout';
import 'keen-slider/keen-slider.min.css';

const inter = Baloo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chikako',
  description: 'Chikako website',
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: any };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Layout>{children}</Layout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
