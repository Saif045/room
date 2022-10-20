import React from "react";
import { NavLink } from "react-router-dom";
import {facebook ,instagram ,twitter , pinterest } from '../assets/index'

const Footer = () => {
  return (
    <div className="bg-black text-white text-center h-40 flex flex-col justify-center ">
      <div className=" m-4 font-extrabold text-2xl">room</div>

      <div className=" m-4 flex flex-col xs:flex-row justify-center">
      <div>
        <NavLink className=" px-2 " to="/">
          home
        </NavLink>
        <NavLink className="px-2" to="/Shop">
          Shop
        </NavLink>
        </div>
        <div>
        <NavLink className="px-2 " to="/about">
          about
        </NavLink>
        <NavLink className="px-2" to="/contact">
          contact
        </NavLink>
        </div>
      </div>
      <div className="flex justify-center ">
        <img className="px-1 xs:px-2 m-1" src={facebook} alt="Facebook" />
        <img className="px-1 xs:px-2 m-1" src={instagram} alt="Instagram" />
        <img className="px-1 xs:px-2 m-1" src={twitter} alt="Twitter" />
        <img className="px-1 xs:px-2 m-1" src={pinterest} alt="Pinterest" />
      </div>
    </div>
  );
};

export default Footer;
