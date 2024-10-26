import Link from 'next/link'
import React from 'react'

export default function JoinZoo() {
  return (
    <div className="px- md:lg:xl:px-10 border-t border-b  bg-opacity-10">
            <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
    
                <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                    <span className="p-5 rounded-full bg-green-primary-500 text-white shadow-lg shadow-indigo-200"><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg></span>
                    <p className="text-xl font-medium text-slate-700 mt-3">Integra tu zoo a nuestra web</p>
                    <p className="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
                    </p>
                </div>
            </div>
    
            <div className="w-full   bg-green-primary-500 shadow-xl shadow-green-200 py-10 px-20 flex justify-between items-center">
                <p className=" text-white"> <span className="text-4xl font-medium">Still Confused ?</span> <br/> <span className="text-lg">Book For Free Career Consultation Today ! </span></p>
                <Link href="/auth/register/zoo" className="px-5 py-3  font-medium text-white shadow-xl  hover:bg-green-700 duration-150  bg-green-500 capitalize rounded-md">Unetenos ahora !!</Link>
            </div>
        </div>
  )
}
