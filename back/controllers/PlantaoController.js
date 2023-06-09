const { plantaos } = require("../models")

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
                    situacao: 0
                },
                include: 'plantonista'
            })

            res.json({plantao})
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async teste(req, res) {
        try {
            const plantao = await plantaos.findAll({include: 'plantonista'})
            res.json(plantao)
            
        } catch (error) {
            res.status(500).json({
                error: error.message
            })
        }

        
    }
}