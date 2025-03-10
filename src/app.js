const express = require('express'); //*TRAEMOS A EXPRESS
//*Cada instancia de express sera una aplicación
const morgan = require ('morgan');
const studentRouter = require('./routes/student.router');
const teacherRouter = require('./routes/teacher.router')
const {config} = require('dotenv')

const app = express(); //*Instanciamos y creamos la app del servidor
config();
//*Settings consifuraciones del servidor/Aplicación
app.set('PORT',process.env.PORT);
app.set('view engine', 'ejs'); //*Indicamos el motor de vistas ejs para responder un html
//*Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false})); //*Para identificar que analizaremos datos planos
app.use(morgan('dev'));
app.use('/api/students',studentRouter);
app.use('/api/teachers',teacherRouter);

//* Exportamos 
module.exports = app;

