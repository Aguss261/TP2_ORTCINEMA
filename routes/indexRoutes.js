import { Router } from "express";
import userRoutes from "../routes/userRoutes.js";
import peliculasRoutes from "../routes/peliculaRoutes.js"

const indexRoutes = Router();

indexRoutes.use("/users", userRoutes);
indexRoutes.use("/peliculas", peliculasRoutes)

export default indexRoutes;
