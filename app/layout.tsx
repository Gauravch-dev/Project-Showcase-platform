import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit=Outfit({
  subsets:["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Nextjs Project demo",
  description: "A community platform for creators to showcase their apps. AI tools, SaaS products and creative projects. Authentic launches, real builders, genuine feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit.variable} antialiased`}
      >
        <header>iBuiltThis</header>
        {children}
      </body>
    </html>
  );
}
