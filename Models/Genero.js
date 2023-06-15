import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Genero extends Model { }

Genero.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: "Genero",
    }
);

export default Genero;
