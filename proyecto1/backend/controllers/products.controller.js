import { productModel } from "../models/productos.models.js";

export const getProduts = async (req, res) => {
  try {
    const products = await productModel.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No se encontraron productos" });
    }
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postProduct = async (req, res) => {
  const { nombre, imagen, precio } = req.body;
  if (!nombre || !imagen || !precio) {
    return res.status(400).json({ message: "Debe ingresar todos los campos requeridos, nombre y presio" });
  }
  try {
    const newProduct = await productModel.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const idForDelete = req.params._id;
    const productDeleted = await productModel.findByIdAndDelete(idForDelete);
    if (!productDeleted) {
      return res.status(404).json({ message: "lo siento! no se encontro producto para eliminar" });
    }
    return res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putProductById = async (req, res) => {
  try {
    const idForUpdate = req.params._id;
    const productUpdated = await productModel.findByIdAndUpdate(idForUpdate, req.body);
    if (!productUpdated) {
      return res.status(404).json({ message: "lo siento! no se encontro producto para modificar" });
    }
    return res.status(200).json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
