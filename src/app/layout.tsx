import type { Metadata, Viewport } from 'next';

import '../theme/variable.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'nextjs-template',
  description: 'nextjs template',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body>{children}</body>
    </html>
  );
}
