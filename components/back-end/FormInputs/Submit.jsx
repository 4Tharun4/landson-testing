import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function Submit({ isLoading=false, ButtonTitle, LoadingButtonTitle }) {
  return (
    <div className='sm:col-span-1 '>
      {isLoading ? (
        <button disabled type='button' className='mt-4 text-white  bg-blue-800 inline-flex items-center text-center'>
          {LoadingButtonTitle}
        </button>
      ) : (
        <Button type='submit'  className='   bg-green-500 text-white  inline-flex items-center text-center'>
          <Plus className='w-5 h-5 mr-2 ' />
          <span className=' '>{ButtonTitle}</span>
        </Button>
      )}
    </div>
  )
}
