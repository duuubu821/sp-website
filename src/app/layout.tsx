import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SP – Personal Site',
  description: 'A minimal personal website in a light grey theme',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-graybg-light text-gray-800 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 container-max py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



