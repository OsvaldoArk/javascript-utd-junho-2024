//FIFO - first in first out = primeiro a entrar é o primeiro a sair.
const filaDebanco = ['Aline','José','Laura','Lívia','Wilian','Aline','Antônio'];

function alunoEspecifico(nome){
    return nome.length > 5;
}

console.log(filaDebanco.find(item => item.length > 5));



/*
filaDebanco.splice(2,2,'Ana','Rogério');

filaDebanco.unshift("Milena");

console.log(filaDebanco);  

const fatia = filaDebanco.slice(4,6);
filaDebanco.splice(4,2);
delete filaDebanco[0];
console.log(fatia);

console.log(filaDebanco);
console.log(filaDebanco.shift());

console.log(filaDebanco.shift());

console.log(filaDebanco.push("Lúcio"));

filaDebanco.sort((a,b)=> b.localeCompare(a));

filaDebanco.reverse();

//LIFO - Last In First Out 
const numeros = [5,4,1,6,2,3];

numeros.sort((a,b)=> b-a);

numeros.push(7);

console.log(numeros.pop());

console.log(numeros.pop());

console.log(numeros.reverse())
const matrix = [[2,4,6],[3,6,9],[1,3,5]];
console.log(matrix.flat());
*/

