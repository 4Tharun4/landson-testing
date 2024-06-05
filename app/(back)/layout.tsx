
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
        <div className="flex gap-1 font-Primary-font">
           
                <Slidebar/>
           
            <div className=" w-full ">
            <Navbar/>
            <main className="pt-16  mobile:p-0 p-8 bg-slate-100  mobile:mt-10  min-h-screen ml-52 mobile:ml-0 ">{children}</main>
            </div>
        </div>
      </body>
    </html>
  );
}
