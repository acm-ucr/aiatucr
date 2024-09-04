/* eslint-disable new-cap */
import "./globals.css";
import { Montserrat, Hubballi, Monda } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: "600",
});
const hubbali = Hubballi({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hubbali",
  weight: "400",
});
const monda = Monda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monda",
  weight: "400",
});

export const metadata = {
  title: "AI@UCR Website",
  description:
    "The official website of the Artificial Intelligence at UCR Organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${hubbali.variable} ${monda.variable} w-full h-screen`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
