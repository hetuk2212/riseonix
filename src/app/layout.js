"use client";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header/page";
import Loader from "@/components/Loder/page";
import { metadata } from "./metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);  

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="your-site-url" />
        <meta name="keywords" content="web development, app development, digital marketing, video editing, IT services" />
        <link rel="canonical" href="your-site-url" />
        <title>{metadata.title}</title>
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {loading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
