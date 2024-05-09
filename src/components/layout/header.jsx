import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-colorHeader p-8">
      <nav className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-colorText text-[30px] font-bold">
          Léo
        </NavLink>
        <ul className="text-gray-600 text-xl flex space-x-6">
          <li>
            <NavLink
              to="/home"
              className="hover:text-colorText hover transition-all"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-colorText transition-all"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-colorText transition-all"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
