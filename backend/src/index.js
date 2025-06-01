import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import clientRouter from "./Router/clientRouter.js"


const app = express();
app.use(cors());
app.use(express.json());

console.log("PORT from env:", process.env.PORT);
app.get("/", (req, res) => {
  res.json({ name: "enna" });
});

app.use("/api", clientRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server UP", PORT);
});
