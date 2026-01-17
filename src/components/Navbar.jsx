import React from "react";
import logo from "../assets/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { dropdownMenu1, dropdownMenu, MENU } from "./constants";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Top bar */}
      <div className="bg-slate-400 py-3 container mx-auto flex items-center gap-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-2xl sm:text-3xl"
        >
          <img src={logo} alt="logo" className="w-10" />
          Baffko
        </a>

        {/* Search */}
        <div className="relative group">
          <input
            type="text"
            placeholder="search"
            className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary group-hover:w-[300px]"
          />
          <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 group-hover:text-primary" />
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrderPopup}
          className="bg-orange-500 text-white py-1 px-4 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-200"
        >
          <FaCartShopping />
          <span className="hidden sm:inline">Order</span>
        </button>

        {/* Darkmode toggle */}
        <Darkmode />
      </div>

      {/* Desktop Menu */}
      <div className="flex justify-center">
        <ul className="hidden sm:flex items-center gap-4 mt-2">
          {MENU.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 py-2 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdowns */}
          <li className="relative group">
            <a href="#" className="flex items-center gap-1 px-4 py-2">
              Local Snacks
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute left-0 top-full z-[9999] hidden w-[150px] rounded-md bg-white dark:bg-gray-800 shadow-md group-hover:block">
              <ul>
                {dropdownMenu.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block px-2 py-1 rounded hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="flex items-center gap-1 px-4 py-2">
              FoodStuffs
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute left-0 top-full z-[9999] hidden w-[150px] rounded-md bg-white dark:bg-gray-800 shadow-md group-hover:block">
              <ul>
                {dropdownMenu1.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block px-2 py-1 rounded hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
