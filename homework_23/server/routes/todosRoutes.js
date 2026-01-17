import { Router } from "express";
import Todo from "../models/todo.model.js";

const router = Router();

// READ
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// CREATE
router.post("/", async (req, res) => {
  const todo = await Todo.create({ text: req.body.text });
  res.status(201).json(todo);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const todo = await Todo.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(todo);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Todo.findOneAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
