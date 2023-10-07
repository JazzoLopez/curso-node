const Student = require('../models/student.model')

const studentDAO = {}
studentDAO.getAll = async() => { //Traemos lo que encontramos
    const students = Student.find() //Buscamos
    return students; //Traemos todos los que hicieron match
}

module.exports = studentDAO;