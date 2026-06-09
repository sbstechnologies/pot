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
    default: "Apartments for Rent in Sherman, TX | The Parks on Taylor",
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
    "1 Bedroom Apartments Sherman TX",
    "2 Bedroom Apartments Sherman TX",
    "Luxury Apartments Sherman",
    "Apartment Homes Sherman TX",
    "Rental Homes Sherman Texas",
    "Sherman TX Housing",
    "Grayson County Apartments",
  ],

  applicationName: "The Parks on Taylor",

  authors: [
    {
      name: "The Parks on Taylor",
      url: "https://theparksontaylor.com",
    },
  ],

  creator: "The Parks on Taylor",
  publisher: "The Parks on Taylor",
  category: "Real Estate",

  alternates: {
    canonical: "https://theparksontaylor.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "The Parks on Taylor Apartments | Sherman, Texas",
    description:
      "Find beautiful apartment homes in Sherman, Texas with spacious floor plans, modern amenities, and a pet-friendly community.",

    url: "https://theparksontaylor.com",
    siteName: "The Parks on Taylor",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Parks on Taylor Apartments in Sherman TX",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Parks on Taylor Apartments",
    description: "Modern apartment living in Sherman, Texas.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  referrer: "origin-when-cross-origin",

  other: {
    "geo.region": "US-TX",
    "geo.placename": "Sherman",
    "geo.position": "33.6357;-96.6089",
    ICBM: "33.6357, -96.6089",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apartmentSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "The Parks on Taylor",
    image: "https://theparksontaylor.com/images/og-image.jpg",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentSchema),
          }}
        />

        {children}

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
