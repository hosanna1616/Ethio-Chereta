import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AccountProvider } from "@/context/account-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EthioChereta ",
  description:
    "EthioChereta: transparent AI-powered tender management for Ethiopia. Track bids, discover tenders, and collaborate.",
  icons: {
    icon: [{ url: "/ethiochereta.png", type: "image/png" }],
    shortcut: "/ethiochereta.png",
    apple: "/ethiochereta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)]">
        <AccountProvider>{children}</AccountProvider>
      </body>
    </html>
  );
}
