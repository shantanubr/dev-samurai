import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteName } from '@/constants';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: siteName,
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={inter.className}>
        <div className='hidden sm:block'>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </div>
        <div className='sm:hidden flex items-center justify-center h-screen font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent'>
          {`Use Desktop For The Best Experience`}
        </div>
      </body>
    </html>
  );
}
