import React, { useState } from "react";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("registrando...");
    console.log("email:", email);
    console.log("password:", password);
    setEmail("");
    setPassword("");
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
      <input type="password" value={password} onChange={handlerPassword} />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Formulario;
