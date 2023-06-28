import { Router } from "express";
const funcionRoutes = Router();
import FuncionController from "../Controllers/FuncionController.js"

const funcionController = new FuncionController();

funcionRoutes.get("/", funcionController.getAllFunciones);
funcionRoutes.delete("/:id", funcionController.deleteFuncionById);
funcionRoutes.post("/", funcionController.createFuncion);
funcionRoutes.get("/:id", funcionController.getFuncionById);
funcionRoutes.get("/fecha/:fecha", funcionController.getFuncionByFecha);
funcionRoutes.get("/pelicula/:peliculaId", funcionController.getFuncionByPeliculaId);
funcionRoutes.put("/:id/butacasDisponibles", funcionController.updateButacasDisponibles);
export default funcionRoutes;