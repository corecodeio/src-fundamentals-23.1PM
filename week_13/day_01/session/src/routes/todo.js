const { Router } = require("express");
const router = Router();
const { run, get } = require("./../services/database");

// /api

router.get("/", async (req, res, next) => {
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
});

router.post("/", async (req, res, next) => {
  const { title, description } = req.body;
  await run("INSERT INTO todos (title, description) VALUES (?,?)", [
    title,
    description,
  ]);

  res.status(200).json({ message: "To-do created successfully" });
});
router.delete("/", (req, res, next) => {
  res.status(200).json({ message: "DELETE /API" });
});
router.patch("/", (req, res, next) => {
  res.status(200).json({ message: "PATCH /API" });
});

module.exports = router;
