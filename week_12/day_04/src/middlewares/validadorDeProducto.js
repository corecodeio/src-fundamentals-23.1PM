const validadorDeProducto = (request, response, next) => {
  const { name, description, price, stock } = request.body;
  if (!name || !description) {
    return response.status(206).json({
      message: "faltan datos",
    });
  }
  if ((price) <= 0) {
    return response.status(206).json({
      message: "el precio debe ser mayor que 0",
    });
  }
  if ((stock) <= 0) {
    return response.status(206).json({
      message: "el stock debe ser mayor que 0",
    });
  }
  next();
};

module.exports = validadorDeProducto;
