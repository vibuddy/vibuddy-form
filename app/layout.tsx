import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { playfairDisplay, dmSans } from "./fonts";
import {
  seoTitle,
  seoDescription,
  siteUrl,
  firmName,
  firmNameLegal,
  tagline,
  email,
  address,
  localSeo,
  businessType,
} from "@/config/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Join Us - vibuddy | Web Development, SEO, and Digital Marketing Services",
  description:
    "Join vibuddy for expert web development, SEO, and digital marketing services. Elevate your online presence with our tailored solutions. Contact us today!",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: { canonical: "/" },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: firmName,
    locale: "en_IN",
    type: "website",
    ...(localSeo.image
      ? { images: [{ url: localSeo.image, width: 1200, height: 630 }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    ...(localSeo.image ? { images: [localSeo.image] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
