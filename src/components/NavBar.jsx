"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";
import { items } from "@/data/Navigation";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="pt-2 px-8 border-b-8 border-customColor-navbar sticky top-0 bg-white flex justify-between items-center text-3xl">
      <Link href="/">
        <Image src={logo} alt="Logo" className="left-0 w-64" />
      </Link>
      <div className="text-customColor-buttons right-16 absolute md:flex justify-evenly w-1/2 font-semibold space-x-16 font-monda">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`${
              selected === item.name
                ? "text-customColor-buttons_darker"
                : "text-customColor-buttons"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="https://www.instagram.com/ai.atucr"
          className="px-6 py-1 text-white bg-customColor-buttons rounded-full hover:bg-customColor-buttons_darker"
        >
          join now
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

/*
    {
      name: "Join Now",
      link: "https://www.instagram.com/ai.atucr",
    },

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.webp'; 

const NavBar = () => {
  return (
    <nav>
      <div className="px-8 border-b-8 border-customColor-header sticky top-0 bg-white flex justify-between items-center text-3xl">
        <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="left-0 w-64"
            />
        </Link>
        <div className="text-customColor-buttons right-16 absolute md:flex justify-evenly w-1/2 font-semibold space-x-16 font-montserrat">
          <Link href="/home">home</Link>
          <Link href="/board">board</Link>
          <Link href="/events">events</Link>
          <Link href="/projects">projects</Link>
          <Link href="https://www.instagram.com/ai.atucr" className='px-6 py-1 text-white bg-customColor-buttons rounded-full hover:bg-customColor-buttons_darker'>join now</Link>
        </div>
      </div>
      
    </nav>
  );
};

export default NavBar;
*/
