"use client"
import Image from "next/image";
import email from '../Assets/email-file.png'
import notify from '../Assets/bell.png'
import textsupport from '../Assets/tech-support.png'
import { useEffect, useState } from "react";
import tiller from '../Assets/tillers.webp'
export default function Home() {

  const [days,setdays]=useState(0)
  const [hours,sethours]=useState(0)
  const [minuts,setminuts]=useState(0)
  const [seconds,setseconds]=useState(0)

  useEffect(() => {
    const target = new Date("07/06/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setdays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)/(1000*60*60)) 
      );
      sethours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setminuts(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setseconds(s);

      
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const handleclick=()=>{
alert("Send Email")
  }
  return (
    <>
    {/* Comming Page */}
     {/* Nav-section */}
      <div className="nav-section bg-white  shadow-lg w-full">
        <div className="main-sec h-20 flex justify-between px-10 items-center">
          <div className="logo">
          <h1 className=" text-xl "><span className=" text-3xl text-green-500">L</span>andson</h1> 
          </div>
          <div className="links flex gap-10">
          <div className="mail inline-flex gap-2 items-center mobile:hidden ">
            <Image src={email} width={20} height={20} alt="Email"/>
            <p className=" text-green-600 text-sm">landson@gmail.com</p>
          </div>
          <div className="phone inline-flex gap-2 items-center mobile:hidden">
<Image src={textsupport} width={20} height={20} alt="tech-support"/>
<p>+91 123456789</p>
          </div>
          <div className="notify ">
            <button className=" inline-flex gap-2 items-center justify-center bg-green-500 w-44 h-10 text-white border rounded-md" onClick={handleclick}>
              Notify Me
              <Image src={notify} width={40} height={20} alt="notify" /></button>
          </div>
          </div>
        </div>
      </div>

{/* Main page Section */}


<div className="main-section w-full  ">
  <div className="right-side   mobile:w-full py-10 px-10 ">
  <p className="text-red-400 text-2xl">Comming Soon</p>
  <p className=" py-10 px-3 text-3xl">Our new website Will be
  </p>
  <p className="text-green-300 text-3xl">Launching Soon</p>
  <div className="text-2xl">
    <p >We are upgrading our Webite  to make a Easy and intractive with Smooth Experience,so please wait  we will launch very soon</p>
  </div>
  <div className="timeings flex gap-10 mt-10 ">
   
    <div className="days bg-white rounded-md  border shadow-xl h-20 w-16 flex items-center justify-center text-3xl ">
      <h1>{days}</h1>
    </div>
    <div className="hours  bg-white rounded-md  border shadow-xl h-20 w-16 flex items-center justify-center text-3xl">
      <h1>{hours}</h1>
    </div>
    <div className="minuts  bg-white rounded-md  border shadow-xl h-20 w-16 flex items-center justify-center text-3xl">
      {minuts}
    </div>
    <div className="seconds  bg-white rounded-md  border shadow-xl h-20 w-16 flex items-center justify-center text-3xl">
      {seconds  }
    </div>
  </div>
  </div>
  
</div>
{/* feature products */}
{/* <div className="feature products px-3 ">
    <h1 className=" text-3xl">Feature Products</h1>
    <div className="">
<div className="prod bg-red-300 border rounded-md flex flex-row">
  <div className="image px-4 py-3">
    <Image src={tiller} width={250} height={150} alt="tiller" className="rounded-lg"/>
    <div className="description">
    <p>Tiller</p>

    </div>
    </div>
  </div>
</div>
  </div> */}
    </>
  );
}
