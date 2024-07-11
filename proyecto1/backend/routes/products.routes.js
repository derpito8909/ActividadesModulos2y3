import express from "express";
import { getProduts, postProduct, deleteProductById, putProductById } from "../controllers/products.controller.js";

//configurar el router de express
const productRouter = express.Router();

/**
 * @swagger
 * /obtenerProductos:
 *   get:
 *     summary: Get a list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              message: "Bad Request"
 */
/* primero ruta y luego que se debe hacer */
productRouter.get("/obtenerProductos", getProduts);

productRouter.post("/registarProductos", postProduct);

productRouter.delete("/eliminarProducto/:_id", deleteProductById);

productRouter.put("/actualizarProducto/:_id", putProductById);

export default productRouter;
