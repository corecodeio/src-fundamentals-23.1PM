const { Router } = require("express");
const router = Router();
const { run, get } = require("./../services/database");
const { patchValidator } = require('./../middlewares/validator');
// /api

router.get("/", async (req, res, next) => {
  try {
    const toDos = await get("SELECT * FROM todos", []);
    const data = toDos.map((toDo) => {
      return {
        id: toDo.id,
        title: toDo.title,
        description: toDo.description,
        isDone: Boolean(toDo.isDone),
      };
    });
    res.status(200).json({ message: "To-dos retrieved successfully", data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "el servidor tubo un error", error: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const data = await run(
      "INSERT INTO todos (title, description) VALUES (?,?)",
      [title, description]
    );
    console.log(data); // falta ubtener ID
    res.status(200).json({ message: "To-do created successfully", toDo: {} });
  } catch (error) {
    res
      .status(500)
      .json({ message: "el servidor tubo un error", error: error.message });
  }
});

router.delete("/:id", (req, res, next) => {
  console.log(req.params);
  res.status(200).json({ message: "DELETE /API" });
});

router.patch("/:id", patchValidator, async(req, res, next) => {
  try {
    const { id } = req.params;
    const resultToDo = await get(`SELECT * FROM todos WHERE id = ?`, [id])
    if (resultToDo.length === 0) {
      return res.status(404).json({ message: "no existe ese To Do" });
    }
    const { title, description, isDone } = req.body;
    console.log(isDone)
    //await run(`UPDATE todos set () WHERE id = ?`)
    res.status(200).json({ message: "PATCH /API" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "el servidor tubo un error", error: error.message });
  }
});

module.exports = router;
