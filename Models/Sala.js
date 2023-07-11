import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Sala extends Model { }

Sala.init(
    {
        capacidadButacas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: "Sala",
    }
);

export default Sala;
