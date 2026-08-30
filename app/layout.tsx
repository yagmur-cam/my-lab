import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Yağmur Çam",
  description: "AI, neuroscience, robotics.",
};
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
        {children}
        </body>
      </html>   
    );
}
