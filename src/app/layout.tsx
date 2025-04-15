import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluma - Comunidade para Psicólogas Empreendedoras",
  description: "Uma comunidade acolhedora para psicólogas empreendedoras que buscam crescimento e apoio mútuo através de workshops, networking e ferramentas exclusivas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
