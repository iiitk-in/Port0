// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Client from "./client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IIITK.in",
  description: "IIITK's Student-Run Host",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
