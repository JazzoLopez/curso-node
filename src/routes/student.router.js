const studentController = require('../controllers/student.controller');
const {Router} = require('express');
const router = Router();


//Student
router.get('/getAll', studentController.getAll);
router.get('/getOne/:dni', studentController.getOne);
router.post('/insertOne', studentController.insertOne);
router.put('/updateOne/:dni', studentController.updateOne);
router.delete('/deleteOne/:dni', studentController.deleteOne);


//Teacher



module.exports = router;