// function composicao(fn1, fn2){
//     return function(valor){
//         return fn2(fn1(valor))
//     }
// }

// const teste1 = composicao(tornarMaiuscula, separarTexto)('que legal')
// console.log(teste1)


function tornarMaiuscula(texto){
    return texto.toUpperCase();
}

function enfatizarTexto(texto){
    return `${texto}!!!`;
}

function separarTexto(texto){
    return texto.split('').join(' ')
}

// também é possível fazer:
function composicao2(...fns){
    return function(valor){

        return fns.reduce((acumulador, fn) =>{
            return fn(acumulador)
        }, valor )
    }
}

const resultado = composicao2(
    tornarMaiuscula,
    enfatizarTexto,
    separarTexto
    )('quemassa')

console.log(resultado)

