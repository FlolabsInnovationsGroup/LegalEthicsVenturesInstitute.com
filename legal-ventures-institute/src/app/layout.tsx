import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";

const b612 = B612({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-b612",
});

const SITE_NAME = "Legal & Ethics Ventures Institute";
const SITE_DESCRIPTION =
  "Hands-on law, AI, and ethics training at Legal & Ethics Ventures Institute.";
const SITE_URL = "https://www.legalethicsventuresinstitute.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/logo.png",
        alt: `${SITE_NAME} red hand logo`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={b612.variable}>{children}</body>
    </html>
  );
}