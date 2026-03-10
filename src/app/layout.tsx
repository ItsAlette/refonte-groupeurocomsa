import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Group Eurocom SA (GESA)",
  description: "Groupe Eurocom SA (GESA) is a consulting and communication firm specializing in urban marketing, event organization, strategic advisory, and business development solutions.",
  authors: [{ name: "Alette Dieme", url: "https://www.linkedin.com/in/alette-dieme/" }],
  creator: "Alette Dieme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="author" content="Alette Dieme" />
        <meta name="creator" content="Alette Dieme" />
        <meta name="linkedin" content="https://www.linkedin.com/in/alette-dieme/" />
      </head>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
