import './globals.css';
import { Manrope, Cormorant_Garamond, Fraunces, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import MotionProvider from '../components/MotionProvider';
import SmoothScroll from '../components/SmoothScroll';
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

export const metadata: Metadata = {
  title: 'Janvi Chaturvedi — Full-Stack Developer',
  description: 'Full-stack developer building clean, scalable products from database to interface.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className={`${manrope.className} antialiased`}>
        <SmoothScroll />
        <MotionProvider>
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <FooterBar />
        </MotionProvider>
      </body>
    </html>
  );
}
