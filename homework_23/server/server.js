import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todosRouter from "./routes/todosRoutes.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"));

app.use(express.json());
app.use(cors());

app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
