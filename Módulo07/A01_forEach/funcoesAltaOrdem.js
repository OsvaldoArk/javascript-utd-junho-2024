//foreach - map - filter - reduce.

function calculo(x){

    return function multiplicacao(y){
        return x * y;
    }
}

const anonima = x => y => x * y;

const dobro = anonima(2);
const quintuplo = anonima(5);

console.log(dobro(15));
console.log(quintuplo(15));