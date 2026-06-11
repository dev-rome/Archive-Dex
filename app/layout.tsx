import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const archivoSans = Archivo({
  variable: "--font-archivo-sans",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "archive-dex — field specimen catalog",
  description: "AI-powered specimen catalog built as a field research archive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoSans.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header>
          <Nav />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
