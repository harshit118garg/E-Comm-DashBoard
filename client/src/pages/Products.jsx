import React, { useState, useEffect } from "react";
import devices from "../static/products1";
import "../sass/Products.scss";
import Card from "../components/Card";

const Products = () => {
  const [devicesList, setdevicesList] = useState([]);

  const fetchProducts = async () => {
    let result = await fetch(" http://localhost:5000/products", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    // console.log(result);
    setdevicesList(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h3>Product Page</h3>
      <div className="products">
        <div className="productsContainer">
          {devicesList.map((device, index) => {
            return <Card device={device} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
