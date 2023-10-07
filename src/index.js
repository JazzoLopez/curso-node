const app = require ('./app'); //Aqui se pone a escuchar
require('./database'); //Instrucciones para la conexión

app.listen(app.get('PORT'),() => {  //escuchador
    console.log(`Server on port ${app.get('PORT')}`);
});