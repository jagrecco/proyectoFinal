const express = require('express');
const router = require("./routes");

const app = express();

const port= process.env.PORT || 8080;

//middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/", router);

app.listen(port, ()=>{
    console.log(`Servidor escuchando el puerto: ${port}`)
})

app.on("error", (error) => console.log(`Error en servidor ${error}`));