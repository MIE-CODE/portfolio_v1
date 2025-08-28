import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Menyaga Enyo Israel | Frontend Developer",
  description:
    "I'm Menyaga Enyo Israel, a frontend developer skilled in Next.js, React, TypeScript, Tailwind, and Framer Motion. Check out my projects and experience!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mie-portfolio-v1.vercel.app",
    title: "MIE | Portfolio",
    siteName: "MIE | Portfolio",
    images: [
      {
        url: "https://mie-portfolio-v1.vercel.app/images/banner.png",
        width: 1200,
        height: 630,
        alt: "MIE Portfolio",
      },
    ],
  },
  twitter: {
    handle: "@M_I_E_CODE",
    site: "https://x.com/M_I_E_CODE",
    cardType: "summary_large_image",
  },
};

export default config;
