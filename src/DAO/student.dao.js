const student = require('../models/student.model')

const studentDAO = {}
studentDAO.getAll = async() => { //Traemos lo que encontramos
    const students = student.find() //Buscamos
    return students; //Traemos todos los que hicieron match
}

module.exports = studentDAO;