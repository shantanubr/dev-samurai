import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from '@next/font/google';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dev Samurai',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
