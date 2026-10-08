import './globals.css';
import { Manrope, Cormorant_Garamond, Fraunces, JetBrains_Mono, Permanent_Marker } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import HeroSidebar from '../components/HeroSidebar';
import PageTransition from '../components/PageTransition';
import MotionProvider from '../components/MotionProvider';
import CustomCursor from '../components/CustomCursor';
import FooterBar from '../components/FooterBar';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const marker = Permanent_Marker({ weight: '400', subsets: ['latin'], variable: '--font-marker' });

export const metadata: Metadata = {
  title: 'Janvi Chaturvedi — Full-Stack Software Architect',
  description: 'Crafting digital products & high-performance web architecture.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} ${fraunces.variable} ${jetbrains.variable} ${marker.variable}`}>
      <body className={`${manrope.className} antialiased`}>
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-10">
          <div className="fixed inset-0 bg-gradient-to-br from-[#D8C8BC] via-[#E8DDD3] to-[#C9B0AE]" />
        </div>
        <MotionProvider>
          <CustomCursor />
          <Navbar />
          <HeroSidebar />
          <PageTransition>{children}</PageTransition>
          <FooterBar />
        </MotionProvider>
      </body>
    </html>
  );
}
