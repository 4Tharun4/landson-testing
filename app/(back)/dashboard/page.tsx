import React from "react";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Sales from "@/components/back-end/Sales";
import CustomDatachart from "@/components/back-end/CustomDatachart";

export default function page() {
  return (
    <>
      <div className="mr-3 ">
        <p className=" text-2xl">Dashboard</p>
        <div className="orders-view  mt-10 w-full  grid grid-cols-3 gap-32    mobile:grid mobile:grid-cols-1 mobile:gap-10">
          <div className="subcontainer   py-3 bg-white h-28 w-[110%] border rounded-md">
            <div className="items px-2 flex gap-2    ">
              <ShoppingCart className=" size-11" />
              <div className="left-text  ">
                <div className="text text-2xl">Orders</div>
                <div className="num">2000</div>
              </div>
            </div>

            <hr className="bg-black  mt-1  h-0.5 " />
            <Link href={"/dashboard/orders"}>
              <div className="links  inline-flex gap-4 px-2 py-2 items-center justify-center">
                <h1>Orders</h1>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          {/* Second-card */}
          <div className="subcontainer   py-3 bg-white h-28 w-[110%] border rounded-md">
            <div className="items px-2 flex gap-2    ">
              <ShoppingBag className=" size-11" />
              <div className="left-text  ">
                <div className="text text-2xl">Products</div>
                <div className="num">100</div>
              </div>
            </div>

            <hr className="bg-black  mt-1  h-0.5 " />
            <Link href={"/dashboard/products"}>
              <div className="links  inline-flex gap-4 px-2 py-2 items-center justify-center">
                <h1>Products</h1>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          {/* Tiird-card */}
          <div className="subcontainer   py-3 bg-white h-28 w-[110%] border rounded-md">
            <div className="items px-2 flex gap-2    ">
              <ShoppingCart className=" size-11" />
              <div className="left-text  ">
                <div className="text text-2xl">Transactions</div>
                <div className="num">20</div>
              </div>
            </div>

            <hr className="bg-black  mt-1  h-0.5 " />
            <Link href={"/dashboard/tranactions"}>
              <div className="links  inline-flex gap-4 px-2 py-2 items-center justify-center">
                <h1>Transactions</h1>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>


      {/* Bills and charts products */}
      <Sales/>
      {/* Custom data with pagation */}
      <CustomDatachart/>
     
    </>
  );
}
