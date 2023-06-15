import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model { }

User.init(
    {
        nombre: {
            type: DT.STRING,
            allowNull: false,
        },
        apellido: {
            type: DT.STRING,
            allowNull: false,
        },
        email: {
            type: DT.STRING(15),
            allowNull: false,
        },
        password: {
            type: DT.STRING,
            allowNull: false,
        },
        esAdmin: {
            type: DT.BOLEAN,
            allowNull: false,
            default: false
        }
    },
    {
        sequelize: connection,
        modelName: "User",
    }
);

export default User;
