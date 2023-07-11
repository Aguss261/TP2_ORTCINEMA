import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt"
class User extends Model { 

    async validatePassword(passwordEnTextoPlano) {
        const hash = await bcrypt.hash(passwordEnTextoPlano, this.salt);
        return hash === this.password;
    }
    
}

User.init(
    {
        nombre: {
            type: DT.STRING,
            allowNull: false,
            validate:{
                len:[3,25]
            }
        },
        apellido: {
            type: DT.STRING,
            allowNull: false,
        },
        email: {
            type: DT.STRING(),
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: DT.STRING,
            allowNull: false,
        },
        salt: {
            type: DT.STRING(),
        },
        roleId: {
            type: DT.INTEGER(),
            defaultValue: 2,
        },
    },
    {
        sequelize: connection,
        modelName: "User",
        timestamps:false,
    }
);


User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    user.salt = salt;

    const passwordHash = await bcrypt.hash(user.password, salt);
    user.password = passwordHash;
 });

export default User;
