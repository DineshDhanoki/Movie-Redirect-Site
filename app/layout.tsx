import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Movie Redirect Site",
  description: "Watch movies and clips redirected to external hosts with ads & SEO setup.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
