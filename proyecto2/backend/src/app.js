import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionMongo } from "./config/dataBase.js";

const app = express();
dotenv.config();

connectionMongo();

app.use(cors());

const port = process.env.PORT ? process.env.PORT : 6000;
app.listen(port, () => {
  console.log(`El puerto se esta escuchando en http://localhost:${port}`);
});
