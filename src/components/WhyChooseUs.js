import React from 'react'

export default function WhyChooseUs() {

    const reasons = [
        {
            text: <p className="mt-4 text-gray-600">
                <span className='text-xl font-semibold'>Clear and Honest Conditions : </span> We prioritize transparency, so you can trust that there are no hidden charges or unexpected terms in your agreement.
            </p>

        },
        {
            text: <p className="mt-4 text-gray-600">
                <span className='text-xl font-semibold'>Expert Assistance : </span> Our knowledgeable support team is available to help you navigate the application process and answer any questions you may have.
            </p>

        },
        {
            text: <p className="mt-4 text-gray-600">
                <span className='text-xl font-semibold'>Quick and Simple Process : </span>Our streamlined online application makes it easy for you to access the funds you need, saving you time and hassle.
            </p>
        },
        {
            text: <p className="mt-4 text-gray-600">
                <span className='text-xl font-semibold'>Fast Approval Times : </span>We aim to process your application swiftly, ensuring that you get the financial support you need when you need it.
            </p>
        },
        {
            text: <p className="mt-4 text-gray-600">
                <span className='text-xl font-semibold'>User-Friendly Interface : </span> Our online platform is designed for ease of use, allowing you to complete your application effortlessly from any device.
            </p>
        },
    ]

    return (
        <section>
            <div className="mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://aurelius.net/wp-content/uploads/2023/09/Blog-Banner-for-Website-Content-1-e1693884146247-1024x806.png"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-200">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Why Choose Us?
                            </h2>
                            <ul className="list-disc pl-5">
                                {reasons.map((reason, i) => (
                                    <li key={i}>{reason.text}</li>
                                ))}
                            </ul>




                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring hover:bg-transparent hover:text-gray-900 " 
                            >
                                Contact NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
