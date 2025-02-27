const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>FullCycle Rocks!!!</h1>')
})

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})
