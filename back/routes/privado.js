const express = require('express')
const PlantaoController = require('../controllers/PlantaoController')
const router = express.Router()


router.post('/salvar', PlantaoController.store)
router.get('/listar', PlantaoController.show)
router.get('/teste', PlantaoController.teste)



module.exports = router
