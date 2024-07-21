//A cresce a 3% e B cresce a 2%
var populacaoA = 5000000, populacaoB = 7000000,anos = 0;

while(populacaoA < populacaoB){

    populacaoA+=populacaoA*0.03;

    populacaoB+=populacaoB*0.02;

    anos++;
}

console.log(anos);
console.log(populacaoA);
console.log(populacaoB);
