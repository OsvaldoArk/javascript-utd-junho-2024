var numero = 618;

var unidade = numero % 10;

var dezena = (numero % 100 - unidade) / 10;

var centena = (numero - dezena * 10 - unidade) / 100

console.log(centena);
console.log(dezena);
console.log(unidade);