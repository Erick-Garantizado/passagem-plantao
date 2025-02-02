const express = require('express')
const PlantaoController = require('../controllers/PlantaoController')
const router = express.Router()


router.post('/salvar', PlantaoController.store)
router.post('/receber', PlantaoController.receber)
router.get('/listar', PlantaoController.show)
router.get('/listarMeus', PlantaoController.showMy)
router.get('/usuarioAtual', PlantaoController.findCurrentUser)

router.get('/teste', PlantaoController.teste)


module.exports = router
