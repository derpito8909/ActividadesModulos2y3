import mongoose from "mongoose";
import { userModel } from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length === 0) {
      return res.status(404).json({
        estado: "404",
        mensaje: "no se encontraron usuarios",
        datos: users,
      });
    }
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).json({
      estado: "500",
      mensaje: error,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const idForGet = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(idForGet)) {
      return res.status(400).json({
        estado: "400",
        mensaje: "digite un id correcto del usuario",
      });
    }
    const users = await userModel.findById(idForGet);
    if (!users) {
      return res.status(404).json({
        estado: "404",
        mensaje: "no se encontro el usuario",
        datos: users,
      });
    }
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).json({
      estado: "500",
      mensaje: error,
    });
  }
};

export const postUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    return res.status(201).json({
      estado: "201",
      mensaje: "Usuario creado corectamente",
      datos: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      estado: "500",
      mensaje: error,
    });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const idForDelete = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(idForDelete)) {
      return res.status(400).json({
        estado: "400",
        mensaje: "digite un id correcto del usuario",
      });
    }
    const userDeleted = await userModel.findByIdAndDelete(idForDelete);

    if (!userDeleted) {
      return res.status(404).json({
        mensaje: "lo siento! no se encontro usuario para eliminar",
      });
    }
    return res.status(200).json({
      estado: "200",
      mensaje: "Usuario eliminado corectamente",
    });
  } catch (error) {
    return res.status(500).json({
      estado: "500",
      mensaje: error,
    });
  }
};

export const putUserById = async (req, res) => {
  try {
    const idForUpdate = req.params._id;
    if (!mongoose.Types.ObjectId.isValid(idForUpdate)) {
      return res.status(400).json({
        estado: "400",
        mensaje: "digite un id correcto del usuario",
      });
    }
    const dataForUpdate = req.body;
    if (Object.keys(dataForUpdate).length === 0) {
      return res.status(400).json({
        estado: "400",
        mensaje: "no existen datos para actualizar",
      });
    }
    const userUpdated = await userModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
    console.log(userUpdated);
    if (!userUpdated) {
      return res.status(404).json({
        mensaje: "lo siento! no se encontro usuario para actualizar",
      });
    }
    return res.status(200).json({
      estado: "200",
      mensaje: "Usuario actualizado corectamente",
    });
  } catch (error) {
    return res.status(500).json({
      estado: "500",
      mensaje: error.message,
    });
  }
};
