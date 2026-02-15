const { usuarios } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = class LoginController {

    static async create(req, res) {
        try {
            const usuario = await usuarios.create({
                nome: req.body.nome,
                funcao: req.body.funcao,
                matricula: req.body.matricula,
                email: req.body.email,
                permissao: req.body.permissao,
                ativo: req.body.ativo
            })

            res.json({ usuario })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    
    static async login(req, res) {
        try {
            // Procurando usuário
            const usuario = await usuarios.findOne({
                where: {
                    matricula: req.body.matricula
                }
            })
            
            // Caso exista o usuário
            if (usuario) {
                const token = await jwt.sign({
                    sub: usuario.id,
                    admin: usuario.permissao
                }, 
                process.env.JWT_KEY,
                {expiresIn: "1h"}
            )
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

}