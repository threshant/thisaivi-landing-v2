import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thisaivi",
  description: "Decode.Build.Disrupt.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
