const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config({
  path:'.env'
})







app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})