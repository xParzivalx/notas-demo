import { Metadata } from 'next';
import '../styles/globals.css';
import "../styles/global.css";
import "../styles/page.module.css";

import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const title = 'Copywriter - NotasAI';
const description = 'Genera textos en segundos.';

export const metadata: Metadata = {
  metadataBase: new URL('https://copy.notas.ai'),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'es_ES',
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
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
