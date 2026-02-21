import type { Metadata } from "next";
import { Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saffron Goat Milk Soap | বাংলাদেশের সবচেয়ে জনপ্রিয় সাবান",
  description: "Saffron Goat Milk Soap – মাত্র ৭ দিনে ত্বক হবে স্পটলেস, দুধের মতো ফর্সা। অর্ডার করুন এখনই।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${plusJakartaSans.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
