import React from "react";
import RadixTabs from "./Tabs/Tabs";

function Romance() {
  return (
    <div className="flex justify-center sm:justify-around my-2">
      <div className="hidden sm:inline-block my-auto">
        <h1 className="text-[3vw] font-bold">ROMANCE</h1>
        <p className="text-[1vw]">Exiting,emotional unexpected</p>
      </div>
      <RadixTabs />
    </div>
  );
}

export default Romance;
