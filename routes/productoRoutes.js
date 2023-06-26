import { Router } from "express";
const productoRoutes = Router();
import ProductoController from "../Controllers/ProductoController.js";

const ProductoController = new ProductoController();

productoRoutes.get("/", ProductoController.getAllProductos);
productoRoutes.get("/:id", ProductoController.getProductoById);
productoRoutes.post("/", ProductoController.createProducto);
productoRoutes.put("/:id", ProductoController.putProductoById);
productoRoutes.delete("/:id", ProductoController.deleteProductoById);
productoRoutes.put("/:tamaño", ProductoController.getProductosByTamanio);
productoRoutes.delete("/:categoria", ProductoController.getProductosByCategoria);

export default productoRoutes;
