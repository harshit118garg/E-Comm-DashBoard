import React, { useState, useEffect } from "react";
import "../sass/Login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, pass }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      if (result.name) {
        localStorage.setItem("userData", JSON.stringify(result));
        navigate("/");
      }
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
      <h3>Login Page</h3>
      <div className="login">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter Password"
        />
        <button type="button" className="button" onClick={handleLogin}>
          Login
        </button>
        <p>
          Are you a new user....? Go to{" "}
          <span>
            <Link to="/signup">Sign UP</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
