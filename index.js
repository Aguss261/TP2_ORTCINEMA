import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3001;

//sistema prototipo
const listaUsuarios = [];

app.post("/login", (req, res) => {
  // simulo traer un usuario de la base de datos
  // este prototipo es monousuario para este ejemplo
console.log(req);
const listaUsuarios = [
    { name: "Marcelo", mail: "m@m.com", pass: "123" },
    { name: "María", mail: "maria@m.com", pass: "123" },
];
let index = listaUsuarios.findIndex(
    (registro) => registro.mail == req.body.mail
);
if (req.body && index != -1 && req.body.pass == listaUsuarios[index].pass) {
    console.log("Envia respuesta con nombre");
    res.status(200).json({ nombre: listaUsuarios[index].name });
} else {
    console.log("Envía error");
    res.sendStatus(400);
}
});

app.post("/register", (req, res) => {
listaUsuarios.push(req.body);

console.log(listaUsuarios);
  // const usuario = { email : 'test@test.com' , password : '123456'};
  // if ( req.body && req.body.email == usuario.email && req.body.password == usuario.password ) {
  //   res.sendStatus(200);
  // } else {
  //   res.sendStatus(400);
  // }
});

// simulo una base de datos en memoria
// vendedores

const lista = [
{ codigo: 100, nombre: "Maria" },
{ codigo: 101, nombre: "Juan" },
];

app.get("/users", (req, res) => {
  // CONSULTA A BASE DE DATOS
res.json(lista);
});

app.get("/", (req, res) => {
res.send("Servidor funcionando");
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});
