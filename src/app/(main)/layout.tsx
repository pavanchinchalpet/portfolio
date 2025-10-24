import type React from "react"
import type { Metadata } from "next"
import "../../styles/globals.css"

export const metadata: Metadata = {
  title: "Pavan Kumar Chinchalpet - Full Stack Developer",
  description:
    "Portfolio of Pavan Kumar Chinchalpet, a Full Stack Web Developer with extensive experience in architecting, developing, and deploying high-performance, scalable web applications using React.js, Next.js, Node.js, and modern technologies.",
  generator: "v0.app",
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
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
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
