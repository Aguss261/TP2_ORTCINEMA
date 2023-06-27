import { Router } from "express";
const reservaRoutes = Router();
import ReservaController from "../Controllers/ReservaController.js";

const reservaController = new ReservaController();

reservaRoutes.get("/", reservaController.getAllReservas);
reservaRoutes.get("/:id", reservaController.getReservaById);
reservaRoutes.post("/", reservaController.createReserva);
reservaRoutes.put("/:id", reservaController.putReservaById);
reservaRoutes.delete("/:id", reservaController.deleteReservaById);
reservaRoutes.get("/user/:userId", reservaController.getReservasByUserId);

export default reservaRoutes;
