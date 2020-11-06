const url = require('url');
const http=require("http")

function add(x,y){
    return x+y
}
function mul(x,y){
    return x*y
}

function maFonction(req,res){
    let parsedUrl=url.parse(req.url,true)
    res.write("url : "+req.url+"\n")
    console.log(parsedUrl)
    
    let operation=parsedUrl.query.operation
    let x=parseFloat(parsedUrl.query.x)
    let y=parseFloat(parsedUrl.query.y)
    if(operation=="add"){
        res.end("result="+add(x,y))
    }
    if(operation=="mul"){
        res.end("result="+mul(x,y))
    }
    
    res.end("operation inconnue : "+operation)
    

    
}
console.log("Serveur lancé")
let serveur=http.createServer(maFonction)
serveur.listen(8000,"localhost")
