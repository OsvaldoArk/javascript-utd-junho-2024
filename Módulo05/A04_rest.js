const somatorio = (...array)=>{
    let somador = 0;

    for(let numero of array){
        somador+=numero;
    }

    return somador;
}

//console.log(somatorio(1,2,3,4,5));



const vogais = ['a','e','i'];

const consoantes = ['b','c','d','f','g','h'];

const alfabeto = [...vogais,...consoantes];

//console.log(alfabeto.flat());

console.log(alfabeto.sort());