const routes = require("./routes/AlunoRoutes")

const express = require('express')
const app = express()


app.use('/alunos', routes)

app.use((req, res, next) => {
  const error = new Error('Resource not found')
  error.status = 404
  next(error)
})

app.use((error, req, res) => {
  res.status(error.status || 500)
  res.send({
    message: error.message
  })
})
app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`)
})