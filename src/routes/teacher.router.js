const studentController = require('../controllers/student.controller');
const teacherController = require('../controllers/teacher.controller');
const {Router} = require('express');
const router = Router();

router.get('/getAll/teacher', teacherController.getAll);
router.get('/getOne/teacher/:workerNumber', teacherController.getOne);
router.post('/insertOne/teacher', teacherController.insertOne);
router.put('/updateOne/teacher/:workerNumber', teacherController.updateOne);
router.delete('/deleteOne/teacher/:workerNumber', teacherController.deleteOne);


//Exportamos
module.exports = router;