import mongoose from "mongoose";
import ProdModel from "../models/productoSchema.js"
import conexion from "../config/config.js"

mongoose.connect(conexion.mongoDbCon.dbURI).then(
    () => { console.log("Conexión exitosa a Mongo")},
    err => { console.log(err)}
);


class ContenedorMongo{
    constructor(coleccion, esquema){

        this.collection=ProdModel
        
    }

    async listarTodos(){
        
        return await ProdModel.find();
        
    }

    async listarUno(idProducto){

        return await ProdModel.find({_id: idProducto});

    }

    async guardarUno(objeto) {
        const productoNuevo=ProdModel(objeto)
        await productoNuevo.save()
        return objeto;
    }

    async borrarUno(idProducto){
        const productos = await ProdModel.deleteOne({_id: idProducto});
        return productos;
    }

    async editaUno(idProducto, objeto) {
        
        return ProdModel.findOneAndUpdate(idProducto, objeto,{new: true});
        
    }

    async terminaConexion(){
        await mongoose.connection.close()
    }
}

export default ContenedorMongo