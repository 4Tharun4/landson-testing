"use client"

import React from 'react'
import Logo from '../../app/Assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import pic from '../../app/Assets/profilepic.jpg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, CircleGauge, LogOut, Menu, Settings, X } from 'lucide-react'


export default function Navbar() {
  
  
  return (
    <>
   
    <div className=' flex justify-between items-center   h-16 px-8 py-4 fixed top-0  w-full  bg-Navbg '>
      

        <div className="menu-icon flex gap-3">
          <Link href="/dashboard">
        <Image src={Logo} alt='logo' width={101} height={101}/></Link>
            
              
              
              <Menu color="#ffffff" />
        </div>
        <div className="right-icons   space-x-5 flex">   
        <DropdownMenu>
  <DropdownMenuTrigger> <Bell color="#ffffff" />
            <div className=" absolute inline-flex  items-center justify-center w-6 h-6 text-xs font-bold  text-white bg-red-500 rounded-full top-2 right-22">
              20
            </div></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <div className=" flex items-center  space-x-2">
        <Image src={pic} width={200} height={200} alt='notification image' className='rounded-full w-8 h-8'/>
        <div className="fle flex-col">
          <p>This is notification</p>
          <div className="flex space-x-1 ">
            <p className='bg-red-500 px-3 py-0.5 text-white  rounded-xl  '>Out of Stock</p>
            <p>May 20 2024 - 12:59</p>
          </div>
          
        </div>
        <button>
            <X/>
          </button>
      </div>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <div className=" flex items-center  space-x-2">
        <Image src={pic} width={200} height={200} alt='notification image' className='rounded-full w-8 h-8'/>
        <div className="fle flex-col">
          <p>This is notification</p>
          <div className="flex space-x-1 ">
            <p className='bg-red-500 px-3 py-0.5 text-white  rounded-xl  '>Out of Stock</p>
            <p>May 20 2024 - 12:59</p>
          </div>
          
        </div>
        <button>
            <X/>
          </button>
      </div>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <LogOut className="mr-2 h-4 w-4" />
      Logout</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>   
            
            <button>
            <DropdownMenu >
  <DropdownMenuTrigger> <Image src={pic}  width={200} height={200} className='w-9 h-9 border-2  rounded-full' alt=''/></DropdownMenuTrigger>
  <DropdownMenuContent className='w-56 h-44 '>
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />

    <DropdownMenuItem>
    <CircleGauge className="mr-2 h-4 w-4" />
      Dashboard</DropdownMenuItem>
    <DropdownMenuItem>
    <Settings   className="mr-2 h-4 w-4"/>Edit Profile</DropdownMenuItem>
    <DropdownMenuItem>
    <LogOut className="mr-2 h-4 w-4" />
      Logout</DropdownMenuItem>
 
  </DropdownMenuContent>
</DropdownMenu>
           
            </button>
        </div>
      
    </div>
    </>
  )
}
