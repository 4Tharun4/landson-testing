"use client"
import React from 'react'

export default function TextInput({
    label,name,register,errors,isRequire=true,type="text",className="sm:col-span-2",defaultValue="",
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className='block  font-medium py-4  font-mediun leading-6 mb-2 text-2xl'>{label}</label>
<div className="mt-2">
  <input {...register(`${name}`,{require:isRequire})}
  type={type}
  name={name}
  id={name}
  defaultValue={defaultValue}
  autoComplete={name}
  className='block w-full rounded-md border-2 py-2 shadow:sm ring-1 px-3 outline-none   border-green-600 focus:ring-lime-400   ring-gray-300  sm:text-sm  '
  placeholder={`Type the ${label.toLowerCase()}`}
  >
  
  </input>
  {
    errors[`${name}`]&&(
      <span className=' text-sm text-red-600'>{label} is Required</span>
    )
  }
  </div>      

    </div>
  )
}
