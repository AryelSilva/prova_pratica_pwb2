const express = require('express')
//importando as rotas 
const routes = require('./routes')

const cookieParser = require('cookie-parser')
//CORS -permite passar os dados para um determinado domínio
const cors = require('cors')

require('./database')

const app = express()

//chamando as funções 
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(8080)

