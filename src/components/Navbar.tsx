"use client";

import { useState } from "react";
import { navlinks } from "@/utility/navlinks";
import Navlink from "./Navlink";
import Image from "next/image";

const Navbar = () => {
  const [clickedLinkTitle, setClickedLinkTitle] = useState<string>("Home");

  const onLinkClick = (link: string) => {
    setClickedLinkTitle(link);
  };

  return (
    <nav className="flex justify-between h-20 p-2 bg-slate-500">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        priority={true}
      ></Image>
      <div className="flex items-center gap-4 h-full">
        {navlinks.map((link) => 
          <Navlink
            key={link.path}
            path={link.path}
            title={link.title}
            onLinkClick={onLinkClick}
            bgColor={`${
              link.title === clickedLinkTitle ? "bg-red-500" : "bg-blue-500"
            }`}
          ></Navlink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
