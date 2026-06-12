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

export const metadata = {
  title: "Orlando Fornolles Jr.",
  description: "An editorial-inspired, minimalist digital resume and portfolio for Orlando Fornolles Jr., showcasing clean software engineering, local-first web applications, and AI integration workflows.",
  keywords: ["Orlando Fornolles Jr.", "Front-End AI Engineer", "FlyRank AI", "AI Engineer Intern", "Full-Stack Developer", "Front-End Developer", "SWUdevs COO", "Portfolio", "Minimalist CV", "Cebu City", "React", "JavaScript", "AI Engineering"],
};

export default function RootLayout({ children }) {
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
