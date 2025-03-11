import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FarmBiz",
  description: "We bring solution for all your agricultural needs"
}


export default function RootLayout({ 
  children, 
} : Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <html lang="en">
      <body className="bg-white, text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}