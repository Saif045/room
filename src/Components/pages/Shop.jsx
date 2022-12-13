import React from "react";
import { data } from "../../assets/ShopData/Data";
import { motion } from "framer-motion";

const Shop = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "easeInOut",
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}>
      <div className="h-20 bg-black block"></div>
      <div className=" m-2 sm:m-10 lg:mx-24 xl:mx-32 2xl:mx-44  text-center font-bold text-3xl">
        {" "}
        Products
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6  mt-6 ">
          {data.map((element, index) => {
            const randomImage =
              element.images[Math.floor(Math.random() * element.images.length)];

            return (
              <div
                className=" flex flex-col-reverse  bg-gradient-to-r  from-slate-100  "
                key={index}>
                <div className="bg-gradient-to-tr  from-slate-50">
                  <p className=" text-left text-black text-base sm:text-lg lg:text-xl font-medium border-2 ">
                    {element.title}
                  </p>
                </div>
                <img
                  className="w-full h-full object-cover object-center "
                  src={randomImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
