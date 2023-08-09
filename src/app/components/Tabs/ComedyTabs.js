"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { InTheatherData, NewRomanceData, OscarData, RomanceData } from "../Data/romanceData";
import Image from "next/image";
import Link from "next/link";
import { ActionData, inTheatherAction, newActionData, oscarAction } from "../Data/actionData";
import { comedyData, inTheatherComedyData, newComedyData, oscarComedyData } from "../Data/comedyData";

const ComedyTabs = () => (
  <Tabs.Root
    defaultValue="tab1"
    orientation="vertical"
  >
    <Tabs.List
      aria-label="tabs example"
      className="flex justify-between w-[80vw] sm:w-[50vw] text-[0.6rem] md:text-base text-white font-bold my-8"
    >
      <Tabs.Trigger value="tab1">FEATURED</Tabs.Trigger>
      <Tabs.Trigger value="tab2">NEW</Tabs.Trigger>
      <Tabs.Trigger value="tab3">IN THEATERS</Tabs.Trigger>
      <Tabs.Trigger value="tab4">OSCAR WINNERS</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      value="tab1"
      className="text-xl"
    >
      <div className="my-[2vh] grid grid-cols-3 md:grid-cols-4 gap-3">
        {newComedyData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[20vw] md:w-[15vw]"
            >
              <Image
                src={item.image}
                width={250}
                height={250}
              />
              <h1 className="text-[0.6rem] sm:text-base mt-2 text-white">{item.title}</h1>
              <Link
                href="#"
                className="text-gray-300 text-[0.6rem] sm:text-base"
              >
                {item.description}
              </Link>
            </div>
          );
        })}
      </div>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      {" "}
      <div className="my-[2vh] grid grid-cols-3 md:grid-cols-4 gap-3">
        {comedyData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[20vw] md:w-[15vw]"
            >
              <Image
                src={item.image}
                width={250}
                height={250}
              />
              <h1 className="text-[0.6rem] sm:text-base mt-2 text-white">{item.title}</h1>
              <Link
                href="#"
                className="text-gray-300 text-[0.6rem] sm:text-base"
              >
                {item.description}
              </Link>
            </div>
          );
        })}
      </div>
    </Tabs.Content>
    <Tabs.Content value="tab3">
      <div className="my-[2vh] grid grid-cols-3 md:grid-cols-4 gap-3">
        {inTheatherComedyData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[20vw] md:w-[15vw]"
            >
              <Image
                src={item.image}
                width={250}
                height={250}
              />
              <h1 className="text-[0.6rem] sm:text-base mt-2 text-white">{item.title}</h1>
              <Link
                href="#"
                className="text-gray-300 text-[0.6rem] sm:text-base"
              >
                {item.description}
              </Link>
            </div>
          );
        })}
      </div>
    </Tabs.Content>
    <Tabs.Content value="tab4">
      {" "}
      <div className="my-[2vh] grid grid-cols-3 md:grid-cols-4 gap-3">
        {oscarComedyData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[20vw] md:w-[15vw]"
            >
              <Image
                src={item.image}
                width={250}
                height={250}
              />
              <h1 className="text-[0.6rem] sm:text-base mt-2 text-white">{item.title}</h1>
              <Link
                href="#"
                className="text-gray-300 text-[0.6rem] sm:text-base"
              >
                {item.description}
              </Link>
            </div>
          );
        })}
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default ComedyTabs;
