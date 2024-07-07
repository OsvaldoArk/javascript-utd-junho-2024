var idades = [23,18,30,38,21,46,29,26,49,52,18], soma = 0,media = 0,contador =0;

while(contador < idades.length){
    //soma = soma + idades[contador];
    soma+=idades[contador];

    contador++;
}

media = soma/idades.length;

console.log(media);