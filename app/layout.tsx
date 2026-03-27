import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anandrajpandey.dev"),
  title: "Anand Raj Pandey",
  description:
    "An AWS Certified Developer Associate focused on cloud architecture, backend systems, automation, and secure infrastructure.",
  keywords: [
    "Anand Raj Pandey",
    "Cloud Engineer",
    "Backend Developer",
    "AWS Certified Developer Associate",
    "DevOps Portfolio",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Python",
    "Node.js",
  ],
  authors: [{ name: "Anand Raj Pandey" }],
  creator: "Anand Raj Pandey",
  openGraph: {
    title: "Anand Raj Pandey | Cloud Engineer & Backend Developer",
    description:
      "Cloud-native systems, backend APIs, DevOps tooling, and AWS-first engineering.",
    type: "website",
    images: ["/imgs/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Raj Pandey | Cloud Engineer & Backend Developer",
    description:
      "AWS-certified engineer building scalable, observable, and secure systems.",
    images: ["/imgs/profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020817",
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
      <body
        className={`${sora.variable} ${manrope.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
