import React from "react";
import { Routes, Route } from "react-router-dom";
/* SCSS */
import "./sass/App.scss";
/* Components */
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PrivateComp from "./components/PrivateComp";
/* Pages */
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateComp />}>
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h3>Update Product</h3>} />
            <Route path="/profile" element={<h3>Profile</h3>} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
