const itens = [
    {id:1, nome:'shampoo', preco: 18.0},
    {id:3, nome:'anti séptico bucal', preco: 21.8},
    {id:2, nome:'sabonete', preco: 3.5},
    {id:3, nome:'anti séptico bucal', preco: 21.8},
    {id:4, nome:'hidratante',preco: 25.2},
    {id:4, nome:'hidratante',preco: 25.2}
]

//itens.sort((a,b)=> b.preco - a.preco);
//itens.sort((a,b)=> a.nome.localeCompare(b.nome)).reverse();
//itens.sort(a => a.preco - (Math.random()*29+1));

const resultado = new Set();

for(let item of itens){
    resultado.add(JSON.stringify(item));
}


const respostaFormatada = (...set) => {
    return set.map(item => {
        if(typeof item === 'string') return JSON.parse(item);
        else if(typeof item === 'object') return item;
    });
}


console.log(respostaFormatada(resultado));


