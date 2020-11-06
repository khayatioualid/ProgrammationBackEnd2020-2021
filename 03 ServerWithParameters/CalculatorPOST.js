
const http=require("http")
var qs = require('querystring');

function add(x,y){
    return x+y
}
function mul(x,y){
    return x*y
}

/*
  l'objectif est la creation d'un webservice qui traite l'url sous la forme
  localhost:8000?operation=somme&x=5&y=10  et retourne la valeur 15
  localhost:8000?operation=produit&x=5&y=10  et retourne la valeur 50
*/

function calculateur(req,res){


    let body = '';
    let post="";
    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6){
            req.connection.destroy();
        }
    });

    req.on('end', function () {
        //post = qs.parse(body);
        post = JSON.parse(body);
        
        // use post['blah'], etc.
        res.write("url : "+req.url+"\n")
        res.write("Json : "+body+"\n")

        let operation=post.operation
        let x=parseFloat(post.x)
        let y=parseFloat(post.y)
        if(operation=="add"){
            res.end("Resultat="+add(x,y))
            return
        }
        if(operation=="mul"){
            res.end("Resultat="+mul(x,y))
            return
        }
        res.end("Operation inconnu!")
    });


    
}

console.log("Server loaded.")
let serveur=http.createServer(calculateur)
serveur.listen(8000,"localhost")
console.log("Server unloaded.")