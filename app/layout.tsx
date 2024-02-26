import type { Metadata } from "next";
import { Phudu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/Header/Header";

const phudu = Phudu({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-phudu",
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brand Store",
  description:
    "Welcome to 'Brand Store' U+002d Your Ultimate Destination for Premium Quality Products!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Common favicons for all devices */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/favicon-192x192.png"
        />
        {/* iOS icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        {/* Other favicons for specific devices or resolutions */}
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/favicon-512x512.png"
        />
        {/* Add more favicon sizes as needed */}

        {/* Set a default favicon */}
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={cn("font-phudu antialiased", phudu.variable)}>
        <Header />
        <main className="w-full mx-auto">{children}</main>
        <div>Footer</div>
      </body>
    </html>
  );
}
