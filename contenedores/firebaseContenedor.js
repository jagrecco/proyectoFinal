
import admin from "firebase-admin";
import { isProviderIdentifier } from "firebase-admin/lib/auth/identifier.js";

import conexion from "../config/config.js"

admin.initializeApp({
    credential: admin.credential.cert(conexion.firebase),
    databaseURL: "https://url-example.firebaseio.com",
});

const db = admin.firestore();
/* const query = db.collection("productos"); */

const prods=[]

class ContenedorFirebase{
    constructor(coleccion){

        this.collection = db.collection(coleccion)
        
    }

    async listarTodos(){
        
        const productos = (await this.collection.get()).docs

        productos.forEach((doc)=>{

            const dato=doc.data()
            dato.id=doc.id
            prods.push (dato)

        })
        return prods;
        
    }

    async listarUno(idProducto){

        const productos = await this.collection.doc(idProducto).get();
        
        return productos.data();
    }

    async guardarUno(objeto) {

        const res = await this.collection.add(objeto)
        /* const prodNuevo=objeto
        prodNuevo.id=res.id */
        /* const prod = this.collection.doc()
        await prod.push(objeto) */
        
        return res;
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

export default ContenedorFirebase