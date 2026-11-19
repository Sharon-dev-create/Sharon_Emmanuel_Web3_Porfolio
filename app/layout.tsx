/* eslint-disable @next/next/no-page-custom-font -- The App Router root layout loads these fonts for every route. */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sharon Emmanuel — Software Engineer, Full-Stack & Web3 Developer",
  description:
    "Software engineer and product builder working across responsive web applications, backend services, databases, and blockchain systems.",
  openGraph: {
    title: "Sharon Emmanuel — Software Engineer & Web3 Developer",
    description:
      "Building digital products across frontend, backend, and blockchain infrastructure.",
    type: "website",
    images: ["/Portfolio-Img.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon Emmanuel — Software Engineer & Web3 Developer",
    description:
      "Building digital products across frontend, backend, and blockchain infrastructure.",
    images: ["/Portfolio-Img.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
