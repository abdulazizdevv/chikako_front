import type { Metadata } from 'next';
import { Baloo_2 } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { i18n } from '../../../i18n.config';
import './globals.css';
import Layout from '@/components/Layout/Layout';
import 'keen-slider/keen-slider.min.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Baloo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Chikako',
    template: '%s - Chikako',
  },
  description:
    'Chikako Qo’qon erkin Iqtisodiy zonasi eng sifatli qulay narxlarda.',
  keywords:
    "chikako, Qo’qon erkin Iqtisodiy zonasi, qo'qon, pampers, o'yinchoq ",
  robots: { index: false, follow: false },
  // other: {
  //   url: 'https://ajoyib-fastfood.uz/',
  // },
  viewport: { width: 'device-width', initialScale: 1 },
  // verification: {
  //   google: 'e5cQm-u-rE5za92aa-FEOS5GCBwDiP6SB0mOs474F30',
  // },
};

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
