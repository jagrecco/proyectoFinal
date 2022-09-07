
import admin from "firebase-admin";
/* import { isProviderIdentifier } from "firebase-admin/lib/auth/identifier.js"; */

import conexion from "../config/config.js"

admin.initializeApp({
    credential: admin.credential.cert(conexion.firebase),
    databaseURL: "https://url-example.firebaseio.com",
});

const db = admin.firestore();
/* const query = db.collection("productos"); */ // este era el error al guardar

const prods=[]

class ContenedorFirebase{
    constructor(coleccion){

        this.collection = db.collection(coleccion)
        
    }

    async listarTodos(){
        try {

            const productos = (await this.collection.get()).docs
    
            productos.forEach((doc)=>{
    
                const dato=doc.data()
                dato.id=doc.id
                prods.push (dato)
    
            })
            return prods;
        }
        catch (error) {
            console.log("Error al acceder a productos " + error)
        }
        
    }

    async listarUno(idProducto){
        try{
            const productos = await this.collection.doc(idProducto).get();
            return productos.data();

        }
        catch(error){
            console.log("Error al acceder a productos " + error)
        }
    }

    async guardarUno(objeto) {
        try {

            const res = await this.collection.add(objeto)
            objeto.id=res.id
            return objeto;

        }
        catch (error) {
            console.log("Error al guardar " + error);
        }
        
    }

    async borrarUno(idProducto){

        try {
            const res = await this.collection.doc(idProducto).delete();
            return res;
        }
        catch(error) {
            console.log(`Error al eliminar ${idProducto} ` + error)
        }

    }

    async editaUno(idProducto, objeto) {
        
        try {
            const res = await this.collection.doc(idProducto).update(objeto);
            return res;
        }
        catch(error) {
            console.log(`Error al editar ${idProducto} ` + error)
        }
        
    }

    async terminaConexion(){
        /* await mongoose.connection.close() */
    }
}

export default ContenedorFirebase