import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ai.doudgaya.xyz'),
  title: {
    default: 'AI | Doudgaya',
    template: '%s | AI | Doudgaya',
  },
  description: 'Generate, Audio, Image, Video, Text, and more with AI',
  keywords: ['AI', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence', "Text", "Image", "Audio", "Video", "Generate", "Create",
    "Text Generation", "Image Generation", "Audio Generation", "Video Generation", "Text Creation", "Image Creation", "Audio Creation", "Video Creation",
    "Text AI", "Image AI", "Audio AI", "Video AI", "Text AI Generation", "Image AI Generation", "Audio AI Generation", "Video AI Generation",
    "Text AI Creation", "Image AI Creation", "Audio AI Creation", "Video AI Creation",
    "Text AI Generate", "Image AI Generate", "Audio AI Generate", "Video AI Generate",
    "Text AI Create", "Image AI Create", "Audio AI Create", "Video AI Create",
    "Text AI Generate", "Image AI Generate", "Audio AI Generate", "Video AI Generate",
    "Text AI Create", "Image AI Create", "Audio AI Create", "Video AI Create",
    "Text AI Generate", "Image AI Generate", "Audio AI Generate", "Video AI Generate",
  ],
  authors: [{ name: 'DoudGaya' }],
  creator: 'DoudGaya',
  publisher: 'DoudGaya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://doudgaya.xyz',
    siteName: 'AI | Doudgaya',
    title: 'AI | Doudgaya',
    description: 'Generate, Audio, Image, Video, Text, and more with AI',
    images: [
      {
        url: 'https://your-website.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Website Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
    creator: '@yourTwitterHandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
        {children}
      </body>
    </html>
  );
}
