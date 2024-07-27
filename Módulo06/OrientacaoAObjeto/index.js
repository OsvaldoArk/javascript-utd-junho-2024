import Pessoa from "./Pessoa.js";
import Aluno from "./Aluno.js";
import { Gato } from "./Pessoa.js";

//const p01 = new Pessoa("Andreia",39);

const a01 = new Aluno('Júlio',26,'Javascript');

const g01 = new Gato('Bola de neve');

//p01.nome = 'Angélica';

//a01.idade = null;

//console.log(p01.nome);

console.log(a01.nome+' '+a01.idade+' '+a01.curso);

//p01.cumprimentar();