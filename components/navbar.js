"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">💜🦄 VIN</h1>

        {/* Hamburger Button (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Links */}
        <div
          className={`md:flex space-x-0 md:space-x-6 absolute md:static top-full left-0 w-full bg-gray-200 dark:bg-gray-900 md:w-auto md:block transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 py-2 px-4 text-lg hover:bg-gray-300 dark:hover:bg-gray-800 rounded transition-colors duration-200"
              >
                <Home size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center gap-2 py-2 px-4 text-lg hover:bg-gray-300 dark:hover:bg-gray-800 rounded transition-colors duration-200"
              >
                <User size={20} />
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portofolio"
                className="flex items-center gap-2 py-2 px-4 text-lg hover:bg-gray-300 dark:hover:bg-gray-800 rounded transition-colors duration-200"
              >
                <Briefcase size={20} />
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center gap-2 py-2 px-4 text-lg hover:bg-gray-300 dark:hover:bg-gray-800 rounded transition-colors duration-200"
              >
                <Mail size={20} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
