function somme(x,y){
    return x+y
}
function produit(x,y){
    return x*y
}
console.log("module cas general executé")

module.exports={
    produit:produit,
    somme:somme
}
//module.exports.produit=produit
//module.exports.somme=somme
module.exports.division=function(a,b){
    return a/b
}