import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Traveling In Palawan",
  description: "Travel Palawan ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className="relative 
        overflow-hidden">
        {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
