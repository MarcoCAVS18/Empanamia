import React, { useState } from "react";
import { ReactComponent as Logo } from './Mesa de trabajo 2.svg';
import CartWidget from '../CartWidget/CartWidget';
import NavButtons from './NavButtons';

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMobileMenu = () => {
    return (
      <div
        className={`md:hidden absolute pt-2 top-24 left-0 right-0 z-10 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 rounded-large bg-blue p-2">
          <NavButtons />
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-blue relative">
      <div className="w-full mx-auto px-8 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center flex-shrink-0">
            <button
              className="text-white focus:outline-none md:hidden"
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
            <div className="flex items-center">
              <Logo className="h-20 w-auto nav-logo hidden md:block" />
              <h1
                className={`text-3xl font-sans font-semibold pl-2 select-none tracking-widest text-white nav-title ${
                  isMobileMenuOpen ? "text-2xl text-center mx-auto" : "mx-auto"
                }`}
              >
                Empanamía
              </h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <NavButtons />
            <CartWidget />
          </div>
          <div className="md:hidden flex items-center">
            <CartWidget />
          </div>
        </div>
        {isMobileMenuOpen && renderMobileMenu()}
      </div>
    </nav>
  );
}

export default NavBar;

