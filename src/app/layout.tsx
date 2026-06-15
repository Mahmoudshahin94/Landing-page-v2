import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EatFresh — Fresh Meals, Delivered Daily",
  description: "Healthy meal prep delivered to your door. Chef-crafted, macro-balanced meals for every lifestyle — muscle gain, maintenance, or weight loss.",
  keywords: ["meal prep", "healthy food delivery", "fresh meals", "nutrition", "chef prepared"],
  openGraph: {
    title: "EatFresh — Fresh Meals, Delivered Daily",
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
