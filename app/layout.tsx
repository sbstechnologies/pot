import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

import "@/app/globals.css";

import DisableInspect from "@/app/components/DisableInspect";
import SmoothScroll from "@/app/components/SmoothScroll";
import CookieConsent from "@/app/components/CookieConsent";

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
    "Discover spacious 1 & 2-bedroom apartments for rent in Sherman, Texas. The Parks on Taylor offers modern amenities, pet-friendly living, beautiful floor plans, and a convenient location.",

  keywords: [
    "Apartments Sherman TX",
    "Sherman Apartments",
    "Apartments for Rent Sherman Texas",
    "The Parks on Taylor",
    "Pet Friendly Apartments Sherman",
    "Luxury Apartments Sherman",
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
    canonical: "https://theparksontaylor.com",
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

  openGraph: {
    title: "The Parks on Taylor Apartment Homes",
    description:
      "Find beautiful apartment homes in Sherman, Texas with spacious floor plans and premium amenities.",
    url: "https://theparksontaylor.com",
    siteName: "The Parks on Taylor Apartment Homes",
    locale: "en_US",
    type: "website",
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
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  referrer: "origin-when-cross-origin",

  other: {
    "geo.region": "US-TX",
    "geo.placename": "Sherman",
    "geo.position": "33.6357;-96.6089",
    ICBM: "33.6357,-96.6089",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLHG2WWT"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <GoogleTagManager gtmId="GTM-WLHG2WWT" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentSchema),
          }}
        />

        <script src="https://cdn.jsdelivr.net/npm/disable-devtool@latest"></script>

        {process.env.NODE_ENV === "production" && <DisableInspect />}

        <SmoothScroll />
        <CookieConsent />

        {children}

        <Script
          id="rentbamboo-charles"
          src="https://charles.rentbamboo.com/w"
          strategy="afterInteractive"
          data-client-id="bamboo_7mkc8jx3"
          data-position="right"
          data-color="#1E3872"
        />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1e3872",
              color: "#fff",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
