
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ useLocation for active route
import spaceLogo from "../assets/a-home-page-images/spaceLogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // current path

  // Helper function to determine if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <header className="flex items-center pl-6 pt-8 lg:pt-8 md:pt-0 justify-between relative z-50">
        {/* Logo  */}
        <div className="h-8 w-8 md:h-10 md:w-10 mr-2 ml-4">
          <img
            src={spaceLogo}
            alt="logo"
            className="h-8 w-8 md:h-11 md:w-11 rounded-full"
          />
        </div>

        {/* Horizontal line (desktop only) */}
        <div className="flex-1 pl-8 hidden lg:block">
          <hr className="border-gray-600 border-t" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-white h-20 items-center justify-center backdrop-blur-lg shadow-lg px-6">
          <ul className="flex gap-[30px] lg:gap-[50px] uppercase cursor-pointer font-barlow text-xs tracking-[2.5px] h-full">
            <li className={`flex items-center border-b-2 ${
              isActive("/") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/">00 Home</Link>
            </li>
            <li className={`flex items-center border-b-2 ${
              isActive("/destination") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/destination">01 Destination</Link>
            </li>
            <li className={`flex items-center border-b-2 ${
              isActive("/crew") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/crew">02 Crew</Link>
            </li>
            <li className={`flex items-center border-b-2 ${
              isActive("/technology") ? "border-white" : "border-transparent hover:border-gray-500"
            }`}>
              <Link to="/technology">03 Technology</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger button (phone only) */}
        <div className="md:hidden ml-auto pr-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-lg shadow-lg text-white uppercase font-barlow text-sm tracking-[2.5px] absolute right-0 top-20 w-2/3 h-[553px] p-6">
          <ul className="flex flex-col gap-6">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>00 Home</Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setIsOpen(false)}>01 Destination</Link>
            </li>
            <li>
              <Link to="/crew" onClick={() => setIsOpen(false)}>02 Crew</Link>
            </li>
            <li>
              <Link to="/technology" onClick={() => setIsOpen(false)}>03 Technology</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
