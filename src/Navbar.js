import { useState } from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 940) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleBtn = () => {
    if (menu === false) {
      setMenu(true);
      setToggle(true);
    } else {
      setMenu(false);
      setToggle(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      id={navbar ? "active-navbar" : ""}
      className="flex items-center justify-between sticky top-0 h-12 px-16 heading bg-rose-500 z-[100] w-full"
    >
      <h4 className="navbar-logo">VITIYAH MANIMARAN</h4>
      <div
        id="menu-btn"
        className={`${toggle ? "menu-btn toggle" : "menu-btn"} cursor-pointer`}
        onClick={toggleBtn}
      >
        <div className="toggle line-1"></div>
        <div className="toggle line-2"></div>
        <div className="toggle line-3"></div>
      </div>
      <ul
        className={`${
          menu ? "navbar-list navbar-list-active" : "navbar-list"
        } flex items-center w-1/3 justify-between max-md:w-2/3 max-lg:w-2/3 max-xl:w-2/3`}
      >
        <li>
          {/* eslint-disable-next-line*/}
          <a className="a" href="#">
            HOME
          </a>
        </li>
        <li>
          <a className="a" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="a" href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="a" href="#contact">
            CONTACT
          </a>
        </li>
        <li>
          <a href="https://github.com/Vitiyah" target="_blank" rel="noreferrer">
            <FaGithub className="icon-hover icon" size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
