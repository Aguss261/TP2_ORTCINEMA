import Role from "../Models/Role.js";
import User from "../Models/User.js";
import Genero from "../Models/Genero.js";
import Pelicula from "../Models/Pelicula.js"
import Funcion from "../Models/Funcion.js"
import Sala from "../Models/Sala.js"
import Reserva from "./Reserva.js";
import Producto from "./Producto.js"

Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
  as: "role",
});

Pelicula.belongsTo(Genero, {
  foreignKey: 'generoId'
});

Genero.hasMany(Pelicula, {
  foreignKey: 'generoId'
});

Funcion.belongsTo(Sala, {
  foreignKey: 'salaId',
});

Pelicula.hasMany(Funcion, {
  foreignKey: 'peliculaId',
});

Funcion.belongsTo(Pelicula, {
  foreignKey: 'peliculaId',
});

Sala.hasMany(Funcion, {
  foreignKey: 'salaId',
});

Reserva.belongsTo(User, {
  foreignKey: "userId"
});


Reserva.belongsTo(Funcion, {
  foreignKey: 'funcionId'
});

User.hasMany(Reserva, {
  foreignKey: 'reservaId'
});

Funcion.hasMany(Reserva, {
  foreignKey: 'reservaId'
});

export { User, Role, Genero, Pelicula, Sala, Reserva, Funcion, Producto };
