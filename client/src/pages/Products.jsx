import React, { useEffect } from "react";
import devices from "../static/products1";
import "../sass/Products.scss";
import Card from "../components/Card";

const Products = () => {
  //   const fetchProducts = () => {
  //     console.log(devices);
  //   }

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  return (
    <>
      <h3>Product Page</h3>
      <div className="products">
        <div className="productsContainer">
          {devices.map((device, index) => {
            return <Card device={device} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
