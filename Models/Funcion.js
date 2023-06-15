import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Funcion extends Model { }

Funcion.init(
    {
        fecha: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        butacasDisponibles: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        salaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        peliculaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: "Funcion",
    }
);

export default Funcion;
