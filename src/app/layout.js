/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI@UCR Website",
  description:
    "The official website of the Artificial Intelligence at UCR Organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>{children}</body>
    </html>
  );
}
