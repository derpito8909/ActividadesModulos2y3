import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log(`El puerto se esta escuchando en http://localhost:${port}`);
});
