import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold border-b-2 border-blue transition'
      : 'text-white hover:text-blue-500 transition';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-wide">E-Learning</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/course" className={navLinkStyle}>Course</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          <NavLink
            to="/signin"
            className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition"
          >
            Sign In
          </NavLink>
        </div>

        {/* Hamburger Button for Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {menuOpen ? (
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-800 text-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-5 right-5 text-white focus:outline-none"
          aria-label="Close Menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Links */}
        <nav className="mt-20 flex flex-col items-start space-y-6 px-6 text-lg">
          <NavLink to="/" onClick={closeMenu} className="hover:text-blue-300 transition">Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className="hover:text-blue-300 transition">About</NavLink>
          <NavLink to="/course" onClick={closeMenu} className="hover:text-blue-300 transition">Course</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="hover:text-blue-300 transition">Contact</NavLink>
          <NavLink
            to="/signin"
            onClick={closeMenu}
            className="mt-10 bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition w-full text-center"
          >
            Sign In
          </NavLink>
        </nav>
      </div>

      {/* Background overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
