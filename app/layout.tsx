import type { Metadata } from "next";
import { Noto_Sans_Bengali, Noto_Serif_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-english",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-heading-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "সম্পূর্ণ আফসান প্রিন্ট আনস্টিজ ৩ পিস | Unstitched 3 Piece",
  description: "সম্পূর্ণ আফসান প্রিন্ট করা আনস্টিজ ৩ পিস — আজকের অফার মূল্য ১১০০ টাকা। অর্ডার করতে নিচের ফর্মটি পূরণ করুন।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${plusJakartaSans.variable} ${notoSansBengali.variable} ${notoSerifBengali.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
