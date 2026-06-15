import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EATnaked — It's a Lifestyle",
  description: "EAT local, EAT healthy, EATnaked. Homemade meals, delivered daily — fresh, never frozen. Chef-crafted, macro-balanced meals for every lifestyle.",
  keywords: ["meal prep", "healthy food delivery", "fresh meals", "nutrition", "chef prepared", "eatnaked"],
  openGraph: {
    title: "EATnaked — It's a Lifestyle",
    description: "Real food, real ingredients, real results. Fuel your lifestyle with chef-crafted meals delivered fresh daily.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
