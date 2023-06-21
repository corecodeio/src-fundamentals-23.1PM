import React, { useState } from "react";

const Login = ({ setSession }) => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log("registrando...");
    console.log("email:", email);
    console.log("password:", password);
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ email, password }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    if (responseJson.token) {
      setSession({
        email,
        isAuth: true,
        token: responseJson.token,
      });
    }
  };
  const handlerName = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <label>email</label>
      <input type="text" value={email} onChange={handlerName} />
      <label>password</label>
      <input type="text" value={password} onChange={handlerPassword} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
