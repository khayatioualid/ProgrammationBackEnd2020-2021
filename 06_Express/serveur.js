const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/addition', (req, res) => {
    let x=parseFloat(req.query.x)
    let y=parseFloat(req.query.y)
    /*
    res.write('nous allons calculer une addition.\n')
    res.write('x='+x+"\n")
    res.write('y='+y+"\n")
    res.end('x+y='+(x+y))
    */
    let msg='nous allons calculer une addition.<br>'
    msg+='x='+x+"<br>"
    msg+='y='+y+"<br>"
    msg+='x+y='+(x+y)
    res.send(msg)
    

  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})