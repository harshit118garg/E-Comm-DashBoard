import React from "react";
import "../sass/Card.scss";

const Card = ({device, index}) => {
  return (
    <>
      <div className="box" id={index}>
        <div className="image">
          <img src={device.image} alt={device.name} />
        </div>
        <div className="content">
            <p>{device.name}</p>
            <p>{device.price}</p>
        </div>
        <div className="subContent">
          <h4>{device.brand}</h4>
          <h5>{device.category}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
