// importaciones
import express from "express";
import dotenv from "dotenv";
import connectionMongo from "./config/db.js";

//  configuracion del servidor
const app = express();
dotenv.config();
const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Hi there, this is a request to my server");
// });
// coneccion a la base de datos
connectionMongo();

// ejecutar el servidor
app.listen(port, () => {
  console.log(`el servidor se esta escuchando en: http:// localhost:${port}`);
});
