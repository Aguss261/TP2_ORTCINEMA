import { Producto } from "../Models/index.js";

class ProductoController {
  constructor() {
  }
  createProducto = async (req, res, next) => {
    try {
      const { nombre, foto, tamaño, categoria, precio, descripcion } = req.body;
      const result = await Producto.create({nombre,foto,tamaño,categoria,precio,descripcion,});
      res.status(200).send({ success: true, message: "Producto creado con éxito" });
      if (!result) throw new Error("No se pudo crear el producto");
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  
  getAllProductos = async (req, res, next) => {
    try {
      const result = await Producto.findAll({
        attributes: ["id","nombre","foto","tamaño","categoria","precio","descripcion",
        ],
      });
      if (result.length === 0) {
        const error = new Error("No hay productos");
        error.status = 400;
        throw error;
      }
      res.status(200).send({ success: true, message: "Productos encontrados", result });
    } catch (error) {
      next(error);
    }
  };

  getProductoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Producto.findOne({
        where: {
          id,
        },
        attributes: ["id","nombre","foto","tamaño","categoria","precio","descripcion",],
      });
      if (!result) throw new Error("No se encontro el producto");
      res.status(200).send({ success: true, message: "Producto encontrado", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  putProductoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedProducto = await Producto.update(req.body, {
        where: { id },
      });
      if (updatedProducto[0] === 0) {
        throw new Error("No se pudo actualizar el producto");
      }
      res.status(200).send({ success: true, message: "" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
    
  deleteProductoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProducto = await Producto.destroy({ where: { id } });
      if (deletedProducto === 0) {
        throw new Error("No se pudo eliminar el producto");
      }
      res.status(200).send({ success: true, message: "" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  

}

getProductosByTamanio = async (req, res, next) => {
    try {
      const result = await Producto.findAll({
        where: {
          tamaño
        },
        attributes: ["id","nombre","foto","tamaño","categoria","precio","descripcion",],
      });
      if (result.length === 0) {
        const error = new Error(`No hay productos de tamaño ${tamaño}`);
        error.status = 400;
        throw error;
      }
      res.status(200).send({ success: true, message: `Productos ${tamaño} encontrados`, result });
    } catch (error) {
      next(error);
    }
  };

  getProductosByCategoria = async (req, res, next) => {
    try {
      const result = await Producto.findAll({
        where: {
          categoria
        },
        attributes: ["id","nombre","foto","tamaño","categoria","precio","descripcion",],
      });
      if (result.length === 0) {
        const error = new Error(`No hay productos de categoria ${categoria}`);
        error.status = 400;
        throw error;
      }
      res.status(200).send({ success: true, message: `Productos de cateogria ${categoria} encontrados`, result });
    } catch (error) {
      next(error);
    }
  };



export default ProductoController;
