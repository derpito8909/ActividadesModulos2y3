import mongoose from "mongoose";
import { userModel } from "./user.model.js";

const adminSchema = new mongoose.Schema({
  adminCategory: {
    type: Boolean,
    required: true,
    default: true,
  },
});
export const adminModel = userModel.discriminator("admin", adminSchema);
