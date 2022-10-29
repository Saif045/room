import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <div className="relative  z-40">
      <div className=" sm:hidden absolute top-0 w-full flex justify-between ">
        <Link to="/">
          {" "}
          <div className=" text-white m-4 font-extrabold text-2xl z-40">
            room
          </div>{" "}
        </Link>

        <div
          className={
            togglerNav
              ? "absolute flex flex-row gap-4 sm:flex  bg-white  w-full h-24 justify-end pr-10 font-bold pt-8 text-center z-50"
              : "hidden sm:flex"
          }>
          <NavLink className=" px-2 " onClick={clickHandler} to="/">
            home
          </NavLink>
          <NavLink className="px-2" onClick={clickHandler} to="/Shop">
            Shop
          </NavLink>
          <NavLink className="px-2 " onClick={clickHandler} to="/about">
            about
          </NavLink>
          <NavLink className="px-2" onClick={clickHandler} to="/contact">
            contact
          </NavLink>
        </div>
        <button className=" flex sm:hidden " onClick={clickHandler}>
          {togglerNav ? (
            <AiOutlineClose
              className=" absolute top-8 left-6 z-50  text-gray-300"
              size={25}
            />
          ) : (
            <FaBars className="mr-4 mt-5 text-white" size={30} />
          )}
        </button>
      </div>

      <div className="hidden sm:flex absolute top-0 w-full   ">
        <Link to="/">
          {" "}
          <div className=" text-white m-5 mr-10 font-extrabold text-3xl">
            room
          </div>{" "}
        </Link>

        <div className={" mt-8   "}>
          <NavLink className="   p-2 m-2 text-white " to="/">
            home
          </NavLink>
          <NavLink className="py-2 m-2 text-white  " to="/Shop">
            Shop
          </NavLink>
          <NavLink className="p-2 m-2 text-white " to="/about">
            about
          </NavLink>
          <NavLink className="py-2 m-2 text-white" to="/contact">
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
