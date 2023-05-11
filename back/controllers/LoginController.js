const { usuarios } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = class LoginController {
    
    static async login(req, res) {
        try {
            // Procurando usuário
            console.log(req.body.matricula)
            const usuario = await usuarios.findOne({
                where: {
                    matricula: req.body.matricula
                }
            })
            
            // Caso exista o usuário
            if (usuario) {
                const token = await jwt.sign(usuario.id, process.env.JWT_KEY)
                res.json({token:token})

            // Caso não exista
            } else {
                res.status(401).json({error: "Matricula inválida."})
            }
        // Erro na execução
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static validaToken(req, res, next) {
        const token = req.headers['authorization']
        // Descriptografando o token
        jwt.verify(token, process.env.JWT_KEY, async (error, success) => {
            // Caso Deu errado
            if (error) {
                res.status(401).json({error: "Token inválido"})
            // Caso deu certo
            } else {
                req.usuarioId = success // Mandando o id do usuário no corpo da requisição 
                next() // Chamando o próximo metodo em routes
            }
        })
    }
}