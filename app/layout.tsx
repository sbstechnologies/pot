import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theparksontaylor.com"),

  title: {
    default: "The Parks on Taylor Apartments Homes",
    template: "%s | The Parks on Taylor Apartments Homes",
  },

  description:
    "The Parks on Taylor Apartments Homes offers inviting one and two bedroom apartments in Sherman, Texas. Experience modern living with spacious layouts, stylish finishes, and a vibrant community. Discover your new home today.",

  keywords: [
    "Apartments in Sherman TX",
    "Sherman Texas Apartments",
    "The Parks on Taylor",
    "Apartment Homes",
    "Rental Apartments Sherman",
    "1 Bedroom Apartments",
    "2 Bedroom Apartments",
    "Texas Apartments",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "The Parks on Taylor Apartments Homes",
    description:
      "The Parks on Taylor Apartments Homes offers inviting one and two bedroom apartments in Sherman, Texas.",
    url: "/",
    siteName: "The Parks on Taylor Apartments Homes",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Parks on Taylor Apartments Homes",
    description:
      "The Parks on Taylor Apartments Homes offers inviting one and two bedroom apartments in Sherman, Texas.",
  },

  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        {children}{" "}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
          }}
        />
      </body>
    </html>
  );
}
