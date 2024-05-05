import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Alex Howlett - Portfolio",
    default: "Alex Howlett - Portfolio",
  },
  description: "My project portfolio website and a bit about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
