const express = require('express'); //Traemos a express
//Cada instancia de express sera una aplicación
const morgan = require ('morgan');

const app = express(); //Instanciamos y creamos la app del servidor

//Settings consifuraciones del servidor/Aplicación
app.set('PORT',process.env.PORT || 3000);
app.set('view engine', 'ejs');
//Middlewares


app.use(express.json());


