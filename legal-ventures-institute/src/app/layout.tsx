import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";

const b612 = B612({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-b612",
});

export const metadata: Metadata = {
  title: "Legal & Ethics Ventures Institute",
  description: "Hands-on law, AI, and ethics training at Legal & Ethics Ventures Institute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={b612.variable}>
        {children}
      </body>
    </html>
  );
}
