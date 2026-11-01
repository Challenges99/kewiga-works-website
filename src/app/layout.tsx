import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileWaBar } from '@/components/MobileWaBar';
import { RevealObserver } from '@/components/RevealObserver';
import { SITE } from '@/lib/site';
import './globals.css';

// Fonts are stored in src/fonts and served from our own domain, so visitors' browsers
// never contact Google (faster, and no IP addresses sent to Google), and builds work offline.
const display = localFont({ src: '../fonts/bricolage-grotesque-latin-wght-normal.woff2', weight: '200 800', variable: '--font-display', display: 'swap' });
const body = localFont({ src: '../fonts/public-sans-latin-wght-normal.woff2', weight: '100 900', variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Kewiga Works: Home & Office Maintenance Plans in Abuja', template: '%s' },
  description: 'Monthly home and office maintenance plans in Abuja with fixed published prices. Verified artisans, booked on WhatsApp, no app needed.',
  openGraph: {
    type: 'website',
    siteName: 'Kewiga Works',
    locale: 'en_NG',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/img/favicon-32.png', apple: '/img/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#17106b',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// Runs before the page paints: marks JS as available (so scroll animations never hide
// content for visitors without JS) and forwards old single-page links like /#/plans.
const BOOT = `document.documentElement.classList.add('js');
(function(){var m=location.hash.match(/^#\\/([a-z]*)(?:\\/([\\w-]+))?$/);if(!m)return;
var ok=['plans','rewards','estates','referrals','artisans','faq'];var p=m[1]==='referrals'?'/rewards/':(ok.indexOf(m[1])>-1?'/'+m[1]+'/':'/');
location.replace(p+(m[2]?'#'+m[2]:(m[1]==='referrals'?'#referrals':'')));})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileWaBar />
        <RevealObserver />
      </body>
    </html>
  );
}
