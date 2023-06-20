import { Router } from "express";
const salaRoutes = Router();
import SalaController from "../Controllers/SalaController.js";

const salaController = new SalaController();

salaRoutes.get("/", salaController.getAllSalas);
salaRoutes.get("/:id", salaController.getSalaById);
salaRoutes.post("/", salaController.createSala);
salaRoutes.put("/:id", salaController.putSalaById);
salaRoutes.delete("/:id", salaController.deleteSalaById);

export default salaRoutes;
