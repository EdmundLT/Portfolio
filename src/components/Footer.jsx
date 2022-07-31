import React from 'react'
import { SiReact, SiMaterialui, SiNodedotjs } from "react-icons/si";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 bg-white justify-between flex rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} Edmund Tang
    </p>
    <a href='/tos'>
    <span className="text-gray-500 text-sm">Terms of Service & Conditions</span>
    </a>
    <div className="flex">
        <p className="flex text-2xl text-sky-100 gap-5">
          <SiReact size={"20px"} /> <SiMaterialui size={"20px"} />{" "}
          <SiNodedotjs size={"20px"}/>
        </p>
        </div>

    
    
</footer>
  )
}

export default Footer