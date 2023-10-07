const express = require('express'); //Traemos a express
//Cada instancia de express sera una aplicación
const morgan = require ('morgan');
const studentRouter = require('./routes/student.router.js');

const app = express(); //Instanciamos y creamos la app del servidor

//Settings consifuraciones del servidor/Aplicación
app.set('PORT',process.env.PORT || 3000);
app.set('view engine', 'ejs'); //Indicamos el motor de vistas ejs para responder un html
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false})); //Para identificar que analizaremos datos planos
app.use(morgan('dev'));
app.use(studentRouter);

module.exports = app;

