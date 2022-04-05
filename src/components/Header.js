import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { RiMenuLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header>
      <nav className="flex justify-between items-center p-4 md:gap-8 md:max-w-7xl md:mx-auto">
        <a href="/">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </a>
        {(isNavMenuOpen || screenWidth > 768) && <NavMenu />}
        <button
          className="nav-menu-toggle md:hidden"
          onClick={() => {
            setIsNavMenuOpen(!isNavMenuOpen);
          }}
        >
          {isNavMenuOpen ? <GrClose className="text-xl" /> : <RiMenuLine className="text-2xl" />}
        </button>
      </nav>
    </header>
  );
};
