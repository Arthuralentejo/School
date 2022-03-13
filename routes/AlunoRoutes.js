const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/AlunoController')
const alunoController = new Controller()


router.post('/matricular', alunoController.post)
router.get('/consultar', alunoController.get)
router.put('/atualizar/:id', alunoController.put)
router.delete('/deletar/:id', alunoController.delete)

module.exports = router