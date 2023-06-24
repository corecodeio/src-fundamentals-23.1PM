const express = require("express");
const server = express();
const port = 4000;
const todo = require("./middlewares/todo");

server.use(express.json());

const login = (request, response, next) => {
  const body = request.body;
  console.log(body);
  response.status(200).json({ message: "login" });
};
const middl1 = (request, response, next) => {
  console.log("1");
  next();
  //response.status(200).json({ message: "1" });
};
const middl2 = (request, response, next) => {
  console.log("2");
  next();
  //response.status(200).json({ message: "2" });
};
//server.use(middl1);
//server.use(middl2);
//server.post("/login", login);
server.post("/login", middl1, middl2, login);

server.use(todo);

server.listen(port, () => {
  console.log(`servidor ejecutando en el puerto ${port}`);
});
