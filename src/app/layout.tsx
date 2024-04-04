import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 14 practice",
  description: "More of Next.js practice",
};

// declare global {
//   interface Array<ElementType> {
//     customMap: <ResultType>(
//       callback: (
//         value: ElementType,
//         index: number,
//         array: ElementType
//       ) => ResultType
//     ) => ElementType[];
//   }
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
