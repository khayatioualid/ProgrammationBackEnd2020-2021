const bodyparser = require('body-parser')
const express = require('express')


const mid1 = function (req, res, next) {
    console.log('mid1 traitement 1');
    next();
    console.log('mid1 traitement 2');
};
const mid2 = function (req, res, next) {
    console.log('mid2 traitement 1');
    next();
    console.log('mid2 traitement 2');
};
const Security = function (req, res, next) {
    console.log('security verification');
    if((req.body.login=="admin")&&(req.body.password=="adminpassword")){
        console.log("accés autorisé")
        next();
    }else{
        console.log("accés non autorisé")
        res.send("you need a valid login and password.")
    }
    
};

const app = express()
app.use(bodyparser.json())
app.use(Security)
app.use(mid1)
app.use(mid2)

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

  app.post('/multiplication', (req, res) => {
    let x=parseFloat(req.body.x)
    let y=parseFloat(req.body.y)
    let msg='nous allons calculer une addition.<br>'
    msg+='x='+x+"<br>"
    msg+='y='+y+"<br>"
    msg+='x+y='+(x+y)
    res.send(msg)
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})