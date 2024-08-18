var usuário = "Thalysson";

var numero = Math.floor(Math.random()*100);


contador = 0
console.log("Os números que você nescolheu foi:","\n")
for (var test = 0;contador < 10;contador++){
    test = Math.floor(Math.random()*100);
    console.log(test)

    if(test < numero){
        console.log("O número sortiado é maior","\n")
    }

    else if(test == numero){
        console.log("Parabéns",usuário, "você acertou o número","\n")
        break
    }
    else{
        console.log("O número sortiado é menor","\n")
    }
}

if(test != numero){
    console.log("Que pena",usuário,"acabou suas tentativas","\n")
}

console.log("O número sortiado foi:", numero)

