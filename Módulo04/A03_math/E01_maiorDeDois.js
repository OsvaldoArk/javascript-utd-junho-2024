var numero01 = 590, numero02 = 11130, numero03 = 4577;

//retornar o menor entre dois números.
//retornar a maior entre três números.
var maior = ((numero01 + numero02) + Math.abs(numero01 - numero02))/2;

var maiorDosMaiores = ((numero03 + maior) + Math.abs(numero03 - maior))/2;

console.log(maiorDosMaiores);