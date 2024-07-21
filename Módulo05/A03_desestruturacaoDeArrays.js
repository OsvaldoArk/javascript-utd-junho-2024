
const vogais = ['a','e','i','o','u'];
//spread
const [vogal,nova, ...resto] = vogais;

console.log(vogal);

console.log(resto);