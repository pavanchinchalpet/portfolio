import type React from "react"
import type { Metadata } from "next"
import "../../styles/globals.css"

const siteName = "Pavan Kumar Chinchalpet Portfolio"
const siteDescription =
  "Portfolio of Pavan Kumar Chinchalpet, a full-stack developer building scalable web applications with Next.js, React, Node.js, TypeScript, PostgreSQL, and modern cloud tooling."
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pavan Kumar Chinchalpet | Full-Stack Developer",
    template: "%s | Pavan Kumar Chinchalpet",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Pavan Kumar Chinchalpet",
    "Pavan Chinchalpet",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Portfolio Website",
    "Web Developer Hyderabad",
  ],
  authors: [{ name: "Pavan Kumar Chinchalpet" }],
  creator: "Pavan Kumar Chinchalpet",
  publisher: "Pavan Kumar Chinchalpet",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "Pavan Kumar Chinchalpet | Full-Stack Developer",
    description: siteDescription,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pavan Kumar Chinchalpet portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Kumar Chinchalpet | Full-Stack Developer",
    description: siteDescription,
    images: ["/og-image.svg"],
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
