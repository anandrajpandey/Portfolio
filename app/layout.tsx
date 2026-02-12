import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anand Raj Pandey - Cloud Developer & AWS Specialist",
  description:
    "Cloud-focused developer building scalable, serverless solutions. AWS Certified Developer Associate specializing in backend APIs and security.",
  keywords: [
    "AWS",
    "Cloud Developer",
    "Backend Development",
    "Cloud Computing",
    "Security",
    "Serverless",
    "Full Stack Developer",
  ],
  authors: [{ name: "Anand Raj Pandey" }],
  creator: "Anand Raj Pandey",
  generator: "Next.js",
};

export const viewport: Viewport = {
  themeColor: "#0c1929",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased bg-gray-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
