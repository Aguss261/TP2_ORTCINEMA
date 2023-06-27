import { Router } from "express";
const productoRoutes = Router();
import ProductoController from "../Controllers/ProductoController.js";

const productoController = new ProductoController();

productoRoutes.get("/", productoController.getAllProductos);
productoRoutes.get("/:id", productoController.getProductoById);
productoRoutes.post("/", productoController.createProducto);
productoRoutes.put("/:id", productoController.putProductoById);
productoRoutes.delete("/:id", productoController.deleteProductoById);
productoRoutes.put("/:tamaño", productoController.getProductosByTamanio);
productoRoutes.delete("/:categoria", productoController.getProductosByCategoria);

export default productoRoutes;
