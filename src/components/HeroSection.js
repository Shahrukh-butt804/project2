import React from 'react'
import Form from './Form'
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";


export default function HeroSection() {
  return (
    <div className="hero bg-base-200 min-h-screen w-full flex flex-col lg:flex-row justify-center items-center md:items-start ms-0 md:ms-6 lg:ms-0 lg:items-stretch gap-10 lg:gap-52 2xl:gap-80 mt-10 md:mt-16 ">

    <div className="hero-content ms-4 sm:ms-3 lg:ms-10 lg:mt-28 ">
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold">Connect With Your Money World!</h1>
        <p className="py-6 text-2xl font-semibold">
        Our tailored small business loans empower you to achieve financial independence while driving the growth of your enterprise.
        </p>
        <button className="btn btn-primary p-3 px-5 rounded-3xl border border-black hover:bg-black hover:text-white">Get Started</button>
        <div className='flex items-center gap-5 text-2xl mt-5'>
          <p>Lets Connect</p>
          <FaTwitter className='hover:text-gray-500'/>
          <FaSquareFacebook className='hover:text-gray-500'/>
          <BiLogoInstagramAlt className='hover:text-gray-500'/>
        </div>
      </div>
    </div>

    <div>
      <Form/>
    </div>
  </div>
  )
}
