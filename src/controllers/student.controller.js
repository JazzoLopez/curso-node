const studentDAO = require('../DAO/student.dao');
const studentController = {}

studentController.getAll = async(req, res) => {
    studentDAO.getAll()
    .then(students => {
        //res.json(students); //Si la busqueda es exitosa nos devuelve a todos
        res.render('../src/views/index',{students});
    })
    .catch(err => {
        res.json({
            status: "request failed" //si hay un error en la busqueda nos retorna un json con un mensaje de error
        })
    });
    

}


studentController.getOne = async(req, res) => {
    studentDAO.getOne(req.params.dni)  //El parametro de busqueda es mediante el dni
    .then(student => {
        if(student != null) {//Si hace match con alguno...
            res.render('../src/views/edit',{student})
        }
        else
            res.json({
                status: "not found" //SI no regresa un mensaje de que no se encontro
        });
    })
    .catch(err => {
        res.json(err);
    });

}


studentController.insertOne = async(req, res) => {
    studentDAO.insertOne(req.body) //Requerimos el cuerpo del mensaje, un json en thunder client o alguno por mientras
    .then(result => {
       res.redirect('/api/students/getAll')
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}

studentController.updateOne = async(req, res) => {
    studentDAO.updateOne(req.params.dni, req.body) //Para actualizar necesitamos el identificador y el cuerpo para saber que debemos cambiar 
    .then(result => {
        res.redirect('/api/students/getAll')
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}

studentController.deleteOne = async(req, res) => {
    studentDAO.deleteOne(req.params.dni) //Para eliminar un elemento se filtran por el dni 
    .then(result => {
        res.redirect(('/api/students/getAll'))
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}


module.exports = studentController; //Exportamos los controladores

 //consultas paginadas es preferible que traer todo de una;
 //Tarea de practica Crear nuevo modelo, de todo,
//console.log(err); para poder visualizar errores y encontrarlo por capas