import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Slidebar from '../../components/back-end/Sidebar'
import Navbar from "@/components/back-end/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landson",
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
        <div className="flex gap-1">
           
                <Slidebar/>
           
            <div className=" w-full ">
            <Navbar/>
              <main className="mt-16 p-8 bg-white  min-h-screen">{children}</main>
            </div>
        </div>
        
     
      
      </body>
    </html>
  );
}