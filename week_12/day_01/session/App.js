import { useState } from "react";
import "./App.css";
//importamos el componente contador
import Contador from "./components/Contador";
//importamos el componente button
import Button from "./components/Button";

function App() {
  //usestate tiene 2 parametros, el primero es el valor inicial y el segundo es una funcion que se encarga de cambiar el valor de la variable
  const [data, setData] = useState({
    numero: 0,
  });
  return (
    <div className="App">
      {/*podemos pasar informacion a los compoenentes hijos mediante props*/}
      <Contador num={data.numero} />
      {/*podemos pasar funciones a los compoenentes hijos mediante props*/}
      <Button numero={data.numero} value={1} texto="sumar" setData={setData} />
      <Button
        numero={data.numero}
        value={-1}
        texto="restar"
        setData={setData}
      />
      <Button
        numero={data.numero}
        value={2}
        texto="sumar + 2"
        setData={setData}
      />
      <Button
        numero={data.numero}
        value={-3}
        texto="restar - 3"
        setData={setData}
      />
    </div>
  );
}

export default App;
