

function mostraMensagem(){
    console.log("deu certo");

    return 21;
}

const minhaPromessa = new Promise((resolve,reject)=>{

    const numero = setTimeout(mostraMensagem,2000);

    if(numero % 2 === 0){
        resolve("o número é par!");
    }
    else{
        reject("o número é ímpar!");
    }
});

minhaPromessa.then(res => console.log(res)).catch(erro => console.log(erro));