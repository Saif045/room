import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import AnimateText from "./AnimateText";

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: 1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };
  let navData = [
    { to: "/", name: "Home" },
    { to: "/Shop", name: "Shop" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
  ];

  let p ="room".split("") 
   return (
    <div className="relative  z-40">
      <div className=" sm:hidden absolute top-0 w-full flex justify-between ">
        <Link to="/">
          <div className=" text-white m-4 font-extrabold text-2xl z-40">
            room
          </div>
        </Link>

        <main className="z-[100]">
          <AnimatePresence>
            {open && (
              <motion.aside
                className="z-[90] h-screen bg-white absolute block right-0 top-0  "
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  width: "100vw",
                  height: 96,
                  opacity: 1,
                  transition: { type: "easeIn" },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: { type: "easeOut", delay: 0.3, duration: 0.3 },
                }}>
                <motion.div
                  className={
                    open
                      ? " flex flex-row gap-2 sm:flex   bg-white  w-full h-24 justify-end pr-2 font-bold pt-8 text-center z-50"
                      : "hidden sm:flex"
                  }
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}>
                  {navData.map((element, i) => (
                    <motion.div
                      className=" "
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      onClick={cycleOpen}
                      key={i}>
                      <NavLink to={element.to}>{element.name}</NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </main>

        <button className=" flex sm:hidden " onClick={cycleOpen}>
          {open ? (
            <AiOutlineClose
              className=" absolute top-7  left-0 z-[100]  text-black"
              size={30}
            />
          ) : (
            <FaBars className="mr-4 mt-5  z-[100] text-white" size={30} />
          )}
        </button>
      </div>

      {/* Desktop */}

      <div className="hidden sm:flex absolute top-0 w-full   ">
        <Link to="/">
          {" "}
          <div className=" text-white m-5 mr-10 font-bold text-3xl">
            
           <AnimateText p={p}/> 
          </div>{" "}
        </Link>

        <div className={" mt-8   "}>
          <NavLink className="   p-2 m-2 text-white " to="/">
            Home
          </NavLink>
          <NavLink className="py-2 m-2 text-white  " to="/Shop">
            Shop
          </NavLink>
          <NavLink className="p-2 m-2 text-white " to="/about">
            About
          </NavLink>
          <NavLink className="py-2 m-2 text-white" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
