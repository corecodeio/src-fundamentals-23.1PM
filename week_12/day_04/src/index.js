const express = require("express");
const server = express();
const port = 4000;
const db = require("./services/db");
const validadorDeProducto = require("./middlewares/validadorDeProducto");
const cors = require('cors')

server.use(cors())

server.use(express.json());

server.get("/api", (req, res, next) => {
  res
    .status(200)
    .json({ message: "aqui esta la lista de productos", data: db });
});

server.post("/api", validadorDeProducto, (req, res, next) => {
  const { name, description, price, stock } = req.body;

  const newProduct = {
    id: db.length === 0 ? 1 : db[db.length - 1].id + 1,
    name,
    description,
    price: price,
    stock: stock,
  };

  db.push(newProduct);
  res
    .status(201)
    .json({ message: "producto creado correctamente", product: newProduct });
});

server.listen(port, () => {
  console.log(`servidor ejecutando en el puerto ${port}`);
});
