import React from "react";

export const NavMenu = () => {
  return (
    <div className="nav-menu-list absolute top-20 w-10/12  text-white p-6 pb-10 text-center rounded-xl mx-auto left-0 right-0 font-semibold text-lg tracking-wide md:relative md:top-0 md:flex md:items-center md:justify-between md:p-0 md:m-0">
      <ul className="flex flex-col gap-6 border-b border-b-gray-500 pb-6 md:flex-row md:border-0 md:pb-0">
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
      <ul className="flex flex-col gap-6 pt-6 md:flex-row md:pt-0">
        <li>
          <a href="#/" className="w-full block py-3 rounded-full ">
            Login
          </a>
        </li>
        <li>
          <a
            href="#/"
            className="sign-up-btn w-full block py-3 rounded-full md:py-2 md:px-8 md:text-white "
          >
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};
