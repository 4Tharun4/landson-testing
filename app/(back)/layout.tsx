import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Slidebar from '@/components/back-end/Sidebar'
import Navbar from "@/components/back-end/Navbar";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landson",
  description: "Elevate your prototyping with premium Framer products. Shop high-quality tillers & spare parts for a seamless design workflow. Fast shipping & secure checkout.Unleash the power of Framer prototyping with next-level tillers. Find the perfect fit for your design needs. Shop our extensive collection & upgrade your workflow today! Keep your Framer projects running smoothly. Discover genuine spare parts for all your tiller needs. Fast delivery & competitive prices. Shop now! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-1 font-Primary-font">
                <Slidebar />
           
            <div className=" w-full ">
            <Navbar />
            <main className="pt-16  mobile:p-0 p-8 bg-slate-100  px-3   mt-16  mobile:mt-10  min-h-screen   ml-52  mobile:ml-0 ">{children}</main>

            </div>
        </div>
      </body>
    </html>
  );
}

