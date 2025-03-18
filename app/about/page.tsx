import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function about() {
  return (
    <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
    <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className=" h-32 overflow-hidden" >
        </div>
        <div className="flex justify-center px-5  -mt-12">

        </div>
        <div className=" ">
            <div className="text-center px-14">
                <h2 className="text-gray-800 text-3xl font-bold">Roscoe</h2>
                <a className="text-gray-400 mt-2 hover:text-blue-500" href="#"></a>
                <p className="mt-2 text-gray-500 text-sm">
                Hello my name is Roscoe 
                I Have been learning about web development over the course of the last few years and am looking to get into the tech world.I  
                enjoy learning about new technologies and like working with others to expand my knowledge and see things from different points 
                of view. I am based out of Nashua New Hampshire, and am looking to joint a team within the relative area. I like learning new technology . 
                My favorite part of web dev is working on the front end, and have enjoyed learning about bootstrap and tailwind.css.  
                </p>
            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <Link
                    href="https://weather-next-sand.vercel.app"
                    className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block">
                    Weather App
                </Link>
                </div>
                <div className="border"></div>
                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <Link
                    href="#"
                    className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block">
                    Simple Games 
                </Link>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}
