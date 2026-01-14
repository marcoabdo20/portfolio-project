import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marco Abdo - Front-End & Mobile Developer",
  description: "Professional portfolio of Marco Abdo, a Front-End Developer specializing in React.js, React Native, and modern web & mobile experiences.",
  generator: "Next.js 13",
  applicationName: "Marco Abdo Portfolio",
  authors: [{ name: "Marco Abdo", url: "https://github.com/marcoabdo20" }],
  keywords: ["Front-End Developer", "React.js", "React Native", "Tailwind CSS", "Portfolio", "Web Developer", "Mobile Developer"],
  viewport: "width=device-width, initial-scale=1.0",
   icons: {
    icon: "/marco-img.png",       
    shortcut: "/marco-img.png",   
    apple: "/marco-img.png",      
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
