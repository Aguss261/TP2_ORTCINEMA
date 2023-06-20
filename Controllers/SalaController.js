import { Sala } from "../Models/index.js"

class SalaController {
    constructor() { }

    createSala = async (req, res, next) => {
        try {
            const { funciones, capacidadButacas } = req.body;
            const result = await Sala.create({
                funciones,
                capacidadButacas,
            });
            res.status(200).send({ success: true, message: "Sala creada con éxito" });
            if (!result) throw new Error("No se pudo crear la sala");
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

    getAllSalas = async (req, res, next) => {
        try {
            const result = await Sala.findAll({
                attributes: ["id", "funciones", "capacidadButacas"],
            });
            if (result.length === 0) {
                const error = new Error("No hay salas");
                error.status = 400;
                throw error;
            }
            res
                .status(200)
                .send({ success: true, message: "Salas encontradas", result });
        } catch (error) {
            next(error);
        }
    };

    getSalaById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await Sala.findOne({
                where: {
                    id,
                },
                attributes: ["id", "funciones", "capacidadButacas"],
            });
            if (!result) throw new Error("No se encontró la sala");
            res.status(200).send({ success: true, message: "Sala encontrada", result });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

    putSalaById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedSala = await Sala.update(req.body, {
                where: { id },
            });
            if (updatedSala[0] === 0) {
                throw new Error("No se pudo actualizar la sala");
            }
            res.status(200).send({ success: true, message: "" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

    deleteSalaById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedSala = await Sala.destroy({ where: { id } });
            if (deletedSala === 0) {
                throw new Error("No se pudo eliminar la sala");
            }
            res.status(200).send({ success: true, message: "" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
}

export default SalaController;