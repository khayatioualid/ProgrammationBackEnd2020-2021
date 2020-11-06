const fs=require("fs");

function fileCopySynchrone(source,cible){
    let buffer=fs.readFileSync(source)
    
    for(let i=0;i<100000;i++){
        console.log("i:"+i)
    }
    
    console.log(buffer)
    fs.writeFileSync(cible,buffer)
}

fileCopySynchrone("./Data/source.txt","./Data/cible.txt")
fileCopySynchrone("./Data/source.txt","./Data/cible1.txt")