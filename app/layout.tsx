import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

import "@/app/globals.css";

import CookieConsent from "@/app/components/CookieConsent";
import DisableInspect from "@/app/components/DisableInspect";
import SmoothScroll from "@/app/components/SmoothScroll";
import RentBambooWidget from "@/app/components/RentBambooWidget";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1E3872",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://theparksontaylor.com"),

  title: {
    default:
      "The Parks on Taylor Apartment Homes | Apartments for Rent in Sherman, TX",
    template: "%s | The Parks on Taylor",
  },

  description:
    "Discover spacious 1 & 2-bedroom apartments for rent in Sherman, Texas with modern amenities and pet-friendly living.",

  keywords: [
    "Apartments Sherman TX",
    "Sherman Apartments",
    "The Parks on Taylor",
    "Luxury Apartments Sherman",
    "Pet Friendly Apartments Sherman",
    "Apartment Homes Sherman TX",
  ],

  applicationName: "The Parks on Taylor Apartment Homes",

  authors: [
    {
      name: "The Parks on Taylor Apartment Homes",
      url: "https://theparksontaylor.com",
    },
  ],

  creator: "The Parks on Taylor Apartment Homes",
  publisher: "The Parks on Taylor Apartment Homes",
  category: "Real Estate",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theparksontaylor.com",
    siteName: "The Parks on Taylor Apartment Homes",
    title: "The Parks on Taylor Apartment Homes",
    description:
      "Modern apartment living in Sherman, Texas with spacious floor plans and premium amenities.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "The Parks on Taylor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Parks on Taylor Apartment Homes",
    description: "Modern apartment living in Sherman, Texas.",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  referrer: "origin-when-cross-origin",

  other: {
    "geo.region": "US-TX",
    "geo.placename": "Sherman",
    "geo.position": "33.6357;-96.6089",
    ICBM: "33.6357,-96.6089",
  },
};

const apartmentSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: "The Parks on Taylor Apartment Homes",
  image: "https://theparksontaylor.com/images/logo.png",
  url: "https://theparksontaylor.com",
  telephone: "+1-903-961-6391",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1200 West Taylor Street",
    addressLocality: "Sherman",
    addressRegion: "TX",
    postalCode: "75092",
    addressCountry: "US",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Pet Friendly",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Swimming Pool",
      value: true,
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <GoogleTagManager gtmId="GTM-WLHG2WWT" />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLHG2WWT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script
          id="schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentSchema),
          }}
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/disable-devtool@latest"
          strategy="afterInteractive"
        />

        {process.env.NODE_ENV === "production" && <DisableInspect />}

        <SmoothScroll />
        <CookieConsent />

        {children}

        <RentBambooWidget />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1E3872",
              color: "#fff",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
