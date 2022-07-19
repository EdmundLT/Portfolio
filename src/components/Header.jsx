import React from "react";
import { SiInstagram, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import "./components.css";
import TypeAnimation from 'react-type-animation';
const Header = (props) => {
  return (
    <div className="container mx-auto text-center md:p-20 m-20">
      <p className="text-6xl font-Poppins text-sky-100 pb-4">Hello I'm</p>
      <p className="text-3xl font-Poppins text-sky-100 pb-4">{props.name}</p>

      <TypeAnimation
        cursor={true}
        sequence={[props.message, 2000,'']}
        repeat={Infinity}
        className="text-2xl font-Poppins text-sky-100 pb-4"
       />
        
      <ul className="text-sky-100 flex gap-6 justify-center p-4">
        <li>
          <a className="" href="https://github.com/EdmundLT">
            <SiGithub size="35px" />
          </a>
        </li>
        <li>
          <a className="" href="https://www.linkedin.com/in/longtang21/">
            <SiLinkedin size="35px" />
          </a>
        </li>
        <li>
          <a className="" href="https://twitter.com/EdmundTL0921">
            <SiTwitter size="35px" />
          </a>
        </li>
        <li>
          <a className="" href="https://www.instagram.com/edmund_tangca/">
            <SiInstagram size="35px" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
