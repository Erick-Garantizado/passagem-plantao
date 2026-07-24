const express = require('express');
const app = express();
const routerPrivado = require('./routes/privado')
const routerPublico = require('./routes/publico');
const { validaToken } = require('./middlewares/authMiddleware');
const cors = require('cors');
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://seu-projeto.vercel.app"
    ]
}))
app.use('/', routerPublico)
app.use('/plantao', validaToken, routerPrivado)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
