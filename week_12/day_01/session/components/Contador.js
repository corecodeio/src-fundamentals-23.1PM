import React from "react";
//contador recibe un parametro num, si no se le pasa un valor por defecto es 1000
const Contador = ({ num = 1000 }) => {
  return (
    <>
      <h1>Contador</h1>
      {/*podemos usar el parametro num en el componente*/}
      <p>numero :{num}</p>
    </>
  );
};

export default Contador;
