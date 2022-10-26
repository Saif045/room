import React, { useEffect, useState } from "react";
import { data } from "../../assets/ShopData/Data";
const Shop = () => {
  return (
    <div>
      <div className="h-20 bg-black block"></div>
      <div className="m-10 text-center font-bold text-3xl">    Products 
      <div className="grid grid-cols-3 gap-6  mt-6" >
        {data.map((element, index) => {
          const randomImage =
            element.images[Math.floor(Math.random() * element.images.length)];

          return (
           
              <div className=" flex flex-col-reverse bg-slate-300 " key={index}>
              <p className=" text-xl font-semibold">{element.title}</p>
              <img className="w-full h-full object-cover object-center " src={randomImage} />
              
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Shop;
