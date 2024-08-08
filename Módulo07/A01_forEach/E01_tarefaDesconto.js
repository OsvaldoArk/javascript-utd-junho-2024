const itens = [
    {id:1, nome:'shampoo', preco: 18.0},
    {id:2, nome:'sabonete', preco: 3.5},
    {id:3, nome:'anti séptico bucal', preco: 21.8},
    {preco: 25.2,id:4, nome:'hidratante'}
]
const resultado = [],desconto = 0.15;

const resultadoMap = itens
        .map(produto => ({...produto,preco:(produto.preco -(produto.preco*desconto))}));

itens.forEach(produto => resultado
                .push({...produto,preco:(produto.preco -(produto.preco*desconto))}));

console.log(resultadoMap);