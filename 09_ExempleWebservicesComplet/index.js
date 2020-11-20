var users = require('./users')
var express = require('express')

const app = express()
const port = 4000
app.use('/users', users)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })