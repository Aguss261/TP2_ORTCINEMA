import Role from "../Models/Role.js";
import User from "../Models/User.js";
import Genero from "../Models/Genero.js";
import Pelicula from "../Models/Pelicula.js"

Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
  as: "role",
});

export { User, Role, Genero, Pelicula };
