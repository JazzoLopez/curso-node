const Teacher = require('../models/teacher.model');
const teacherDAO = {};

// teacherDAO.getAll = async () => {
//     const teachers = await Teacher.find();
//     return teachers;
// }

teacherDAO.getAll = async (workerNumber) => {
    const teachers = await Teacher.find({},{"workerNumber":1,"name":1,"lastname":1, "_id":0})
    return teachers;
}

teacherDAO.getOne = async (workerNumber) => {
    const teacher = await Teacher.findOne({workerNumber:workerNumber});
    return teacher;
}

teacherDAO.insertOne = async (teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "Teacher saved";
}

teacherDAO.updateOne = async (workerNumber, teacher) => {
    await Teacher.updateOne({ workerNumber: workerNumber }, teacher);
    return "Teacher update";
}

teacherDAO.deleteOne = async (workerNumber) => {
    await Teacher.deleteOne({ workerNumber: workerNumber });
    return "Teacher deleted";
}
module.exports =teacherDAO;