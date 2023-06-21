import React, { useState, useEffect } from "react";

const ListaDeUsuario = () => {
  //usestate tiene 2 parametros, el primero es el valor inicial y el segundo es una funcion que se encarga de cambiar el valor de la variable
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  //async await es una forma de trabajar con promesas
  const getList = async () => {
    //fetch es una funcion que recibe una url y devuelve una promesa
    const result = await fetch(`https://reqres.in/api/users?page=${page}`);
    //result.json() es una funcion que devuelve una promesa
    const resultJson = await result.json();
    //mostremos el resultado en consola
    console.log(resultJson.data);
    //cambiamos el valor de la variable users
    setUsers(resultJson.data);
  };
  //useeffect se ejecuta cada vez que se renderiza el componente
  useEffect(() => {
    getList();
  }, [page]);

  const back = () => {
    setPage(page - 1);
  };
  const next = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <h1>Lista de usuario</h1>
      <h2>{page}</h2>
      <button onClick={back}>back</button>
      <button onClick={next}>next</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.first_name}</h3>
            <h3>{user.last_name}</h3>
            <img src={user.avatar} alt="avatar" />
          </div>
        );
      })}
    </div>
  );
};

export default ListaDeUsuario;
