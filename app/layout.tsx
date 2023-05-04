import "./globals.css";
import { Figtree, Fraunces } from "@next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  variable: "--font-fraunces",
});
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${fraunces.variable} h-full`}>
      <head />
      <body className={`h-full`}>{children}</body>
    </html>
  );
}
