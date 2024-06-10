const mongoose = require('mongoose');
//!Cuidado, tienes tu cuenta de mongoose visualizada, esto es una mala practica

mongoose.connect(process.env.DB_URL) //Recibe el conecction string 
    .then(db => console.log('Mongodb atlas connected')) //Si fue exitoso
    .catch(err => console.error(err)); //Si tenemos un error
