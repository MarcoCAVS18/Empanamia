import React, { useState } from "react";
import image from './Mesa de trabajo 2.svg';
import CartWidget from '../CartWidget/CartWidget';
import NavButtons from './NavButtons';

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue">
      <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img
              className="h-20 w-auto"
              src={image}
              alt="Logo"
            />
            <h1 className="text-3xl font-sans font-semibold pl-4 select-none tracking-widest text-white">
              Empanamía
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavButtons />
            <CartWidget /> {/* Mueve el componente CartWidget aquí */}
          </div>
          <div className="md:hidden flex items-center">
            <CartWidget /> {/* Mueve el componente CartWidget aquí */}
            <button
              className="text-white focus:outline-none pl-6"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <NavButtons />
            </div>
          </div>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100">
          {/* Remueve el componente CartWidget aquí */}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
