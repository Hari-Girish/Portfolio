// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hari Girish — Portfolio',
  description: 'CS&E student at Ohio State building AI systems — from biomedical imaging to agentic full-stack apps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
