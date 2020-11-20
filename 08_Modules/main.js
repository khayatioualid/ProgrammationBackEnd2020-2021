const mymoduleCasSimple=require("./mymoduleCasSimple")
const mymoduleCasGeneral=require("./mymoduleCasGeneral")


console.log("--- cas simple ---------")
console.log("somme(10,15)="+mymoduleCasSimple(10,15))
console.log("--- cas general --------")
console.log("somme(10,15)="+mymoduleCasGeneral.somme(10,15))
console.log("produit(10,15)="+mymoduleCasGeneral.produit(10,15))
console.log("division(150,15)="+mymoduleCasGeneral.division(150,15))