function executar(fn, ...params){
    return fn(...params)
}

function somar(a, b, c){
    return a + b + c;
}

function multiplicar(a, b){
    return a * b;
}

// console.log(executar(somar, 1,3,8));
// console.log(executar(multiplicar, 9,3));


function executar2(fn, ...params){
    return function(textoInicial){
        return `${textoInicial} ${fn(...params)}`
    }
}

console.log(executar2(somar, 445 ,56, 45)('O resultado da soma é: '))
console.log(executar2(multiplicar, 445 ,56)('O resultado da multiplicação é: '))