const studentController = require('../controllers/student.controller');
const teacherController = require('../controllers/teacher.controller');
const {Router} = require('express');
const router = Router();

router.get('/getAll', teacherController.getAll);
router.get('/getOne/:employeenumber', teacherController.getOne);
router.post('/insertOne/', teacherController.insertOne);
router.post('/updateOne/:employeenumber', teacherController.updateOne);
router.get('/deleteOne/:employeenumber', teacherController.deleteOne);



// router.get('/getAll', teacherController.getAll);
// router.get('/getOne/:employeenumber', teacherController.getOne);
// router.post('/insertOne/', teacherController.insertOne);
// router.put('/updateOne/:employeenumber', teacherController.updateOne);
// router.delete('/deleteOne/:employeenumber', teacherController.deleteOne);


//Exportamos
module.exports = router;