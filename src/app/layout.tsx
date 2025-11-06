import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "@assets/css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LLMForAutism",
  description: "LLMForAutism homepage",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
