const { plantaos } = require("../models")

module.exports = class PlantaoController {
    static async store(req, res) {
        try {
            const plantao = await plantaos.create({
                turno: req.body.turno,
                mat_pass: req.usuarioId,
                mat_receb: null,
                data: null,
                celular: req.body.celular,
                fone: req.body.fone,
                tablet: req.body.tablet,
                roteador: req.body.roteador,
                toner_pb: req.body.toner_pb,
                toner_colorido: req.body.toner_colorido,
                caixa_ferramentas: req.body.caixa_ferramentas,
                webcam: req.body.webcam,
                unidade_imagem: req.body.unidade_imagem,
                suporte_tablet: req.body.suporte_tablet,
                mouse: req.body.mouse,
                notebook: req.body.notebook,
                gabinete: req.body.gabinete,
                caixa_cabos: req.body.caixa_cabos,
                observacao: req.body.observacao
            })

            res.json({
                turno: plantao.turno,
                mat_pass: plantao.mat_pass,
                mat_receb: plantao.mat_receb,
                data: plantao.data,
                celular: plantao.celular,
                fone: plantao.fone,
                tablet: plantao.tablet,
                roteador: plantao.roteador,
                toner_pb: plantao.toner_pb,
                toner_colorido: plantao.toner_colorido,
                caixa_ferramentas: plantao.caixa_ferramentas,
                webcam: plantao.webcam,
                unidade_imagem: plantao.unidade_imagem,
                suporte_tablet: plantao.suporte_tablet,
                mouse: plantao.mouse,
                notebook: plantao.notebook,
                gabinete: plantao.gabinete,
                caixa_cabos: plantao.caixa_cabos,
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