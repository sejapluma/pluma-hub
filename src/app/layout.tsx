import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluma - Comunidade para Psicólogas Empreendedoras",
  description: "Uma comunidade acolhedora para psicólogas empreendedoras que buscam crescimento e apoio mútuo através de workshops, networking e ferramentas exclusivas.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💜</text></svg>",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  },
  openGraph: {
    title: "Pluma - Comunidade para Psicólogas Empreendedoras",
    description: "Uma comunidade acolhedora para psicólogas empreendedoras que buscam crescimento e apoio mútuo através de workshops, networking e ferramentas exclusivas.",
    url: "https://convite.sejapluma.com",
    siteName: "Pluma",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pluma - Comunidade para Psicólogas Empreendedoras"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pluma - Comunidade para Psicólogas Empreendedoras",
    description: "Uma comunidade acolhedora para psicólogas empreendedoras que buscam crescimento e apoio mútuo através de workshops, networking e ferramentas exclusivas.",
    images: ["/images/og-image.svg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWPCXLCX');
          `}
        </Script>
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWPCXLCX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
