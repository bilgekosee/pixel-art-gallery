import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "pixel-art-gallery",
  description: "pixel art koleksiyonum",
};

export default function RootLayout({}: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-dvh bg-zinc-950 text-zinc-100">
        <Header />
      </body>
    </html>
  );
}
