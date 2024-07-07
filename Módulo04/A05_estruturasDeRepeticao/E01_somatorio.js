var contador = 1, soma = 0, operacao = '';

while(contador <= 15){
    //soma = soma + contador;
    soma+=contador;
    operacao+=contador+'+'
    contador++;
}

operacao = operacao.slice(0,operacao.length-1); 

console.log(operacao+"="+soma);