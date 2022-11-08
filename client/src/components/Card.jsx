import React from "react";
import "../sass/Card.scss";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Card = ({ device, index, fetchProducts }) => {
  // console.log(device._id);
  const productId = device._id;

  const deleteItem = async (id) => {
    let text = `Do you really want to delete this product...?`;
    if (confirm(text) === true) {
      let result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "Delete",
      });
      result = await result.json();
      if (result) {
        alert("item is deleted");
        fetchProducts();
      }
    }
  };

  return (
    <>
      <div className="box" id={index}>
        <div className="deleteIcon" onClick={() => deleteItem(productId)}>
          <span>
            <MdDelete />
          </span>
        </div>
        <div className="updateIcon">
          <span>
            <FaEdit />
          </span>
        </div>
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
