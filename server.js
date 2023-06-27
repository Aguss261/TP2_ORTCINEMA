import express from "express";
const app = express();
import indexRoutes from "../Backend/routes/indexRoutes.js"
import connection from "../Backend/connection/connection.js"
import roleSeed from "../Backend/seed/roleSeed.js"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ success: false, message: error.message });
});


await connection
  .sync({ force: false })
  .then(() => {
    app.listen(3060, () => {
      console.log("server ok http://localhost:3060");
    });
  })
  .then(roleSeed)