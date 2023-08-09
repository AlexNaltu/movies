import React from "react";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BsWikipedia } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex justify-evenly my-10 md:my-24 lg:my-32">
      <h1 className="font-black text-[2vw]">BROMOVIES</h1>
      <div className="flex flex-col gap-3">
        <p className="font-black text-[1.5vw]">Corporate</p>
        <ul className="font-light text-gray-400 text-[1vw] flex flex-col gap-2">
          <li>NVSE: A</li>
          <li>NRSE: B</li>
          <li>TERMS OF USE</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </div>
      <div>
        <p className="font-black text-[1.5vw]">Sitemap</p>
        <ul  className="font-light text-gray-400 text-[1vw] flex flex-col gap-2">
          <li>Home</li>
          <li>Comedy</li>
          <li>Action</li>
          <li>Romance</li>
        </ul>
      </div>
      <div className="hidden sm:inline-flex gap-4">
        <AiFillYoutube size={30} />
        <AiOutlineTwitter size={30} />
        <BsWikipedia size={30} />
      </div>
    </div>
  );
}

export default Footer;
