import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: "Marco Abdo - Front-End & Mobile Developer",
  description: "Professional portfolio of Marco Abdo, a Front-End Developer specializing in React.js, React Native, and modern web & mobile experiences.",
  generator: "Next.js",
  applicationName: "Marco Abdo Portfolio",
  authors: [{ name: "Marco Abdo", url: "https://github.com/marcoabdo20" }],
  keywords: ["Front-End Developer", "React.js", "React Native", "Tailwind CSS", "Portfolio", "Web Developer", "Mobile Developer"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}