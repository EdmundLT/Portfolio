import React from "react";
import {
  SiInstagram,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import "./components.css";
import TypeAnimation from "react-type-animation";
import { elementControl } from "../data/config";
const Header = ({names, message, socialNetwork}) => {
  return (
    <div className="container mx-auto text-center md:p-20 m-20">
      <p className="text-6xl font-Poppins text-[#000000] pb-4">Hello I'm</p>
      <p className="text-3xl font-Poppins text-[#000000] pb-4">{names}</p>

      {elementControl.headerTextAnimation ? (<TypeAnimation
        cursor={true}
        sequence={[message, 2000, ""]}
        repeat={Infinity}
        className="text-2xl font-Poppins text-[#000000] pb-4"
      />): (<p className="text-2xl font-Poppins text-[#000000] pb-4">{message}</p>)}
      
      
      <ul className="text-[#000000] flex gap-6 justify-center p-4">
        <li>
          <a className="" href={socialNetwork.github}>
            <SiGithub size="35px" />
          </a>
        </li>
        <li>
          <a className="" href={socialNetwork.linkedIn}>
            <SiLinkedin size="35px" />
          </a>
        </li>
        <li>
          <a className="" href={socialNetwork.twitter}>
            <SiTwitter size="35px" />
          </a>
        </li>
        <li>
          <a className="" href={socialNetwork.instagram}>
            <SiInstagram size="35px" />
          </a>
        </li>
        <li>
          <a className="" href={socialNetwork.youtube}>
            <SiYoutube size="35px" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
