import './globals.css';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HapSTR – Happening on the Street',
  description: 'AI-driven AR real estate companion – landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <header className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm text-white z-10">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-semibold">HapSTR</div>
            <ul className="flex space-x-6 text-lg">
              <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-gray-300">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        {/* Footer */}
        <footer className="text-center text-gray-500 py-6 text-sm">
          © 2025 HapSTR. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
