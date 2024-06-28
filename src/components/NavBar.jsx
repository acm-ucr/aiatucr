"use client";
import Image from "next/image";
import Link from "next/link";
import { items } from "@/data/Navigation";
import { useState } from "react";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="pt-2 px-8 border-b-8 border-ai-navbar sticky top-0 bg-white flex justify-between items-center text-3xl">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={250} height={100} />
      </Link>
      <div className="text-ai-buttons right-16 absolute md:flex justify-evenly w-1/2 font-semibold space-x-16 font-monda">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`${
              selected === item.name
                ? "text-ai-buttons_darker"
                : "text-ai-buttons"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="https://www.instagram.com/ai.atucr"
          className="px-6 py-1 text-white bg-ai-buttons rounded-full hover:bg-ai-buttons_darker"
        >
          join now
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
