const {writeFile} = require("fs");

writeFile("./prova.txt", "Ho usato il metodo writeFile!", (error, result)=>{
    if (error) {
        console.log(error);
        return
    }
    console.log("Controlla il file prova.txt");
});