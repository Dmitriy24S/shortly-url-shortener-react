import React from "react";

export const NavMenu = () => {
  return (
    <div className="nav-menu-list absolute top-20 w-10/12  text-white p-6 pb-10 text-center rounded-xl mx-auto left-0 right-0 font-semibold text-lg tracking-wide">
      <ul className="flex flex-col gap-6 border-b border-b-gray-500 pb-6">
        <li>
          <a href="#/" className="w-full block py-3 rounded-full ">
            Features
          </a>
        </li>
        <li>
          <a href="#/" className="w-full block py-3 rounded-full ">
            Pricing
          </a>
        </li>
        <li>
          <a href="#/" className="w-full block py-3 rounded-full ">
            Resources
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-6 pt-6">
        <li>
          <a href="#/" className="w-full block py-3 rounded-full ">
            Login
          </a>
        </li>
        <li>
          <a href="#/" className="sign-up-btn w-full block py-3 rounded-full">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};