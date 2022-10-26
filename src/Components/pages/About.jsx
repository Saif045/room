import React from "react";
import { wc3 } from "../../assets/ShopData/Nordic wooden chair/index";

const About = () => {
  return (
    <div className="">
      <div className="h-20 bg-black block"></div>
      <div className="grid sm:grid-cols-2 sm:h-[500px] 2xl:h-[700px]   ">
        <div className=" my-14 sm:my-auto sm:container mx-auto w-4/6 lg:w-3/6 self-center justify-center text-center ">
          <h3 className="text-center  2xl:text-2xl font-bold">
            Welcome To room
          </h3>
          <p className="my-4  2xl:text-xl ">
            room is a Professional Decor Platform. Here we will prove you only
            interesting content, which you will like very much. We're dedicated
            to proving you the best of Decor, with a focus on dependability and
            Furniture. We're working to turn our passion for Decor into a
            booming. We hope you enjoy our Decor as much as we enjoy offering
            them to you.
          </p>
        </div>
        <img
          className=" sm:h-[500px] 2xl:h-[700px]   w-full object-cover object-center "
          src={wc3}
        />
      </div>
    </div>
  );
};

export default About;
