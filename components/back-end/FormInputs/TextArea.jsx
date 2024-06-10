"use client"
import React from 'react'

export default function TextArea({
  label,name,register,errors,isRequire=true,className="sm:col-span-2",defaultValue="",
}) {
return (
  <div className={className}>
    <label htmlFor={name} className='block  text-sm py-4  font-mediun leading-6 mb-2 '>{label}</label>
<div className="mt-2">
<textarea {...register(`${name}`,{require:isRequire})}
name={name}
id={name}
defaultValue={defaultValue}
autoComplete={name}
className='block w-full rounded-md border-2 py-2 shadow:sm ring-1 px-3 outline-none h-20  border-green-600 focus:ring-lime-400   ring-gray-300  sm:text-sm  leading-6 '
placeholder={`Type the ${label.toLowerCase()}`}
>

</textarea>
{
  errors[`${name}`]&&(
    <span className=' text-sm text-red-600'>{label} is Required</span>
  )
}
</div>      

  </div>
)
}