import { Router } from "express";
const userRoutes = Router();
import UserController from "../Controllers/UserController.js";

const userController = new UserController();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);
userRoutes.put("/:id", userController.putUserById)
userRoutes.delete("/:id", userController.deleteUserById)

export default userRoutes;