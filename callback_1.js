function somar(callback, a , b){
    // processamento síncrono
    const soma = a + b;
    callback(soma);
}

function exibeTotal(total){
    console.log(`O valor total é: ${total}`);
}

somar(exibeTotal, 4, 6);