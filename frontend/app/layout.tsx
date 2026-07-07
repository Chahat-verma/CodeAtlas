import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeAtlas",
  description: "Understand C++ execution through interactive visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}