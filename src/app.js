const express = require('express'); //Traemos a express
//Cada instancia de express sera una aplicación
const app = express(); //Instanciamos y creamos la app del servidor

app.listen(3000,() => {  //escuchador
    console.log("Server listening on port 3000");
}); 
