import { useState } from "react";
import "./App.css";
import List from "./components/List";
import ListaDeUsuario from "./components/ListaDeUsuario";
import Formulario from "./components/Formulario";
import Main from "./components/Main";
import Day2 from "./components/Day2";

function App() {
  // nuestro estado inicial es un booleano
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    //cambiamos el valor del estado por su valor contrario
    setOpen(!open);
  };
  return (
    <div className="App">
      <Day2 />
      <Main />
      <Formulario />
      <button onClick={changeOpen}>cambio</button>
      {/*si el estado es true, se renderiza el componente ListaDeUsuario, si es false no se renderiza*/}
      {open && <ListaDeUsuario />}
      <List />
    </div>
  );
}

export default App;
