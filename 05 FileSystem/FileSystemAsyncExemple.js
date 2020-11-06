const fs=require("fs");

function fileCopyAsynchrone(source,cible){
    fs.readFile(source,function(err, data) {
        if (err) throw err;
        //console.log(data);

        fs.writeFile(cible,data,function(err) {
            if (err) throw err;
            console.log("fin de "+source);
          })
      })
    /*
    for(let i=0;i<50000;i++){
        //console.log("i:"+i)
    }
    */
    
}


fileCopyAsynchrone("./Data/a.7z","./Data/b.7z")
fileCopyAsynchrone("./Data/source.txt","./Data/cible2.txt")