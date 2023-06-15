import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Reserva extends Model { }

Reserva.init(
    {
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        funcionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantButacas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: "Reserva",
    }
);

export default Reserva;
