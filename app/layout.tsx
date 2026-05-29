import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Parks on Taylor Apartments Homes",
  description:
    "The Parks on Taylor Apartments Homes offers inviting one and two bedroom apartments in Sherman, Texas. Experience modern living with spacious layouts, stylish finishes, and a vibrant community. Discover your new home today!",

  openGraph: {
    title: "The Parks on Taylor Apartments Homes",
    description:
      "The Parks on Taylor Apartments Homes offers inviting one and two bedroom apartments in Sherman, Texas. Experience modern living with spacious layouts, stylish finishes, and a vibrant community. Discover your new home today!",
    siteName: "The Parks on Taylor Apartments Homes",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Parks on Taylor Apartments Homes",
    description:
      "The Parks on Taylor Apartments Homes offers inviting one and two bedroom apartments in Sherman, Texas. Experience modern living with spacious layouts, stylish finishes, and a vibrant community. Discover your new home today!",
  },

  alternates: {
    canonical: "/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
