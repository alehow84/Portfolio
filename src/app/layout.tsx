import type { Metadata } from "next";
import { Inter, Domine } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const domine = Domine({ subsets: ["latin"] });

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
      <body className={domine.className}>{children}</body>
    </html>
  );
}
