import React, { useEffect, useState } from "react";
import { options } from "../../api/apiconfig";
import axios from "axios";

const Shop = () => {
  const [furniture, setfurniture] = useState([]);

  useEffect(() => {
    const categoryReq = axios
      .request(options)
      .then(function (response) {
        setfurniture(response.data.payload.categories[16]);
      })
      .catch(function (error) {
        console.error(error);
      });
    categoryReq;
  }, []);


  console.log(furniture);

  return <div>Shop</div>;
};

export default Shop;
