import "./globals.css";
import { Figtree } from "@next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} h-full`}>
      <head />
      <body className={`h-full`}>{children}</body>
    </html>
  );
}
