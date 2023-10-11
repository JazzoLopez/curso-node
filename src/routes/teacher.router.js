const studentController = require('../controllers/student.controller');
const teacherController = require('../controllers/teacher.controller');
const {Router} = require('express');
const router = Router();

router.get('/getAll/teacher', teacherController.getAll);
router.get('/getOne/teacher', teacherController.getOne);
router.post('/insertOne/teacher', studentController.insertOne);
router.put('/updateOne/teacher', teacherController.updateOne);
router.delete('/deleteOne/teacher', teacherController.deleteOne);

module.exports = router;