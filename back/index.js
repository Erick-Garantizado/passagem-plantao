const express = require('express');
const app = express();
const routerPrivado = require('./routes/privado')
const routerPublico = require('./routes/publico');
const { validaToken } = require('./middlewares/authMiddleware');
const cors = require('cors');


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/', routerPublico)
app.use('/plantao', validaToken, routerPrivado)

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})
