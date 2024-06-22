import { productModel } from "../models/productos.models.js";

export const getProduts = async (req, res) => {
  return res.send("funciona la peticion get");
};

export const postProduct = async (req, res) => {
  return res.send("funciona la peticion post");
};

export const deleteProductById = async (req, res) => {
  return res.send("funciona la peticion delete");
};

export const putProductById = async (req, res) => {
  return res.send("funciona la peticion put");
};
