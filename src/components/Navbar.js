"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-semibold text-green-900">
          Dr. Maya Reynolds
        </h1>

        {/* Desktop Menu */}
        <div className="space-x-8 hidden md:block">
          <a href="#services" className="text-gray-700 hover:text-green-900">Services</a>
          <a href="#about" className="text-gray-700 hover:text-green-900">About</a>
          <a href="#office" className="text-gray-700 hover:text-green-900">Office</a>
          <a href="#contact" className="text-gray-700 hover:text-green-900">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-green-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden bg-white border-t border-gray-200">
    <div className="flex flex-col space-y-4 px-6 py-6">
      <a 
        href="#services" 
        onClick={() => setMenuOpen(false)}
        className="text-black hover:text-green-900 transition"
      >
        Services
      </a>

      <a 
        href="#about" 
        onClick={() => setMenuOpen(false)}
        className="text-black hover:text-green-900 transition"
      >
        About
      </a>

      <a 
        href="#office" 
        onClick={() => setMenuOpen(false)}
        className="text-black hover:text-green-900 transition"
      >
        Office
      </a>

      <a 
        href="#contact" 
        onClick={() => setMenuOpen(false)}
        className="text-black hover:text-green-900 transition"
      >
        Contact
      </a>
    </div>
  </div>
)}


    </nav>
  );
}
