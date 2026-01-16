const jwt = require('jsonwebtoken')

function validaToken(req, res, next) {
        // const token = req.headers['authorization']
        // // Descriptografando o token
        // jwt.verify(token, process.env.JWT_KEY, async (error, success) => {
        //     // Caso Deu errado
        //     if (error) {
        //         res.status(401).json({error: "Token inválido"})
        //     // Caso deu certo
        //     } else {
        //         req.usuarioId = success // Mandando o id do usuário no corpo da requisição 
        //         next() // Chamando o próximo metodo em routes
        //     }
        // })
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não informado' })
    }

    const [, token] = authHeader.split(' ')
 
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)

        req.user = {
            id: decoded.sub,
            admin: decoded.admin
        }

        next()
    } catch {
        return res.status(401).json({ error: 'Token inválido ou expirado' })
    }
}

module.exports = { validaToken }