import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-colorHeader p-10">
      <nav className="container mx-auto flex items-center justify-between">
        <NavLink  to="/" className="text-colorText text-xl font-bold">
          Léo
        </NavLink>
        <ul className="text-colorText text-xl flex space-x-6">
          <li>
            <NavLink  to="/" className="hover:text-pink-500 transition-all">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-pink-500 transition-all">
              About
            </NavLink>
          </li>
          <li>
            <NavLink  to="/contact" className="hover:text-pink-500 transition-all">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
