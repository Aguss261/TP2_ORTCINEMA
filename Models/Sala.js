import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Sala extends Model { }

Sala.init(
    {
        funciones: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
        capacidadButacas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: "Sala",
    }
);

export default Sala;
