import React, { useState, useEffect } from "react";
//componentes
import Navbar from "./Navbar";
//vistas
import Home from "./views/Home";
import News from "./views/News";
import Docs from "./views/Docs";

const Day2 = () => {
  const [status, setStatus] = useState("home");
  const [open, setOpen] = useState(false);
  //siempre que alla un cambio
  useEffect(() => {
    console.log("cambio algo");
  });
  useEffect(() => {
    console.log("solo se ejecuta cuando open cambia");
  }, [open]);
  return (
    <div>
      <Navbar setStatus={setStatus} />
      <h1>{status}</h1>
      {/* {status === 'home'? <Home/>: status === 'news'? <News/>: <Docs/>} */}
      {status === "home" && <Home />}
      {status === "news" && <News />}
      {status === "docs" && <Docs />}
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Cerrar" : "Abrir"}
      </button>
    </div>
  );
};

export default Day2;
