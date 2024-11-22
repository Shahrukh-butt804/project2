import React from 'react'

export default function About() {
    return (
        <section>
            <div className="mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">About</h2>
                                <div className="seprator"></div>

                                <p className="mt-4 text-gray-600">
                                    We are committed to offering quick and dependable loan services. Our goal is to empower individuals by providing the financial resources they need to reach their objectives.
                                </p>
                                <p className="mt-4 text-gray-600">
                                    Our approach differs from traditional banks. You don't need a perfect credit score or collateral to secure funding. We offer personalized repayment plans that are flexible and affordable. Many clients choose Skylight Funding because businesses often have better approval rates for cash advances than bank loans.
                                </p>
                            </header>
                            <header>
                                <h2 className="text-lg font-bold text-gray-900 sm:text-xl mt-3">Our Commitment</h2>
                                <div className="seprator"></div>

                                <p className="mt-4 text-gray-600">
                                    At This App Name, your success is our top priority. We focus on delivering outstanding service, competitive rates, and a seamless experience. Your financial health matters to us, and we are dedicated to assisting you every step of your financial journey.
                                </p>

                            </header>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring  hover:bg-transparent hover:text-gray-900 "
                            >
                                Contact NOW
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <a href="#" className="group block">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-cIdPgKL4eEYyk15qEHOHSnI_k9TRXn5Lg&s"
                                        alt=""
                                        className="aspect-square w-full rounded object-cover"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Home Loan
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">Details</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="group block">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdy2QctWZa9OmxW08BmLosq8nEcbDwfNHw0g&s"
                                        alt=""
                                        className="aspect-square w-full rounded object-cover"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Construction Loan
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">details</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}
