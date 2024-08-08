const itens = [
    {id:1, nome:'shampoo', preco: 18.0},
    {id:2, nome:'sabonete', preco: 3.5},
    {id:3, nome:'anti séptico bucal', preco: 21.8},
    {preco: 25.2,id:4, nome:'hidratante'}
]
/*
const total = itens.map(produto => ({...produto,preco:(produto.preco -(produto.preco*0.15))}))
                    .reduce((total,produto)=> total+=produto.preco,0);
*/

const total = itens.map(({preco}) => preco - preco*0.15)
                    .reduce((total,preco)=> total+=preco,0);


console.log(total);