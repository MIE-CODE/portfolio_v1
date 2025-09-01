import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./Providers/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MIE | Frontend & Mobile Developer | MERN Stack Expert",
  description:
    "Menyaga Enyo Israel (MIE) — Frontend Developer, Mobile Developer, and MERN Stack Developer with 3+ years of experience. I build modern, responsive, and high-performance web and mobile applications using Next.js, React, TypeScript, Tailwind CSS, Flutter, and Node.js. Passionate about crafting seamless user experiences and solving complex problems through clean, scalable code.",

  // ✅ Keywords for SEO
  keywords: [
    "Menyaga Enyo Israel",
    "MIE",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Flutter Mobile Developer",
    "Tailwind CSS Expert",
    "Full-Stack Developer",
    "Web Developer Portfolio",
    "Mobile App Developer",
  ],

  // ✅ Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "MIE | Frontend & Mobile Developer | MERN Stack Expert",
    description:
      "Explore the portfolio of Menyaga Enyo Israel (MIE) — a professional frontend, mobile, and MERN stack developer specializing in building modern, responsive, and scalable applications.",
    url: "https://mie-portfolio-v1.vercel.app/",
    siteName: "MIE Portfolio",
    images: [
      {
        url: "https://mie-portfolio-v1.vercel.app/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Menyaga Enyo Israel Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MIE | Frontend & Mobile Developer | MERN Stack Expert",
    description:
      "Frontend Developer • Mobile Developer • MERN Stack Expert. Explore my portfolio and discover my latest projects and contributions.",
    images: ["https://mie-portfolio-v1.vercel.app/images/banner.png"],
    creator: "@M_I_E_CODE",
  },

  // ✅ Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  // ✅ Canonical URL (Prevents duplicate content issues)
  alternates: {
    canonical: "https://mie-portfolio-v1.vercel.app/images/banner.png",
  },

  // ✅ Metadata for Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ✅ Theme Colors for Mobile Browsers
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D3DAD9" },
    { media: "(prefers-color-scheme: dark)", color: "#37353E" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
