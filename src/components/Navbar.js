import React from "react";
import { Link } from "react-router-dom";
import music from "../imgs/music.png";

function Navbar() {
  return (
    <header className="flex flex-row my-2 md:my-6">
      <div className="md:absolute top-0 flex items-center text-xl font-semibold m-4 gap-2 mx-6">
        <img src={music} className="h-10" />
        Music
      </div>
      <ul className=" flex text-gray-400 w-screen justify-center gap-8 flex-row items-center text-xl font-semibold">
        <li className="rounded hover:text-white hover:scale-105">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="rounded hover:text-white hover:scale-105">
          <Link to="/explore" className="">
            Explore
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
