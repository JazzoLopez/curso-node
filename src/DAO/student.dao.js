// const Student = require('../models/student.model')

// const studentDAO = {}
// studentDAO.getAll = async () => { //Traemos lo que encontramos
//     const students = await Student.find() //Buscamos
//     return students; //Traemos todos los que hicieron match
// }

// studentDAO.getOne = async (dni) => {
//     const student = await Student.findOne({ dni: dni }); //Solo traemos uno
//     return student;
// }

// studentDAO.insertOne = async (student) => {
//     const studentSaved = new Student(student);
//     await studentSaved.save();
//     return "Student saved";
// }



// studentDAO.updateOne = async (dni, student) => {
//     const result = await Student.updateOne({ dni: dni }, student);
//     console.log(result);
//     return "Student update";
// }

// studentDAO.deleteOne = async (dni) => {
//     const student = await Student.deleteOne({ dni: dni }); //Solo traemos uno
//     return student;
// }



// module.exports = studentDAO;

const Student = require('../models/student.model')
const studentDAO = {}

studentDAO.getAll = async() => {
    const students = await Student.find();
    return students;

}

studentDAO.getOne = async(dni) => {
    const student = await Student.findOne({dni:dni});
    return student;

}

studentDAO.insertOne = async(student) => {
    const studentSaved = new Student(student);
    await studentSaved.save();
    return "student saved";

}

studentDAO.updateOne = async(dni, student) => {
    await Student.updateOne({dni: dni},student);
    return "student updated"

}

studentDAO.deleteOne = async(dni) => {
    await Student.deleteOne({dni:dni});
    return "student deleted";

}


module.exports = studentDAO;
