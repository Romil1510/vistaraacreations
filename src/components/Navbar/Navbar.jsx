import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Common handler for all nav links
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#f3f2ef] shadow-md backdrop-blur-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-5 sm:px-8 max-w-8xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-12 sm:w-14" alt="Vistaraa Creations" />
          <p className="text-[#262626] tracking-[0.15em] font-semibold text-xl sm:text-2xl">
            Vistaraa <span className="text-[#b59c61]">Creations</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#262626] text-sm font-medium">
          <NavLink
            to="/"
            onClick={handleNavClick}
            className="underline-anim tracking-[0.15em] uppercase"
          >
            Home
          </NavLink>

          <NavLink
            to="/collections"
            onClick={handleNavClick}
            className="underline-anim tracking-[0.15em] uppercase"
          >
            Collections
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleNavClick}
            className="underline-anim tracking-[0.15em] uppercase"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={handleNavClick}
            className="underline-anim tracking-[0.15em] uppercase"
          >
            Contact
          </NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-6 bg-[#262626] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#262626] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#262626] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f3f2ef] mt-2">
          <ul className="flex flex-col gap-4 py-4 px-6 text-[#262626] text-sm">
            <NavLink
              to="/"
              onClick={handleNavClick}
              className="underline-anim tracking-[0.2em] uppercase"
            >
              Home
            </NavLink>

            <NavLink
              to="/collections"
              onClick={handleNavClick}
              className="underline-anim tracking-[0.2em] uppercase"
            >
              Collections
            </NavLink>

            <NavLink
              to="/about"
              onClick={handleNavClick}
              className="underline-anim tracking-[0.2em] uppercase"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={handleNavClick}
              className="underline-anim tracking-[0.2em] uppercase"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
