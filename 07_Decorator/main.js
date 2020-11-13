
function somme(x,y){
    console.log("x+y="+(x+y))
}


function decorateur(oldFonction){
    function newFunction(x,y){
        console.log("traitement1")
        oldFonction(x,y)
        console.log("traitement2")
    }
    return newFunction
}


let a=10
let b=20
console.log("fonctionnement avant décoration")
somme(a,b)

somme=decorateur(somme)
console.log("fonctionnement aprés décoration")
somme(a,b)