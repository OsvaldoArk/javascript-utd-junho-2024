export default class Pessoa{

    #nome;
    #idade;

    constructor(nome,idade){
        if(this.constructor == Pessoa) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome(){
        return this.#nome;
    }
    
    set nome(nome){
        this.#nome = nome;
    }

    get idade(){
        return this.#idade;
    }

    set idade(idade){
        this.#idade = idade;
    }

    cumprimentar(){
        console.log("Olá orientação a objeto");
    }
}

export class Gato{

    nome;

    constructor(nome){
        this.nome = nome;
    }
}
