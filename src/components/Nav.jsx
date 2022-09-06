import React from "react";
import "./components.css";
import { Link } from "react-scroll";
const Nav = () => {
  const Title = "<Edmund Tang />";
  return (
    <nav class="sticky top-0 z-50 bg-white border-gray-200 px-2 sm:px-4 py-2.5 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black sm:px-4 ">
            {Title}
          </span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-black">
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="education"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="exp"
              >
                Work XP
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
