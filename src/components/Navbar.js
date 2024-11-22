import React from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-[#111827] p-6 md:px-10 lg:px-20 2xl:px-32">
      <div className="container flex justify-start items-center gap-2">
        <img src={logo} width={34} alt="LOGO" className="text-white text-2xl font-bold" />
          
        <div className="text-white text-2xl font-bold">
          App Name
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
