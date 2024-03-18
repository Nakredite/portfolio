import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className="fixed top-0 w-full bg-teal-900 items-center flex p-5 pt-6 bg-teal-900 shadow-lg z-10"
      id="nav"
    >
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        <h1
          className="text-3xl pl-8 text-gray-50 font-bold cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        >
          Nakredite
        </h1>

        <button
          className="flex justify-end md:hidden ring-1 ring-gray-50 rounded"
          onClick={showNav}
        >
          <i className="fas fa-bars text-gray-50 w-9 h-9 flex justify-center items-center hover:text-gray-300"></i>
        </button>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex text-gray-50`}
        >
          <li className="border-t font-medium w-full flex justify-center p-2.5 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto">
            <Link
              className="hover:text-orange-100 cursor-pointer"
              to="home"
              onClick={showNav}
              smooth={true}
              duration={800}
            >
              Home
            </Link>
          </li>
          <li className="border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto">
            <Link
              className="hover:text-orange-100 cursor-pointer"
              to="nakre"
              onClick={showNav}
              smooth={true}
              duration={800}
            >
              About
            </Link>
          </li>

          <li className="border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto">
            <Link
              className="hover:text-orange-100 cursor-pointer"
              to="skills"
              onClick={showNav}
              smooth={true}
              duration={800}
            >
              Skills
            </Link>
          </li>
          <li className="border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto">
            <Link
              className="hover:text-orange-100 cursor-pointer"
              to="projects"
              onClick={showNav}
              smooth={true}
              duration={800}
            >
              Projects
            </Link>
          </li>

          <li className="border-t border-b font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto">
            <Link
              className="hover:text-orange-100 cursor-pointer"
              to="contact"
              onClick={showNav}
              smooth={true}
              duration={800}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
