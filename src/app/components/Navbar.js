"use client";

import Image from "next/image";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BsWikipedia } from "react-icons/bs";
import { SiWarnerbros } from "react-icons/si";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="custom-bg w-full bg-no-repeat bg-center bg-cover h-[20vh] md:h-[50vh] lg:h-[60vh] cursor: pointer">
      <div className="flex justify-between items-center mx-6 lg:py-5">
        <SiWarnerbros
          size={50}
          className="text-white my-4"
        />
        <div className="hidden sm:flex gap-10 text-white font-black lg:text-xl">
          <Link href="#">Home</Link>
          <p>Comedy</p>
          <p>Action</p>
          <p>Romance</p>
        </div>
        <div className="hidden md:flex gap-5 text-white">
          <AiFillYoutube size={30} />
          <AiOutlineTwitter size={30} />
          <BsWikipedia size={30} />
        </div>
        <div
          onClick={handleNav}
          className="block sm:hidden text-white z-0"
        >
          {nav ? <BiMenuAltRight size={30} /> : <AiOutlineMenu scale={30} />}
        </div>
        <div
          className={
            nav
              ? "sm-hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start text-left w-[40vw] custom-bg h-screen pl-[0.5rem] ease-in duration-500"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col items-start text-left w-[40vw] custom-bg h-screen ease-in duration-500"
          }
        >
          <div className="text-white flex flex-col w-[90%] font-extralight">
            <p className="border-b-[1px] border-white py-4 mt-[2rem] ">Home</p>
            <p className="border-b-[1px] border-white py-4 ">Comedy</p>
            <p className="border-b-[1px] border-white py-4 ">Action</p>
            <p className="border-b-[1px] border-white py-4 ">Romance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
