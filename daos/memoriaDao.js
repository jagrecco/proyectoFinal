import ContenedorMemoria from "../contenedores/memoriaContenedor.js"
import conexion from "../config/config.js"

class ProductosDao extends ContenedorMemoria {
    constructor(){
        super (conexion.memoria.productos)
    }
}

export default ProductosDao