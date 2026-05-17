import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google";
// Section 1 fonts
import { Newsreader, Mea_Culpa, Style_Script} from "next/font/google";

// Section 2 fonts
import { Inter } from "next/font/google";

import "./globals.css";

const fontSans = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

const fontSerif = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

const fontMono = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

// ${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}
export const metadata: Metadata = {
  title: "Portfolio",
  description: "A personal portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} flex min-h-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
