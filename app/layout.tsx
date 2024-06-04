import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className=" font-Primary-font"> {children}</div>
       </body>
    </html>
  );
}
