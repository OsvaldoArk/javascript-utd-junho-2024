

function ordemCrescente(array){

    for(var atual = 0; atual<array.length -1;atual++){

        for(var proximo = atual + 1; proximo<array.length;proximo++){

            if(array[proximo] > array[atual] ){

                var temp = array[atual];

                array[atual] = array[proximo];

                array[proximo] = temp;
            }
        }
    }

    return array;
}

var numeros = [3,1,7,4,2,9];

var resposta = ordemCrescente(numeros);

console.log(resposta)

