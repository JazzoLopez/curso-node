// const studentDAO = require('../DAO/student.dao');

// const studentController = {}

// studentController.getAll = async (req, res) => {
//     studentDAO.getAll()
//         .then(students => {
//             res.json(students)//Si fue exitoso devuelve los estudiantes
//         })
//         .catch(err => res.json({
//             status: "request failed"//Si tenemos un error devolvemos el error 
//         }))

// };

// studentController.getOne = async (req, res) => {
//     studentDAO.getOne(req.params.dni)
//         .then(student => {
//             if (student != null) {
//                 res.json(student);
//             }
//             else {
//                 res.json({
//                     status: "Student not found"
//                 })
//             }

//         })
//         .catch(err => {
//             res.json({
//                 status: "Request failed"
//             })
//         })
// }

// studentController.insertOne = async (req, res) => {
//     studentDAO.insertOne(req.body)
//         .then(result => {
//             res.json({
//                 status: result
//             })
//         })
//         .catch(err => {
//             res.json({
//                 status: "Request failed"
//             })
//         });
// }

// studentController.updateOne = async (req, res) => {
//     studentDAO.updateOne(req.params.dni, req.body)
//         .then(result => {
//             res.json({
//                 status: result
//             })
//         })
//         .catch(err => {
//             res.json({
//                 status: "Request failed"
//             })
//         });
// }



// studentController.deleteOne = async (req, res) => {
//     studentDAO.deleteOne(req.params.dni)
//         .then(result => {
//             res.json({
//                 status: result
//             })
//                 .catch(err => {
//                     res.json({
//                         status: "Request failed"
//                     })
//                 })
//         })
// }


// module.exports = studentController;

// //consultas paginadas es preferible que traer todo de una;

// //Tarea de practica Crear nuevo modelo, de todo,


const studentDAO = require('../DAO/student.dao');
const studentController = {}

studentController.getAll = async(req, res) => {
    studentDAO.getAll()
    .then(students => {
        res.json(students);
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });
    

}


studentController.getOne = async(req, res) => {
    studentDAO.getOne(req.params.dni)
    .then(student => {
        if(student != null)
            res.json(student)
        else
            res.json({
                status: "not found"
        });
    })
    .catch(err => {
        res.json(err);
    });

}


studentController.insertOne = async(req, res) => {
    studentDAO.insertOne(req.body)
    .then(result => {
        res.json({
            status: result
        })
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}

studentController.updateOne = async(req, res) => {
    studentDAO.updateOne(req.params.dni, req.body)
    .then(result => {
        res.json({
            status: result
        })
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}

studentController.deleteOne = async(req, res) => {
    studentDAO.deleteOne(req.params.dni)
    .then(result => {
        res.json({
            status: result
        })
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}


module.exports = studentController;