import React, { useState } from "react";
import HamburgerIcon from "./Icons/Hamburger";

const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setShow(prevState => !prevState)}>
        <HamburgerIcon />
      </button>
      <div className={`absolute top-50 right-0 bg-white rounded-[4px] transition ease-in-out delay-150 ${show ? 'block' : 'hidden'}`}>
        <ul>
          <a href="/">
          <li className="m-15 font-medium text-18 whitespace-nowrap">POOLS</li>
          </a>
          <li className="m-15 font-medium text-18 whitespace-nowrap">TOKEN CREATION</li>
          <a href="https://ignite-defi.com/">
            <li className="m-15 font-medium text-18 whitespace-nowrap">ABOUT</li>
          </a>
          <a href="https://lock.sparklaunch.net">
            <li className="m-15 font-medium text-18 whitespace-nowrap">TOKEN LOCKER</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
