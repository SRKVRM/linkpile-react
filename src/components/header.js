import React from "react";
import { Link } from "react-router-dom";
import { useHeader } from "../context/headerContext";

function Header() {
  const { customHeader } = useHeader();

  return (
    <header className="sticky top-0 w-full p-4 flex justify-between items-center bg-primary border-b border-secondary z-10">
      <Link
        to="/"
        className="text-2xl font-nunito flex font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-blue-400"
      >
        {/* <img
          className="w-8 mr-2 h-full"
          src="./images/LogoNeon.png"
          alt="Link Pile Logo"
        /> */}
        Link.pile
      </Link>
      {customHeader}
    </header>
  );
}

export default Header;
