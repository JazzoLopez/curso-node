const Teacher = require('../models/teacher.model');
const teacherDAO = {};

teacherDAO.getAll = async () => {
    const teachers = await Teacher.find();
    return teachers;
}

// teacherDAO.getAll = async (employeenumber) => {
//     const teachers = await Teacher.find({},{"employeenumber":1,"name":1,"lastname":1, "_id":0})
//     return teachers;


teacherDAO.getOne = async (employeenumber) => {
    const teacher = await Teacher.findOne({employeenumber:employeenumber});
    return teacher;
}

teacherDAO.insertOne = async (teacher) => {
    const teacherSaved = new Teacher(teacher); //instancia 
    await teacherSaved.save();
    return "Teacher saved";
}

teacherDAO.updateOne = async (employeenumber, teacher) => {
    await Teacher.updateOne({ employeenumber: employeenumber }, teacher);
    return "Teacher update";
}

teacherDAO.deleteOne = async (employeenumber) => {
    await Teacher.deleteOne({ employeenumber: employeenumber });
    return "Teacher deleted";
}
module.exports =teacherDAO;