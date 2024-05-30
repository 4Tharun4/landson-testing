import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='   text-black  space-y-6 w-52  h-screen  '   >
        <Link className='mb-6 ' href={"#"}>Logo</Link>
      <div className="links space-y-3 flex flex-col ">
        <Link href={"#"}>Dashboard</Link>
        <Link href={"#"}>Sales</Link>
        <Link href={"#"}>Customers</Link>
        <Link href={"#"}>Products</Link>
        <Link href={"#"}>Settings</Link>
      </div>
    </div>
  )
}
