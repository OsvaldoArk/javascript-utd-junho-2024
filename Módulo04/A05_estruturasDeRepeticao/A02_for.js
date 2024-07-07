var notas = [8,9,7,9,10,10,7,8];
var resposta01 = '', respostaInvertida = '';

for(var contador = 0;contador < notas.length;contador++){
    //if(contador % 2 != 0)
    //console.log(notas[contador]);
    resposta01+=notas[contador]+' ';
}
console.log(resposta01);

for(var contador = notas.length -1;contador >= 0;contador--){
    respostaInvertida+=notas[contador]+' ';
}
console.log(respostaInvertida);