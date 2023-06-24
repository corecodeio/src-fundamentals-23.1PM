const express = require("express");
const server = express();
const port = 4000;

server.get("/home", (request, response, next) => {
  response.status(200).json({ message: "home" });
});

server.post("/login", (request, response, next) => {
  response.status(200).json({ message: "login" });
});

server.listen(port, () => {
  console.log(`servidor ejecutando en el puerto ${port}`);
});
