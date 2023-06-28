import { Genero } from "../Models/index.js";

class GeneroController {
    constructor() { }
    createGenero = async (req, res, next) => {
        try {
            const {nombre} = req.body
            const result = await Genero.create({
                nombre
            })
            res.status(200).send({success:true,message:"Genero creado con exito"})
            if(!result) throw new Error("No se pudo crear el genero")
        } catch (error) {
            res.status(400).send({success:false, message:error.message})
            
        }
    };
    getAllGeneros = async (req,res,next) =>{
        try {
            const result = await Genero.findAll({
                attributes: ["id", "nombre"]
            });
            if(result.length===0){
                const error = new Error("No hay generos")
                error.status = 400;
                throw error
            }
            res.status(200).send({ success: true, message: "Generos encontrados", result });
        } catch (error) {
            next(error)
        }
    };
    getGeneroById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await Genero.findOne({
                where: {
                    id,
                },
                attributes: ["id", "nombre"],
            });
            if (!result) throw new Error("no se encontro el genero");
            res
                .status(200)
                .send({ success: true, message: "genero encontrado", result });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
    putGeneroById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedGenero = await Genero.update(req.body, {
                where: { id },
            });
            if (updatedGenero[0] === 0) {
                throw new Error("No se pudo actualizar el genero");
            }
            res.status(200).send({ success: true, message: "Genero modificado con exito" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };
    deleteGeneroById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedGenero = await Genero.destroy({ where: { id } });
            if (deletedGenero === 0) {
                throw new Error("No se pudo eliminar el genero");
            }
            res.status(200).send({ success: true, message: "Genero eliminado con exito" });
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    };

}

export default GeneroController