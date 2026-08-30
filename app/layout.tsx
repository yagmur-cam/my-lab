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

        <footer className="mt-24 flex gap-5 text-sm">
          href="https://github.com/yagmur-cam"
          className="underline underline-offset-4 hover:text-neutral-500"
        <a>
          GitHub
        </a>
        
          href="mailto:yagmurcam026@gmail.com"
          className="underline underline-offset-4 hover:text-neutral-500"
        <a>
          Email
        </a>
        
          href="www.linkedin.com/in/yağmur-çam-2860y00"
          className="underline underline-offset-4 hover:text-neutral-500"
        <a>
          LinkedIn
      </a>
    </footer>
    </body>
  </html>
  );
}
