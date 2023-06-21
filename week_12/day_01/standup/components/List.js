import { useState } from "react";
import Item from "./Item";

const List = () => {
  //usestate tiene 2 parametros, el primero es el valor inicial y el segundo es una funcion que se encarga de cambiar el valor de la variable
  const [list, setList] = useState([
    { id: 1, name: "leonardo", age: 25 }, //0
    { id: 2, name: "juan", age: 34 }, //1
    { id: 3, name: "tomas", age: 19 }, //2
  ]);

  const handlerAgregar = () => {
    console.log("agregar");
    //setList es una funcion que recibe un array y cambia el valor de la variable list
    setList([
      ...list,
      { id: list[list.length - 1].id + 1, name: "jose", age: 34 },
    ]);
  };

  return (
    <div>
      <h1>List</h1>
      {list.map((item) => {
        //item es un objeto
        //retornamos el componente Item y le pasamos como props data, list y setList
        return <Item key={item.id} data={item} list={list} setList={setList} />;
      })}
      <button onClick={handlerAgregar}>Agregar Item</button>
    </div>
  );
};

export default List;
