import { adminModel } from "../models/admin.model.js";

export const getAdmin = async (req, res) => {
  return res.send("Funciona la petición GET de los admin");
};

export const postAdmin = async (req, res) => {
  return res.send("Funciona la petición POST de los admin");
};

export const deleteAdminById = async (req, res) => {
  return res.send("Funciona la petición DELETE de los admin");
};
