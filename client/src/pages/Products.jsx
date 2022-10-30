import React, { useEffect } from "react";
import devices from "../static/products1";
import '../sass/Products.scss';

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
                return (
                    <>
                        <div className="box" id={index}>
                            <div className="image">
                                <img src={device.image} alt={device.name} />
                            </div>
                            <div className="content">
                                <div className="left">
                                    <p>{device.name}</p>
                                </div>
                                <div className="right">
                                    <p>{device.price}</p>
                                </div>
                            </div>
                            <div className="subContent">
                                <h4>{device.brand}</h4>
                                <h5>{device.category}</h5>
                            </div>
                        </div>
                    </>
                )
            })}
          {/* <div className="box">
            <div className="image">
              <img
                src="https://www.91-img.com/gallery_images_uploads/5/a/5ae6aaee7b1ba200e6b58f03388cade2db4d337c.jpg?w=0&h=901&q=80&c=1"
                alt="Google Pixel 7 Pro 5G"
              />
            </div>
            <div className="content">
              <div className="left">
                <p>Google Pixel 7 Pro 5G</p>
              </div>
              <div className="right">
                <p>Rs.84,999</p>
              </div>
            </div>
            <div className="subContent">
              <h4>GOOGLE</h4>
              <h5>mobile</h5>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src="https://www.91-img.com/gallery_images_uploads/5/a/5ae6aaee7b1ba200e6b58f03388cade2db4d337c.jpg?w=0&h=901&q=80&c=1"
                alt="Google Pixel 7 Pro 5G"
              />
            </div>
            <div className="content">
              <div className="left">
                <p>Google Pixel 7 Pro 5G</p>
              </div>
              <div className="right">
                <p>Rs.84,999</p>
              </div>
            </div>
            <div className="subContent">
              <h4>GOOGLE</h4>
              <h5>mobile</h5>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src="https://www.91-img.com/gallery_images_uploads/5/a/5ae6aaee7b1ba200e6b58f03388cade2db4d337c.jpg?w=0&h=901&q=80&c=1"
                alt="Google Pixel 7 Pro 5G"
              />
            </div>
            <div className="content">
              <div className="left">
                <p>Google Pixel 7 Pro 5G</p>
              </div>
              <div className="right">
                <p>Rs.84,999</p>
              </div>
            </div>
            <div className="subContent">
              <h4>GOOGLE</h4>
              <h5>mobile</h5>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src="https://www.91-img.com/gallery_images_uploads/5/a/5ae6aaee7b1ba200e6b58f03388cade2db4d337c.jpg?w=0&h=901&q=80&c=1"
                alt="Google Pixel 7 Pro 5G"
              />
            </div>
            <div className="content">
              <div className="left">
                <p>Google Pixel 7 Pro 5G</p>
              </div>
              <div className="right">
                <p>Rs.84,999</p>
              </div>
            </div>
            <div className="subContent">
              <h4>GOOGLE</h4>
              <h5>mobile</h5>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Products;
