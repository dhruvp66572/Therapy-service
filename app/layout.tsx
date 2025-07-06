import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Therapist-Website",
  description: "A simple therapist website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
