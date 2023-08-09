import React from "react";
import ActionTabs from "./Tabs/ActionTabs";
import { SiYoutubegaming } from "react-icons/si";
import Link from "next/link";
import Comedy from "./Comedy";

function Action() {
  return (
    <div className="bg-black">
      <div className="flex justify-center sm:justify-around my-5 py-7 border-b-2 bg-black">
        <ActionTabs />
        <div className="hidden sm:inline-flex flex-col justify-evenly text-white">
          <div>
            <h1 className="text-[2.4vw] font-bold">ACTION & ADVENTURE</h1>
            <p className="text-[1vw]">Heroic and Physical Movies</p>
          </div>
          <Link
            href="#"
            className="flex items-end gap-3 w-[30vw]"
          >
            <SiYoutubegaming size={40} />
            <p className="text-[1vw] border-b-4 border-blue-900">BROWSE MORE ACTION AND ADVENTURE</p>
          </Link>
        </div>
      </div>
      <Comedy />
    </div>
  );
}

export default Action;
