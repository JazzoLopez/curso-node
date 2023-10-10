const Teacher = require('../models/teacher.model');
const teacherDAO = {};

teacherDAO.getAll = async() =>{
    const teachers = await Teacher.find();
    return teachers;
}

teacherDAO.getOne = async(dni) => {
    const teacher = await student.findOne(teacher);
    return teacher;
}

teacherDAO.insertOne = async (teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "Teacher saved";
}

