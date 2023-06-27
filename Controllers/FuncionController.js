import { Funcion, Pelicula } from "../Models/index.js";

class FuncionController {
    constructor() { }
    getAllFunciones = async (req, res, next) => {
        try {
            const result = await Funcion.findAll({
                attributes: ["fecha", "butacasDisponibles", "duracion", "salaId", "peliculaId"]
            });
            if (result.length === 0) {
                const error = new Error("No hay funciones")
                error.status = 400;
                throw error
            }
            res.status(200).send({ success: true, message: "Funciones encontradas", result });
        } catch (error) {
            next(error)
        }
    };
    deleteFuncionById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedFuncion = await Funcion.destroy({ where: { id } });
            if (deletedFuncion === 0) {
                throw new Error("No se pudo eliminar la funcion");
            }
            res.status(200).send({ success: true, message: "" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
    createFuncion = async (req, res, next) => {
        try {
            const { fecha, butacasDisponibles, duracion, salaId, peliculaId } = req.body
    
            const sala = await Sala.findByPk(salaId);
            console.log("sala", sala)
            if (!sala) {
                throw new Error("La sala no existe.")
            }

            const pelicula = await Pelicula.findByPk(peliculaId);
            console.log("pelicula", pelicula)
            if (!pelicula) {
                throw new Error("La película no existe en la base de datos.")
            }               
    
            const result = await Funcion.create({
                fecha, 
                butacasDisponibles,
                duracion, 
                salaId, 
                peliculaId
            })
    
            if (!result) {
                throw new Error("No se pudo crear la función")
            }
    
            res.status(200).send({ success: true, message: "Función creada con éxito" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
};

export default FuncionController