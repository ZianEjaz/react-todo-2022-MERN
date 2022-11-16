import React from "react";
import { FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full bg-gray-700 text-center text-gray-300 p-5 self-end w-screen">
      <div className="w-full">
        Design and Developed @{" "}
        <a
          href="https://www.orbitlogics.com"
          target="blank"
          className="text-white font-bold"
        >
          Orbit Logics
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/ZianEjaz"
          target="blank"
          className="text-white font-bold"
        >
          Zian Ejaz
        </a>
      </div>
      <div className="flex justify-self-end justify-end w-full">
        <a href="https://github.com/ZianEjaz" className="text-3xl pr-3" target="blank">
          <FaGithub />
        </a >
        <a href="./" className="text-3xl pr-3">
          <FaYoutube />
        </a>
        <a href="./" className="text-3xl pr-3">
          <FaDiscord />
        </a>
      </div>
    </div>
  );
};

export default Footer;
