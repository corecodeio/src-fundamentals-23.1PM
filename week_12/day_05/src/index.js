const express = require("express");
const server = express();
const port = 4000;
const db = require("./services/db"); // []
const validadorDeProducto = require("./middlewares/validadorDeProducto");
const cors = require("cors");

server.use(cors());

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

server.patch("/api/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  const siExisteCoincidencia = db.filter((product) => product.id == id);
  if (siExisteCoincidencia.length === 0) {
    return res.status(404).json({ message: "no se encontro el producto" });
  }
  //db.slice(index,1)
  db.map((product, index) => {
    if (product.id == id) {
      product.name = name ? name : product.name;
      product.description = description;
      product.price = price;
      product.stock = stock;
    }
    return product;
  });

  res.status(201).json({
    message: "el producto fue modificado correctamentes",
    product: {
      id,
      name,
      description,
      price,
      stock,
    },
  });
});

server.delete("/api/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const siExisteCoincidencia = db.filter((product) => product.id == id); // [{}]
    if (siExisteCoincidencia.length === 0) {
      return res.status(404).json({ message: "no se encontro el producto" });
    }
    //db.slice(index,1)
    db.map((product, index) => {
      if (product.id == id) {
        db.splice(index, 1);
      }
    });
    res.status(201).json({
      message: "el producto fue eliminado.",
      product: siExisteCoincidencia[0],
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "error en el servidor",
    });
  }
});

server.listen(port, () => {
  console.log(`servidor ejecutando en el puerto ${port}`);
});
