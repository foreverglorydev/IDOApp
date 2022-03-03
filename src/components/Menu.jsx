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
          <li className="m-15 font-medium text-18 whitespace-nowrap">POOLS</li>
          <li className="m-15 font-medium text-18 whitespace-nowrap">TOKEN CREATION</li>
          <li className="m-15 font-medium text-18 whitespace-nowrap">ABOUT</li>
          <li className="m-15 font-medium text-18 whitespace-nowrap">TOKEN LOCKER</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
