import type { Metadata, Viewport } from 'next';
import '../src/styles/index.css';

export const viewport: Viewport = {
  themeColor: '#0B1320',
};

export const metadata: Metadata = {
  title: {
    default: 'Xin Yao Lee — Full-Stack Developer & Portfolio',
    template: '%s — Xin Yao Lee',
  },
  description: 'Xin Yao Lee — Full-Stack Developer specializing in scalable web platforms, React, Node.js, and modern cloud solutions.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
