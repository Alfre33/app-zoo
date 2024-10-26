import React from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../assets/logoApp.png'

export default function AuthPage() {
  return (
    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 min-h-screen" style={{backgroundColor: "#161616"}}>
    <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"}}>
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
    </div>
    <div className="w-full py-6 z-20">
        <h1 className="my-6">
       <Image alt="zoo" src={logo} width={150} height={100} className=" inline-flex" />
        </h1>
        <div className="py-6 space-x-2">
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span>
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">in</span>
        </div>
        <p className="text-gray-100">
            or use email your account
        </p>
        <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
                <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-lg bg-black"/>
            </div>
            <div className="pb-2 pt-4">
                <input className="block w-full p-4 text-lg rounded-lg bg-black" type="password" name="password" id="password" placeholder="Password"/>
            </div>
            <div className="flex justify-between text-gray-400 px-4">
                <Link  href="/auth/register/user" className="hover:underline hover:text-gray-100">Registrate</Link>
                <Link className="hover:underline hover:text-gray-100" href="#">Forgot your password?</Link>
            </div>
            <div className="px-4 pb-2 pt-4">
                <button className="uppercase block w-full p-4 text-lg rounded-full bg-green-primary-400 hover:bg-green-primary-500 focus:outline-none">sign in</button>
            </div>
        </form>
    </div>
</div>
  );
}
