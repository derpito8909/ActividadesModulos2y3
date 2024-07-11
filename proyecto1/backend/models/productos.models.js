/**
 * @swagger
 * components:
 *   schemas:
 *     productModel:
 *       type: object
 *       required:
 *         - nombre
 *         - precio
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *         imagen:
 *           type: string
 *           description: imagen del producto
 *         precio:
 *           type: number
 *           description: precio del producto
 *       example:
 *         nombre: The New Turing Omnibus
 *         imagen: xxxx
 *         precio: 2500
 */
import mongoose from "mongoose";

const schema = mongoose.Schema;

//extruturar como se va a guardar la informacion de los productos en nuestra DB
const productSchema = new schema({
  nombre: {
    type: String,
    require: true,
  },
  imagen: {
    type: String,
  },
  precio: {
    type: Number,
    require: true,
  },
});

//Utilizamos la plantilla de modelo -> y luego se crea la colencion
// argumentos: nombre de la coleccion
// el nombre del modelo
export const productModel = mongoose.model("producto", productSchema);
