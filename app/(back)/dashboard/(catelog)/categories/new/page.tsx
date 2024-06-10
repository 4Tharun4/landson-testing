
"use client"
import TextInput from '@/components/back-end/FormInputs/TextInput'
import TextArea from '@/components/back-end/FormInputs/TextArea'
import Submit from '@/components/back-end/FormInputs/Submit'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {generateslug} from '@/lib/generateslug'
import { useRouter } from 'next/navigation'
import ImageInput from '@/components/back-end/FormInputs/ImageInput'
export default function NewCategory() {
  const router = useRouter()
  const{register,handleSubmit,formState:{errors}} = useForm();
  const[imageUrl,SetImageurl] = useState("")

  async function submit(data:any){
    const slug = generateslug(data.title);
    data.slug = slug;
    console.log(data);
    
console.log(data);

  }
  return (
// { image,slug,description,id,title}
<div className="">
    <div className='flex justify-between py-6 px-12 bg-slate-600 rounded-lg  shadow-lg text-white  items-center '>
      <h2 className=" font-medium">This is new</h2>
      <button className=' ' onClick={()=>router.back()}>
      <X/>
    </button>
    </div>

    <form onSubmit={handleSubmit(submit)}  className=' w-full  max-w-5xl  bg-white border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto my-3'>
      <div className=" grid gap-4 sm:grid-cols-2 sm:gap-6  ">
        <TextInput label={"category Title"} name={"title"} register={register} errors={errors  } className=' '/>
      </div>
      <TextArea label="Category description" name="description" register={register} errors={errors  }/>
      <ImageInput label="Categoy Image" SetImageurl={SetImageurl} endpoint='CategoryImageUploader' imageUrl={imageUrl} className='w-full' />
      <div className="mt-4">
        <Submit  isLoading={false} ButtonTitle="Create Category" LoadingButtonTitle="Creating Ctegory pleasw Wait ..."/>
        </div>
    </form>
  
    </div>
  )
}
