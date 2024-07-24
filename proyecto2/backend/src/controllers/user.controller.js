import { userModel } from "../models/user.model.js";

export const getUsers = async (req, res) => {
  return res.send("Funciona la petición GET de los usuarios");
};

export const getUserById = async (req, res) => {
  return res.send("Funciona la petición GET de los usuarios por id");
};

export const postUser = async (req, res) => {
  return res.send("Funciona la petición POST de los usuarios");
};

export const deleteUserById = async (req, res) => {
  return res.send("Funciona la petición DELETE de los usuarios por id");
};

export const putUserById = async (req, res) => {
  return res.send("Funciona la petición PUt de los usuarios");
};
