import React from "react";

const Button = ({ texto = "default", numero, setData, value }) => {
  const operacion = () => {
    //setData es una funcion que recibe un objeto, el cual tiene que tener la misma estructura que el estado inicial
    setData({ numero: numero + value });
  };

  return <button onClick={operacion}>{texto}</button>;
};

export default Button;
