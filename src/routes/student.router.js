const studentController = require('../controllers/student.controller');
const {Router} = require('express');
const router = Router();


//* Rutas basicas para comprobar con Thunder Client */ 
// router.get('/getAll', studentController.getAll);
// router.get('/getOne/:dni', studentController.getOne);
// router.post('/insertOne', studentController.insertOne);
// router.put('/updateOne/:dni', studentController.updateOne);
// router.delete('/deleteOne/:dni', studentController.deleteOne);


//Todo: Rutas modificadas para darle funcionalidad a los renderizados
router.get('/getAll', studentController.getAll);
router.get('/getOne/:dni', studentController.getOne);
router.post('/insertOne', studentController.insertOne);
router.post('/updateOne/:dni', studentController.updateOne);
router.get('/deleteOne/:dni', studentController.deleteOne);


//Teacher



module.exports = router;
