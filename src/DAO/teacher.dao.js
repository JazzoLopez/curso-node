const Teacher = require('../models/teacher.model');
const teacherDAO = {};

teacherDAO.getAll = async () => {
    const teachers = await Teacher.find();
    return teachers;
}

teacherDAO.getOne = async (dni) => {
    const teacher = await student.findOne(teacher);
    return teacher;
}

teacherDAO.insertOne = async (teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "Teacher saved";
}

teacherDAO.updateOne = async (dni, teacher) => {
    await Teacher.updateOne({ dni: dni }, teacher);
    return "Teacher update";
}

teacherDAO.deleteOne = async (dni) => {
    await Teacher.deleteOne({ dni: dni });
    return "Teacher deleted";
}
module.exports =teacherDAO;