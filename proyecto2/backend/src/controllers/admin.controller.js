import { adminModel } from "../models/admin.model.js";

export const getAdmin = async (req, res) => {
  try {
    const admins = await adminModel.find();
    if (admins.length === 0) {
      return res.status(404).json({
        estado: "404",
        mensaje: "no se encontraron administradores",
        datos: admins,
      });
    }
    return res.status(200).send(admins);
  } catch (error) {
    return res.status(500).json({
      estado: "500",
      mensaje: error.message,
    });
  }
};

export const postAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newAdmin = await adminModel.create({
      name,
      email,
      password,
      adminCategory: true,
    });
    return res.status(201).json({
      estado: "201",
      mensaje: "Administrador creado corectamente",
      datos: newAdmin,
    });
  } catch (error) {
    return res.status(400).json({
      estado: "400",
      mensaje: error.mensaje,
      datos: error,
    });
  }
};

export const deleteAdminById = async (req, res) => {
  return res.send("Funciona la petición DELETE de los admin");
};
