import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(true);
  const location = useLocation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    if (!isActive) {
      setActive(true);
      document.body.classList.remove("ovhidden");
    }
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="site__header_editorial">
      <div className="narrow-container header-inner">
        <Link className="brand-logo font-serif text-2xl" to="/" onClick={closeMenu}>
          {logotext}
        </Link>

        {/* Inline desktop navigation links */}
        <nav className="header-nav-desktop hidden md:flex items-center space-x-6 text-sm">
          <Link
            to="/"
            className={`nav-link-item ${isActiveLink("/") ? "active-link" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link-item ${isActiveLink("/portfolio") ? "active-link" : ""}`}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`nav-link-item ${isActiveLink("/about") ? "active-link" : ""}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link-item ${isActiveLink("/contact") ? "active-link" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Themetoggle />
          <button className="md:hidden mobile-menu-btn" onClick={handleToggle} aria-label="Toggle Navigation">
            {isActive ? <VscGrabber size={22} /> : <VscClose size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
        <div className="bg__menu">
          <div className="narrow-container h-full flex flex-col justify-between py-12 px-6">
            <div className="flex justify-between items-center pb-6 border-b border-stone-200 dark:border-stone-800">
              <span className="font-serif text-2xl">{logotext}</span>
              <button onClick={handleToggle} className="p-2">
                <VscClose size={26} />
              </button>
            </div>

            <ul className="mobile-menu-list space-y-6 my-auto">
              <li>
                <Link onClick={closeMenu} to="/" className="mobile-menu-link">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to="/portfolio" className="mobile-menu-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to="/about" className="mobile-menu-link">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to="/contact" className="mobile-menu-link">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mobile-menu-footer pt-6 border-t border-stone-200 dark:border-stone-800 flex justify-between text-xs text-stone-500">
              <div className="flex space-x-4">
                <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
              <span>© {new Date().getFullYear()} {logotext}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headermain;