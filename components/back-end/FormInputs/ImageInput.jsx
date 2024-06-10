"use client";
 
import {UploadDropzone}  from "@/lib/upload";
import { Pencil } from "lucide-react";
import Image from "next/image";

import React from "react";
import toast from "react-hot-toast";
 
export default function ImageInput({
    label,imageUrl="",SetImageurl,className="col-span-full ",
    endpoint="CategoryImageUploader",
}) {
  return (
   <div className={className}>
    <div className="flex  justify-start items-center mb-4 h-20">
        <label htmlFor="Category-Image">
            {label}
        </label>
        {
            imageUrl&&(
                <button onClick={()=>SetImageurl("")}
                type="button"
                className="flex space-x-2 py-2 px-4 h-20">

                    <Pencil className="w-5 h-5"/>
                    <span>Change Image</span>
                </button>
            )
        }
    </div>
    {
        imageUrl?(
            <Image 
            src={imageUrl}
            alt="Image"
            width={80}
            height={667}
            className="w-full h-20  object-cover"
            />

        ):(
        <UploadDropzone
        endpoint={endpoint}
        onClientUpLoadComplete={(res)=>{
            SetImageurl(res[0].fileUrl);
            toast.success("Upload Success")
            console.log("Files",res);
            console.log("uploadcomplete");
        }}
        onUploadError={(error)=>{
            toast.error("Error While Uploading Image")
            console.log(`Error!${error.message}`);
        }}
            /> 
        )
    }
   </div>
  );
}