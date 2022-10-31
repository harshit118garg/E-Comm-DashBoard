import React, { useState, useEffect } from "react";
import "../sass/SignUp.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({ name, email, pass }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      // console.log(result);
      localStorage.setItem("userData", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      console.log(`something viscious happened -> ${error}`);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("userData");
    if (auth) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <h3>Register</h3>
      <div className="signup">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="button" className="button" onClick={handleSubmit}>
          Sign Up
        </button>
        <p>
          Already an existing user....? Go to{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUp;
