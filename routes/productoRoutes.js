import { Router } from "express";
const productoRoutes = Router();
import ProductoController from "../Controllers/ProductoController.js";

const productoController = new ProductoController();

productoRoutes.get("/tamanio/:tamanio", productoController.getProductosByTamanio);
productoRoutes.get("/", productoController.getAllProductos);
productoRoutes.get("/:id", productoController.getProductoById);
productoRoutes.post("/", productoController.createProducto);
productoRoutes.put("/:id", productoController.putProductoById);
productoRoutes.delete("/:id", productoController.deleteProductoById);
productoRoutes.get("/categoria/:categoria", productoController.getProductosByCategoria);

export default productoRoutes;
