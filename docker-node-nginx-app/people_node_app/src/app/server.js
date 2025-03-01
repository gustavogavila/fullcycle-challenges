const express = require('express')
const app = express()
const port = 3000
const http = require("http")
http.createServer(app)
const { faker } = require('@faker-js/faker');

app.set("view engine", "ejs")
app.use(express.static("public"))

const mysql = require('mysql2')

const config_pool = {
  host: 'people_db',
  user: 'gus',
  password: 'gus',
  database: 'peopledb',
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0
}

const db = mysql.createPool(config_pool);

app.get("/", (req, res) => {

  db.query(
    'INSERT INTO people (name) VALUES (?)', [faker.person.fullName()],
    (err, result) => {
      if (err) {
        console.log('Erro ao salvar pessoa no banco de dados: ', err)
        return res.status(500).json({ error: 'Erro no servidor'})
      }
    }
  )

  db.query('SELECT * FROM people', (err, results) => {
      if (err) {
          console.error("Erro ao buscar nomes:", err)
          return res.status(500).send("Erro no servidor")
      }
      res.render("index", { pessoas: results })
  })
})

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})
