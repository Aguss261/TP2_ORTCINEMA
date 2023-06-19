import { Router } from "express";
const generoRoutes = Router();
import GeneroController from "../Controllers/GeneroController.js"

const generoController = new GeneroController();


generoRoutes.get("/", generoController.getAllGeneros)
generoRoutes.get("/:id", generoController.getGeneroById)
generoRoutes.post("/", generoController.createGenero)
generoRoutes.put("/:id", generoController.putGeneroById);
generoRoutes.delete("/:id", generoController.deleteGeneroById);


export default generoRoutes;
