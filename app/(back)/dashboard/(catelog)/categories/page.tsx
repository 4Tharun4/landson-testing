import {  MoveDown, MoveUp, Plus, SquareArrowOutDownLeft, Trash } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function Categories() {
  return (
    // {header}
  <div className="main-cat">
    <div className="heading px-4 py-5 font-semibold text-2xl">
        Cateories
    </div>
<div className="update-buttons w-full   rounded-md   bg-white  shadow-md ">
    <div className="contains flex  items-center h-28 justify-between">
     <div className="buttons inline-flex gap-7 px-2">
      <button className='w-32 bg-transparent  border-2  h-11 flex items-center justify-center rounded-lg '>   <MoveDown size={20} />Import</button>
      <button className='w-32 bg-transparent  border-2 h-11 flex items-center justify-center rounded-lg '> <MoveUp size={20}/>Export</button>
     </div>
     <div className="actions flex gap-7 px-3">
     <button className='w-32 bg-gray-400  h-11 gap-3 flex items-center justify-center rounded-lg '>   <SquareArrowOutDownLeft  size={20} />Bulk Action</button>
     <button className='w-32 bg-red-700 h-11 flex items-center justify-center rounded-lg '> <Trash size={20} />Delete</button>
     <Link href='/dashboard/categories/new'>
     <button className='w-44 bg-green-700 h-11 text-white flex items-center justify-center rounded-lg hover:bg-transparent  hover:border-2 hover:text-black '> <Plus />Add Category</button>
     </Link>
     </div>
    </div>
</div>
  </div>
  )
}
