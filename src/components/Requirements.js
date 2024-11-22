import React from 'react'
import { FaSheetPlastic } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { TbLicense } from "react-icons/tb";
export default function Requirements() {

    const requirements = [
        {
            icon: <FaSheetPlastic />,
            title: "Business Statement",
            text: "4 Months Business Bank Statement"
        },
        {
            icon: <FaMoneyCheck />,
            title: "Check",
            text: "A Void Check"
        },
        {
            icon: <TbLicense />,
            title: "Driving License",
            text: "A Driving License"
        }
    ]

    return (
        <section
            className="relative bg-[url(https://images.pexels.com/photos/2418435/pexels-photo-2418435.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover bg-center bg-no-repeat "
        >
            <div
                className="absolute inset-0 bg-gray-900/1 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>


            {/* Content of requirement */}
            <div
                className="relative mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                        Requirements
                    </h1>
                    <p className="block  font-bold text-lg text-[#111827] my-5">Please send us a signed "Skylight Funding Loan Application" with the following documents to e-mail: apps@skylightfunding.com</p>
                    {requirements.map((req, i) => (
                        <div className='flex gap-8 mt-5 items-center's key={i}>
                            <div className='text-3xl md:text-4xl text-[#111827]'>{req.icon}</div>
                            <div>
                                <h1 className='text-2xl md:text-4xl font-bold text-[#111827]'>{req.title}</h1>
                                <p className='text-lg md:text-xl text-[#111827] whitespace-nowrap'>{req.text}</p>
                            </div>
                        </div>

                    ))}


                    <div className="mt-1 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring hover:bg-transparent hover:text-gray-900 "
                        >
                            Contact NOW
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
