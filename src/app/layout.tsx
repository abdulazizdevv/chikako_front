import type { Metadata } from 'next';
import { Baloo_2 } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';
import Layout from '@/components/Layout/Layout';
import 'keen-slider/keen-slider.min.css';

const inter = Baloo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chikako',
  description: 'Chikako website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Layout>{children}</Layout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
