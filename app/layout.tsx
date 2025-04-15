import type React from "react"
import type { Metadata } from "next"
import { Roboto, Montserrat } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "The 90 Days | A Journey Into The Unknown",
  description:
    "The story of a 90-day journey into building something that wasn't supposed to exist. A rift. A fracture in the ordinary.",
  keywords: ["90 days", "project", "journey", "experiment", "technology", "innovation"],
  authors: [{ name: "The Mastermind" }],
  openGraph: {
    title: "The 90 Days | A Journey Into The Unknown",
    description: "The story of a 90-day journey into building something that wasn't supposed to exist.",
    images: ["/mastermind.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 90 Days | A Journey Into The Unknown",
    description: "The story of a 90-day journey into building something that wasn't supposed to exist.",
    images: ["/mastermind.png"],
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
        <link rel="canonical" href="https://the90days.com" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}


import './globals.css'