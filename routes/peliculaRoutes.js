import { Router } from "express";
const peliculaRoutes = Router();
import PeliculaController from "../Controllers/PeliculaController.js"

const peliculaController = new PeliculaController();


peliculaRoutes.get("/", peliculaController.getAllPeliculas)
peliculaRoutes.get("/:id", peliculaController.getPeliculaById)
peliculaRoutes.post("/", peliculaController.createPelicula)
peliculaRoutes.put("/:id", peliculaController.putPeliculaById);
peliculaRoutes.delete("/:id", peliculaController.deletePeliculaById);


export default peliculaRoutes;