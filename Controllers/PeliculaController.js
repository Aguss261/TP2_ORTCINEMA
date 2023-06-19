import { Pelicula } from "../Models/index.js";

class PeliculaController {
    constructor() { }
    createPelicula = async (req, res, next) => {
        try {
            const {nombre,foto,generoId,descripcion,precio} = req.body
            const result = await Pelicula.create({
                nombre,
                foto,
                generoId,
                descripcion,
                descripcion,
                precio
            })
            res.status(200).send({success:true,message:"Pelicula creada con exito"})
            if(!result) throw new Error("No se pudo crear la pelicula")
        } catch (error) {
            res.status(400).send({success:false, message:error.message})
            
        }
    };
    getAllPeliculas = async (req,res,next) =>{
        try {
            const result = await Pelicula.findAll({
                attributes: ["id", "nombre", "foto", "generoId", "descripcion", "duracion", "precio"]
            });
            if(result.length===0){
                const error = new Error("No hay usuarios")
                error.status = 400;
                throw error
            }
            res.status(200).send({ success: true, message: "Peliculas encontradas", result });
        } catch (error) {
            next(error)
        }
    };
    getPeliculaById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await Pelicula.findOne({
                where: {
                    id,
                },
                attributes: ["id", "nombre", "foto", "generoId", "descripcion", "duracion", "precio"],
            });
            if (!result) throw new Error("no se encontro la pelicula");
            res
                .status(200)
                .send({ success: true, message: "pelicula encontrada", result });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
    putPeliculaById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedPelicula = await Pelicula.update(req.body, {
                where: { id },
            });
            if (updatedPelicula[0] === 0) {
                throw new Error("No se pudo actualizar la película");
            }
            res.status(200).send({ success: true, message: "" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
    deletePeliculaById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedPelicula = await Pelicula.destroy({ where: { id } });
            if (deletedPelicula === 0) {
                throw new Error("No se pudo eliminar la película");
            }
            res.status(200).send({ success: true, message: "" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

}

export default PeliculaController