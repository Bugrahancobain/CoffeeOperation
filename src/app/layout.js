import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import Head from "next/head";
import Script from 'next/script'; // next/script modülünü ekleyin

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

export const metadata = {
  title: "Coffee Operation",
  description: "Kahveseverler için özel olarak seçilmiş taze kahve çeşitleri, kahve makineleri ve aksesuarları. Kahve kültürünü keşfedin, en iyi kahve deneyimini yaşayın ve favori lezzetlerinizi bulun. Sipariş verin ve kahvenizin tadını çıkarın!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="keywords" content="kahve, kahveci, kahve çeşitleri, espresso, cappuccino, latte, kahve makineleri, kahve çekirdekleri, kahve tarifleri, taze kahve, kahve tadımı, kahve dükkanı, kahve içecekleri, kahve kültürü, kahve satış noktası" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        {/* Google Analytics Scripti */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1NJCMTZDRJ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1NJCMTZDRJ');
          `}
        </Script>
      </body>
    </html>
  );
}
