import React, { useState } from "react";
import { SliderData } from "./SliderData";
import {adark , alight} from '../assets/index'

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
    <div className="">
      {SliderData.map((slide, index) => {
        return (
          <div className=""
             key={index}>
            {index === current && (
              <div className=" grid md:grid-cols-5">

                <div className="relative sm:col-span-3">
                  <img className="w-full object-cover" src={slide.image}/>

                    <div className="absolute bottom-0 right-0 md:hidden">
                     <button className="bg-black text-white p-2 " onClick={prevSlide}>prev</button>
                     <button className="bg-black text-white p-2 " onClick={nextSlide}>next</button>
                    </div> 
                 </div>

             <div className="relative md:col-start-4 md:col-end-6">
                <div className="flex justify-center items-center ">
                  <div className="flex flex-col gap-4  w-4/5 my-10 mx-2 md:w-full md:m-1 md:mx-3 md:gap-2 lg:gap-5 lg:w-4/5 lg:py-10 xl:px-4 2xl:py-32">
                    <h1 className="text-3xl xl:text-4xl font-bold ">{slide.title}</h1>
                    <p className="leading-snug lg:leading-normal text-sm lg:text-base xl:text-lg ">{slide.text}</p>
                    <button className="text-left font-semibold">SHOP NOW</button>
                  </div>
                </div>

                <div className="hidden md:flex  absolute md:bottom-0">
                    <button className="bg-black text-white p-2 " onClick={prevSlide}>prev</button>
                    <button className="bg-black text-white p-2 " onClick={nextSlide}>next</button>
                 </div>
              </div>

            </div>
            )}
          </div>
        );
      })}
      
      <div className=' grid md:grid-cols-7'>
      <img className='h-full w-full object-cover md:col-span-2' src={adark}/>
      <div className='md:col-span-3 m-8 md:m-2 md:mx-4 lg:m-6 xl:m-14'>
        <h1 className="font-bold mb-4 md:mb-1 lg:mb-2 xl:mb-3 lg:text-xl">ABOUT OUR FURNITURE</h1>
        <p className='leading-snug lg:leading-normal text-sm lg:text-base xl:text-lg'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your intersts and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <img className='h-full w-full object-cover md:col-span-2' src={alight}/>
    </div>

    </div>
  );
};

export default ImageSlider;