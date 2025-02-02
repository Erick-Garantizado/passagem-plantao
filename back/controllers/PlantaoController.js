const { plantaos, usuarios } = require("../models")

module.exports = class PlantaoController {
    static async store(req, res) {
        try {
            const plantao = await plantaos.create({
                turno: req.body.turno,
                mat_pass: req.usuarioId,
                situacao: false,
                observacao: req.body.observacao
            })

            res.json({
                turno: plantao.turno,
                mat_pass: plantao.mat_pass,
                situacao: plantao.situacao,
                observacao: plantao.observacao
            })

        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async show(req, res) {
        try {
            const plantao = await plantaos.findAll({
                where: {
                    situacao: false
                },
                include: 'plantonista'
            })

            res.json({ plantao })
        } catch (e) {
            console.log(e)
            
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async showMy(req, res) {
        try {
            const plantao = await plantaos.findAll({
                where: {

                }
            })
        } catch (e) {
            
        }
    }
    
    static async receber(req, res) {
        try {
            const num = req.body.chave
            const plantao = await plantaos.findByPk(num)
            plantao.mat_receb = Number(req.usuarioId)
            plantao.situacao = true
            const resp = await plantao.save()
            res.json(plantao)
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
    
    static async findCurrentUser(req, res) {
        try {
            console.log(req.usuarioId)
            const usuario = await usuarios.findOne({
                where: {
                    id: req.usuarioId
                }
            })
            res.json({ usuario })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async teste(req, res) {
        try {
            const plantao = await plantaos.findAll({ include: 'plantonista' })
            res.json(plantao)
    
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }
    }
}