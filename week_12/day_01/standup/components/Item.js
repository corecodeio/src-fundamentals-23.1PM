import React from "react";

const Item = ({ data, list, setList }) => {
  //destructuring
  const { name, age, id } = data; // id:1
  const handlerEliminar = () => {
    console.log("eliminado a", name);
    //filter es una funcion que recibe una funcion como parametro
    let newList = [...list];
    newList = newList.filter((item) => item.id !== id); //pasa todo menos el id 1
    setList(newList);//setea la nueva lista
  };
  
  // let array = [1,2,3,4,5,6,7,8,9,10] //7
  // array = array.filter((numero)=> numero !== 7)//1,2,3,4,5,6,8,9,10
  // console.log(array)

  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h3>ID: {id}</h3>
      <button onClick={handlerEliminar}>{`Eliminar elemento: ${name}`}</button>
    </div>
  );
};

export default Item;
