/* const fs = require("fs") */
import fs from "fs";
import conexion from "../config/config.js"

const ruta=conexion.archivo.ruta + "/productos.json";

let id = 0;
let prods=[]

class ContenedorArchivo{
    constructor(coleccion){

        this.collection = prods
        
    }

    async listarTodos(){
        
        leedata();
        return prods;

    }

    async listarUno(idProducto){
        leedata();
        if (prods.length === 0) {return ({"Error" : "Archivo Vacio"})} 
        return (prods.find(el => el.id == idProducto) || { error: 'Producto no encontrado' })  
    }

    async guardarUno(objeto) {

        id ++;
        const timestamp = new Date().getTime();
        objeto.id = id;
        objeto.timestamp = timestamp;
        prods.push(objeto);
        persiste(prods);
        return objeto;
            

    }

    async borrarUno(idProducto){

        const index = prods.findIndex(x => x.id == idProducto);

        if (index == -1) {
          return ({ error: 'Producto no encontrado' });
        }  
        prods.splice(index, 1);

        persiste(prods);

        return "Producto Eliminado"

    }

    async editaUno(idProducto, objeto) {

        const index = prods.findIndex(x => x.id == idProducto)
        if (index == -1) {
            return ({ error: 'Producto no encontrado' });
        }  
        objeto.id = idProducto;
        objeto.timestamp = prods[index].timestamp;
        prods[index] = objeto;
        
        persiste(prods);

        return "Producto Reemplazado";

    }

}

const persiste = async()=>{

    try {
  
      await fs.promises.writeFile(ruta, JSON.stringify(prods, null, 2))
      
    }
    catch(error){
      console.log(`Problemas al acceder al archivo ` + error)
    }
}
  

const leedata = async()=>{
    
    try {
      prods = JSON.parse(await fs.promises.readFile(ruta,"utf-8"), null, 2) //*
      id=prods[length-1].id
    }
    catch (error) {
      console.log("Archivo de productos no encontrado " + error);
    }
  }

export default ContenedorArchivo