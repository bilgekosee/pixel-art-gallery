import "./globals.css";
import Header from "@/components/Header";
import Home from "@/components/Home";

export const metadata = {
  title: "pixel-art-gallery",
  description: "pixel art koleksiyonum",
};

export default function RootLayout({}: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-dvh bg-[#0f1020] text-zinc-100">
        <Header />
        <Home />
      </body>
    </html>
  );
}
