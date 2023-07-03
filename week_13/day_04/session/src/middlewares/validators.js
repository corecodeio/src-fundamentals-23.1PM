const patchValidator = (req, res, next) => {
  const { title, description, isDone } = req.body;
  if (
    typeof title == "undefined" ||
    typeof description == "undefined" ||
    typeof isDone == "undefined"
  ) {
    return res
    .status(400)
    .json({ message: "falta informacion" });
  }
  if (typeof title !== "string") {
    return res
      .status(400)
      .json({ message: "el title debe ser de tipo string" });
  }
  if (typeof isDone !== "boolean") {
    return res
      .status(404)
      .json({ message: "isDone debe ser boolean" });
  }
  next();
};

const postValidator = (req, res, next) => {
  const { title, description } = req.body;
  if (
    typeof title == "undefined" ||
    typeof description == "undefined"
  ) {
    return res
    .status(400)
    .json({ message: "falta informacion" });
  }
  if (typeof title !== "string") {
    return res
      .status(400)
      .json({ message: "el title debe ser de tipo string" });
  }
  if (typeof description !== "string") {
    return res
      .status(400)
      .json({ message: "la descripcion debe ser de tipo string" });
  }
  next();
};

module.exports = {
  patchValidator,
  postValidator
};
