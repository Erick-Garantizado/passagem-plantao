const express = require('express')
const LoginController = require('../controllers/LoginController')
const router = express.Router()

router.post('/login', LoginController.login)
router.get('/', (req, res)=>{ res.send({ resp:'ok' }) })


module.exports = router
