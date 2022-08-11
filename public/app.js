document.getElementById("productos").addEventListener("click", ()=>{
    fetch('http://localhost:3000/api/productos')
    // Exito
    .then(response =>{
        response.json()})  // convertir a json
    .then(
        json => {
            document.getElementById("lista").innerHTML=json
            console.log(json)
        }
    )    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
})