import React, { useEffect, useState } from "react";
import { data } from "../../assets/ShopData/Data";
const Shop = () => {
  const randomImage =
  data.images[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <div>
        {data.map((element, index) => {
         

          return (
            <div className="grid grid-cols-3" key={index}>
              <p>{element.title}</p>
              {console.log(randomImage)}
              <img className="w-full h-[400px]" src={randomImage} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
