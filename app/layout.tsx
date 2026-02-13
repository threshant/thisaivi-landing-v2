import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thisaivi",
  description: "Autonomous sales execution platform landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
