import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yiğit Yaren",
  description: "Kişisel notlar, okumalar ve incelemeler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} max-w-2xl mx-auto px-6 py-12 bg-[#F9F9F9] text-zinc-900`}>
        
        {/* Sitenin her sayfasında görünecek üst menü (nav) */}
        <header className="mb-12 flex items-center justify-between border-b border-zinc-200 pb-6">
          <a href="/" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
            Yiğit
          </a>
          <nav className="flex gap-4 text-sm text-zinc-500">
            <a href="/" className="hover:text-black transition-colors">Ana Sayfa</a>
            <a href="/hakkimda" className="hover:text-black transition-colors">Hakkımda</a>
            <a href="/filmler" className="hover:text-black transition-colors">Filmler</a>
            <a href="/albumler" className="hover:text-black transition-colors">Albümler</a>
            <a href="/kitaplar" className="hover:text-black transition-colors">Kitaplar</a>
          </nav>
        </header>

        {/* Sayfa içerikleri (mdx dosyaların) burada görünecek */}
        <main>{children}</main>

      </body>
    </html>
  );
}