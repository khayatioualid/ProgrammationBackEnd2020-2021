var http=require("http")
function add(x,y){
    return x+y
}
function mul(x,y){
    return x*y
}

function maFonction(req,res){
    res.write("url : "+req.url+"\n")
    let params=req.url.split("/")
    let operation=params[1]
    let x=parseFloat(params[2])
    let y=parseFloat(params[3])
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
