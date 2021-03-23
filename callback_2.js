// bibliotecas do node para leitura de arquivos
const fs = require('fs');
const path = require('path')

const caminho = path.join(__dirname, 'usuarios.txt');

function exibeArquivo(err, arquivo){
    console.log(arquivo.toString());
}

// processamento assíncrono | callback: exibeArquivo
fs.readFile(caminho, exibeArquivo);


// e se antes de exibir o arquivo, for necessário alguma modificação?

