import React from "react";
import ImageSlider from "../ImageSlider";
import { SliderData } from "../SliderData";
import { motion } from "framer-motion";
import { adark, alight } from "../../assets/index";

const Home = () => {
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
      exit={{ opacity: 0 }}
      className="">
      <ImageSlider slides={SliderData} />

      <div className=" grid md:grid-cols-7">
        <img
          className=" h-full w-full object-cover md:col-span-2"
          src={adark}
        />
        <div className="md:col-span-3 m-8 md:m-2 md:mx-4 lg:m-6 xl:m-14">
          <h1 className="font-bold mb-4 md:mb-1 lg:mb-2 xl:mb-3 lg:text-xl">
            ABOUT OUR FURNITURE
          </h1>
          <p className="leading-snug lg:leading-normal text-sm lg:text-base xl:text-lg">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your intersts and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between.
          </p>
        </div>
        <img
          className="h-full w-full object-cover md:col-span-2"
          src={alight}
        />
      </div>
    </motion.div>
  );
};

export default Home;
