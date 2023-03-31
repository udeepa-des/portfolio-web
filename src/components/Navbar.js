import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex items-center title-font font-medium text-white mb-4 md:mb-0">
          <a href="./profile-pic.png" target="_blank">
            <img
              alt="Udeepa Desarana profile picture"
              src="./profile-pic.png"
              className="w-12 rounded-full flex-shrink-0"
            />
          </a>
          <a href="#about" className="ml-3 text-xl">
            Udeepa Desarana
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#education" className="mr-5 hover:text-white duration-500">
            Education
          </a>
          <a href="#projects" className="mr-5 hover:text-white duration-500">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white duration-500">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white duration-500">
            References
          </a>
          <a href="#Cv" className="mr-5 hover:text-white duration-500">
            CV
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 duration-500">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}