import type { Metadata } from "next";
import { Instrument_Serif, Inter, Press_Start_2P } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
});
const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-press-start" });

export const metadata: Metadata = {
  title: "Pixel Art Gallery",
  description: "A small salon of hand-made pixel art.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${pixel.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
