import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RouteTransition } from '@/components/RouteTransition';

export const metadata: Metadata = {
  title: 'Kenneth Espiritu',
  description: 'A minimal personal website in a light grey theme',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-graybg-light text-gray-800 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 min-w-0 py-10">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <RouteTransition>{children}</RouteTransition>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



