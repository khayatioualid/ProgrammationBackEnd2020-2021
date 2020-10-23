var http=require("http")
function maFonction(req,res){
    
    res.end("helloworld")
}
console.log("Serveur lancé")
let serveur=http.createServer(maFonction)
serveur.listen(8000,"localhost")
