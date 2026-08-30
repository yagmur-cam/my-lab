import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export default function RootLayout({
   children,
   }: {
    children: React.ReactNode;
   }) {
      return (
    <html lang="en">
    <body className="mx-auto max-w-2xl px-6 py-16">
        <nav className="mb-16 flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/writing">Writing</Link>
        </nav>
        {chidren}
        </body>
      </html>   
    );
}
