import { Router } from "express";
import { getUserById, getUsers, postUser, putUserById, deleteUserById } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/:_id", getUserById);

userRouter.get("/", getUsers);

userRouter.post("/", postUser);

userRouter.put("/:_id", putUserById);

userRouter.delete("/:_id", deleteUserById);

export default userRouter;
