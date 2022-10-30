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
        <ul>
          <li>{auth ? <Link to="/products">All Products</Link> : null}</li>
          <li>{auth ? <Link to="/add">Add Product</Link> : null}</li>
          <li>{auth ? <Link to="/update">Update Product</Link> : null}</li>
          <li>{auth ? <Link to="/profile">Profile</Link> : null}</li>
          {auth ? (
            <li>
              <Link to="/signup" onClick={logoutUser}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
