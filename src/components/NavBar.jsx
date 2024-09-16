"use client";
import Image from "next/image";
import Link from "next/link";
import { items } from "@/data/Navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="pt-2 px-8 border-b-8 border-ai-blue-300 fixed w-full z-30 bg-white flex justify-between items-center text-3xl">
        <Link href="/" className="mt-1">
          <Image src="/logo.webp" alt="Logo" width={200} height={100} />
        </Link>
        <div className="text-ai-blue-400 hidden md:flex ml-auto text-xl justify-between lg:w-2/5 md:w-7/12 font-semibold font-monterssat">
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => {
                setSelected(item.name);
                handleNav();
              }}
              className={`${
                selected === item.name ? "text-ai-blue-600" : "text-ai-blue-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScvA8tKpAnkRaNk6CqGRCeg7d0uHOxFYjnAfftAyvW4MKDtwQ/viewform"
            target="_blank"
            className="px-3 py-1 text-white bg-ai-blue-400 rounded-full hover:bg-ai-blue-600 font-montserrat"
          >
            join now
          </Link>
        </div>
        {/* mobile menu */}
        <div
          className={`fixed ${
            nav
              ? "transition transform ease-out duration-500 translate-y-[68px] opacity-100"
              : "hidden transition duration-500 ease-in transform -translate-y-24 opacity-0"
          } md:hidden flex flex-col items-center justify-evenly w-full duration-500 bg-ai-blue-300 top-4 left-0 right-0 -z-10`}
        >
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => {
                setSelected(item.name);
                handleNav();
              }}
              className={`hover:text-ai-blue-600 duration-300 border-solid font-semibold py-2 mx-2 ${
                selected === item.name ? "text-ai-blue-600" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScvA8tKpAnkRaNk6CqGRCeg7d0uHOxFYjnAfftAyvW4MKDtwQ/viewform"
            target="_blank"
            className="hover:text-ai-blue-600 duration-300 border-solid font-semibold py-2 mx-2 text-white"
          >
            join now
          </Link>
        </div>
        <div onClick={handleNav}>
          <FaBars
            className={`text-3xl flex md:hidden ${
              nav ? "text-ai-blue-600" : "text-ai-blue-300"
            } hover:cursor-pointer hover:text-ai-blue-600 justify-self-end`}
          />
        </div>
      </div>
      <div className="pb-20"></div>
    </div>
  );
};

export default NavBar;
