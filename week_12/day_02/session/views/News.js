import React, { useState } from "react";

const News = () => {
  const [email, setEmail] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(`se a suscribió ${email}`);
  };
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <h2>ingresa un email</h2>
      <input value={email} onChange={handlerEmail} />
      <button>suscribir</button>
    </form>
  );
};

export default News;
