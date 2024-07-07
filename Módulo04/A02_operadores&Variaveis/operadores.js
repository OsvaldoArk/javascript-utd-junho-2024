/**
 * Programa de explicação de variáveis 
 * 
 * autor: Professor Osvaldo
 * 
 * data: 02/07/24
 * 
 */

//criando a variável nome. Estilo camel case.
var nomeDoProfessor = "osvaldo";

//console.log(nome);

//operadores aritméticos + - * / %

var nota01 = 7, nota02 = 10, nota03 = 4, nota04 = 9;

var media = (nota01 + nota02 + nota03 + nota04) / 4;

//console.log(media);

//operadores relacionais. > >= < <= == === != !==
resultado = "20" !== 20;

//console.log(resultado);

//operadores lógicos && || 
/*
console.log(false&&true);

console.log(false||true);
E

f & f = f
v & f = f
f & v = f
v & v = v

OU

f | f = f
v | f = v
f | v = v
v | v = v

peso > 51           &&
idade >= 18         &&
intervalo >= 2      &&
viajado === false   &&

terminadoEmEscolaPublica === true ||
baixaRenda === true ||
particularComBolsa === true 

console.log(true^false);
*/

//operador ternário. se(condicao)?"verdadeiro":"falso".

var nota = 6.9;

var resultado = nota >= 7 ? "passou de ano" : "reprovado";

//console.log(resultado);