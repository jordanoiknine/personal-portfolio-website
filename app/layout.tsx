import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordan Oiknine",
  description: "High school student passionate about biotech, leadership, and community service. Soccer athlete, UNICEF club leader, and entrepreneur.",
  keywords: ["portfolio", "student", "biotech", "leadership", "UNICEF", "soccer"],
  authors: [{ name: "Jordan Oiknine" }],
  openGraph: {
    title: "Jordan Oiknine",
    description: "High school student passionate about biotech, leadership, and community service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

