import React, { useEffect, useState } from "react";

const Docs = () => {
  const [images, setImages] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [search, setSearch] = useState("");
  const getImages = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const resultJson = await result.json();
    setImages(resultJson);
  };

  useEffect(() => {
    getImages();
  }, []);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const newResults = images.filter((img) => img.title.startsWith(search));
    setResultList(newResults);
  };
  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <h1>Buscar por title</h1>
        <input value={search} onChange={handlerSearch} />
        <button type="submit">Buscar</button>
      </form>
      <br />
      <h2>Resultado:</h2>
      {resultList.map((img) => {
        return (
          <div key={img.id}>
            <h3>{img.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Docs;