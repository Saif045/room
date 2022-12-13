import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { right, left } from "../assets/index";
import { Link } from "react-router-dom";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="h-full w-full">
      {SliderData.map((slide, index) => {
        return (
          <div className="" key={index}>
            {index === current && (
              <div className="grid md:grid-cols-5 ">
                <div className="relative sm:col-span-3 ">
                  <img
                    className="h-full w-full object-cover"
                    src={slide.image}
                  />

                  <div className="absolute bottom-0 right-0 ">
                    <button className="bg-black p-2 " onClick={prevSlide}>
                      <img className="p-2" src={left} alt="Left" />
                    </button>
                    <button className="bg-black p-2 " onClick={nextSlide}>
                      <img className="p-2 " src={right} alt="right" />
                    </button>
                  </div>
                </div>

                <div className="relative md:col-start-4 md:col-end-6">
                  <div className="flex justify-center items-center ">
                    <div className="flex flex-col gap-4  w-4/5 my-10 mx-2 md:w-full md:m-1 md:mx-3 md:gap-2 lg:gap-5 lg:w-4/5 lg:py-10 xl:px-4 2xl:py-32">
                      <h1 className="text-3xl xl:text-4xl font-bold ">
                        {slide.title}
                      </h1>
                      <p className="leading-snug lg:leading-normal text-sm lg:text-base xl:text-lg ">
                        {slide.text}
                      </p>
                      <Link to="/shop">
                        <button className="text-left font-semibold border-4 border-double p-2 border-black hover:border-white hover:bg-black hover:text-white">
                          SHOP NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;

{
  /*            <div className="hidden  absolute md:bottom-0">
                    <button
                      className="bg-black text-white p-2 "
                      onClick={prevSlide}>
                      <img className="bg-black  p-2 " src={left} alt="Left" />
                    </button>
                    <button
                      className="bg-black text-white p-2 "
                      onClick={nextSlide}>
                      <img className="bg-black  p-2 " src={right} alt="right" />
                    </button>
                  </div> */
}
