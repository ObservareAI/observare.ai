import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Observare | Observability for Agentic AI",
  description: "Monitor and debug AI agents like you would code. Real-time tracing, tool analytics, and performance monitoring for your AI systems.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/images/favicons/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      { url: '/images/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/images/favicons/site.webmanifest'
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
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XGED7BH6TY" />
    </html>
  );
}
