import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GoToTopButton from "@/components/GoToTop";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Golden Basket | Premium Fresh Catfish & Sustainable Aquaculture in Uganda",
  description:
    "Golden Basket Ltd produces quality fresh catfish in Uganda, driving food security, youth & women employment, and sustainable growth through agribusiness innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${fraunces.variable} antialiased`}
      >
        <main className="min-h-screen bg-[#FAF7F0] text-[#1c1c1c] overflow-x-hidden">
          <Header />
          {children}
          <GoToTopButton />
          <Footer />
        </main>
      </body>
    </html>
  );
}

