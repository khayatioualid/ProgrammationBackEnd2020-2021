const users = require('./users')
const bodyparser = require('body-parser')
const express = require('express')


const app = express()
app.use(bodyparser.json())
const port = 4000
app.use('/users', users)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })