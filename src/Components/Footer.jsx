import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center h-40 flex flex-col justify-center ">
      <div className=" m-4 font-extrabold text-2xl">room</div>

      <div className=" m-4">
        <NavLink className=" px-2 " to="/">
          home
        </NavLink>
        <NavLink className="px-2" to="/Shop">
          Shop
        </NavLink>
        <NavLink className="px-2 " to="/about">
          about
        </NavLink>
        <NavLink className="px-2" to="/contact">
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
