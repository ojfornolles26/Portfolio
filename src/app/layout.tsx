import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orlando Fornolles Jr.",
  description: "An editorial-inspired, minimalist digital resume and portfolio for Orlando Fornolles Jr., showcasing clean software engineering, local-first web applications, and AI integration workflows.",
  keywords: ["Orlando Fornolles Jr.", "Full-Stack Developer", "Front-End Developer", "SWUdevs COO", "Portfolio", "Minimalist CV", "Cebu City", "React", "TypeScript", "AI Engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
