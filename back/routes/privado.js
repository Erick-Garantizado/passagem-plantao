const express = require('express')
const PlantaoController = require('../controllers/PlantaoController')
const LoginController = require('../controllers/LoginController')
const router = express.Router()


router.post('/salvar', PlantaoController.store)
router.post('/receber', PlantaoController.receber)
router.get('/listar', PlantaoController.show)
router.get('/meus', PlantaoController.showMy)
router.get('/usuario/atual', PlantaoController.currentUser)
router.get('/detalhes/:id', PlantaoController.detalhes)

router.post('/usuario/criar', LoginController.create)

router.get('/teste', PlantaoController.teste)


module.exports = router
