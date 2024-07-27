import Pessoa from "./Pessoa.js";

export default class Aluno extends Pessoa{

    #curso;

    constructor(nome,idade,curso){
        super(nome,idade);
        this.#curso = curso;
    }

    get curso(){
        return this.#curso;
    }

    set curso(curso){
        this.#curso = curso;
    }

}