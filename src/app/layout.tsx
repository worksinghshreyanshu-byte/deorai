import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingPage/navbar";
import Footer from "@/components/landingPage/footer";
import TopLoader from "@/components/general/topLoader";
import { FRONTEND_URL } from "@/utils/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",   
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: {
    default: "Deorai | Heritage, History, Family & Village Legacy",
    template: "%s | Deorai",
  },

  description:
    "Discover Deorai — a living heritage of history, ancestors, family lineage, ancestral lands, village traditions, cultural events, poetry, and generations of stories preserved for the future.",

  keywords: [
    "Deorai",
    "Deorai village",
    "Deorai heritage",
    "Deorai history",
    "Deorai culture",
    "Deorai ancestors",
    "Deorai family tree",
    "Deorai Vanshawali",
    "Deorai genealogy",
    "Deorai ancestral lands",
    "Deorai heritage lands",
    "Deorai village history",
    "Deorai traditions",
    "Deorai events",
    "Deorai festivals",
    "Deorai family history",
    "Deorai lineage",
    "Deorai Uttar Pradesh",
    "Indian village heritage",
    "Indian family history",
    "ancestral heritage India",
    "थोड़े शब्द लगभग में",
  ],

  authors: [
    {
      name: "Rahul Singh",
    },
  ],

  creator: "Rahul Singh",
  publisher: "Deorai",

  alternates: {
    canonical: FRONTEND_URL,
  },

  openGraph: {
    title: "Deorai | Heritage, History, Family & Village Legacy",

    description:
      "Explore Deorai's history, ancestors, family lineage, ancestral lands, traditions, cultural events, and the stories that preserve its living heritage.",

    url: FRONTEND_URL,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863574/author_er0g3m.jpg",
        width: 1200,
        height: 630,
        alt: "Deorai — Heritage, History, Family and Village Legacy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Deorai | Heritage, History, Family & Village Legacy",

    description:
      "Discover Deorai's history, ancestors, family lineage, ancestral lands, traditions, events, and generations of stories.",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863574/author_er0g3m.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          flex flex-col
        `}
      >
        <TopLoader />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
