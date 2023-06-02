const { plantaos } = require("../models")

module.exports = class PlantaoController {
    static async store(req, res) {
        try {
            const plantao = await plantaos.create({
                turno: req.body.turno,
                mat_pass: req.usuarioId,
                observacao: req.body.observacao
            })

            res.json({
                turno: plantao.turno,
                mat_pass: plantao.mat_pass,
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
            const plantao = await plantaos.findAll()

            res.json({plantoes: plantao})
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
}