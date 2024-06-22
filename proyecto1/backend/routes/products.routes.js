import express from "express";
import { getProduts, postProduct, deleteProductById, putProductById } from "../controllers/products.controller.js";

//configurar el router de express
const productRouter = express.Router();

/* primero ruta y luego que se debe hacer */
productRouter.get("/obtenerProductos", getProduts);

productRouter.post("/registarProductos", postProduct);

productRouter.delete("/eliminarProducto/:_id", deleteProductById);

productRouter.put("/actualizarProducto/:_id", putProductById);

export default productRouter;
