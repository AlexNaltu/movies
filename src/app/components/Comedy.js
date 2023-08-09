import React from "react";
import Link from "next/link";
import { SiYoutubegaming } from "react-icons/si";
import ComedyTabs from "./Tabs/ComedyTabs";

function Comedy() {
  return (
    <div className="flex justify-center sm:justify-around my-5 py-7 bg-black">
      <div className="hidden sm:inline-flex flex-col justify-evenly text-white">
        <div>
          <h1 className="text-[2.4vw] font-bold">COMEDY</h1>
          <p className="text-[1vw]">Amazing and over the top</p>
        </div>
        <Link
          href="#"
          className="flex items-end gap-3 w-[30vw]"
        >
          <SiYoutubegaming size={40} />
          <p className="text-[1vw] border-b-4 border-blue-900">BROWSE MORE COMEDY</p>
        </Link>
      </div>
      <ComedyTabs />
    </div>
  );
}

export default Comedy;
