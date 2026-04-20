import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Rizwan — Full Stack Developer",
  description:
    "Full Stack Developer specializing in AI-powered web platforms, cross-platform mobile apps, and scalable SaaS systems. Available for freelance.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Mobile App Developer",
    "AI Web Developer",
    "Freelance Developer Pakistan",
    "Muhammad Rizwan",
  ],
  authors: [{ name: "Muhammad Rizwan" }],
  openGraph: {
    title: "Muhammad Rizwan — Full Stack Developer",
    description:
      "From AI-powered SaaS platforms to cross-platform mobile apps — I engineer complete digital products that scale from idea to production.",
    type: "website",
    url: "https://developedbyriz.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-slate-200 antialiased">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
