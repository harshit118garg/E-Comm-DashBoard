import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sass/Nav.scss";

const Nav = () => {
  const auth = localStorage.getItem("userData");
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="../src/assets/logo.png" alt="Ur SHOP" />
        </Link>
      </div>
      <div className="nav-ul">
        {auth ? (
          <ul>
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            <li>
              <Link to="/update">Update Product</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup" onClick={logoutUser}>
                Logout ({JSON.parse(auth).name})
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
