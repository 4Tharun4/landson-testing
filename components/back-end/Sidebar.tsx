import { BaggageClaim, BarChart2, CircleUserRound, LayoutGrid, ReceiptIndianRupee, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='  px-4   mobile:hidden  tablet:w-20  text-black   bg-white  shadow-xl fixed top-16 space-y-6 w-52  h-screen   mobile:w-0 '   >
      <div className="flex space-y-3 gap-6 flex-col mt-14">
        <Link href={"/dashboard"} className='flex items-center space-x-3 '>
        <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link href={"/dashboard/products"} className='flex items-center space-x-3'>
        <ShoppingBag />
          <span>Products</span>
        </Link>
        <Link href={"/dashboard/customers"} className='flex items-center space-x-3'>
        <CircleUserRound />
          <span>Customers</span>
        </Link>
        <Link href={"/dashboard/sales"} className='flex items-center space-x-3'>
        <BarChart2 />
          <span>Sales</span>
        </Link>
        <Link href={"/dashboard/tranactions"} className='flex items-center space-x-3'>
        <ReceiptIndianRupee />
          <span>Transactions</span>
        </Link>
        <Link href={"/dashboard/orders"} className='flex items-center space-x-3'>
        <BaggageClaim />
          <span>Orders</span>
        </Link>
      </div>
    </div>
  )
}
