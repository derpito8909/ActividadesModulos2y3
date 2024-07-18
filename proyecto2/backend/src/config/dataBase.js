import mongoose from "mongoose";

export const connectionMongo = async () => {
  try {
    await mongoose.connect(process.env.URL_DATABASE);
    console.log("conexion exitosa con la base de datos");
  } catch (error) {
    console.error("error de conexion", error);
  }
};
