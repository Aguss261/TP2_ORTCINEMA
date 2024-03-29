import { Router } from "express";
const peliculaRoutes = Router();
import PeliculaController from "../Controllers/PeliculaController.js"

const peliculaController = new PeliculaController();

peliculaRoutes.get("/", peliculaController.getAllPeliculas);
peliculaRoutes.get("/:id", peliculaController.getPeliculaById);
peliculaRoutes.get("/genero/:generoId", peliculaController.getPeliculasByGeneroId);
peliculaRoutes.get("/nombre/:nombre", peliculaController.getPeliculasByNombre);
peliculaRoutes.post("/", peliculaController.createPelicula);
peliculaRoutes.put("/:id", peliculaController.putPeliculaById);
peliculaRoutes.delete("/:id", peliculaController.deletePeliculaById);


export default peliculaRoutes;
