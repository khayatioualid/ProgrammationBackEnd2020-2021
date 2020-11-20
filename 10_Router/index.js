var birds = require('./birds')
var express = require('express')

const app = express()
const port = 3000
app.use('/newBirds', birds)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })