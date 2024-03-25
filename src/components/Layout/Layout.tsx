import { Footer } from './Footer/Footer';
import { ReactNode } from 'react';
import { Header } from './Header/Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
