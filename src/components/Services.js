import { FaBriefcase, FaMoneyBillWave, FaCashRegister, FaBuilding, FaWarehouse, FaHammer } from 'react-icons/fa';

export default function Services() {

    // creating Elements
    // const loanServices = [
    //     {
    //         icon: <IoHome />,
    //         title: "Accountand",
    //         text: "Lorem ipsum dolor sit amet consectetur."
    //     },
    //     {
    //         icon: <IoHome />,
    //         title: "Accountand",
    //         text: "Lorem ipsum dolor sit amet consectetur."
    //     },
    //     {
    //         icon: <IoHome />,
    //         title: "Accountand",
    //         text: "Lorem ipsum dolor sit amet consectetur."
    //     },
    //     {
    //         icon: <IoHome />,
    //         title: "Accountand",
    //         text: "Lorem ipsum dolor sit amet consectetur."
    //     },
    //     {
    //         icon: <IoHome />,
    //         title: "Accountand",
    //         text: "Lorem ipsum dolor sit amet consectetur."
    //     },
    //     {
    //         icon: <IoHome />,
    //         title: "Accountand",
    //         text: "Lorem ipsum dolor sit amet consectetur."
    //     },
    // ]

    const loanServices = [
        {
          id: 1,
          title: 'Small Business Loans',
          text: 'Flexible financing options to support growth and operational needs.',
          icon: <FaBriefcase className="text-4xl mb-4" />,
        },
        {
          id: 2,
          title: 'Working Capital Advances',
          text: 'Quick funds to cover operational expenses and boost cash flow.',
          icon: <FaMoneyBillWave className="text-4xl mb-4" />,
        },
        {
          id: 3,
          title: 'ACH Cash Flow Loans',
          text: 'Short-term loans utilizing ACH for quick cash flow solutions.',
          icon: <FaCashRegister className="text-4xl mb-4" />,
        },
       
        {
          id: 4,
          title: 'SBA Loans',
          text: 'Government-backed loans designed to help small businesses grow.',
          icon: <FaBuilding className="text-4xl mb-4" />,
        },
        {
          id: 5,
          title: 'Asset Based Loans (ABL)',
          text: 'Loans secured by business assets to enhance liquidity and financing.',
          icon: <FaWarehouse className="text-4xl mb-4" />,
        },
        {
          id: 6,
          title: 'Construction Loans',
          text: 'Short-term financing for building homes or other projects.',
          icon: <FaHammer className="text-4xl mb-4" />,
        },
      ];


    return (
        <div>

            <section>
                <div className="lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">

                        <div className="mx-auto sm:mx-2 max-w-xl  lg:mx-0  lg:py-24 lg:pe-24 ">
                            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Services</h2>

                            <p className="mt-5 text-gray-800 lg:text-xl">
                                Our loan services prioritize your financial well-being. We provide quick approvals, flexible repayment options, and transparent terms, making the borrowing process straightforward and stress-free. Count on us to support you in reaching your financial objectives with confidence.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring hover:bg-transparent hover:text-gray-900 "
                            >
                                Contact NOW
                            </a>
                        </div>

                        {/* Mapping on service */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 ">
                            {loanServices.map((service, index) => (
                                <a
                                    key={index}
                                    className="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:bg-gray-300 hover:scale-105 duration-300 ease-in-out transition-all focus:outline-none focus:ring"
                                    href="#"
                                >
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        {service.icon}
                                    </span>

                                    <h2 className="mt-2 font-bold">{service.title}</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                        {service.text}
                                    </p>
                                </a>
                            ))}



                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
