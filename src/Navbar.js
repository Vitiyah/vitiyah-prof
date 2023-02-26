import { useState } from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 940) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      id={navbar ? "active-navbar" : ""}
      className="navbar flex items-center justify-between sticky top-0 h-12 px-16 heading bg-rose-500 z-[100]"
    >
      <h4 className="navbar-logo">VITIYAH MANIMARAN</h4>
      <ul className="flex items-center  w-1/3 justify-between ">
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
            <FaGithub className="icon-hover icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
