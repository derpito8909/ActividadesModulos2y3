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
export const productModel = mongoose.model("usuario", productSchema);
