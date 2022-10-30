import React from "react";
import "../sass/Home.scss";

const Home = () => {
  return (
    <>
      <h3>Home Page</h3>
      <div className="home">
        <div className="top">
          <img src="../src/assets/mainImg.png" alt="mainImg" />
        </div>
        <div className="bottom">
          <h4>Your One Stop Destination</h4>
          <p>Search Your Favourite Devices</p>
        </div>
      </div>
    </>
  );
};

export default Home;
