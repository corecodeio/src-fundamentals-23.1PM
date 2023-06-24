//console.log('Hello World')
const port = 4000;
const { createServer } = require("http");

const server = createServer((request, response) => {
  const { url, method } = request;
  console.log("PATH:", url, "METHOD:", method);

  if (method === "GET" && url === "/home") {
    response.writeHead(200);
    response.write("hello ");
    response.write("world ");
    response.end();
  } else {
    response.writeHead(400);
    response.write("adios ");
    response.end();
  }
});

server.listen(port, () => {
  console.log(`servidor ejecutando en el puerto ${port}`);
});
