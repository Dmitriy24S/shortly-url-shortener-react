import React, { useState } from "react";
import logo from "../images/logo.svg";
import { RiMenuLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  return (
    <header>
      <nav className="flex justify-between items-center p-4">
        <img src={logo} alt="logo" />
        <button
          className="nav-menu-toggle"
          onClick={() => {
            setIsNavMenuOpen(!isNavMenuOpen);
          }}
        >
          {isNavMenuOpen ? <GrClose className="text-xl" /> : <RiMenuLine className="text-2xl" />}
        </button>
      </nav>
      {isNavMenuOpen && <NavMenu />}
    </header>
  );
};
