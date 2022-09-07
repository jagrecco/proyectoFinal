import conexion from "../config/config.js"

let id = 0;
const prods=[]  //conexion.memoria.productos;]

class ContenedorMemoria{
    constructor(coleccion){

        this.collection = prods
        
    }

    async listarTodos(){
        
        return prods;

    }

    async listarUno(idProducto){
        if (prods.length === 0) {return ({"Error" : "Archivo Vacio"})} 
        return (prods.find(el => el.id == idProducto) || { error: 'Producto no encontrado' })  
    }

    async guardarUno(objeto) {
        id ++
        let timestamp = new Date().getTime();
        objeto.id = id 
        objeto.timestamp = timestamp 
        prods.push(objeto)
        return objeto
        
    }

    async borrarUno(idProducto){

        const index = prods.findIndex(x => x.id == idProducto) 
        if (index == -1) {
          return ({ error: 'Producto no encontrado' })
        }  
        prods.splice(index, 1);
        
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
        
        return "Producto Reemplazado";

    }

}

export default ContenedorMemoria