const routes = require("./routes/StudentRoutes")

const express = require('express')
const app = express()


app.use('/student', routes)

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
  console.log(`Server running on port 3000`)
})