import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import '../styles/globals.css';
import { ClerkProvider } from "@clerk/nextjs";


const title = 'Copywriter - NotasAI';
const description = 'Generate your text in seconds.';

export const metadata: Metadata = {
  metadataBase: new URL('https://copy.notas.ai'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
    </ClerkProvider>
  );
}
