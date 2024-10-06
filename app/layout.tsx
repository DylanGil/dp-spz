import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { TailwindIndicator } from "@/lib/TailwindIndicator";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Creation de team | Sparking Zero",
  description: "Creation de team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage:
            'url("https://p325k7wa.twic.pics/high/dragon-ball/dragon-ball-sparking-zero/04-characters/DBSZ-bg-Section.jpg?twic=v1/cover-min=1340x905")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
