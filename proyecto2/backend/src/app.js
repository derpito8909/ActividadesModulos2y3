import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionMongo } from "./config/dataBase.js";
import userRouter from "./routers/user.router.js";
import adminRouter from "./routers/admin.router.js";

const app = express();
dotenv.config();

connectionMongo();

app.use(cors());

app.use("/users", userRouter);
app.use("/admin", adminRouter);

const port = process.env.PORT ? process.env.PORT : 6000;
app.listen(port, () => {
  console.log(`El puerto se esta escuchando en http://localhost:${port}`);
});
