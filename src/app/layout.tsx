import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rayvyn AI | Smart Automation & AI Solutions",
    template: "%s | Rayvyn AI",
  },
  description: "Empowering businesses with smart automation and AI solutions. We help companies leverage artificial intelligence to streamline workflows, gain insights, and drive growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayvynai.com",
    siteName: "Rayvyn AI",
    title: "Rayvyn AI | Smart Automation & AI Solutions",
    description: "Empowering businesses with smart automation and AI solutions. We help companies leverage artificial intelligence to streamline workflows, gain insights, and drive growth.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rayvyn AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayvyn AI | Smart Automation & AI Solutions",
    description: "Empowering businesses with smart automation and AI solutions.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}