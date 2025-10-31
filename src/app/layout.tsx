import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OnchainProviders } from "@/providers/OnchainProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BM App",
  description: "Farcaster Mini App for BM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
