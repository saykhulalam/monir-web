import React from "react";
import Container from "../components/Container.jsx";
import Logo from "../assets/logo.png";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navegation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="py-5 bg-black z-30">
      <Container>
        <div className=" relative">
          <div className="flex items-center justify-between">
            <a href="/">
              <img className="w-20" src={Logo} alt="logo" />
            </a>
            <ul className="font-bangla xl:flex gap-10 hidden">
              <li className="text-[17px] font-semibold text-white relative group">
                All product (সমস্ত পণ্য)
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[17px] font-semibold text-white relative group">
                Bakery about(বেকারি সম্পর্কে)
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[17px] font-semibold text-white relative group">
                Contact (যোগাযোগ)
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
            <div className="text-white xl:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
          <div
            className={` z-50 border xl:hidden border-white absolute bg-black py-10 px-5 w-[80%] duration-300 ${
              isOpen ? "left-[-16px] top-[95px]" : "left-[-1000px] top-[95px]"
            }`}
          >
            <ul className="font-bangla flex gap-10 flex-col items-center">
              <li className="text-[17px] font-semibold text-white relative group">
                All product (সমস্ত পণ্য)
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[17px] font-semibold text-white relative group">
                Bakery about(বেকারি সম্পর্কে)
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="text-[17px] font-semibold text-white relative group">
                Contact (যোগাযোগ)
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navegation;
