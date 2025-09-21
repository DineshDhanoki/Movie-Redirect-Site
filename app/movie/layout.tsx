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
      <head>
        {/* Placeholder Ad Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Example: PropellerAds / Adsterra script
              // Replace with your ad network's provided script
              console.log("Ad script placeholder loaded.");
            `,
          }}
        />

        {/* Push Notification Script (e.g., Propush) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Example: Push Notification script placeholder
              // Replace with your actual push notification code
              console.log("Push notification script placeholder loaded.");
            `,
          }}
        />
      </head>
      <body className="bg-gray-950 text-gray-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
