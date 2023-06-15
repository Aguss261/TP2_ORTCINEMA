import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ success: false, message: error.message });
});
