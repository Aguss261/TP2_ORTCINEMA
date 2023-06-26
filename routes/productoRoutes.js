import { Router } from "express";
const salaRoutes = Router();
import ProductoController from "../Controllers/ProductoController.js";

const ProductoController = new ProductoController();

salaRoutes.get("/", ProductoController.getAllProductos);
salaRoutes.get("/:id", ProductoController.getProductoById);
salaRoutes.post("/", ProductoController.createProducto);
salaRoutes.put("/:id", ProductoController.putProductoById);
salaRoutes.delete("/:id", ProductoController.deleteProductoById);
salaRoutes.put("/:tamanio", ProductoController.getProductosByTamanio);
salaRoutes.delete("/:cateogira", ProductoController.getProductosByCategoria);

export default salaRoutes;
