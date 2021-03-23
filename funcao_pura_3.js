let numeroExecucoes = 0;

function areaCirculo(raio, pi){
    numeroExecucoes ++
    return Math.pow(raio, 2)* pi
}

console.log(areaCirculo(15, Math.PI), numeroExecucoes, Math.PI)