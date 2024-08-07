// importaciones
import express from "express";
import dotenv from "dotenv";
import connectionMongo from "./config/db.js";
import productRouter from "./routes/products.routes.js";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

//  configuracion del servidor
const app = express();
dotenv.config();
const port = process.env.PORT;

// coneccion a la base de datos
connectionMongo();

//middleware -> intermediario entre el servidor y las pediciones
app.use(express.json());
app.use(cors());
// Serve Swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec, { explorer: true }));

app.use("/", productRouter);
// ejecutar el servidor
app.listen(port, () => {
  console.log(`el servidor se esta escuchando en: http:// localhost:${port}`);
});
