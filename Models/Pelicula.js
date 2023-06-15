import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Pelicula extends Model { }

Pelicula.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        generoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: "Pelicula",
    }
);

export default Pelicula;
