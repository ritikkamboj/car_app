import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/conponents";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discovers the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
