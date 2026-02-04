import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SomaThrive | Helping Somali Students Thrive",
  description: "SomaThrive is a student-focused education and opportunity platform supporting Somali youth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
