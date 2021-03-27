function eager(a, b){

    const fim = Date.now() + 2500
    while(Date.now()< fim){}

    const valor = Math.pow(a, 3);
    return valor + b;
}

// console.time('#01');
// console.log(eager(2,3));
// console.log(eager(2,3));
// console.log(eager(2,3));
// console.timeEnd('#01');

// aplicando currying à função eager
function lazy(a){
    const fim = Date.now() + 2500
    while(Date.now() < fim){

    }
    const valor = Math.pow(a, 3);
    return function(b){
        return valor + b;
    }
}

// console.time('#2')
// console.log(lazy(3)(100))
// console.log(lazy(3)(200))
// console.log(lazy(3)(300))
// console.timeEnd('#2')


console.time('#3')
const lazyComposta = lazy(3)
console.log(lazyComposta(100))
console.log(lazyComposta(200))
console.log(lazyComposta(300))
console.timeEnd('#3')

