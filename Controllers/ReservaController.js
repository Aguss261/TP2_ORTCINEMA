import { Reserva } from "../Models/index.js";

class ReservaController {
  constructor() {}

  createReserva = async (req, res, next) => {
    try {
      const { userId, funcionId, cantButacas } = req.body;
      const result = await Reserva.create({
        userId,
        funcionId,
        cantButacas,
      });
      res
        .status(200)
        .send({ success: true, message: "Reserva creada con éxito" });
      if (!result) throw new Error("No se pudo crear la reserva");
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllReservas = async (req, res, next) => {
    try {
      const result = await Reserva.findAll({
        attributes: ["id", "userId", "funcionId", "cantButacas"],
      });
      if (result.length === 0) {
        const error = new Error("No hay reservas");
        error.status = 400;
        throw error;
      }
      res
        .status(200)
        .send({ success: true, message: "Reservas encontradas", result });
    } catch (error) {
      next(error);
    }
  };

  getReservaById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Reserva.findOne({
        where: {
          id,
        },
        attributes: ["id", "userId", "funcionId", "cantButacas"],
      });
      if (!result) throw new Error("No se encontró la reserva");
      res
        .status(200)
        .send({ success: true, message: "Reserva encontrada", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getReservasByUserId = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await Reserva.findAll({
        where: {
          userId,
        },
        attributes: ["id", "userId", "funcionId", "cantButacas"],
      });
      if (!result || result.length === 0) {
        throw new Error("No se encontraron reservas para el userId proporcionado");
      }
      res.status(200).send({ success: true, message: "Reservas encontradas", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  

  putReservaById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedReserva = await Reserva.update(req.body, {
        where: { id },
      });
      if (updatedReserva[0] === 0) {
        throw new Error("No se pudo actualizar la reserva");
      }
      res.status(200).send({ success: true, message: "" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteReservaById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedReserva = await Reserva.destroy({ where: { id } });
      if (deletedReserva === 0) {
        throw new Error("No se pudo eliminar la reserva");
      }
      res.status(200).send({ success: true, message: "" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ReservaController;
