import { Router } from "express";
import userRoutes from "../routes/userRoutes.js";
import peliculasRoutes from "../routes/peliculaRoutes.js";
import salaRoutes from "../routes/salaRoutes.js";
import generoRoutes from "../routes/generoRoutes.js";

const indexRoutes = Router();

indexRoutes.use("/users", userRoutes);
indexRoutes.use("/peliculas", peliculasRoutes);
indexRoutes.use("/salas", salaRoutes);
indexRoutes.use("/generos", generoRoutes)


export default indexRoutes;
