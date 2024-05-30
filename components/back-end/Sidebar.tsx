import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='   text-black   bg-white  shadow-xl fixed top-16 space-y-6 w-52  h-screen   '   >
      <div className="links space-y-3 flex flex-col gap-10 justify-center ">
        <Link href={"#"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
          Dashboard</Link>
        <Link href={"#"}>Sales</Link>
        <Link href={"/dashboard/customers"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Customers</Link>
        <Link href={"/dashboard/products"}>Products</Link>
        <Link href={"#"}>Settings</Link>
      </div>
    </div>
  )
}
