
const y = function(texto){
    return `Esse é o texto: ${texto}`;
}

function executar(fn, a, b){
    return fn(a, b);
}

function somar(a, b){
    return a + b;
}

function multiplicar(a, b){
    return a * b;
}

var funcoes = {
    func1: multiplicar,
    func2: somar
}

console.log(y('Olá Mundo'));

console.log(executar(somar, 1,6));
console.log(executar(multiplicar, 8,8));

console.log(funcoes);