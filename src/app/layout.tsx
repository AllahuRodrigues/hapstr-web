import "./globals.css";
import { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "HapSTR – Happening on the Street",
  description: "AI-driven AR real estate companion – landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="pt-20">{children}</main>
        <footer className="text-center text-gray-500 py-6 text-sm">
          © 2025 HapSTR. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
