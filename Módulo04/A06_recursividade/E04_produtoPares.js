
var numeros = [7,8,5,56,22,9,55,6,15,56,24];

var contador = 0, somador = 0;

while(contador < numeros.length){

    if(numeros[contador] % 2 == 0)
        somador+=numeros[contador];

    contador++;
}

console.log(somador);

function recursiva(lista,indice){

    if(indice < 0) return 0;

    console.log(lista[indice]);

    return lista[indice] + recursiva(lista, indice-1);

}

console.log("recursiva: "+recursiva(numeros,10));