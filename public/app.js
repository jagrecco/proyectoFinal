document.getElementById("productos").addEventListener("click", ()=>{
    fetch('http://localhost:3000/api/productos')
    
    .then(response =>{
        response.json()})
    .then(
        json => {
            document.getElementById("lista").innerHTML=json
            console.log(json)
        }
    )
    .catch(err => console.log('Solicitud fallida', err)); 
})