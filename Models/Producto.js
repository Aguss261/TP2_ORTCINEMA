import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Producto extends Model { }

Producto.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tamanio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize: connection,
        modelName: "Producto",
    }
);

export default Producto;
