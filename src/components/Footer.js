import React from 'react';
import { FaFacebook, FaTwitter} from 'react-icons/fa';
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white p-5">
      <div className=" mx-0 2xl:mx-14  md:p-4 flex flex-col md:flex-row justify-between md:items-center items-start gap-4 md:gap-10  lg:gap-0">        


        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold">App Name</h4>
          <p className="text-gray-400">Your dependable supporter in financial solutions.</p>
        </div>      

        <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebook />
          </a>
          
          <a href="#" className="text-gray-300 hover:text-white">
            <BiLogoInstagramAlt />
          </a>
        </div>  

        <div className="mt-4 lg:mt-[-9px] text-gray-400">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>

      </div> 
    </footer>
  );
};

export default Footer;
