const fs = require('fs');
const path = require('path')

const caminho = path.join(__dirname, 'usuarios.txt');

// estrutura de uma promise

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        const arquivo = fs.readFileSync(caminho);
        if(arquivo){
            resolve(arquivo.toString());
        } else {
            reject('Ocorreu um erro.');
        }
    })

}

lerArquivo(caminho)
    .then(console.log)
    .catch(console.log)

// function tornarMaiuscula(arquivo){
//     return arquivo.toUpperCase();
// }

// lerArquivo(caminho)
//     .then(tornarMaiuscula)
//     .then(console.log)
//     .catch(console.log)

