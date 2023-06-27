import { Router } from "express";
const funcionRoutes = Router();
import FuncionController from "../Controllers/FuncionController.js"

const funcionController = new FuncionController();

funcionRoutes.get("/", funcionController.getAllFunciones);
funcionRoutes.delete("/:id", funcionController.deleteFuncionById);
funcionRoutes.post("/", funcionController.createFuncion);

export default funcionRoutes;