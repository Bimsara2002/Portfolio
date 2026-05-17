import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K A Bimsara Kaushal — Full-Stack Developer",
  description:
    "Portfolio of K A Bimsara Kaushal, a 3rd year IT undergraduate at National Institute of Business Management, Sri Lanka. Full-Stack Developer specialising in PHP, Laravel, React, and Next.js.",
  keywords: ["Bimsara Kaushal", "Full-Stack Developer", "Laravel", "Next.js", "NIBM", "Sri Lanka", "Portfolio"],
  openGraph: {
    title: "K A Bimsara Kaushal — Full-Stack Developer",
    description: "Portfolio of K A Bimsara Kaushal — Laravel, Next.js, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var saved = localStorage.getItem('theme');
              var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
              if (saved === 'light' || (!saved && prefersLight)) {
                document.documentElement.classList.add('light-mode');
              } else {
                document.documentElement.classList.remove('light-mode');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        <Navbar />
        <main style={{ flex: 1, paddingTop: "72px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

