import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// font
const inter = Inter({ subsets: ["latin"] });

// title 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-red-300 p-4'>メインレイアウト</div>
        {children}
        </body>
    </html>
  );
}
