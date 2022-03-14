const {Router} = require('express')
const router = Router()
const StudentController = require('../controllers/StudentController')
const studentController = new StudentController()

router.post('/insert', studentController.post)
router.get('/get', studentController.get)
router.put('/update/:id', studentController.put)
router.delete('/delete/:id', studentController.delete)

module.exports = router