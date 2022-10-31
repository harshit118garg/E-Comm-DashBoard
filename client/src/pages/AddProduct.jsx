import React, { useState } from "react";
import "../sass/AddProduct.scss";

const AddProduct = () => {
  const types = [
    "Please choose the product type",
    "mobile",
    "tablet",
    "smartwatch",
    "accessories",
  ];
  const deviceBrand = [
    "Please choose device brand",
    "APPLE",
    "GOOGLE",
    "SAMSUNG",
    "REDMI",
    "VIVO",
    "ONE PLUS",
    "iQOO",
    "MOTOROLA",
    "OPPO",
    "DELL",
  ];

  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [category, setCategory] = useState(types[0]);
  const [brand, setBrand] = useState(deviceBrand[0]);
  const [imgUrl, setImgUrl] = useState("");

  const handleProductAdd = async (e) => {
    e.preventDefault();

    console.log(`name -> ${name}`);
    console.log(`price -> ${price}`);
    console.log(`category -> ${category}`);
    console.log(`brand -> ${brand}`);
    console.log(`image Url -> ${imgUrl}`);
  };

  return (
    <>
      <h3>Add Product</h3>
      <div className="addProduct">
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          {types.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {deviceBrand.map((deviceBrandName, index) => {
            return <option key={index}>{deviceBrandName}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Enter Product Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button type="button" className="button" onClick={handleProductAdd}>
          Add Product
        </button>
      </div>
    </>
  );
};

export default AddProduct;
