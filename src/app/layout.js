import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Horoscope",
  description: "an AI Horoscope that gets updated daily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="  bg-blue-100"	>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
