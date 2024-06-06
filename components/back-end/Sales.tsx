"use client"
import React from 'react'
export default function Sales() {
  
 
  return (
  
    <div className="mt-10  max-h-max bg-white rounded-lg  shadow-xl">
    <div className=" py-3">
     <div className="table-top px-3 py-3">
       <p>Bills And Orders</p>
     </div>
     <div className="charts-data flex flex-col  ">
       <div className="boxes  ">
         <div className="containers px-3  grid  grid-cols-4  rounde-xl      gap-5 mobile:grid mobile:grid-cols-1 ">
           <div className="box-1 w-[100%] px-3 py-3 bg-gray-200 h-[100px] border rounded-lg">
            <p className=' font-semibold'>Awaiting Delivery</p>
            <p  className='py-2 font-semibold text-xl  text-yellow-500'>200</p>
           </div>
           <div className="box-1 w-[100%] px-3  py-3 bg-gray-200 h-[100px] border rounded-lg ">
            <p className=' font-semibold'>Deliverd</p>
            <p  className='py-2 font-semibold text-xl  text-green-400 '>100</p>
           </div>
           <div className="box-1 w-[100%] px-3  py-3 bg-gray-200 h-[100px] border rounded-lg ">
            <p className=' font-semibold'>Return</p>
            <p className='py-2 font-semibold text-xl'>10</p>
           </div>
           <div className="box-1 w-[100%] px-3 py-3 bg-gray-200 h-[100px] border rounded-lg ">
            <p className=' font-semibold'>Canceled</p>
            <p className='py-2 font-semibold text-xl  text-red-500'>3</p>
           </div>
         </div>

       </div>
       <div className="charts-table w-full">

       </div>
     </div>
    </div>
   </div>
  )
}
