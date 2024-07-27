let alunos = [{nome:'Osvaldo',    idade:37,    curso:'javascript'},
              {nome:'Helena',     idade:19,    curso:'PHP'       },
              {nome:'Juliana',    idade:30,    curso:'python'    },
              {nome:'Abel',       idade:34,    curso:'kotlin'    }];


for(let atual = 0; atual < alunos.length-1; atual++){
    
    for(let proximo = atual+1;proximo<alunos.length;proximo++){

        if(alunos[atual].nome.localeCompare(alunos[proximo].nome)>0){
            const temp = alunos[atual];

            alunos[atual] = alunos[proximo];

            alunos[proximo] = temp;
        }
    }
}

for(let atual = 0; atual < alunos.length-1; atual++){
    
    for(let proximo = atual+1;proximo<alunos.length;proximo++){

        if(alunos[atual].idade > alunos[proximo].idade){
            const temp = alunos[atual];

            alunos[atual] = alunos[proximo];

            alunos[proximo] = temp;
        }
    }
}


for(let aluno of alunos){
    console.log(aluno.nome+" "+aluno.idade);
    }
    
/*
let pessoa = {
                nome:'Osvaldo',
                idade:37,
                curso:'javascript'
               };
//acessar o atributo
pessoa.nome = 'Lucas';
//iterar objetos
for(let att in pessoa){
    console.log(att+":"+pessoa[att]);
}
//desestruturação
const {nome,idade} = pessoa;

console.log(nome);

const atributo = 'curso';

pessoa = {...pessoa,[atributo]:'Java'};

console.log(pessoa);
*/