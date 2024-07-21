const vogais = ['a','e','i'];

const consoantes = ['b','c','d','f','g','h'];

const alfabeto = [...vogais,...consoantes];

alfabeto.sort();

const aluno = {nome:'Lucas',idade:30,curso: 'javascript'};

for(let contador = 0; contador<alfabeto.length;contador++){
    //console.log(alfabeto[contador]);
}

for(let letra of alfabeto){
    console.log(letra);
}

for(let atributo in aluno){
    console.log(atributo+' '+aluno[atributo]);
}